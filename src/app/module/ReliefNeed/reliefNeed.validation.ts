import { z } from "zod";
import { ReliefStatus, UrgencyLevel, Unit } from "../../../generated/prisma/enums";

const createReliefNeedZodSchema = z.object({
  shelterId: z.string({ message: "Shelter ID is required" }),
  itemCategory: z.string({ message: "Item category is required" }),
  itemName: z.string({ message: "Item name is required" }),
  quantity: z.coerce.number({ message: "Quantity is required" }).min(1, "Quantity must be at least 1"),
  fulfilled: z.coerce.number().optional().default(0),
  unit: z.nativeEnum(Unit).optional().default(Unit.PIECE),
  urgency: z.nativeEnum(UrgencyLevel).optional().default(UrgencyLevel.HIGH),
  status: z.nativeEnum(ReliefStatus).optional().default(ReliefStatus.PENDING),
});

const updateReliefNeedZodSchema = z.object({
  itemCategory: z.string().optional(),
  itemName: z.string().optional(),
  quantity: z.coerce.number().min(1).optional(),
  fulfilled: z.coerce.number().min(0).optional(),
  unit: z.nativeEnum(Unit).optional(),
  urgency: z.nativeEnum(UrgencyLevel).optional(),
  status: z.nativeEnum(ReliefStatus).optional(),
});

const updateStatusOrFulfillmentZodSchema = z.object({
  fulfilled: z.coerce.number().min(0).optional(),
  status: z.nativeEnum(ReliefStatus).optional(),
});

export const ReliefNeedValidation = {
  createReliefNeedZodSchema,
  updateReliefNeedZodSchema,
  updateStatusOrFulfillmentZodSchema,
};