import { NewSession } from "@/interfaces/session";
import useUser from "@/store/useUser";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function create(data: NewSession) {
  const { token } = useUser.getState() as { token: string };

  if (!token) return;

  const response = await fetch(`${apiUrl}/api/sessions/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  return response.json();
}

export async function index(id: string) {
  const { token } = useUser.getState() as { token: string };

  if (!token) return;

  const response = await fetch(`${apiUrl}/api/sessions/index/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
