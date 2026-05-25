import Banner from "@/components/Banner";
import CategoriesSection from "./categories/page";
import Testimonials from "@/components/Testimonials";
import TrendingIdeasPage from "./trending/page";



export default function Home() {
  return (
    <div>
      <Banner />
      <TrendingIdeasPage />
      <CategoriesSection />
      <Testimonials />
      
    </div>
  );
}
