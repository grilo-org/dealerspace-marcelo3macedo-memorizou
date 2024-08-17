import prisma from "@/lib/prisma";
import { createCardSchema } from "@/schemas/cards";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = createCardSchema.parse(req.body);
    const newRecord = await prisma.card.create({
      data,
    });

    res.status(201).json(newRecord);
  } catch (error) {
    handleError(error, res);
  }
}
