export interface IUser{
    id: string,
    fullName: string,
    email: string,
    photo: string,
    login: string,
    password: string,
    isActive: boolean,
    phoneNumber: string,
    createdAt: number,
    updatedAt: number
}

export interface IUserInputDto{
    fullName: string,
    email: string,
    photo: string,
    login: string,
    password: string,
    phoneNumber: string
}