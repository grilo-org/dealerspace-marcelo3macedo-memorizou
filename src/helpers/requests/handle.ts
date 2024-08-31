import { extractErrorMessage } from "./errorMessage";

import useUser from "@/store/useUser";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const handlePostRequest = async (
  endpoint: string,
  data: any,
  isAuthNeeded: boolean = false,
) => {
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: "POST",
    headers: getHeaders(isAuthNeeded),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const data = await extractErrorMessage(response);
    throw new Error(data);
  }
  return response.json();
};

const getHeaders = (isAuthNeeded: boolean): HeadersInit => {
  const { token } = useUser.getState() as { token: string };

  if (isAuthNeeded) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  return {
    "Content-Type": "application/json",
  };
};

export { handlePostRequest };
