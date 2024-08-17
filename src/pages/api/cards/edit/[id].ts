import prisma from "@/lib/prisma";
import { editCardSchema } from "@/schemas/cards";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query;
    const data = editCardSchema.parse(req.body);

    if (!id) {
      throw new Error("Invalid request");
    }

    const updatedRecord = await prisma.card.update({
      where: {
        id: id.toString(),
      },
      data: data,
    });

    res.status(200).json(updatedRecord);
  } catch (error) {
    handleError(error, res);
  }
}
