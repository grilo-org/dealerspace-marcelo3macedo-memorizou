import prisma from "@/lib/prisma";
import { createNotebookSchema } from "@/schemas/notebooks";
import { handleError } from "@/utils/errorHandler";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = createNotebookSchema.parse(req.body);
    const newRecord = await prisma.notebook.create({
      data,
    });

    res.status(201).json(newRecord);
  } catch (error) {
    handleError(error, res);
  }
}
