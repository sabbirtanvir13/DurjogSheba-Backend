import { prisma } from "../../lib/prisma";


const getMyProfileFromDB = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is required!");
  }

  const result = await prisma.user.findFirst({
    where: { id: userId, isDeleted: false },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      role: true,
      status: true,
      isVerified: true,
      imageUrl: true,
      createdAt: true,
      updatedAt: true,
      donations: {
        select: {
          id: true,
          amount: true,
          currency: true,
          transactionId: true,
          paymentGateway: true,
          status: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!result) {
    throw new Error("Donor profile not found!");
  }

  return result;
};


const updateMyProfileIntoDB = async (userId: string, payload: Partial<any>) => {
  const result = await prisma.user.update({
    where: { id: userId },
    data: payload,
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      imageUrl: true,
      updatedAt: true,
    },
  });

  return result;
};


const getMyDonationsFromDB = async (userId: string) => {
  const result = await prisma.donation.findMany({
    where: { donorId: userId },
    orderBy: { createdAt: "desc" },
  });

  return result;
};


const getAllSheltersFromDB = async () => {
  const result = await prisma.shelter.findMany({
    include: {
      reliefNeeds: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return result;
};


const getSingleShelterByIdFromDB = async (shelterId: string) => {
  const result = await prisma.shelter.findUnique({
    where: { id: shelterId },
    include: {
      reliefNeeds: true,
      rescueRequests: true,
    },
  });

  if (!result) {
    throw new Error("Shelter not found!");
  }

  return result;
};

export const DonorService = {
  getMyProfileFromDB,
  updateMyProfileIntoDB,
  getMyDonationsFromDB,
  getAllSheltersFromDB,
  getSingleShelterByIdFromDB,
};