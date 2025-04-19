import { useEffect, useState } from 'react';
import logoPath from "../../assets/rdc.png";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]">
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="animate-bounce-subtle">
            <img 
              src={logoPath} 
              alt="Round The Clock Logo" 
              className="h-28 w-auto object-contain"
            />
          </div>
        </div>

        {/* Spinning Plates */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-40 h-40 rounded-full border-4 border-[#F4E5AC]/30 animate-spin-slow" />
          <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-[#D32B2B]/20 animate-spin-reverse" />
        </div>
        
        {/* Loading Text */}
        <div className="text-[#D32B2B] font-bold text-3xl heading-font mb-2 drop-shadow-lg">
          Round The Clock
        </div>
        <div className="text-[#F4E5AC] text-sm tracking-[0.2em] font-medium animate-pulse-slow">
          CULINARY CUISINE
        </div>

        {/* Loading Indicator */}
        <div className="mt-8 flex space-x-3">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2.5 h-2.5 bg-[#D32B2B] rounded-full animate-bounce-subtle"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>

        {/* Decorative Elements - Repositioned */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          {/* Top Row */}
          <i className="fas fa-utensils text-6xl text-[#D32B2B]/30 animate-float absolute -top-12 -left-12" 
             style={{ animationDelay: '0ms' }}
          />
          <i className="fas fa-pepper-hot text-5xl text-[#F4E5AC]/30 animate-float absolute -top-8 -right-8" 
             style={{ animationDelay: '300ms' }}
          />
          
          {/* Middle Row */}
          <i className="fas fa-leaf text-5xl text-[#D32B2B]/25 animate-float absolute -left-16 top-1/2" 
             style={{ animationDelay: '150ms' }}
          />
          <i className="fas fa-coffee text-5xl text-[#F4E5AC]/25 animate-float absolute -right-16 top-1/2" 
             style={{ animationDelay: '450ms' }}
          />
          
          {/* Bottom Row */}
          <i className="fas fa-fish text-6xl text-[#D32B2B]/30 animate-float absolute -bottom-12 -left-12" 
             style={{ animationDelay: '600ms' }}
          />
          <i className="fas fa-carrot text-5xl text-[#F4E5AC]/30 animate-float absolute -bottom-8 -right-8" 
             style={{ animationDelay: '750ms' }}
          />

          {/* Corner Accents */}
          <div className="absolute -top-20 -left-20 w-32 h-32 bg-[#D32B2B]/10 rounded-full blur-xl animate-pulse-slow" />
          <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-[#F4E5AC]/10 rounded-full blur-xl animate-pulse-slow" 
               style={{ animationDelay: '1000ms' }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
