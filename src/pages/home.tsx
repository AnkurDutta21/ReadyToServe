import { useEffect } from "react";
import { animateSections } from "@/lib/gsap";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import MenuSection from "@/components/home/menu-section";
import GallerySection from "@/components/home/gallery-section";
import TestimonialSection from "@/components/home/testimonial-section";
import ReservationSection from "@/components/home/reservation-section";
import ContactSection from "@/components/home/contact-section";
import MapSection from "@/components/home/map-section";

export function Home() {
  // Set up GSAP animations
  useEffect(() => {
    // Set page title
    document.title = "Round D Clock | Fine Dining Restaurant";
    
    // Force a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      console.log("Initializing animations...");
      // Initialize section animations
      animateSections();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <Header />
      
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialSection />
        <ReservationSection />
        <ContactSection />
        <MapSection />
      </main>
      
      <Footer />
    </>
  );
}

export default Home;
