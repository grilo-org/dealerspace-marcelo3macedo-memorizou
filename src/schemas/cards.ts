import { z } from "zod";

export const createCardSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Description is required"),
  sectionId: z.string().min(1, "Section is required"),
});

export const editCardSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Description is required"),
  sectionId: z.string().min(1, "Section is required"),
});
