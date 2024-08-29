import prisma from "@/lib/prisma";
import { createDifficultySchema } from "@/schemas/difficulty";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = createDifficultySchema.parse(req.body);
    const newRecord = await prisma.difficulty.create({
      data,
    });

    res.status(201).json(newRecord);
  } catch (error) {
    handleError(error, res);
  }
}
