import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { setupScrollHeader } from "@/lib/gsap";
import MobileMenu from "./mobile-menu";
import logoPath from "../../assets/rdc.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!headerRef.current) return;
    const cleanup = setupScrollHeader(headerRef as React.RefObject<HTMLElement>);
    return cleanup;
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <header 
      ref={headerRef}
      className="fixed w-full bg-[#F4F1DE]/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 py-3"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="z-10 flex items-center gap-4" onClick={scrollToTop}>
          <img 
            src={logoPath} 
            alt="Round D Clock Logo" 
            className="h-12 md:h-16 w-auto object-contain logo-custom" 
          />
          <div className="md:block border-l-2 border-[#3D405B]/20 pl-4">
            <h1 className="text-[#3D405B] font-bold text-2xl heading-font leading-tight">Round The Clock</h1>
            <p className="text-[#3D405B]/70 text-sm font-medium tracking-wide">FOOD & BREVARAGES</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-[#3D405B] hover:text-[#E07A5F] font-medium transition-colors duration-300">Home</a>
          <a href="#about" className="text-[#3D405B] hover:text-[#E07A5F] font-medium transition-colors duration-300">About</a>
          <a href="#menu" className="text-[#3D405B] hover:text-[#E07A5F] font-medium transition-colors duration-300">Menu</a>
          <a href="#gallery" className="text-[#3D405B] hover:text-[#E07A5F] font-medium transition-colors duration-300">Gallery</a>
          <a href="#contact" className="text-[#3D405B] hover:text-[#E07A5F] font-medium transition-colors duration-300">Contact</a>
          <a href="#reserve" className="bg-[#E07A5F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#E07A5F]/90 transition-colors duration-300">Reserve</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#3D405B] focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}

export default Header;
