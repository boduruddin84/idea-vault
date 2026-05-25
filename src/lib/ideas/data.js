export const fetchIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/ideas`);
  const data = await res.json();
  return data || [];
};

export const fetchTrendingIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/trending`);
  const data = await res.json();
  return data || [];
};


