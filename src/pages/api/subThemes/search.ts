import { ExtendedNextApiRequest } from "@/interfaces/requests";
import { REQUEST_INVALID, REQUEST_NOTFOUND } from "@/lib/constants/requests";
import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(405).json({ error: REQUEST_INVALID });
    }

    const subThemeSelected = await prisma.subtheme.findFirst({
      where: {
        name: name.toString(),
        deletedAt: null,
      },
    });

    if (!subThemeSelected) {
      return res.status(404).json({ error: REQUEST_NOTFOUND });
    }

    res.status(200).json(subThemeSelected);
  } catch (error) {
    handleError(error, res);
  }
};

export default handler;
