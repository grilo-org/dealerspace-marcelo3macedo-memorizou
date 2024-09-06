import { z } from "zod";

export const createSubThemeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  themeId: z.string().min(1, "ThemeId is required"),
  order: z.number().optional(),
});
