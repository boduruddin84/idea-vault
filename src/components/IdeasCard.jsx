import 'animate.css';
import { Button, Card } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"


const IdeasCard = ({ idea }) => {
  return (
    <Card className="w-80 shadow-xl border rounded-xl ">
      <div className="relative w-full aspect-square">
        <Image 
        src={idea.image}
        alt={idea.title}
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-semibold ">{idea.title}</h3>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]" >{idea.category}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]">{idea.author}</p>
      </div>
      <Link href={`/ideas/${idea._id}`}><Button variant="outline" className={'w-full font-semibold animate__animated animate__bounce'} >View Details</Button></Link>
    </Card>
  )
}

export default IdeasCard