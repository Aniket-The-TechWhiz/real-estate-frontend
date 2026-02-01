import { useState, useEffect } from 'react';
import { PropertyCard } from './PropertyCard';
import { Property } from '../types';
import { ChevronLeft, ChevronRight, Search, Loader2 } from 'lucide-react';
import { PropertyFiltersComponent, PropertyFilters } from './PropertyFilters';
import { motion } from 'motion/react';
import { propertyService } from '../services/propertyService';

interface PropertyListProps {
  listingType: 'Rent' | 'Sale';
  onSelectProperty: (propertyId: string) => void;
  title: string;
  description: string;
}

export function PropertyList({ 
  listingType,
  onSelectProperty, 
  title, 
  description
}: PropertyListProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<PropertyFilters>({
    propertyType: 'All Types',
    furnishingStatus: 'All Statuses',
    minBudget: '',
    maxBudget: ''
  });
  const propertiesPerPage = 6;

  // Fetch properties from API
  useEffect(() => {
    fetchProperties();
  }, [currentPage, listingType, searchQuery, filters]);

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (searchQuery) {
        // Use search endpoint if there's a query
        const response = await propertyService.searchProperties(searchQuery);
        
        // Filter by listing type
        const filtered = response.data.filter(p => p.listingType === listingType);
        
        setProperties(filtered);
        setTotalProperties(filtered.length);
        setTotalPages(Math.ceil(filtered.length / propertiesPerPage));
      } else {
        // Build filter object for API
        const apiFilters: any = {
          listingType,
          page: currentPage,
          limit: propertiesPerPage,
        };

        // Add property type filter
        if (filters.propertyType !== 'All Types') {
          if (filters.propertyType.includes('BHK')) {
            const bedrooms = parseInt(filters.propertyType);
            if (!isNaN(bedrooms)) {
              apiFilters.bedrooms = bedrooms;
            }
          } else {
            apiFilters.category = filters.propertyType;
          }
        }

        // Add furnishing status filter
        if (filters.furnishingStatus !== 'All Statuses') {
          apiFilters.furnishing = filters.furnishingStatus;
        }

        // Add budget filters
        if (filters.minBudget) {
          apiFilters.minPrice = parseInt(filters.minBudget);
        }
        if (filters.maxBudget) {
          apiFilters.maxPrice = parseInt(filters.maxBudget);
        }

        const response = await propertyService.getProperties(apiFilters);
        
        setProperties(response.data);
        setTotalProperties(response.total);
        setTotalPages(response.pages);
      }
    } catch (err) {
      setError('Failed to load properties. Please try again later.');
      console.error('Error fetching properties:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleFilterChange = (newFilters: PropertyFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties by name, location, or type..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page when search changes
            }}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
      </div>
      
      <PropertyFiltersComponent 
        filters={filters} 
        onFilterChange={handleFilterChange}
        isRental={listingType === 'Rent'}
      />
      
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-16">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button
            onClick={fetchProperties}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* No Results */}
      {!loading && !error && properties.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No properties found matching your filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              handleFilterChange({
                propertyType: 'All Types',
                furnishingStatus: 'All Statuses',
                minBudget: '',
                maxBudget: ''
              });
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Property Grid */}
      {!loading && !error && properties.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property._id}
                property={property}
                onClick={() => onSelectProperty(property._id)}
              />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg border transition-colors ${
                  currentPage === 1
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {getPageNumbers().map((page, index) => (
                typeof page === 'number' ? (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={`min-w-[40px] px-3 py-2 rounded-lg border transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={index} className="px-2 text-gray-400">
                    {page}
                  </span>
                )
              ))}
              
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg border transition-colors ${
                  currentPage === totalPages
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}