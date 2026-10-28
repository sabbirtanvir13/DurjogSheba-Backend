import { prisma } from "../../lib/prisma";
import { RescueStatus } from "../../../generated/prisma/enums";

// ১. ভলান্টিয়ার ড্যাশবোর্ড ওভারভিউ (তার কয়টি টাস্ক অ্যাসাইন আছে)
const getVolunteerDashboardStats = async (volunteerId: string) => {
  const assignedRescues = await prisma.rescueRequest.count({
    where: { assignedToId: volunteerId },
  });

  const pendingRescues = await prisma.rescueRequest.count({
    where: { assignedToId: volunteerId, status: RescueStatus.ASSIGNED },
  });

  const inProgressRescues = await prisma.rescueRequest.count({
    where: { assignedToId: volunteerId, status: RescueStatus.IN_PROGRESS },
  });

  const completedRescues = await prisma.rescueRequest.count({
    where: { assignedToId: volunteerId, status: RescueStatus.RESCUED },
  });

  return {
    totalAssigned: assignedRescues,
    pending: pendingRescues,
    inProgress: inProgressRescues,
    completed: completedRescues,
  };
};

// ২. নির্দিষ্ট ভলান্টিয়ারকে যে রেসকিউগুলো অ্যাসাইন করা হয়েছে তার লিস্ট
const getMyAssignedRescues = async (volunteerId: string) => {
  const result = await prisma.rescueRequest.findMany({
    where: { assignedToId: volunteerId },
    include: {
      shelter: {
        select: { id: true, name: true, district: true, upazila: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return result;
};

// ৩. ভলান্টিয়ার নিজেই কোনো ওপেন রেসকিউ রিকোয়েস্ট নিজের দায়িত্বে নেওয়া (Self-Assign)
const selfAssignRescue = async (rescueId: string, volunteerId: string) => {
  const rescue = await prisma.rescueRequest.findUnique({ where: { id: rescueId } });

  if (!rescue) {
    throw new Error("Rescue request not found");
  }

  if (rescue.assignedToId) {
    throw new Error("This rescue request is already assigned to someone else!");
  }

  const updatedRescue = await prisma.rescueRequest.update({
    where: { id: rescueId },
    data: {
      assignedToId: volunteerId,
      status: RescueStatus.ASSIGNED,
    },
  });

  return updatedRescue;
};


const updateMyRescueStatus = async (rescueId: string, volunteerId: string, status: RescueStatus) => {
  const rescue = await prisma.rescueRequest.findUnique({ where: { id: rescueId } });

  if (!rescue) {
    throw new Error("Rescue request not found");
  }

  if (rescue.assignedToId !== volunteerId) {
    throw new Error("You are not authorized to update this rescue request!");
  }

  const updatedRescue = await prisma.rescueRequest.update({
    where: { id: rescueId },
    data: { status },
  });

  return updatedRescue;
};

export const VolunteerService = {
  getVolunteerDashboardStats,
  getMyAssignedRescues,
  selfAssignRescue,
  updateMyRescueStatus,
};