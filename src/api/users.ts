import { NewUser, User } from "@/interfaces/user";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signIn(data: User) {
  const response = await fetch(`${apiUrl}/api/users/signIn`, {
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

export async function create(data: NewUser) {
  const response = await fetch(`${apiUrl}/api/users/create`, {
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
