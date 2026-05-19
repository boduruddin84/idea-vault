import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      "IdeaVault helped me validate my startup concept with meaningful community feedback and expert insights.",
  },
  {
    name: "David Lee",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "The platform inspired me with innovative startup ideas and valuable discussions from creators worldwide.",
  },
  {
    name: "Nusrat Jahan",
    role: "AI Researcher",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    review:
      "A fantastic platform for discovering future-focused startup concepts and connecting with innovators.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-950 py-20">
      
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          
          <h2 className="text-4xl font-bold text-slate-100 md:text-5xl">
            Community Feedback
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Hear what innovators and creators say about
            their experience with IdeaVault.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
            >
              
              {/* User Info */}
              <div className="mb-6 flex items-center gap-4">
                
                <Image
                  src={item.image}
                  alt={item.name}
                  height={20}
                  width={20}
                  className="h-16 w-16 rounded-full border-2 border-slate-700 object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="leading-7 text-slate-300">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;