import PageSection from "@/components/ui/page-section";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The truffle risotto was absolutely divine. The chef perfectly balanced the flavors, and the service was impeccable. One of the best dining experiences I've had in years.",
    name: "Michael Thompson",
    title: "Food Critic",
    rating: 5
  },
  {
    id: 2,
    text: "We celebrated our anniversary here and were blown away by the attention to detail. The chef created a special tasting menu just for us, and the ambiance was perfect for a romantic evening.",
    name: "Sarah & James Wilson",
    title: "Regular Guests",
    rating: 5
  },
  {
    id: 3,
    text: "The seasonal menu never disappoints. I've been coming here for years, and I'm always surprised by the chef's creativity with local ingredients. The herb-crusted salmon is a must-try!",
    name: "Emily Rodriguez",
    title: "Local Foodie",
    rating: 4.5
  }
];

export function TestimonialSection() {
  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    
    // Full stars
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    // Half star if needed
    if (rating % 1 !== 0) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };
  
  return (
    <PageSection>
      <div className="text-center mb-16 section-fade">
        <h2 className="text-3xl md:text-4xl font-bold heading-font text-[#3D405B] mb-3">What Our Guests Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Read about the experiences of our valued guests and why they keep coming back.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md section-fade">
            <div className="flex items-center mb-4">
              <div className="text-[#F2CC8F]">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                <i className="fas fa-user"></i>
              </div>
              <div>
                <h4 className="font-semibold text-[#3D405B]">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export default TestimonialSection;
