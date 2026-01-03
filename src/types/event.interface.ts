
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

export enum Status  {
  OPEN= "OPEN",
  FULL="FULL",
  CANCELLED="CANCELLED",
  COMPLETED="COMPLETED"
}

export interface IEvent {
    _id?: string;
  
    name: string;
    type: string;
  
    date: Date;
    time: string;
  
    location: string;
    status?: Status;
    minParticipants: number;
    maxParticipants: number;
  
    joiningFee?: number;
    description?: string;
    image?: string;
    participants?: IEventParticipant[]
  }
  