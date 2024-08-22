import { EditNotebook, NewNotebook } from "@/interfaces/notebook";
import useUser from "@/store/useUser";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function index(id: string) {
  const response = await fetch(`${apiUrl}/api/notebooks/index/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function list(page: number, limit: number) {
  const response = await fetch(
    `${apiUrl}/api/notebooks?page=${page}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function create(data: NewNotebook) {
  const { token } = useUser.getState() as { token: string };

  if (!token) return;

  const response = await fetch(`${apiUrl}/api/notebooks/create`, {
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

export async function update(data: EditNotebook) {
  const response = await fetch(`${apiUrl}/api/notebooks/edit/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  return response.json();
}
