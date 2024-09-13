import { handleGetRequest, handlePostRequest } from "@/helpers/requests/handle";
import { NewUser, User } from "@/interfaces/user";
import useUser from "@/store/useUser";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signIn(data: User) {
  const endpoint = "/api/users/signIn";
  return handlePostRequest(endpoint, data, false);
}

export async function create(data: NewUser) {
  const endpoint = "/api/users/create";
  return handlePostRequest(endpoint, data, false);
}

export async function index() {
  const { token } = useUser.getState() as { token: string };

  if (!token) return;

  const response = await fetch(`${apiUrl}/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  return response.json();
}

export async function notebooks(page: number, limit: number) {
  const endpoint = `api/users/notebooks/list?page=${page}&limit=${limit}`;
  return handleGetRequest(endpoint, true);
}
