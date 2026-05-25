import IdeasCard from "@/components/IdeasCard";
import { fetchTrendingIdeas } from "@/lib/ideas/data";


const TrendingIdeasPage = async () => {

  const ideas = await fetchTrendingIdeas();

  return (
     <div className="my-10 md:max-w-7xl mx-auto">
      <h1 className="my-10 ml-5 text-3xl font-bold">Trending Ideas</h1>
      <div className="ml-5 md:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas?.map((idea) => (
          <IdeasCard key={idea._id} idea={idea} />
        ))}
      </div>
    </div>
  )
}

export default TrendingIdeasPage