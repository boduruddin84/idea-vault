import {
  Brain,
  HeartPulse,
  GraduationCap,
  Landmark,
  Leaf,
  Laptop,
} from "lucide-react";

const categories = [
  {
    title: "AI",
    icon: Brain,
    description:
      "Innovative artificial intelligence startup ideas.",
  },

  {
    title: "Health",
    icon: HeartPulse,
    description:
      "Modern healthcare and wellness solutions.",
  },

  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Learning platforms and education innovation.",
  },

  {
    title: "FinTech",
    icon: Landmark,
    description:
      "Finance and digital payment innovations.",
  },

  {
    title: "Green Tech",
    icon: Leaf,
    description:
      "Eco-friendly startup solutions.",
  },

  {
    title: "SaaS",
    icon: Laptop,
    description:
      "Software-as-a-service startup concepts.",
  },
];

const CategoriesSection = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl dark:text-slate-100">
            Explore Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Discover startup ideas across multiple industries
            and innovation sectors.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-indigo-500/40
                hover:shadow-xl
                dark:border-slate-800
                dark:bg-slate-900
                "
              >
                
                {/* Icon */}
                <div
                  className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-100
                  text-indigo-600
                  transition-all
                  duration-300
                  group-hover:bg-indigo-600
                  group-hover:text-white
                  dark:bg-indigo-600/10
                  dark:text-indigo-400
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;