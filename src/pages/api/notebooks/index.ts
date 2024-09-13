import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { page = 1, limit = 10, theme = "" } = req.query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    const skip = (pageNum - 1) * limitNum;
    const take = limitNum;
    const userId = process.env.MASTER_USER_ID;

    const where: any = {
      userId,
      deletedAt: null,
      ...(theme && {
        subtheme: {
          theme: {
            name: {
              contains: theme,
            },
          },
        },
      }),
    };

    const notebooks = await prisma.notebook.findMany({
      where,
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        subtheme: {
          select: {
            id: true,
            name: true,
            theme: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      skip,
      take,
    });

    const totalUsers = await prisma.notebook.count({ where });
    const themes = await prisma.theme.findMany({
      distinct: ["name"],
      select: {
        name: true,
      },
    });

    res.status(200).json({
      notebooks: notebooks,
      themes: themes,
      total: totalUsers,
      page: pageNum,
      limit: limitNum,
    });
  } catch (error) {
    console.log(error);
    handleError(error, res);
  }
}
