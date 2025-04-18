import PageSection from "@/components/ui/page-section";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Assamese Thali",
    description: "A traditional Assamese feast featuring Masor Tenga, Duck Curry, and authentic side dishes.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Butter Chicken Special",
    description: "Our signature butter chicken served with garlic naan and jeera rice.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Hanhor Mangxo",
    description: "Traditional Assamese duck curry with bamboo shoots, served with steamed rice.",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Biryani Royale",
    description: "Fragrant long-grain basmati rice cooked with tender meat and signature spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Assamese Pithas",
    description: "Assortment of traditional rice cakes with diverse fillings, perfect with evening tea.",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Masala Chai & Snacks",
    description: "House special masala chai served with traditional Indian and Assamese snacks.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80"
  }
];

export function GallerySection() {
  return (
    <PageSection id="gallery" bgColor="white">
      <div className="text-center mb-16 section-fade">
        <h2 className="text-3xl md:text-4xl font-bold heading-font text-[#3D405B] mb-3">Culinary Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover our authentic Indian and Assamese delicacies, where tradition meets modern presentation.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map(item => (
          <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg group section-fade">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-semibold heading-font mb-2">{item.title}</h3>
              <p className="text-white/90">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export default GallerySection;
