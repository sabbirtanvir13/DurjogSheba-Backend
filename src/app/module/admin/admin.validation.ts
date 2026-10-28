import { z } from "zod";
import { UserStatus } from "../../../generated/prisma/enums";

const updateUserStatusZodSchema = z.object({

    status: z.nativeEnum(UserStatus, {
      message: "Invalid status. Allowed values: ACTIVE, BLOCKED, PENDING, SUSPENDED",
    }),
 
});

export const AdminValidation = {
  updateUserStatusZodSchema,
};