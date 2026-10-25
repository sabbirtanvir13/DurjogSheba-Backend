import { ReliefStatus, UrgencyLevel, Unit } from "../../../../generated/prisma/enums";

export interface ICreateReliefNeedInput {
  shelterId: string;
  itemCategory: string;
  itemName: string;
  quantity: number;
  fulfilled?: number;
  unit?: Unit;
  urgency?: UrgencyLevel;
  status?: ReliefStatus;
}

export interface IUpdateReliefNeedInput {
  itemCategory?: string;
  itemName?: string;
  quantity?: number;
  fulfilled?: number;
  urgency?: UrgencyLevel;
  status?: ReliefStatus;
  unit?: Unit;
}

export interface IReliefNeedFilterRequest {
  searchTerm?: string;
  shelterId?: string;
  itemCategory?: string;
  urgency?: UrgencyLevel;
  status?: ReliefStatus;
}