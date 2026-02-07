import { useState } from 'react';
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Home, Check } from 'lucide-react';
import { Property, formatPrice, formatArea } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageGalleryModal } from './ImageGalleryModal';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

export function PropertyDetail({ property, onBack }: PropertyDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  
  const legacyImages = Array.isArray(property.images)
    ? property.images.filter((img): img is string => typeof img === 'string')
    : [];

  const images = property.imageUrls && property.imageUrls.length > 0
    ? property.imageUrls
    : property.thumbnailUrl
      ? [property.thumbnailUrl]
      : legacyImages;

  const maxThumbnails = 3;
  const remainingImages = images.length - maxThumbnails;
  const displayedThumbnails = images.slice(0, maxThumbnails);
  if (images.length === 0) {
    console.error('PropertyDetail: no images provided', { propertyId: property._id });
  }

  const isFurnished = property.furnishing === 'Furnished' || property.furnishing === 'Fully Furnished';

  // Parse amenities - handle both array and comma-separated string
  const getAmenities = () => {
    if (!property.amenities) {
      return [];
    }
    
    if (Array.isArray(property.amenities)) {
      // If it's an array, check if any element contains commas
      const allAmenities: string[] = [];
      property.amenities.forEach(item => {
        if (item && typeof item === 'string') {
          // Split by comma if the item contains commas
          if (item.includes(',')) {
            const split = item.split(',').map(a => a.trim()).filter(a => a.length > 0);
            allAmenities.push(...split);
          } else if (item.trim().length > 0) {
            allAmenities.push(item.trim());
          }
        }
      });
      return allAmenities;
    }
    
    if (typeof property.amenities === 'string') {
      // If string, split by comma: "Wifi,Parking,Gym" -> ["Wifi", "Parking", "Gym"]
      return property.amenities.split(',').map(a => a.trim()).filter(a => a.length > 0);
    }
    
    return [];
  };

  const amenitiesList = getAmenities();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to {property.listingType === 'Rent' ? 'Rentals' : 'Properties for Sale'}
      </button>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              {images.length > 0 ? (
                <ImageWithFallback
                  src={images[selectedImage]}
                  alt={property.title}
                  className="w-full h-full object-cover cursor-pointer"
                  decoding="async"
                  onClick={() => setShowGalleryModal(true)}
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                  Image unavailable
                </div>
              )}
              {isFurnished && (
                <div className="absolute top-4 right-4 px-3 py-2 bg-blue-600 text-white rounded-full text-sm">
                  {property.furnishing}
                </div>
              )}
              {property.status !== 'Available' && (
                <div className="absolute top-4 left-4 px-3 py-2 bg-red-600 text-white rounded-full text-sm">
                  {property.status}
                </div>
              )}
            </div>
            
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {displayedThumbnails.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (index === maxThumbnails - 1 && remainingImages > 0) {
                        setShowGalleryModal(true);
                      } else {
                        setSelectedImage(index);
                      }
                    }}
                    className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === index ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                      loading="lazy"
                      decoding="async"
                    />
                    {index === maxThumbnails - 1 && remainingImages > 0 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-xl">+{remainingImages}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 text-sm">{property.category}</span>
              <h2 className="text-4xl mb-2">{property.title}</h2>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{property.location}</span>
              </div>
              <div className="text-3xl text-blue-600">
                {formatPrice(property.price, property.listingType)}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Bed className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <div className="text-lg">{property.bedrooms}</div>
                <div className="text-xs text-gray-600">Bedrooms</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Bath className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <div className="text-lg">{property.bathrooms}</div>
                <div className="text-xs text-gray-600">Bathrooms</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Maximize className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <div className="text-lg">{formatArea(property.area)}</div>
                <div className="text-xs text-gray-600">Area</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl mb-3">Amenities & Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {amenitiesList.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {showGalleryModal && images.length > 0 && (
        <ImageGalleryModal
          images={images}
          initialIndex={selectedImage}
          onClose={() => setShowGalleryModal(false)}
          title={property.title}
        />
      )}
    </div>
  );
}