const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function list() {
  const response = await fetch(`${apiUrl}/api/difficulty/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to post data");
  }
  return response.json();
}
