import { X, Bed, Bath, Maximize, MapPin, Home, Check } from 'lucide-react';
import { Property } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyComparisonProps {
  properties: Property[];
  onRemove: (index: number) => void;
  onClose: () => void;
}

export function PropertyComparison({ properties, onRemove, onClose }: PropertyComparisonProps) {
  if (properties.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 flex justify-between items-center">
            <h2 className="text-2xl">Compare Properties</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close comparison"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Comparison Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className={`grid ${properties.length === 1 ? 'grid-cols-1' : properties.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-6 p-6`}>
                {properties.map((property, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden relative"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => onRemove(index)}
                      className="absolute top-4 right-4 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                      aria-label={`Remove ${property.title} from comparison`}
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Property Image */}
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Property Details */}
                    <div className="p-4 space-y-4">
                      <div>
                        <h3 className="text-xl mb-2">{property.title}</h3>
                        <p className="text-2xl text-blue-600">{property.price}</p>
                      </div>

                      {/* Specs */}
                      <div className="space-y-3 border-t pt-4">
                        <ComparisonRow
                          icon={<MapPin className="w-4 h-4" />}
                          label="Location"
                          value={property.location}
                        />
                        <ComparisonRow
                          icon={<Home className="w-4 h-4" />}
                          label="Type"
                          value={property.type}
                        />
                        <ComparisonRow
                          icon={<Bed className="w-4 h-4" />}
                          label="Bedrooms"
                          value={`${property.bedrooms}`}
                        />
                        <ComparisonRow
                          icon={<Bath className="w-4 h-4" />}
                          label="Bathrooms"
                          value={`${property.bathrooms}`}
                        />
                        <ComparisonRow
                          icon={<Maximize className="w-4 h-4" />}
                          label="Area"
                          value={property.area}
                        />
                      </div>

                      {/* Amenities */}
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-600 mb-2">Amenities</p>
                        <div className="space-y-1">
                          {property.amenities.slice(0, 4).map((amenity, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-500" />
                              <span>{amenity}</span>
                            </div>
                          ))}
                          {property.amenities.length > 4 && (
                            <p className="text-xs text-gray-500 mt-2">
                              +{property.amenities.length - 4} more amenities
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ComparisonRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 text-gray-600">
        {icon}
        <span>{label}</span>
      </div>
      <span>{value}</span>
    </div>
  );
}
