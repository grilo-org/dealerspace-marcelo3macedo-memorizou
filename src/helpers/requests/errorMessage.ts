const extractErrorMessage = async (response: Response) => {
  try {
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      return errorData.message || JSON.stringify(errorData);
    } else {
      return await response.text();
    }
  } catch (error) {
    return `An error occurred: ${response.statusText}`;
  }
};

export { extractErrorMessage };
