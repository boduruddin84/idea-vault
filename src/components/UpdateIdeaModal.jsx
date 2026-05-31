"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";

const UpdateIdeaModal = ({ idea, refetch }) => {
  const [open, setOpen] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedIdea = {
      title: form.title.value,
      category: form.category.value,
      shortDescription:
        form.shortDescription.value,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/ideas/${idea._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          updatedIdea
        ),
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success(
        "Idea updated successfully"
      );

      refetch();
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        color="primary"
        onPress={() => setOpen(true)}
      >
        Update
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-5 text-2xl font-bold">
              Update Idea
            </h2>

            <form
              onSubmit={handleUpdate}
              className="space-y-4"
            >
              <input
                type="text"
                name="title"
                defaultValue={idea.title}
                className="w-full rounded-lg border p-3"
                placeholder="Title"
              />

              <input
                type="text"
                name="category"
                defaultValue={
                  idea.category
                }
                className="w-full rounded-lg border p-3"
                placeholder="Category"
              />

              <textarea
                name="shortDescription"
                defaultValue={
                  idea.shortDescription
                }
                className="w-full rounded-lg border p-3"
                rows={4}
                placeholder="Description"
              />

              <div className="flex justify-end gap-3">
                <Button
                  variant="bordered"
                  type="button"
                  onPress={() =>
                    setOpen(false)
                  }
                >
                  Cancel
                </Button>

                <Button
                  color="primary"
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateIdeaModal;