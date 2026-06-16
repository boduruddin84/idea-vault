"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const MyInteractionsPage = () => {
  const [interactions, setInteractions] =
    useState([]);

  const { data: session } =
    authClient.useSession();

  useEffect(() => {
    if (session?.user?.email) {
      fetchData();
    }
  }, [session]);

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/my-interactions/${session.user.email}`
    );

    const data = await res.json();

    setInteractions(data);
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-3xl font-bold">
        My Interactions
      </h1>

      <div className="grid gap-6">
        {interactions.map((item) => (
          <div
            key={item._id}
            className="rounded-2xl border p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              {item.ideaTitle}
            </h2>

            <p className="mt-2 text-gray-600">
              Your Comment:
            </p>

            <p className="italic">
              "{item.comment}"
            </p>

            <p className="mt-3 text-sm text-gray-500">
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInteractionsPage;