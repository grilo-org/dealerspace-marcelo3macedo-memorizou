import { ZodError } from "zod";

import type { NextApiResponse } from "next";

export function handleError(error: unknown, res: NextApiResponse) {
  if (error instanceof ZodError) {
    return res.status(400).json({ error: error.errors });
  }

  return res.status(500).json({ error: "Internal Server Error" });
}
