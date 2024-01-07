export async function authenticatedFetch(
  url: string,
  options?: RequestInit
): Promise<Response> {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("No access token available");
  }
  const headers = {
    ...options?.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  return await fetch(url, { ...options, headers });
}
