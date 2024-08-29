import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method !== "DELETE" || !id) {
    return res.status(405).json({ error: "Invalid Request" });
  }

  try {
    const deletedNotebook = await prisma.difficulty.update({
      where: {
        id: id.toString(),
      },
      data: {
        deletedAt: new Date(),
      },
    });

    res.status(200).json(deletedNotebook);
  } catch (error) {
    handleError(error, res);
  }
}
