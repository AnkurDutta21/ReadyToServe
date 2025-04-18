import { useState } from "react";
import PageSection from "@/components/ui/page-section";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isVegetarian?: boolean;
  isPopular?: boolean;
  isChefSpecial?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Mediterranean Bruschetta",
    description: "Fresh tomatoes, basil, and mozzarella on toasted artisan bread with balsamic reduction.",
    price: "$14",
    image: "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    category: "starters",
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Herb-Crusted Salmon",
    description: "Pan-seared salmon with a herb crust, served with roasted vegetables and lemon butter sauce.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    category: "mains",
    isChefSpecial: true
  },
  {
    id: 3,
    name: "Truffle Risotto",
    description: "Creamy arborio rice with wild mushrooms, truffle oil, and shaved parmesan cheese.",
    price: "$26",
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    category: "mains",
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream and berries.",
    price: "$12",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "desserts",
    isPopular: true
  },
  {
    id: 5,
    name: "Elderflower Spritz",
    description: "A refreshing blend of elderflower liqueur, prosecco, soda water, and fresh mint.",
    price: "$16",
    image: "https://images.unsplash.com/photo-1527761939622-933c40ac3019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "drinks"
  },
  {
    id: 6,
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower puree, crispy pancetta, and microgreens.",
    price: "$18",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=713&q=80",
    category: "starters",
    isChefSpecial: true
  }
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  return (
    <PageSection id="menu">
      <div className="text-center mb-16 section-fade">
        <h2 className="text-3xl md:text-4xl font-bold heading-font text-[#3D405B] mb-3">Our Exquisite Menu</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover our carefully crafted selection of dishes, each prepared with the finest ingredients and meticulous attention to detail.</p>
      </div>
      
      {/* Menu Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 section-fade">
        <button 
          className={`px-6 py-2 rounded-full border border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-colors duration-300 ${activeCategory === "all" ? "active-category" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        <button 
          className={`px-6 py-2 rounded-full border border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-colors duration-300 ${activeCategory === "starters" ? "active-category" : ""}`}
          onClick={() => setActiveCategory("starters")}
        >
          Starters
        </button>
        <button 
          className={`px-6 py-2 rounded-full border border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-colors duration-300 ${activeCategory === "mains" ? "active-category" : ""}`}
          onClick={() => setActiveCategory("mains")}
        >
          Main Courses
        </button>
        <button 
          className={`px-6 py-2 rounded-full border border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-colors duration-300 ${activeCategory === "desserts" ? "active-category" : ""}`}
          onClick={() => setActiveCategory("desserts")}
        >
          Desserts
        </button>
        <button 
          className={`px-6 py-2 rounded-full border border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-colors duration-300 ${activeCategory === "drinks" ? "active-category" : ""}`}
          onClick={() => setActiveCategory("drinks")}
        >
          Drinks
        </button>
      </div>
      
      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 section-fade">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-60 object-cover" 
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold heading-font text-[#3D405B]">{item.name}</h3>
                <span className="text-[#E07A5F] font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                {item.isVegetarian && (
                  <span className="mr-3"><i className="fas fa-leaf text-[#81B29A]"></i> Vegetarian</span>
                )}
                {item.isPopular && (
                  <span className="mr-3"><i className="fas fa-fire-alt text-[#E07A5F]"></i> Popular</span>
                )}
                {item.isChefSpecial && (
                  <span><i className="fas fa-award text-[#E07A5F]"></i> Chef's Special</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="inline-block bg-[#E07A5F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E07A5F]/90 transition-colors duration-300 section-fade"
        >
          View Full Menu
        </a>
      </div>
    </PageSection>
  );
}

export default MenuSection;
