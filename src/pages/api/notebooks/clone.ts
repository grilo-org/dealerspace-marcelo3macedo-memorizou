import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { cloneNotebookSchema } from "@/schemas/notebooks";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.user;
    const { id } = cloneNotebookSchema.parse(req.body);
    const originalNotebook = await prisma.notebook.findFirst({
      where: {
        id,
      },
      include: {
        sections: {
          include: {
            cards: true,
          },
        },
      },
    });

    if (!originalNotebook) {
      throw new Error("notFound");
    }

    const clonedNotebook = await prisma.notebook.create({
      data: {
        title: originalNotebook.title,
        content: originalNotebook.content,
        userId: userId,
        sections: {
          create: originalNotebook.sections.map((section) => ({
            title: section.title,
            description: section.description,
            cards: {
              create: section.cards.map((card) => ({
                title: card.title,
                content: card.content,
              })),
            },
          })),
        },
      },
    });

    res.status(201).json(clonedNotebook);
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
