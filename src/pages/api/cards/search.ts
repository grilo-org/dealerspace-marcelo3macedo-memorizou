import { ExtendedNextApiRequest } from "@/interfaces/requests";
import { REQUEST_INVALID, REQUEST_NOTFOUND } from "@/lib/constants/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { title, sectionId } = req.query;

    if (!title || !sectionId) {
      return res.status(405).json({ error: REQUEST_INVALID });
    }

    const card = await prisma.card.findFirst({
      where: {
        title: title.toString(),
        sectionId: sectionId.toString(),
        deletedAt: null,
      },
    });

    if (!card) {
      return res.status(404).json({ error: REQUEST_NOTFOUND });
    }

    res.status(200).json(card);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
