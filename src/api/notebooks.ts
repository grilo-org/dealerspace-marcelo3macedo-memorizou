import { NewNotebook } from "@/interfaces/notebook";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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
  const response = await fetch(`${apiUrl}/api/notebooks/create`, {
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
