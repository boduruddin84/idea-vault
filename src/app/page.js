import Banner from "@/components/Banner";
import CategoriesSection from "./categories/page";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <CategoriesSection />
      <Testimonials />
    </div>
  );
}
