import { NewSection } from "@/interfaces/section";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function index(id: string) {
  const response = await fetch(`${apiUrl}/api/sections/index/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function create(data: NewSection) {
  const response = await fetch(`${apiUrl}/api/sections/create`, {
    method: "POST",
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
  const response = await fetch(`${apiUrl}/api/sections/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  return response.json();
}
