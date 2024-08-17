import { z } from "zod";

export const createSectionsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  notebookId: z.string().min(1, "NotebookId is required"),
});
