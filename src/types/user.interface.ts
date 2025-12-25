import { UserRole } from "./authTypeProxy";


export interface UserInfo {
    name: string;
    email: string;
    role: UserRole;
    profileImage?: string
}