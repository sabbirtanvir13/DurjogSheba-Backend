import { UploadApiResponse } from "cloudinary";
import { cloudinary } from "../../lib/cloudinary";
import { prisma } from "../../lib/prisma";
import {
	IShelterCreateInput,
	IShelterFilterRequest,
} from "./shelter.interface";

const uploadMultipleImagesToCloudinary = async (
	buffers: Buffer[],
): Promise<string[]> => {
	const uploadPromises = buffers.map((buffer) => {
		return new Promise<string>((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{
						resource_type: "auto",
						folder: "durjog-sheba/shelters",
					},
					(error, result) => {
						if (error || !result)
							return reject(error || new Error("Cloudinary upload failed"));
						resolve(result.secure_url);
					},
				)
				.end(buffer);
		});
	});

	return Promise.all(uploadPromises);
};

const createShelter = async (
	payload: IShelterCreateInput,
	imageBuffers?: Buffer[],
) => {
	let imageUrls: string[] = payload.images || [];

	if (imageBuffers && imageBuffers.length > 0) {
		const uploadedUrls = await uploadMultipleImagesToCloudinary(imageBuffers);
		imageUrls = [...imageUrls, ...uploadedUrls];
	}

	const shelter = await prisma.shelter.create({
		data: {
			...payload,
			images: imageUrls,
		},
		include: {
			coordinator: {
				select: {
					id: true,
					name: true,
					email: true,
					phoneNumber: true,
					role: true,
				},
			},
		},
	});
	return shelter;
};

const getAllShelters = async (filters: IShelterFilterRequest) => {
	const { searchTerm, district, upazila } = filters;
	const andConditions: any[] = [];

	if (searchTerm) {
		andConditions.push({
			OR: [
				{ name: { contains: searchTerm, mode: "insensitive" } },
				{ address: { contains: searchTerm, mode: "insensitive" } },
				{ district: { contains: searchTerm, mode: "insensitive" } },
			],
		});
	}

	if (district) {
		andConditions.push({ district: { equals: district, mode: "insensitive" } });
	}

	if (upazila) {
		andConditions.push({ upazila: { equals: upazila, mode: "insensitive" } });
	}

	const whereConditions =
		andConditions.length > 0 ? { AND: andConditions } : {};

	const result = await prisma.shelter.findMany({
		where: whereConditions,
		include: {
			coordinator: {
				select: {
					id: true,
					name: true,
					email: true,
					phoneNumber: true,
				},
			},
			reliefNeeds: true,
		},
		orderBy: { createdAt: "desc" },
	});

	return result;
};

const getShelterById = async (id: string) => {
	const shelter = await prisma.shelter.findUnique({
		where: { id },
		include: {
			coordinator: {
				select: {
					id: true,
					name: true,
					email: true,
					phoneNumber: true,
				},
			},
			reliefNeeds: true,
			rescueRequests: true,
		},
	});

	if (!shelter) {
		throw new Error("Shelter not found");
	}

	return shelter;
};

const updateShelter = async (
	id: string,
	payload: Partial<IShelterCreateInput>,
) => {
	const isExist = await prisma.shelter.findUnique({ where: { id } });
	if (!isExist) {
		throw new Error("Shelter not found");
	}

	const result = await prisma.shelter.update({
		where: { id },
		data: payload,
		include: {
			coordinator: {
				select: { id: true, name: true, email: true },
			},
		},
	});

	return result;
};

const uploadShelterImages = async (
	shelterId: string,
	imageBuffers: Buffer[],
) => {
	const isExist = await prisma.shelter.findUnique({ where: { id: shelterId } });
	if (!isExist) {
		throw new Error("Shelter not found");
	}

	const newImageUrls = await uploadMultipleImagesToCloudinary(imageBuffers);

	const updatedShelter = await prisma.shelter.update({
		where: { id: shelterId },
		data: {
			images: {
				push: newImageUrls,
			},
		},
	});

	return updatedShelter;
};

const deleteShelter = async (id: string) => {
	const isExist = await prisma.shelter.findUnique({ where: { id } });
	if (!isExist) {
		throw new Error("Shelter not found");
	}

	const result = await prisma.shelter.delete({
		where: { id },
	});

	return result;
};

export const ShelterService = {
	createShelter,
	getAllShelters,
	getShelterById,
	updateShelter,
	uploadShelterImages,
	deleteShelter,
};
