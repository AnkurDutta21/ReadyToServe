import { useEffect } from "react";
import PageSection from "@/components/ui/page-section";

export function AboutSection() {
  return (
    <PageSection id="about" bgColor="white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold heading-font text-[#3D405B] mb-6">Our Culinary Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded in 2010, Round D Clock has been serving exceptional cuisine crafted with locally-sourced ingredients and passion for culinary artistry. Our team of talented chefs combines traditional techniques with innovative approaches to create unforgettable dining experiences.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We believe in sustainable practices and supporting local farmers, ensuring that every ingredient that enters our kitchen meets the highest standards of quality and freshness.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#E07A5F]">12</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#E07A5F]">4</h3>
              <p className="text-gray-600">Award-Winning Chefs</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#E07A5F]">120+</h3>
              <p className="text-gray-600">Unique Dishes</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 section-fade">
          <img 
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
            alt="Chef preparing gourmet dish" 
            className="rounded-lg shadow-lg h-64 w-full object-cover" 
          />
          <img 
            src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
            alt="Restaurant interior with elegant design" 
            className="rounded-lg shadow-lg h-64 w-full object-cover mt-8" 
          />
          <img 
            src="https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
            alt="Elegant plated dish" 
            className="rounded-lg shadow-lg h-64 w-full object-cover -mt-8" 
          />
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
            alt="Restaurant exterior with outdoor seating" 
            className="rounded-lg shadow-lg h-64 w-full object-cover" 
          />
        </div>
      </div>
    </PageSection>
  );
}

export default AboutSection;
