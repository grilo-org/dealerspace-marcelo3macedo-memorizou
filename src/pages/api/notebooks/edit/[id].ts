import prisma from "@/lib/prisma";
import { editNotebookSchema } from "@/schemas/notebooks";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query;
    const data = editNotebookSchema.parse(req.body);

    if (!id) {
      throw new Error("Invalid request");
    }

    const updatedRecord = await prisma.notebook.update({
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
