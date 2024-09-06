import { ExtendedNextApiRequest } from "@/interfaces/requests";
import { REQUEST_INVALID, REQUEST_NOTFOUND } from "@/lib/constants/requests";
import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { name, notebookId } = req.query;

    if (!name || !notebookId) {
      return res.status(405).json({ error: REQUEST_INVALID });
    }

    const section = await prisma.section.findFirst({
      where: {
        title: name.toString(),
        notebookId: notebookId.toString(),
        deletedAt: null,
      },
    });

    if (!section) {
      return res.status(404).json({ error: REQUEST_NOTFOUND });
    }

    res.status(200).json(section);
  } catch (error) {
    handleError(error, res);
  }
};

export default handler;
