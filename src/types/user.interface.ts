import { UserRole } from "./authTypeProxy";

import { Types } from "mongoose";

export interface UserInfo {
    name: string;
    email: string;
    role: UserRole;
    profileImage?: string
}



export enum Role {
  USER = "USER",
  HOST = "HOST",
  ADMIN = "ADMIN",
}


export interface IUser {
  _id?: string;

  name: string;
  email: string;
  password?: string;

  role: Role;

  bio?: string;
  location?: string;
  interests?: string[];

  profileImage?: string;

  ratingAvg?: number;

  isVerified: boolean;
  isBlocked: boolean;
  isHostApproved?: boolean
  hostedEvents?: Types.ObjectId[] | string[];
  joinedEvents?: Types.ObjectId[] | string[];

  createdAt?: string;
  updatedAt?: string;
}
