import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  
  useEffect(() => {
    // Check if the map is already initialized
    if (mapInstanceRef.current) return;
    
    // Initialize map if container is available
    if (mapRef.current) {
      // Create map instance
      const map = L.map(mapRef.current).setView([26.1892258, 91.757412], 15);
      
      // Add tile layer (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Add marker for restaurant location
      const marker = L.marker([26.1892258, 91.757412]).addTo(map); // Guwahati coordinates
      marker.bindPopup("<b>Round D Clock</b><br>Cenikuthi<br>Guwahati, Assam 781001").openPopup();
      
      // Store map instance in ref
      mapInstanceRef.current = map;
      
      // Clean up on unmount
      return () => {
        map.remove();
        mapInstanceRef.current = null;
      };
    }
  }, []);
  
  return (
    <section className="h-96 bg-[#F4F1DE] section-fade">
      <div 
        ref={mapRef}
        className="h-full w-full"
        aria-label="Restaurant location map"
      ></div>
    </section>
  );
}

export default MapSection;
