import { useRouter } from "next/navigation";

const useCompletedSession = () => {
  const router = useRouter();

  const backHome = () => {
    router.push(`/`);
  };

  return {
    backHome,
  };
};

export { useCompletedSession };
