import { z } from "zod";

export const createDifficultySchema = z.object({
  name: z.string().min(1, "Name is required"),
  order: z.number().min(0, "Order is required"),
});
