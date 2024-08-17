import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "User is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const signInUserSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
