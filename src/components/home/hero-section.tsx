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
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-[#2A2A2A]/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-xl text-[#F4F1DE]">
          <h1 
            ref={heroTitleRef}
            className="text-4xl md:text-6xl font-bold heading-font mb-4 opacity-0"
          >
            Culinary Excellence Redefined
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">Experience the perfect blend of traditional flavors and modern culinary techniques in a warm, elegant atmosphere.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="bg-[#E07A5F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E07A5F]/90 transition-colors duration-300 text-center"
            >
              Explore Menu
            </a>
            <a 
              href="#reserve" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-center"
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
