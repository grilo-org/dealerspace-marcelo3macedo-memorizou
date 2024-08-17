import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const saltedPassword = password + passwordSecret;
    const isValidPassword = await bcrypt.compare(saltedPassword, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    handleError(error, res);
  }
}
