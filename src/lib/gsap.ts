import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function gsapSetup() {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);
}

// Hero section animation
export function animateHero(heroTitleRef: React.RefObject<HTMLHeadingElement>) {
  if (heroTitleRef.current) {
    gsap.to(heroTitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: 0.3,
      ease: "power3.out"
    });
  }
}

// Animate elements when scrolled into view
export function animateSections() {
  // Wait for DOM to be fully loaded
  setTimeout(() => {
    const fadeElements = document.querySelectorAll('.section-fade');
    console.log('Found section-fade elements:', fadeElements.length);
    
    fadeElements.forEach((elem, index) => {
      gsap.fromTo(elem, 
        { 
          opacity: 0, 
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.03, // Slight delay between elements
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none",
            markers: false // Set to true for debugging
          }
        }
      );
    });
  }, 300); // Small delay to ensure DOM is ready
}

// Apply fade-in animation to a specific element
export function fadeInElement(elementRef: React.RefObject<HTMLElement>, delay: number = 0) {
  if (elementRef.current) {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay,
      ease: "power2.out"
    });
  }
}

// Shrink header on scroll
export function setupScrollHeader(headerRef: React.RefObject<HTMLElement>) {
  let lastScrollTop = 0;
  
  const handleScroll = () => {
    if (!headerRef.current) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      headerRef.current.classList.add('py-2');
      headerRef.current.classList.remove('py-3');
    } else {
      headerRef.current.classList.add('py-3');
      headerRef.current.classList.remove('py-2');
    }
    
    lastScrollTop = scrollTop;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Return a cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}
