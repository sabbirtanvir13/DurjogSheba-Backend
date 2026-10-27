import { z } from "zod";

const createDonationZodSchema = z.object({
 
    amount: z.number({
  message: "Amount is required",
    }).positive("Amount must be greater than 0"),
    paymentGateway: z.string({
      message: "Payment gateway is required",
    }),

});

export const DonationValidation = {
  createDonationZodSchema,
};