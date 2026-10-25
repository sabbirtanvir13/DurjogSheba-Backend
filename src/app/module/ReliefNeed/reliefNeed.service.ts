import { prisma } from "../../lib/prisma";
import {
  ICreateReliefNeedInput,
  IReliefNeedFilterRequest,
  IUpdateReliefNeedInput,
} from "./reliefNeed.interface";


const createReliefNeed = async (payload: ICreateReliefNeedInput) => {
  const shelterExists = await prisma.shelter.findUnique({
    where: { id: payload.shelterId },
  });

  if (!shelterExists) {
    throw new Error("Shelter not found with the given ID");
  }

  const result = await prisma.reliefNeed.create({
    data: payload,
    include: {
      shelter: {
        select: {
          id: true,
          name: true,
          district: true,
          upazila: true,
        },
      },
    },
  });

  return result;
};


const getAllReliefNeeds = async (filters: IReliefNeedFilterRequest) => {
  const { searchTerm, shelterId, itemCategory, urgency, status } = filters;
  const andConditions: any[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: [
        { itemName: { contains: searchTerm, mode: "insensitive" } },
        { itemCategory: { contains: searchTerm, mode: "insensitive" } },
      ],
    });
  }

  if (shelterId) {
    andConditions.push({ shelterId });
  }

  if (itemCategory) {
    andConditions.push({ itemCategory: { equals: itemCategory, mode: "insensitive" } });
  }

  if (urgency) {
    andConditions.push({ urgency });
  }

  if (status) {
    andConditions.push({ status });
  }

  const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.reliefNeed.findMany({
    where: whereConditions,
    include: {
      shelter: {
        select: {
          id: true,
          name: true,
          district: true,
          upazila: true,
          contactPerson: true,
          contactPhone: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return result;
};


const getReliefNeedById = async (id: string) => {
  const result = await prisma.reliefNeed.findUnique({
    where: { id },
    include: {
      shelter: true,
    },
  });

  if (!result) {
    throw new Error("Relief need entry not found");
  }

  return result;
};


const updateReliefNeed = async (id: string, payload: IUpdateReliefNeedInput) => {
  const isExist = await prisma.reliefNeed.findUnique({ where: { id } });

  if (!isExist) {
    throw new Error("Relief need entry not found");
  }

  const result = await prisma.reliefNeed.update({
    where: { id },
    data: payload,
    include: {
      shelter: {
        select: { id: true, name: true },
      },
    },
  });

  return result;
};


const deleteReliefNeed = async (id: string) => {
  const isExist = await prisma.reliefNeed.findUnique({ where: { id } });

  if (!isExist) {
    throw new Error("Relief need entry not found");
  }

  const result = await prisma.reliefNeed.delete({
    where: { id },
  });

  return result;
};

export const ReliefNeedService = {
  createReliefNeed,
  getAllReliefNeeds,
  getReliefNeedById,
  updateReliefNeed,
  deleteReliefNeed,
};