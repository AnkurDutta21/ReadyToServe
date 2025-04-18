import logoPath from "../../assets/Round the Clock Logo_100425.png";

export function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6 flex items-center">
              <img 
                src={logoPath} 
                alt="Round D Clock Logo" 
                className="h-16 w-auto object-contain logo-footer"
              />
              <div className="md:block border-l-2 border-[#fff]/20 pl-4">
            <h1 className="text-[#fff] font-bold text-2xl heading-font leading-tight">Round The Clock</h1>
            <p className="text-[#fff]/70 text-sm font-medium tracking-wide">FOOD & BREVARAGES</p>
          </div>
            </div>
            <p className="text-gray-400 mb-6">
              Experience culinary excellence in a warm, inviting atmosphere. Our passion for exceptional food and service makes every visit memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reserve" className="text-gray-400 hover:text-white transition-colors">Reservations</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5:00 PM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Weekend Brunch</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on special events, new menu items, and exclusive offers.</p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white w-full focus:outline-none focus:border-[#E07A5F]"
                />
                <button 
                  type="submit" 
                  className="bg-[#E07A5F] text-white px-4 py-2 rounded-r-lg hover:bg-[#E07A5F]/90 transition-colors"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">By subscribing, you agree to our Privacy Policy and to receive marketing communications from us.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Round D Clock Restaurant. All rights reserved.</p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
