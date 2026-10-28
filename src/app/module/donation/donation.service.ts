import { prisma } from "../../lib/prisma";
import { PaymentStatus } from "../../../generated/prisma/enums";
import { getBkashIdToken } from "../../lib/bkash";
import config from "../../config";
import crypto from "crypto";


const createBkashPayment = async (userId: string, amount: number) => {
  const idToken = await getBkashIdToken();
  const transactionId = `TRX-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;

  const donation = await prisma.donation.create({
    data: {
      donorId: userId,
      amount,
      currency: "BDT",
      transactionId,
      paymentGateway: "bKash",
      status: PaymentStatus.PENDING,
    },
  });


  const response = await fetch(`${config.bkash_base_url}/tokenized/checkout/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: idToken,
      "x-app-key": config.bkash_app_key,
    },
    body: JSON.stringify({
      mode: "0011",
      payerReference: "1",
      callbackURL: `${config.bak_url}/api/v1/donations/bkash/callback/${donation.id}`,
      amount: amount.toString(),
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: transactionId,
    }),
  });

  const result = await response.json();

  if (!response.ok || result.statusCode !== "0000") {
  
    await prisma.donation.update({
      where: { id: donation.id },
      data: { status: PaymentStatus.FAILED },
    });
    throw new Error(result.statusMessage || "Failed to create bKash payment");
  }

  return {
    bkashURL: result.bkashURL,
    paymentID: result.paymentID,
    donationId: donation.id,
  };
};

const executeBkashPayment = async (paymentID: string, donationId: string) => {
  const existingDonation = await prisma.donation.findUnique({
    where: { id: donationId },
  });

  if (!existingDonation) {
    throw new Error("Donation record not found");
  }

  if (existingDonation.status === PaymentStatus.COMPLETED) {
    return existingDonation;
  }

  const idToken = await getBkashIdToken();

  const response = await fetch(`${config.bkash_base_url}/tokenized/checkout/execute`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: idToken,
      "x-app-key": config.bkash_app_key,
    },
    body: JSON.stringify({
      paymentID,
    }),
  });

  const result = await response.json();

  if (!response.ok || result.statusCode !== "0000") {

    await prisma.donation.update({
      where: { id: donationId },
      data: { status: PaymentStatus.FAILED },
    });
    throw new Error(result.statusMessage || "bKash payment execution failed");
  }


  const updatedDonation = await prisma.donation.update({
    where: { id: donationId },
    data: { status: PaymentStatus.COMPLETED },
  });

  return updatedDonation;
};

export const DonationService = {
  createBkashPayment,
  executeBkashPayment,
};