"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";

const AddIdeaPage = () => {
  const [loading, setLoading] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const categories = [
    "Tech",
    "AI",
    "Health",
    "Education",
    "FinTech",
    "Green Tech",
    "SaaS",
  ];

  const handleAddIdea = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const ideaData = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      detailedDescription: form.detailedDescription.value,
      category: form.category.value,
      tags: form.tags.value,
      imageURL: form.imageURL.value,
      estimatedBudget: form.estimatedBudget.value,
      targetAudience: form.targetAudience.value,
      problemStatement: form.problemStatement.value,
      proposedSolution: form.proposedSolution.value,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/newIdea`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideaData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Startup idea submitted successfully!");

        form.reset();
      } else {
        toast.error("Failed to submit idea");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Submit Your Startup Idea
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Share innovative ideas with the community and get valuable feedback
            from creators and entrepreneurs.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleAddIdea}
          className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-lg
          dark:border-slate-800
          dark:bg-slate-900
          "
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Idea Title */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Idea Title
              </label>

              <input
                type="text"
                name="title"
                required
                placeholder="Enter startup idea title"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                transition
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              />
            </div>

            {/* Short Description */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Short Description
              </label>

              <textarea
                name="shortDescription"
                required
                rows={3}
                placeholder="Brief overview of your startup idea"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                transition
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              ></textarea>
            </div>

            {/* Detailed Description */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Detailed Description
              </label>

              <textarea
                name="detailedDescription"
                required
                rows={6}
                placeholder="Explain your startup idea in detail"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                transition
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Category
              </label>

              <select
                name="category"
                required
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              >
                <option value="">Select Category</option>

                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Tags (Optional)
              </label>

              <input
                type="text"
                name="tags"
                placeholder="AI, Startup, SaaS"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Image URL
              </label>

              <input
                type="url"
                name="imageURL"
                required
                placeholder="https://example.com/image.jpg"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              />
            </div>

            {/* Budget */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Estimated Budget (Optional)
              </label>

              <input
                type="text"
                name="estimatedBudget"
                placeholder="$5,000 - $10,000"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              />
            </div>

            {/* Target Audience */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Target Audience
              </label>

              <textarea
                name="targetAudience"
                required
                rows={3}
                placeholder="Who will benefit from this idea?"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              ></textarea>
            </div>

            {/* Problem Statement */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Problem Statement
              </label>

              <textarea
                name="problemStatement"
                required
                rows={4}
                placeholder="Describe the problem your idea solves"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              ></textarea>
            </div>

            {/* Proposed Solution */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Proposed Solution
              </label>

              <textarea
                name="proposedSolution"
                required
                rows={4}
                placeholder="Explain how your startup solves the problem"
                className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                "
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
            mt-8
            w-full
            rounded-xl
            bg-indigo-600
            px-6
            py-4
            font-semibold
            text-white
            transition
            hover:bg-indigo-500
            disabled:cursor-not-allowed
            disabled:opacity-70
            "
          >
            {loading ? "Submitting..." : "Submit Startup Idea"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddIdeaPage;
