import { z } from "zod";

export const createThemeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  order: z.number().optional(),
});
