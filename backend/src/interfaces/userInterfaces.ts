import { INote } from "./dataInterfaces";

export interface IUser {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
    data: INote[];
}