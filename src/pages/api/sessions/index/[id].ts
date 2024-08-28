import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const userId = req.user.userId;
    const { id } = req.query;

    if (!id) {
      throw new Error("Invalid request");
    }

    const session = await prisma.userSession.findFirst({
      where: {
        id: id.toString(),
        userId,
        deletedAt: null,
      },
      select: {
        id: true,
        userId: true,
        notebookId: true,
        createdAt: true,
        notebook: {
          select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
          },
        },
        sessionCards: {
          where: {
            deletedAt: null,
          },
          include: {
            card: {
              select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(session);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
