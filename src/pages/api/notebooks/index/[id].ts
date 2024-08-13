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

    const notebook = await prisma.notebook.findFirst({
      where: {
        id: id.toString(),
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        sections: true,
      },
    });

    res.status(200).json(notebook);
  } catch (error) {
    handleError(error, res);
  }
}
