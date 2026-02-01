import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { RangeSlider } from './RangeSlider';

export interface PropertyFilters {
  propertyType: string;
  furnishingStatus: string;
  minBudget: string;
  maxBudget: string;
}

interface PropertyFiltersProps {
  filters: PropertyFilters;
  onFilterChange: (filters: PropertyFilters) => void;
  isRental: boolean;
}

export function PropertyFiltersComponent({ filters, onFilterChange, isRental }: PropertyFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [budgetRange, setBudgetRange] = useState<{ min: number; max: number }>({
    min: isRental ? 0 : 0,
    max: isRental ? 6000 : 5000000
  });

  const propertyTypes = [
    'All Types',
    'Apartment',
    'House',
    'Studio',
    'Condominium',
    'Penthouse',
    'Townhouse',
    'Villa',
    '1 BHK',
    '2 BHK',
    '3 BHK',
    '4 BHK',
    '5 BHK'
  ];

  const furnishingStatuses = [
    'All Statuses',
    'Furnished',
    'Semi-Furnished',
    'Unfurnished'
  ];

  // Budget range configuration
  const budgetConfig = isRental 
    ? { min: 0, max: 10000, step: 100 }
    : { min: 0, max: 5000000, step: 50000 };

  const formatBudget = (value: number) => {
    if (isRental) {
      return `$${(value / 1000).toFixed(1)}k`;
    } else {
      if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M`;
      }
      return `$${(value / 1000).toFixed(0)}k`;
    }
  };

  const handleBudgetChange = (min: number, max: number) => {
    setBudgetRange({ min, max });
    onFilterChange({
      ...filters,
      minBudget: min.toString(),
      maxBudget: max.toString()
    });
  };

  const handleReset = () => {
    setBudgetRange({
      min: budgetConfig.min,
      max: budgetConfig.max
    });
    onFilterChange({
      propertyType: 'All Types',
      furnishingStatus: 'All Statuses',
      minBudget: '',
      maxBudget: ''
    });
  };

  const hasActiveFilters = 
    filters.propertyType !== 'All Types' ||
    filters.furnishingStatus !== 'All Statuses' ||
    filters.minBudget !== '' ||
    filters.maxBudget !== '';

  return (
    <div className="bg-white rounded-lg shadow-md mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-blue-600" />
          <span className="text-lg">Filter Properties</span>
          {hasActiveFilters && (
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Property Type Filter */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Property Type
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => onFilterChange({ ...filters, propertyType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Furnishing Status Filter */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Furnishing Status
              </label>
              <select
                value={filters.furnishingStatus}
                onChange={(e) => onFilterChange({ ...filters, furnishingStatus: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {furnishingStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range Slider */}
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                Budget Range: {formatBudget(budgetRange.min)} - {formatBudget(budgetRange.max)}
              </label>
              <div className="max-w-md">
                <RangeSlider
                  min={budgetConfig.min}
                  max={budgetConfig.max}
                  minValue={budgetRange.min}
                  maxValue={budgetRange.max}
                  step={budgetConfig.step}
                  onChange={handleBudgetChange}
                  formatLabel={formatBudget}
                />
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}