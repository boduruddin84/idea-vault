"use client";

import { useEffect, useState } from "react";
import MyIdeaCard from "@/components/MyIdeaCard";

const MyIdeasPage = () => {
  const [ideas, setIdeas] = useState([]);

  const user = {
    email: "user@gmail.com",
  };

  const fetchIdeas = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/myIdeas?.email=${user.email}`
    );

    const data = await res.json();

    setIdeas(data);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-8 text-4xl font-bold">
          My Ideas
        </h1>

        {ideas.length === 0 ? (
          <p>No ideas found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea) => (
              <MyIdeaCard
                key={idea._id}
                idea={idea}
                refetch={fetchIdeas}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyIdeasPage;