import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { createSessionSchema } from "@/schemas/sessions";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const validatedData = createSessionSchema.parse(req.body);
    const { userId, notebookId, cardIds } = validatedData;

    const userSession = await prisma.userSession.create({
      data: {
        userId,
        notebookId,
        sessionCards: {
          create: cardIds.map((cardId: string) => ({
            cardId,
          })),
        },
      },
      include: {
        sessionCards: true,
      },
    });

    res.status(201).json(userSession);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
