import { notebooks } from "./users";

import { handleGetRequest, handlePostRequest } from "@/helpers/requests/handle";
import {
  CloneNotebook,
  EditNotebook,
  NewNotebook,
} from "@/interfaces/notebook";
import useUser from "@/store/useUser";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function index(id: string) {
  const response = await fetch(`${apiUrl}/api/notebooks/index/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function getByName(name: string) {
  const endpoint = `api/notebooks/search?name=${name}`;
  return handleGetRequest(endpoint);
}

export async function list(page: number, limit: number, theme: string) {
  const endpoint = `api/notebooks?page=${page}&limit=${limit}&theme=${theme}`;
  return handleGetRequest(endpoint);
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

export async function clone(data: CloneNotebook) {
  const endpoint = `api/notebooks/clone`;
  return handlePostRequest(endpoint, data, true);
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

export async function remove(id: string) {
  const response = await fetch(`${apiUrl}/api/notebooks/delete/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  return response.json();
}

export async function getCards(notebookId: string, limit: number) {
  const response = await fetch(
    `${apiUrl}/api/notebooks/getCards?notebookId=${notebookId}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
