import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const userId = req.user.userId;
    const { page = 1, limit = 10 } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    const skip = (pageNum - 1) * limitNum;
    const take = limitNum;

    const sessions = await prisma.userSession.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      skip,
      take,
    });

    const totalSessions = await prisma.userSession.count({
      where: {
        userId,
        deletedAt: null,
      },
    });

    res.status(200).json({
      data: sessions,
      total: totalSessions,
      page: pageNum,
      limit: limitNum,
    });
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
