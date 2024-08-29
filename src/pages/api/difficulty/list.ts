import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const difficulties = await prisma.difficulty.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        order: true,
      },
      orderBy: {
        order: "asc",
      },
    });

    res.status(200).json(difficulties);
  } catch (error) {
    handleError(error, res);
  }
};

export default handler;
