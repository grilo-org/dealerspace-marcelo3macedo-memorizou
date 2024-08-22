import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    const skip = (pageNum - 1) * limitNum;
    const take = limitNum;

    const userId = req.user?.userId;

    const notebooks = await prisma.notebook.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      skip,
      take,
    });
    const totalNotebooks = await prisma.notebook.count({
      where: {
        userId,
        deletedAt: null,
      },
    });

    res.status(200).json({
      data: notebooks,
      total: totalNotebooks,
      page: pageNum,
      limit: limitNum,
    });
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
