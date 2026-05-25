import Image from "next/image";

const IdeaDetails = ({ idea }) => {
  return (
    <div className="space-y-3 mb-20 w-80 md:w-125 mx-auto">
      <div className="relative w-full aspect-square">
        {idea.image && <Image
          src={idea.image}
          alt={idea.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl"
        />}
      </div>
      <h3 className="text-2xl font-semibold my-5">{idea.title}</h3>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]"><span className="font-bold">Category:</span> {idea.category}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]"><span className="font-bold">Author:</span> {idea.author}</p>
      </div>
      
      <p className="font-semibold text-[#121212bc]">{idea.description}</p>
    </div>
  );
};

export default IdeaDetails;