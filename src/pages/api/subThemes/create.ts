import { ExtendedNextApiRequest } from "@/interfaces/requests";
import { REQUEST_NOTFOUND } from "@/lib/constants/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { createSubThemeSchema } from "@/schemas/subThemes";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const validatedData = createSubThemeSchema.parse(req.body);
    const { themeId, name, order } = validatedData;

    const themeSelected = await prisma.theme.findFirst({
      where: {
        id: themeId,
      },
    });

    if (!themeSelected) {
      return res.status(404).json({ error: REQUEST_NOTFOUND });
    }

    const subThemeCreated = await prisma.subtheme.create({
      data: {
        themeId,
        name,
        order,
      },
    });

    res.status(201).json(subThemeCreated);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
