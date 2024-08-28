import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { notebookId, limit } = req.query;

    if (!notebookId || !limit) {
      throw new Error("Invalid request");
    }

    const notebookCards = await prisma.notebook.findFirst({
      where: {
        id: notebookId.toString(),
      },
      select: {
        id: true,
        title: true,
        content: true,
        userId: true,
        createdAt: true,
        sections: {
          where: {
            deletedAt: null,
          },
          select: {
            id: true,
            title: true,
            cards: {
              where: {
                deletedAt: null,
              },
              take: Number(limit),
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

    res.status(200).json(notebookCards);
  } catch (error) {
    handleError(error, res);
  }
}
