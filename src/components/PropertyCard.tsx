import { MapPin, Bed, Bath, Maximize, Home } from 'lucide-react';
import { Property, formatPrice, formatArea } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { API_BASE_URL } from '../config/api';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

type ImageLike = string | { data?: { type?: string; data?: number[] } | Buffer; contentType?: string };

const toBase64 = (bytes: number[]) => {
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.slice(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
};

const toDataUri = (image: ImageLike): string => {
  if (typeof image === 'string') return image;
  if (!image || !image.data || !image.contentType) {
    console.error('Image normalization failed: missing data/contentType', image);
    return '';
  }
  const data = (image.data as any).data || image.data;
  if (!Array.isArray(data)) {
    console.error('Image normalization failed: data is not array', image);
    return '';
  }
  try {
    const base64 = toBase64(data);
    return `data:${image.contentType};base64,${base64}`;
  } catch (error) {
    console.error('Image normalization failed: base64 conversion error', error, image);
    return '';
  }
};

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  // Get the first image URL and prepend base URL if it's a relative path
  const getImageUrl = (imagePath: ImageLike) => {
    if (!imagePath) return '';
    const normalized = toDataUri(imagePath);
    if (!normalized) {
      console.error('Image URL generation failed: normalized empty', imagePath);
      return '';
    }
    if (normalized.startsWith('data:')) {
      return normalized;
    }
    if (normalized.startsWith('http')) {
      return normalized;
    }
    // Images are served at /uploads, not /api
    const baseUrl = API_BASE_URL.replace('/api', '');
    return `${baseUrl}/${normalized}`;
  };

  const isFurnished = property.furnishing === 'Furnished' || property.furnishing === 'Fully Furnished';
  const firstImage = Array.isArray(property.images) ? (property.images[0] as ImageLike) : '';
  if (!firstImage) {
    console.error('PropertyCard: missing first image', { propertyId: property._id, images: property.images });
  }

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
          src={getImageUrl(firstImage)}
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