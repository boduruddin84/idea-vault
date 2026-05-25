import IdeaDetails from "@/components/IdeaDetails";


const fetchSingleIdea = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/ideas/${id}`);
    const data = await res.json();
    return data || {};
  };


const IdeaDetailsPage = async ({ params }) => {

  

    const {id} = await params;
    const idea = await fetchSingleIdea(id);
    

  return (
    <div className=" md:max-w-7xl mx-auto">
        <h1 className="my-10 ml-5 text-3xl font-bold text-center">Idea Details</h1>
        
        <IdeaDetails key={idea.id} idea={idea} />
       
    </div>
  )
}

export default IdeaDetailsPage