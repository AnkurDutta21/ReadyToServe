import { useState } from "react";
import PageSection from "@/components/ui/page-section";
import { FaLeaf, FaFireAlt, FaAward, FaPepperHot } from "react-icons/fa";

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
  isSpicy?: boolean;
}

const menuItems: MenuItem[] = [
  // Indian Cuisine
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato-butter gravy with aromatic spices, served with naan bread.",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80",
    category: "indian",
    isPopular: true,
    isChefSpecial: true
  },
  {
    id: 2,
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese in spiced creamy tomato gravy, a vegetarian delight.",
    price: "₹380",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80",
    category: "indian",
    isVegetarian: true,
    isPopular: true
  },

  // Assamese Cuisine
  {
    id: 3,
    name: "Masor Tenga",
    description: "Traditional Assamese sour fish curry with tomatoes and elephant apple.",
    price: "₹420",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80",
    category: "assamese",
    isChefSpecial: true
  },
  {
    id: 4,
    name: "Hanhor Mangxo",
    description: "Traditional Assamese-style duck curry cooked with bamboo shoots, taro, and indigenous herbs.",
    price: "₹580",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80",
    category: "assamese",
    isChefSpecial: true,
    isSpicy: true
  },

  // Fast Food
  {
    id: 5,
    name: "Gourmet Burger",
    description: "Premium beef patty with caramelized onions, bacon, and special sauce.",
    price: "₹320",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    category: "Quick Bites",
    isPopular: true
  },
  {
    id: 6,
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese sauce, bacon bits, and green onions.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80",
    category: "Quick Bites",
    isPopular: true
  },

  // More Indian Items
  {
    id: 7,
    name: "Biryani",
    description: "Fragrant basmati rice cooked with tender meat and aromatic spices.",
    price: "₹480",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    category: "indian",
    isChefSpecial: true,
    isPopular: true
  },

  // More Assamese Items
  {
    id: 8,
    name: "Pitha Platter",
    description: "Assortment of traditional Assamese rice cakes with different fillings.",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80",
    category: "assamese",
    isVegetarian: true
  }
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  return (
    <PageSection id="menu" bgColor="dark">
      <div className="text-center mb-16 section-fade">
        <h2 className="text-3xl md:text-4xl font-bold heading-font text-[#F4E5AC] mb-3">Our Diverse Menu</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Experience a fusion of flavors from traditional Assamese cuisine to Indian delicacies and international fast food favorites.</p>
      </div>
      
      {/* Menu Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 section-fade">
        <button 
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === "all" 
              ? "bg-[#D32B2B] text-[#F4E5AC] shadow-lg" 
              : "bg-[#2A2A2A] text-[#F4E5AC] hover:bg-[#D32B2B] hover:shadow-md"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All Cuisines
        </button>
        <button 
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === "indian" 
              ? "bg-[#D32B2B] text-[#F4E5AC] shadow-lg" 
              : "bg-[#2A2A2A] text-[#F4E5AC] hover:bg-[#D32B2B] hover:shadow-md"
          }`}
          onClick={() => setActiveCategory("indian")}
        >
          Indian
        </button>
        <button 
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === "assamese" 
              ? "bg-[#D32B2B] text-[#F4E5AC] shadow-lg" 
              : "bg-[#2A2A2A] text-[#F4E5AC] hover:bg-[#D32B2B] hover:shadow-md"
          }`}
          onClick={() => setActiveCategory("assamese")}
        >
          Assamese
        </button>
        <button 
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === "Quick Bites" 
              ? "bg-[#D32B2B] text-[#F4E5AC] shadow-lg" 
              : "bg-[#2A2A2A] text-[#F4E5AC] hover:bg-[#D32B2B] hover:shadow-md"
          }`}
          onClick={() => setActiveCategory("Quick Bites")}
        >
          Quick Bites
        </button>
      </div>
      
      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item bg-[#2A2A2A] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 section-fade">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-60 object-cover" 
              />
              {item.isSpicy && (
                <span className="absolute top-4 right-4 bg-[#D32B2B] text-[#F4E5AC] px-2 py-1 rounded-full text-xs flex items-center">
                  <FaPepperHot className="mr-1" /> Spicy
                </span>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold heading-font text-[#F4E5AC]">{item.name}</h3>
                <span className="text-[#D32B2B] font-bold">{item.price}</span>
              </div>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                {item.isVegetarian && (
                  <span className="flex items-center text-green-400">
                    <FaLeaf className="mr-1" /> Vegetarian
                  </span>
                )}
                {item.isPopular && (
                  <span className="flex items-center text-[#D32B2B]">
                    <FaFireAlt className="mr-1" /> Popular
                  </span>
                )}
                {item.isChefSpecial && (
                  <span className="flex items-center text-[#F4E5AC]">
                    <FaAward className="mr-1" /> Chef's Special
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#reserve" 
          className="inline-block bg-[#D32B2B] text-[#F4E5AC] px-8 py-3 rounded-full font-semibold hover:bg-[#D32B2B]/90 transition-colors duration-300 section-fade"
        >
          Reserve a Table
        </a>
      </div>
    </PageSection>
  );
}

export default MenuSection;
