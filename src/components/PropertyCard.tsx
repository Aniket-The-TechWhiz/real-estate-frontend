import { MapPin, Bed, Bath, Maximize, Home, Trash2, Pencil } from 'lucide-react';
import { Property, formatPrice, formatArea } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
  showAdminActions?: boolean;
  onDelete?: () => void;
  onUpdate?: () => void;
}

export function PropertyCard({ property, onClick, showAdminActions = false, onDelete, onUpdate }: PropertyCardProps) {
  const isHot = property.isHot === true;
  const legacyImage = Array.isArray(property.images) ? property.images[0] : '';
  const legacyImageUrl = typeof legacyImage === 'string' ? legacyImage : '';
  const firstImage = property.thumbnailUrl || property.imageUrls?.[0] || legacyImageUrl || '';

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
        {firstImage ? (
          <ImageWithFallback
            src={firstImage}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            Image unavailable
          </div>
        )}
        
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {isHot && (
            <div className="px-3 py-1 bg-red-600 text-white rounded-full text-xs shadow-lg font-semibold">
              Hot Deal
            </div>
          )}
          {property.furnishing && (
            <div className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs shadow-lg">
              {property.furnishing}
            </div>
          )}
        </div>

        {showAdminActions ? (
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            <button
              onClick={(event) => {
                event.stopPropagation();
                onDelete?.();
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs shadow-lg"
              style={{ backgroundColor: '#dc2626', color: '#ffffff' }}
            >
              <Trash2 className="w-3.5 h-3.5 text-white" />
              Delete
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                onUpdate?.();
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs shadow-lg hover:bg-blue-700"
            >
              <Pencil className="w-3.5 h-3.5" />
              Update
            </button>

            {property.status !== 'Available' && (
              <div className="px-3 py-1 bg-red-600 text-white rounded-full text-xs shadow-lg">
                {property.status}
              </div>
            )}
          </div>
        ) : (
          property.status !== 'Available' && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white rounded-full text-xs shadow-lg">
              {property.status}
            </div>
          )
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