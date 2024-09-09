import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const validate = (error: Error, router: AppRouterInstance) => {
  if (error.message === "Authorization token required") {
    router.push(`/login/signIn`);
  }
};

export { validate };
