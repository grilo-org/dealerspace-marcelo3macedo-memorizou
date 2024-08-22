import { NextApiRequest } from "next";

export type ExtendedNextApiRequest = NextApiRequest & {
  user: {
    userId: string;
  };
};
