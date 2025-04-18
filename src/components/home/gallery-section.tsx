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
    title: "Perfectly Seared Ribeye",
    description: "Prime cut ribeye with roasted seasonal vegetables and red wine reduction.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 2,
    title: "Seafood Linguine",
    description: "Handmade pasta with fresh prawns, mussels, and clams in a light white wine sauce.",
    image: "https://images.unsplash.com/photo-1559948271-7d5c98d2e951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Deconstructed Tiramisu",
    description: "Our signature take on the classic Italian dessert with espresso gel and mascarpone cream.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
  },
  {
    id: 4,
    title: "Fresh Oyster Selection",
    description: "Fresh daily selection of premium oysters served with mignonette and lemon.",
    image: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
  },
  {
    id: 5,
    title: "Beet Risotto",
    description: "Vibrant beetroot risotto with goat cheese, toasted pine nuts, and microgreens.",
    image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Smoked Old Fashioned",
    description: "Our signature cocktail with bourbon, smoked maple syrup, and aromatic bitters.",
    image: "https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  }
];

export function GallerySection() {
  return (
    <PageSection id="gallery" bgColor="white">
      <div className="text-center mb-16 section-fade">
        <h2 className="text-3xl md:text-4xl font-bold heading-font text-[#3D405B] mb-3">Food Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">A visual feast of our most acclaimed creations, capturing the artistry and passion behind each dish.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map(item => (
          <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg group section-fade">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-semibold heading-font mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export default GallerySection;
