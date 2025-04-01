const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

// api.ts
export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  console.log("API Fetching:", `${API_BASE_URL}${endpoint}`);
  console.log("Token:", token);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};
