import { RescueStatus } from "../../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import {
  ICreateRescueRequestInput,
  IRescueRequestFilterRequest,
  IUpdateRescueRequestInput,
} from "./rescueRequest.interface";

const createRescueRequest = async (payload: ICreateRescueRequestInput) => {
  const result = await prisma.rescueRequest.create({
    data: payload,
    include: {
      shelter: {
        select: { id: true, name: true, district: true },
      },
    },
  });
  return result;
};


const getAllRescueRequests = async (filters: IRescueRequestFilterRequest) => {
  const { searchTerm, shelterId, assignedToId, urgency, status } = filters;
  const andConditions: any[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: [
        { location: { contains: searchTerm, mode: "insensitive" } },
        { description: { contains: searchTerm, mode: "insensitive" } },
        { contactPhone: { contains: searchTerm, mode: "insensitive" } },
      ],
    });
  }

  if (shelterId) andConditions.push({ shelterId });
  if (assignedToId) andConditions.push({ assignedToId });
  if (urgency) andConditions.push({ urgency });
  if (status) andConditions.push({ status });

  const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.rescueRequest.findMany({
    where: whereConditions,
    include: {
      shelter: {
        select: { id: true, name: true, district: true, upazila: true },
      },
      assignedTo: {
        select: { id: true, name: true, phoneNumber: true, email: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return result;
};


const getRescueRequestById = async (id: string) => {
  const result = await prisma.rescueRequest.findUnique({
    where: { id },
    include: {
      shelter: true,
      assignedTo: {
        select: { id: true, name: true, phoneNumber: true, email: true },
      },
    },
  });

  if (!result) {
    throw new Error("Rescue request not found");
  }

  return result;
};


const assignVolunteer = async (id: string, assignedToId: string) => {
  const requestExists = await prisma.rescueRequest.findUnique({ where: { id } });
  if (!requestExists) {
    throw new Error("Rescue request not found");
  }

  const volunteerExists = await prisma.user.findUnique({ where: { id: assignedToId } });
  if (!volunteerExists) {
    throw new Error("Assigned user/volunteer not found");
  }

  const result = await prisma.rescueRequest.update({
    where: { id },
    data: {
      assignedToId,
      status: RescueStatus.ASSIGNED,
    },
    include: {
      assignedTo: {
        select: { id: true, name: true, phoneNumber: true },
      },
    },
  });

  return result;
};


const updateRescueStatus = async (id: string, status: RescueStatus) => {
  const isExist = await prisma.rescueRequest.findUnique({ where: { id } });
  if (!isExist) {
    throw new Error("Rescue request not found");
  }

  const result = await prisma.rescueRequest.update({
    where: { id },
    data: { status },
  });

  return result;
};


const updateRescueRequest = async (id: string, payload: IUpdateRescueRequestInput) => {
  const isExist = await prisma.rescueRequest.findUnique({ where: { id } });
  if (!isExist) {
    throw new Error("Rescue request not found");
  }

  const result = await prisma.rescueRequest.update({
    where: { id },
    data: payload,
  });

  return result;
};


const deleteRescueRequest = async (id: string) => {
  const isExist = await prisma.rescueRequest.findUnique({ where: { id } });
  if (!isExist) {
    throw new Error("Rescue request not found");
  }

  const result = await prisma.rescueRequest.delete({
    where: { id },
  });

  return result;
};

export const RescueRequestService = {
  createRescueRequest,
  getAllRescueRequests,
  getRescueRequestById,
  assignVolunteer,
  updateRescueStatus,
  updateRescueRequest,
  deleteRescueRequest,
};