import prisma from '@/lib/prisma';
import { createSectionsSchema } from '@/schemas/sections';
import { handleError } from '@/utils/errorHandler';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = createSectionsSchema.parse(req.body);
    const newRecord = await prisma.section.create({
      data
    })

    res.status(201).json(newRecord);
  } catch (error) {
    handleError(error, res)
  }
}
