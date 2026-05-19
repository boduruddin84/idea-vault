
import { Button } from "@heroui/react"
import Link from "next/link"


const NotFound = () => {
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl md:text-5xl text-purple-500">This page is not found</h2>
        <Link href={"/"}>
            <Button className={"btn btn-primary mt-5"}>Back to Home</Button>
        </Link>
    </div>
  )
}

export default NotFound