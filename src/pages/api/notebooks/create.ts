import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { createNotebookSchema } from "@/schemas/notebooks";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.user;
    const { title, content } = createNotebookSchema.parse(req.body);
    const newRecord = await prisma.notebook.create({
      data: { title, content, userId },
    });

    res.status(201).json(newRecord);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
