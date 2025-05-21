import { IUser } from "../../auth/types";

export interface IContact {
    localName: string,
    addedAt: Date,
    contactUser: IUser,
    owner: IUser

}