import { RescueStatus, UrgencyLevel } from "../../../generated/prisma/enums";


export interface ICreateRescueRequestInput {
  shelterId?: string;
  location: string;
  contactPhone: string;
  peopleCount: number;
  urgency?: UrgencyLevel;
  description?: string;
}

export interface IUpdateRescueRequestInput {
  shelterId?: string;
  location?: string;
  contactPhone?: string;
  peopleCount?: number;
  urgency?: UrgencyLevel;
  status?: RescueStatus;
  assignedToId?: string;
  description?: string;
}

export interface IRescueRequestFilterRequest {
  searchTerm?: string;
  shelterId?: string;
  assignedToId?: string;
  urgency?: UrgencyLevel;
  status?: RescueStatus;
}