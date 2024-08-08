import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    const skip = (pageNum - 1) * limitNum;
    const take = limitNum;

    const notebooks = await prisma.notebook.findMany({
      where: {
        deletedAt: null,
      },
      skip,
      take,
    });
    const totalUsers = await prisma.notebook.count();

    res.status(200).json({
      notebooks: notebooks,
      total: totalUsers,
      page: pageNum,
      limit: limitNum,
    });
  } catch (error) {
    handleError(error, res);
  }
}
