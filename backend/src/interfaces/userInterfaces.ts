import { INote } from "./dataInterfaces";

export interface IUser {
    _id: string;
    userName: string;
    data: INote[];
}