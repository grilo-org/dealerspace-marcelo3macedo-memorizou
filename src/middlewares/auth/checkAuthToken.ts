import jwt from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { ExtendedNextApiRequest } from "@/interfaces/requests";

export type ExtendedNextApiHandler<T = any> = (
  req: ExtendedNextApiRequest,
  res: NextApiResponse<T>,
) => unknown | Promise<unknown>;

const checkAuthToken = (handler: ExtendedNextApiHandler) => {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authorization token required" });
    }

    try {
      //const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const decoded = jwt.decode(token);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

export default checkAuthToken;
