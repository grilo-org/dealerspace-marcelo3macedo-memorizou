import { NewCard } from "@/interfaces/card";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function create(data: NewCard) {
  const response = await fetch(`${apiUrl}/api/cards/create`, {
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

export async function update(data: NewCard) {
  const response = await fetch(`${apiUrl}/api/cards/edit/${data.id}`, {
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
  const response = await fetch(`${apiUrl}/api/cards/delete/${id}`, {
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
