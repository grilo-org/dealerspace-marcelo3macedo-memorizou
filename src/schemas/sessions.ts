import { z } from "zod";

export const createSessionSchema = z.object({
  userId: z.string().min(1, "UserId is required"),
  notebookId: z.string().min(1, "NotebookId is required"),
  cardIds: z.array(z.string()).min(1, "At least one cardId is required"),
});

export const updateSessionSchema = z.object({
  cards: z.array(
    z.object({
      id: z.string(),
      difficultyId: z.string(),
      answerAt: z.number(),
    }),
  ),
});
