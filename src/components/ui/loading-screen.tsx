import { useEffect, useState } from 'react';
import logoPath from "../../assets/Round the Clock Logo_100425.png";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#F4F1DE] to-[#F4F1DE]/90">
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="animate-bounce-subtle">
            <img 
              src={logoPath} 
              alt="Round D Clock Logo" 
              className="h-28 w-auto object-contain logo-custom"
            />
          </div>
        </div>

        {/* Spinning Plates */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-40 h-40 rounded-full border-4 border-[#E07A5F]/20 animate-spin-slow" />
          <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-[#E07A5F]/10 animate-spin-reverse" />
        </div>
        
        {/* Loading Text */}
        <div className="text-[#3D405B] font-bold text-3xl heading-font mb-2">
          Round The Clock
        </div>
        <div className="text-[#3D405B]/70 text-sm tracking-[0.2em] font-medium animate-pulse-slow">
          CULINARY CUISINE
        </div>

        {/* Loading Indicator */}
        <div className="mt-8 flex space-x-3">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2.5 h-2.5 bg-[#E07A5F] rounded-full animate-bounce-subtle"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>

        {/* Decorative Elements - Repositioned */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          {/* Top Row */}
          <i className="fas fa-utensils text-6xl text-[#E07A5F]/20 animate-float absolute -top-12 -left-12" 
             style={{ animationDelay: '0ms' }}
          />
          <i className="fas fa-pepper-hot text-5xl text-[#E07A5F]/20 animate-float absolute -top-8 -right-8" 
             style={{ animationDelay: '300ms' }}
          />
          
          {/* Middle Row */}
          <i className="fas fa-leaf text-5xl text-[#E07A5F]/15 animate-float absolute -left-16 top-1/2" 
             style={{ animationDelay: '150ms' }}
          />
          <i className="fas fa-coffee text-5xl text-[#E07A5F]/15 animate-float absolute -right-16 top-1/2" 
             style={{ animationDelay: '450ms' }}
          />
          
          {/* Bottom Row */}
          <i className="fas fa-fish text-6xl text-[#E07A5F]/20 animate-float absolute -bottom-12 -left-12" 
             style={{ animationDelay: '600ms' }}
          />
          <i className="fas fa-carrot text-5xl text-[#E07A5F]/20 animate-float absolute -bottom-8 -right-8" 
             style={{ animationDelay: '750ms' }}
          />

          {/* Corner Accents */}
          <div className="absolute -top-20 -left-20 w-32 h-32 bg-[#E07A5F]/5 rounded-full blur-xl animate-pulse-slow" />
          <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-[#E07A5F]/5 rounded-full blur-xl animate-pulse-slow" 
               style={{ animationDelay: '1000ms' }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
