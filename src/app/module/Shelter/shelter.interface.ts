export interface IShelterCreateInput {
	name: string;
	district: string;
	upazila: string;
	address: string;
	capacity: number;
	currentPeople?: number;
	contactPerson: string;
	contactPhone: string;
	coordinatorId: string;
	images?: string[];
}

export interface IShelterFilterRequest {
	searchTerm?: string;
	district?: string;
	upazila?: string;
}
