import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.user?.userId || "";

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        details: {
          select: {
            points: true,
            daysStrike: true,
            notebookStudied: true,
            cardsViewed: true,
          },
          where: {
            deletedAt: null,
          },
        },
      },
    });

    res.status(200).json(user);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
