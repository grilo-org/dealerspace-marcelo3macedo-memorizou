import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { createThemeSchema } from "@/schemas/themes";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const validatedData = createThemeSchema.parse(req.body);
    const { name, order } = validatedData;

    const themeCreated = await prisma.theme.create({
      data: {
        name,
        order,
      },
    });

    res.status(201).json(themeCreated);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
