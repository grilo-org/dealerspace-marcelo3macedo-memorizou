import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  try {
    if (!id) {
      throw new Error("Invalid request");
    }

    const section = await prisma.section.findFirst({
      where: {
        id: id.toString(),
      },
      select: {
        id: true,
        title: true,
        description: true,
        notebookId: true,
        notebook: true,
        createdAt: true,
        cards: {
          where: {
            deletedAt: null,
          },
        },
      },
    });

    res.status(200).json(section);
  } catch (error) {
    handleError(error, res);
  }
}
