
import { z } from "zod";
export const EventStatusEnum = z.enum(["OPEN", "FULL", "CANCELLED", "COMPLETED"]);

export const createEventZodSchema = z.object({
  name: z.string().min(3),
  type: z.string().min(3),

  date: z.coerce.date(),
  time: z.string(),

  location: z.string(),

  minParticipants: z.number().min(1),
  maxParticipants: z.number().min(1),

  joiningFee: z.number().optional(),
  description: z.string().optional(),
  status: EventStatusEnum.optional(),
});



export const updateEventZodSchema = z.object({
  name: z.string().min(3).optional(),
  type: z.string().min(3).optional(),
  date: z
    .preprocess((val) => (val === "" ? undefined : val), z.date().optional()),
  time: z.string().optional(),
  location: z.string().optional(),
  minParticipants: z
    .preprocess((val) => (val === "" || val === null ? undefined : Number(val)), z.number().min(1).optional()),
  maxParticipants: z
    .preprocess((val) => (val === "" || val === null ? undefined : Number(val)), z.number().min(1).optional()),
  joiningFee: z
    .preprocess((val) => (val === "" || val === null ? undefined : Number(val)), z.number().optional()),
  description: z.string().optional(),
  status: EventStatusEnum.optional(),
});

