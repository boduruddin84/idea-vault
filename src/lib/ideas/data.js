export const fetchIdeas = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080';
  let ideas = [];

  try {
    const res = await fetch(`${apiUrl}/api/ideas`, {
      // Optional: prevents Next.js from caching a bad response during build
      cache: 'no-store' 
    });
    
    // Check if the response is actually JSON before parsing
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      ideas = await res.json();
    } else {
      console.warn("API did not return JSON. Received HTML/Text instead.");
    }
  } catch (error) {
    console.error("Failed to fetch ideas during build phase:", error);
    // Fallback to empty array so the build finishes successfully
    ideas = [];
};

export const fetchTrendingIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/trending`);
  const data = await res.json();
  return data || [];
};


