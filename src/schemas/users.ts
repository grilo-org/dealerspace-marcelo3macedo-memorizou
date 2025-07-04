import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "User is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const signInUserSchema = z.object({
  email: z.string().min(1, "emailRequired"),
  password: z.string().min(1, "passwordRequired"),
});

export const signInUserComponentSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().min(1, t("emailRequired")),
    password: z.string().min(1, t("passwordRequired")),
  });

export const signUpUserSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signUpUserComponentSchema = (t: (key: string) => string) =>
  z
    .object({
      name: z.string().min(1, t("nameRequired")),
      email: z.string().min(1, t("emailRequired")),
      password: z.string().min(1, t("passwordRequired")),
      confirmPassword: z.string().min(1, t("confirmPasswordRequired")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordMismatch"),
      path: ["confirmPassword"],
    });
