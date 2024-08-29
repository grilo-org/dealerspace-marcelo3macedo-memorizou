import { ExtendedNextApiRequest } from "@/interfaces/requests";
import prisma from "@/lib/prisma";
import checkAuthToken from "@/middlewares/auth/checkAuthToken";
import { updateSessionSchema } from "@/schemas/sessions";
import { handleError } from "@/utils/errorHandler";

import type { NextApiResponse } from "next";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw new Error("Invalid request");
    }
    const validatedData = updateSessionSchema.parse(req.body);
    const { cards } = validatedData;

    await Promise.all(
      cards.map(async (card) => {
        await prisma.userSessionCard.updateMany({
          where: {
            sessionId: id.toString(),
            cardId: card.id,
          },
          data: {
            difficultyId: card.difficultyId,
            answerAt: card.answerAt ? new Date(card.answerAt) : null,
          },
        });
      }),
    );

    await prisma.userSession.update({
      where: { id: id.toString() },
      data: { deletedAt: new Date() },
    });

    res.status(200).json({ message: "Session cards updated successfully" });
  } catch (error) {
    handleError(error, res);
  }
};

export default checkAuthToken(handler);
