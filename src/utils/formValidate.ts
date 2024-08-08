import { ZodSchema, ZodError } from "zod";

export const validate = (
  values: any,
  schema: ZodSchema<any>,
): { [key: string]: string } | undefined => {
  try {
    schema.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.errors.reduce((acc: { [key: string]: string }, curr) => {
        acc[curr.path[0] as string] = curr.message;
        return acc;
      }, {});
    }
  }
};
