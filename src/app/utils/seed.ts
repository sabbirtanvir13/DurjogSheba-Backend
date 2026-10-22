import bcrypt from "bcrypt";
import { Role } from "../../../generated/prisma/client";
import config from "../config";
import { prisma } from "../lib/prisma";

export const seedUsers = async () => {
	try {
		console.log(" Starting database seeding for 3 roles");

		const saltRounds = Number(config.bcrypt_salt_rounds) || 10;

		const seedData = [
			{
				name: "Super Admin",
				email: process.env.ADMIN_EMAIL || "admin@durjogsheba.com",
				password: process.env.ADMIN_PASSWORD || "Admin@123456",
				phoneNumber: process.env.ADMIN_PHONE || "01700000001",
				role: Role.ADMIN,
				isVerified: true,
			},
			{
				name: "Volunteer User",
				email: process.env.VOLUNTEER_EMAIL || "volunteer@durjogsheba.com",
				password: process.env.VOLUNTEER_PASSWORD || "Volunteer@123456",
				phoneNumber: process.env.VOLUNTEER_PHONE || "01700000002",
				role: Role.VOLUNTEER,
				isVerified: true,
			},
			{
				name: "Donor User",
				email: process.env.DONOR_EMAIL || "donor@durjogsheba.com",
				password: process.env.DONOR_PASSWORD || "Donor@123456",
				phoneNumber: process.env.DONOR_PHONE || "01700000003",
				role: Role.DONOR,
				isVerified: true,
			},
		];

		for (const userData of seedData) {
			const existingUser = await prisma.user.findUnique({
				where: { email: userData.email },
			});

			if (!existingUser) {
				const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

				await prisma.user.create({
					data: {
						name: userData.name,
						email: userData.email,
						password: hashedPassword,
						phoneNumber: userData.phoneNumber,
						role: userData.role,
						isVerified: userData.isVerified,
					},
				});

				console.log(
					` Created ${userData.role} user: ${userData.email} (Password: ${userData.password})`,
				);
			} else {
				console.log(
					` ${userData.role} user already exists: ${userData.email}`,
				);
			}
		}

		console.log("Seeding completed successfully");
	} catch (error) {
		console.error(" Seeding failed:", error);
		throw error;
	}
};

// Execute if run directly from terminal (e.g., npx tsx src/app/utils/seed.ts)
const isMainModule =
	process.argv[1]?.endsWith("seed.ts") || process.argv[1]?.endsWith("seed.js");

if (isMainModule) {
	seedUsers()
		.then(async () => {
			await prisma.$disconnect();
			process.exit(0);
		})
		.catch(async (error) => {
			console.error(error);
			await prisma.$disconnect();
			process.exit(1);
		});
}
