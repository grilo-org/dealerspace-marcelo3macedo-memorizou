import { z } from "zod";

export const createNotebookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Description is required"),
  subthemeId: z.string().optional(),
});

export const editNotebookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Description is required"),
  subthemeId: z.string().optional(),
});

export const cloneNotebookSchema = z.object({
  id: z.string().min(1, "Id is required"),
});
