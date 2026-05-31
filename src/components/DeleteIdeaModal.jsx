"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";

export default function DeleteIdeaModal({
  id,
  refetch,
}) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/ideas/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Idea deleted successfully");
      refetch();
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        color="danger"
        onPress={() => setOpen(true)}
      >
        Delete
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-96 rounded-xl bg-white p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-semibold">
              Delete Idea
            </h2>

            <p className="mb-6 text-gray-600">
              Are you sure you want to delete this idea?
            </p>

            <div className="flex justify-end gap-3">
              <Button
                variant="bordered"
                onPress={() =>
                  setOpen(false)
                }
              >
                Cancel
              </Button>

              <Button
                color="danger"className={""}
                onPress={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}