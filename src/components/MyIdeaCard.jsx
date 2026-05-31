"use client";

import Image from "next/image";
import UpdateIdeaModal from "./UpdateIdeaModal";
import DeleteIdeaModal from "./DeleteIdeaModal";


const MyIdeaCard = ({
  idea,
  refetch,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <Image
        src={idea.imageURL}
        alt={idea.title}
        width={500}
        height={300}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {idea.title}
        </h2>

        <p className="mt-2 text-slate-600">
          {idea.category}
        </p>

        <div className="mt-5 flex gap-3">
          <UpdateIdeaModal
            idea={idea}
            refetch={refetch}
          />

          <DeleteIdeaModal
            id={idea._id}
            refetch={refetch}
          />
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;