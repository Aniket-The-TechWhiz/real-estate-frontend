export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  status: 'Planning' | 'Foundation' | 'Construction' | 'Finishing';
  completion: string;
  progress: number;
  description: string;
  details: string;
  image: string;
  investment: string;
  units: string;
  features: string[];
}

export interface Property {
  _id: string;
  title: string;
  thumbnailUrl?: string;
  imageUrls?: string[];
  images?: Array<
    | string
    | {
        data?: { type?: string; data?: number[] } | Buffer;
        contentType?: string;
        filename?: string;
      }
  >;
  category: string;
  listingType: 'Rent' | 'Sale';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  amenities: string[] | string;
  furnishing: string;
  location: string;
  status: 'Available' | 'Rented' | 'Sold';
  featureType?: string;
  isHot?: boolean;
  createdAt: string;
  updatedAt: string;
}

// Helper function to format price based on listing type
export function formatPrice(price: number, listingType: 'Rent' | 'Sale'): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
  
  return listingType === 'Rent' ? `${formatted}/month` : formatted;
}

// Helper function to format area
export function formatArea(area: number): string {
  return `${area.toLocaleString()} sq ft`;
}