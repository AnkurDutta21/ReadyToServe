import { useRef, useEffect } from "react";
import { animateHero } from "@/lib/gsap";

export function HeroSection() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    animateHero(heroTitleRef);
  }, []);
  
  return (
    <section id="home" className="h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
          alt="Restaurant interior with elegant table settings" 
          className="w-full h-full object-cover brightness-[0.85]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-xl text-[#F4E5AC]">
          <h1 
            ref={heroTitleRef}
            className="text-4xl md:text-6xl font-bold heading-font mb-4 opacity-0 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          >
            Culinary Excellence Redefined
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#F4E5AC]/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] font-medium">
            Experience the perfect blend of traditional flavors and modern culinary techniques in a warm, elegant atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="bg-[#D32B2B] text-[#F4E5AC] px-8 py-3 rounded-full font-semibold hover:bg-[#D32B2B]/90 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Menu
            </a>
            <a 
              href="#reserve" 
              className="bg-[#F4E5AC] text-[#D32B2B] px-8 py-3 rounded-full font-semibold hover:bg-[#F4E5AC]/90 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Make Reservation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
