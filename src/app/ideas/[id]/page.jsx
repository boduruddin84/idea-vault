import IdeaDetails from "@/components/IdeaDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const fetchSingleIdea = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/ideas/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    return data || {};
  };


const IdeaDetailsPage = async ({ params }) => {

    const {id} = await params;
    const { token } = await auth.api.getToken({ 
        headers: await headers(),
    });
    const idea = await fetchSingleIdea(id, token);
    

  return (
    
    <div className=" md:max-w-7xl mx-auto">
        <h1 className="my-10 ml-5 text-3xl font-bold text-center">Idea Details</h1>
        
        <IdeaDetails key={idea.id} idea={idea} />
    </div>
  )
}

export default IdeaDetailsPage