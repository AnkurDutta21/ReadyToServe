import logoPath from "../../assets/rdc.png";
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div 
      className={`fixed top-0 left-0 h-full w-full bg-[#D32B2B]/95 backdrop-blur-sm z-50 shadow-xl flex flex-col transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
       <div className="flex justify-between items-center pt-4 px-5">
        <div className="flex items-center">   
       <img 
            src={logoPath} 
            alt="Round The Clock Logo" 
            className="h-12 md:h-16 w-auto object-contain" 
          />
          <div className="md:block border-l-2 border-[#F4E5AC]/30 pl-4">
            <h1 className="text-[#F4E5AC] font-bold text-2xl heading-font leading-tight drop-shadow-sm">Round The Clock</h1>
            <p className="text-[#F4E5AC]/80 text-sm font-medium tracking-wide">CULINARY CUISINE</p>
          </div>
        </div>
        <button 
          className="text-[#F4E5AC] focus:outline-none" 
          onClick={onClose}
          aria-label="Close menu"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
      </div>
      <nav className="flex flex-col space-y-4 w-full p-5 bg-[#D32B2B]/95 backdrop-blur-sm">
        <a 
          href="#home" 
          className="text-[#F4E5AC] hover:text-white font-medium py-2 border-b border-[#F4E5AC]/20"
          onClick={onClose}
        >
          Home
        </a>
        <a 
          href="#about" 
          className="text-[#F4E5AC] hover:text-white font-medium py-2 border-b border-[#F4E5AC]/20"
          onClick={onClose}
        >
          About
        </a>
        <a 
          href="#menu" 
          className="text-[#F4E5AC] hover:text-white font-medium py-2 border-b border-[#F4E5AC]/20"
          onClick={onClose}
        >
          Menu
        </a>
        <a 
          href="#gallery" 
          className="text-[#F4E5AC] hover:text-white font-medium py-2 border-b border-[#F4E5AC]/20"
          onClick={onClose}
        >
          Gallery
        </a>
        <a 
          href="#contact" 
          className="text-[#F4E5AC] hover:text-white font-medium py-2 border-b border-[#F4E5AC]/20"
          onClick={onClose}
        >
          Contact
        </a>
        <a 
          href="#reserve" 
          className="bg-[#F4E5AC] text-[#D32B2B] px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300 text-center mt-4"
          onClick={onClose}
        >
          Reserve
        </a>
      </nav>
    </div>
  );
}

export default MobileMenu;
