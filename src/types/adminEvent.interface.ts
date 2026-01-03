import { Status } from "./event.interface";

interface IUser {
    _id: string;
    name: string;
    email: string;
    profileImage?: string;
    ratingAvg?:string
  }
  
  export interface IEventParticipant {
    _id?: string;
    status: "JOINED" | "CANCELLED" | "PENDING";
    paymentStatus: "PAID" | "PENDING" | "FAILED";
    user: {
      _id: string;
      name: string;
      email: string;
      profileImage?: string;
    };
    createdAt?: string;
  }
  
  export interface IAdminEvent {
    _id: string;
    name: string;
    type: string;
    date: string;
    time: string;
    location: string;
    minParticipants: number;
    maxParticipants: number;
    joiningFee: number;
    status?: Status;
    description: string;
    image: string;
   
    host: IUser;
    participants: IEventParticipant[];
  }
  