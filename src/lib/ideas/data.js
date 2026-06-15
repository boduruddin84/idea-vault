// utils/fetchIdeas.js

const API_URL = process.env.NEXT_PUBLIC_API_URI;

export const fetchIdeas = async () => {
  try {
    if (!API_URL) {
      console.error("NEXT_PUBLIC_API_URI is missing");
      return [];
    }

    const res = await fetch(`${API_URL}/api/ideas`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      console.error("Expected JSON but received:", contentType);
      return [];
    }

    const ideas = await res.json();

    return Array.isArray(ideas) ? ideas : [];
  } catch (error) {
    console.error("Failed to fetch ideas:", error);
    return [];
  }
};

export const fetchTrendingIdeas = async () => {
  try {
    if (!API_URL) {
      console.error("NEXT_PUBLIC_API_URI is missing");
      return [];
    }

    const res = await fetch(`${API_URL}/api/trending`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      console.error("Expected JSON but received:", contentType);
      return [];
    }

    const ideas = await res.json();

    return Array.isArray(ideas) ? ideas : [];
  } catch (error) {
    console.error("Failed to fetch trending ideas:", error);
    return [];
  }
};