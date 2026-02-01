import { MapPin, Bed, Bath, Maximize, Home } from 'lucide-react';
import { Property, formatPrice, formatArea } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { API_BASE_URL } from '../config/api';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  // Get the first image URL and prepend base URL if it's a relative path
  const getImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `${API_BASE_URL.replace('/api', '')}/${imagePath}`;
  };

  const isFurnished = property.furnishing === 'Furnished' || property.furnishing === 'Fully Furnished';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
    >
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={getImageUrl(property.images[0])}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {isFurnished && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-xs shadow-lg">
            {property.furnishing}
          </div>
        )}

        {property.status !== 'Available' && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white rounded-full text-xs shadow-lg">
            {property.status}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="mb-2">
          <span className="text-2xl text-blue-600">
            {formatPrice(property.price, property.listingType)}
          </span>
        </div>
        
        <h3 className="text-xl mb-2">{property.title}</h3>
        
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{formatArea(property.area)}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Home className="w-4 h-4" />
            <span>{property.category}</span>
          </div>
          <button className="text-blue-600 text-sm hover:text-blue-800">
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
}