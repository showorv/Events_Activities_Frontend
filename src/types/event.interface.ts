
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

export interface IEvent {
    _id?: string;
  
    name: string;
    type: string;
  
    date: Date;
    time: string;
  
    location: string;
  
    minParticipants: number;
    maxParticipants: number;
  
    joiningFee?: number;
    description?: string;
    image?: string;
    participants?: IEventParticipant[]
  }
  