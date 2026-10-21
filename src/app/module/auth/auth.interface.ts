export enum Role {
    ADMIN = "ADMIN",
    VOLUNTEER = "VOLUNTEER",
    DONOR = "DONOR",
}

export interface ILoginUserPayload {
    email: string
    password: string
}

export interface IRegisterUserPayload {
    name: string
    email: string
    password: string
    phoneNumber: string
}

export interface IRequestUser {
    userId: string
    email: string
    name: string
    role?: Role | string
}