import { Request, Response } from "express";
import { DonationService } from "./donation.service";
import { prisma } from "../../lib/prisma";
import { PaymentStatus } from "../../../generated/prisma/enums";
import config from "../../config";


const initiateDonation = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { amount } = req.body;

    const result = await DonationService.createBkashPayment(userId, amount);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "bKash payment initiated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message || "Failed to initiate payment" });
  }
};

const bkashCallback = async (req: Request, res: Response) => {
  try {
    let donationId = (req.params.donationId || req.query.donationId) as string | undefined;
    let paymentID = req.query.paymentID as string | undefined;
    let status = req.query.status as string | undefined;

    console.log("[bKash Callback received]", {
      params: req.params,
      query: req.query,
      donationId,
      paymentID,
      status,
    });

    if (donationId && donationId.includes("?")) {
      const parts = donationId.split("?");
      donationId = parts[0];
      const extraQuery = parts.slice(1).join("&");
      const searchParams = new URLSearchParams(extraQuery);
      if (!paymentID && searchParams.has("paymentID")) {
        paymentID = searchParams.get("paymentID")!;
      }
      if (!status && searchParams.has("status")) {
        status = searchParams.get("status")!;
      }
    }

    if (!donationId) {
      if (config.frontend_url) {
        return res.redirect(`${config.frontend_url}/payment/failed?message=Donation ID is missing`);
      }
      return res.status(400).json({ success: false, message: "Donation ID is missing in callback" });
    }

    const normalizedStatus = status?.toLowerCase();

    if (normalizedStatus === "success" || normalizedStatus === "completed") {
      if (!paymentID) {
        if (config.frontend_url) {
          return res.redirect(`${config.frontend_url}/payment/failed?message=Payment ID is missing`);
        }
        return res.status(400).json({ success: false, message: "Payment ID is missing" });
      }

      const updatedDonation = await DonationService.executeBkashPayment(paymentID as string, donationId as string);

      if (config.frontend_url) {
        return res.redirect(
          `${config.frontend_url}/payment/success?donationId=${updatedDonation.id}&trxID=${updatedDonation.transactionId}&amount=${updatedDonation.amount}`
        );
      }

      return res.status(200).json({
        success: true,
        statusCode: 200,
        message: "bKash payment executed and completed successfully",
        data: updatedDonation,
      });
    } else {
      console.warn("[bKash Callback non-success status]", { donationId, status });
      await prisma.donation.update({
        where: { id: donationId as string },
        data: { status: PaymentStatus.FAILED },
      });

      if (config.frontend_url) {
        return res.redirect(`${config.frontend_url}/payment/failed?donationId=${donationId}&status=${status || "failed"}`);
      }

      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: `bKash payment ${status || "failed"}`,
      });
    }
  } catch (error: any) {
    console.error("[bKash Callback execution error caught]", error);
    if (config.frontend_url) {
      return res.redirect(`${config.frontend_url}/payment/failed?message=${encodeURIComponent(error.message || "Payment execution failed")}`);
    }
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: error.message || "Internal server error during payment execution",
    });
  }
};

export const DonationController = {
  initiateDonation,
  bkashCallback,
};