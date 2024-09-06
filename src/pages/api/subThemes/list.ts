import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    const skip = (pageNum - 1) * limitNum;
    const take = limitNum;

    const data = await prisma.subtheme.findMany({
      where: {
        deletedAt: null,
      },
      skip,
      take,
    });

    const total = await prisma.subtheme.count({
      where: {
        deletedAt: null,
      },
    });

    res.status(200).json({
      data: data,
      total: total,
      page: pageNum,
      limit: limitNum,
    });
  } catch (error) {
    handleError(error, res);
  }
};

export default handler;
