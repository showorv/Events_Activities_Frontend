// types/event.interface.ts
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
  }
  