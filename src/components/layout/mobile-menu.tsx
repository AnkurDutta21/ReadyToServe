import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div 
      className={`fixed top-0 left-0 h-full w-64 bg-[#F4F1DE] z-50 shadow-xl p-5 flex flex-col transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold heading-font text-[#E07A5F]">Round D Clock</h1>
        <button 
          className="text-[#3D405B] focus:outline-none" 
          onClick={onClose}
          aria-label="Close menu"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
      </div>
      
      <nav className="flex flex-col space-y-4">
        <a 
          href="#home" 
          className="text-[#3D405B] hover:text-[#E07A5F] font-medium py-2 border-b border-gray-200"
          onClick={onClose}
        >
          Home
        </a>
        <a 
          href="#about" 
          className="text-[#3D405B] hover:text-[#E07A5F] font-medium py-2 border-b border-gray-200"
          onClick={onClose}
        >
          About
        </a>
        <a 
          href="#menu" 
          className="text-[#3D405B] hover:text-[#E07A5F] font-medium py-2 border-b border-gray-200"
          onClick={onClose}
        >
          Menu
        </a>
        <a 
          href="#gallery" 
          className="text-[#3D405B] hover:text-[#E07A5F] font-medium py-2 border-b border-gray-200"
          onClick={onClose}
        >
          Gallery
        </a>
        <a 
          href="#contact" 
          className="text-[#3D405B] hover:text-[#E07A5F] font-medium py-2 border-b border-gray-200"
          onClick={onClose}
        >
          Contact
        </a>
        <a 
          href="#reserve" 
          className="bg-[#E07A5F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#E07A5F]/90 transition-colors duration-300 text-center mt-4"
          onClick={onClose}
        >
          Reserve
        </a>
      </nav>
    </div>
  );
}

export default MobileMenu;
