import { prisma } from "../../lib/prisma";
import { UserStatus } from "../../../../generated/prisma/enums";


const getAllUsers = async (filters: { searchTerm?: string; role?: string; status?: UserStatus }) => {
  const { searchTerm, role, status } = filters;
  const andConditions: any[] = [];

  andConditions.push({ isDeleted: false });

  if (searchTerm) {
    andConditions.push({
      OR: [
        { name: { contains: searchTerm, mode: "insensitive" } },
        { email: { contains: searchTerm, mode: "insensitive" } },
        { phoneNumber: { contains: searchTerm, mode: "insensitive" } },
      ],
    });
  }

  if (role) andConditions.push({ role });
  if (status) andConditions.push({ status });

  const result = await prisma.user.findMany({
    where: { AND: andConditions },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      role: true,
      status: true,
      isVerified: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return result;
};


const updateUserStatus = async (userId: string, status: UserStatus) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error("User not found");
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { status },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
    },
  });

  return updatedUser;
};

const getAdminDashboardStats = async () => {
  const totalUsers = await prisma.user.count({ where: { isDeleted: false } });
  const totalShelters = await prisma.shelter.count();
  const totalRescueRequests = await prisma.rescueRequest.count();
  const pendingRescues = await prisma.rescueRequest.count({ where: { status: "PENDING" } });
  const totalReliefNeeds = await prisma.reliefNeed.count();


  const rescueByLocation = await prisma.rescueRequest.groupBy({
    by: ["location"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 5, 
  });

  return {
    overview: {
      totalUsers,
      totalShelters,
      totalRescueRequests,
      pendingRescues,
      totalReliefNeeds,
    },
    topAffectedLocations: rescueByLocation,
  };
};

export const AdminService = {
  getAllUsers,
  updateUserStatus,
  getAdminDashboardStats,
};