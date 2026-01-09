
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

export const updateEventZodSchema = z.object({
  name: z.string().min(3).optional(),
  type: z.string().min(3).optional(),

  date: z.coerce.date().optional(),
  time: z.string().optional(),

  location: z.string().optional(),

  minParticipants: z.number().min(1).optional(),
  maxParticipants: z.number().min(1).optional(),

  joiningFee: z.number().optional(),
  description: z.string().optional(),
});
