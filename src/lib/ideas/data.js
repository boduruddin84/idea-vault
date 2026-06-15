export const fetchIdeas = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URI;
  let ideas = [];

  try {
    const res = await fetch(`${apiUrl}/api/ideas`, {
      cache: 'no-store' 
    });
    
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      ideas = await res.json();
    } else {
      console.warn("API did not return JSON. Received HTML/Text instead.");
    }
  } catch (error) {
    console.error("Failed to fetch ideas during build phase:", error);
    ideas = [];
  } // <--- YOU WERE MISSING THIS CLOSING BRACE!
  
  return ideas; // Make sure to return the ideas array here
};

// Added the same safe try/catch wrapper here so it doesn't crash on Vercel either
export const fetchTrendingIdeas = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URI;
  
  try {
    const res = await fetch(`${apiUrl}/trending`, { cache: 'no-store' });
    const contentType = res.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      return data || [];
    }
    
    console.warn("Trending API did not return JSON.");
    return [];
  } catch (error) {
    console.error("Failed to fetch trending ideas during build phase:", error);
    return [];
  }
};