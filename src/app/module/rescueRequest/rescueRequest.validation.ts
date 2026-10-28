import { z } from "zod";
import { RescueStatus, UrgencyLevel } from "../../../generated/prisma/enums";

const createRescueRequestZodSchema = z.object({

    shelterId: z.string().optional(),
    location: z.string({ message: "Location is required" }),
    contactPhone: z.string({ message: "Contact phone number is required" }),
    peopleCount: z.number({ message: "People count is required" }).min(1, "People count must be at least 1"),
    urgency: z.nativeEnum(UrgencyLevel).optional().default(UrgencyLevel.CRITICAL),
    description: z.string().optional(),

});

const updateRescueStatusZodSchema = z.object({
 
    status: z.nativeEnum(RescueStatus, { message: "Invalid rescue status" }),

});

const assignVolunteerZodSchema = z.object({
 
    assignedToId: z.string({ message: "Volunteer User ID is required" }),

});

const updateRescueRequestZodSchema = z.object({

    shelterId: z.string().optional(),
    location: z.string().optional(),
    contactPhone: z.string().optional(),
    peopleCount: z.number().min(1).optional(),
    urgency: z.nativeEnum(UrgencyLevel).optional(),
    status: z.nativeEnum(RescueStatus).optional(),
    assignedToId: z.string().optional(),
    description: z.string().optional(),
 
});

export const RescueRequestValidation = {
  createRescueRequestZodSchema,
  updateRescueStatusZodSchema,
  assignVolunteerZodSchema,
  updateRescueRequestZodSchema,
};