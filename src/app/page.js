import Banner from "@/components/Banner";
import CategoriesSection from "./categories/page";
import Testimonials from "@/components/Testimonials";
import IdeasPage from "./ideas/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <IdeasPage />
      <CategoriesSection />
      <Testimonials />
      
    </div>
  );
}
