import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AUTH_INVALID_EMAIL_OR_PASSWORD } from "@/lib/constants/auth";
import prisma from "@/lib/prisma";
import { signInUserSchema } from "@/schemas/users";
import { handleError } from "@/utils/errorHandler";

import type { NextApiRequest, NextApiResponse } from "next";

const passwordSecret = process.env.PASSWORD_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email, password } = signInUserSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: AUTH_INVALID_EMAIL_OR_PASSWORD });
    }

    const saltedPassword = password + passwordSecret;
    const isValidPassword = await bcrypt.compare(saltedPassword, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: AUTH_INVALID_EMAIL_OR_PASSWORD });
    }

    const secret = process.env.JWT_SECRET || "";
    const token = jwt.sign({ userId: user.id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    handleError(error, res);
  }
}
