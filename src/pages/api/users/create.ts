import bcrypt from "bcrypt";

import prisma from "@/lib/prisma";
import { createUserSchema } from "@/schemas/users";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const passwordSecret = process.env.PASSWORD_SECRET;

    const { name, email, password } = createUserSchema.parse(req.body);
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "userAlreadyExists" });
    }

    const saltedPassword = password + passwordSecret;
    const hashedPassword = await bcrypt.hash(saltedPassword, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "userCreatedSuccessfully" });
  } catch (error) {
    handleError(error, res);
  }
}
