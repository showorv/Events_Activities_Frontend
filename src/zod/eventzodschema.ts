
import { z } from "zod";

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
});

export const updateEventZodSchema = createEventZodSchema.partial();
