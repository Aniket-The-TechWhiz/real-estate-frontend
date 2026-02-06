import { API_ENDPOINTS } from '../config/api';

export interface PropertyFilters {
  category?: string;
  listingType?: 'Rent' | 'Sale';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  furnishing?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export interface PropertyResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: Property[];
}

export interface SinglePropertyResponse {
  success: boolean;
  data: Property;
}

export interface SearchResponse {
  success: boolean;
  count: number;
  data: Property[];
}

export interface MutationResponse {
  success: boolean;
  message?: string;
  data?: Property;
}

export interface Property {
  _id: string;
  title: string;
  images: string[];
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

class PropertyService {
  /**
   * Get all properties with optional filters
   */
  async getProperties(filters?: PropertyFilters): Promise<PropertyResponse> {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            queryParams.append(key, String(value));
          }
        });
      }

      const url = `${API_ENDPOINTS.PROPERTIES}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  }

  /**
   * Get a single property by ID
   */
  async getPropertyById(id: string): Promise<SinglePropertyResponse> {
    try {
      const response = await fetch(`${API_ENDPOINTS.PROPERTIES}/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching property:', error);
      throw error;
    }
  }

  /**
   * Search properties by query string
   */
  async searchProperties(query: string): Promise<SearchResponse> {
    try {
      const response = await fetch(
        `${API_ENDPOINTS.PROPERTIES_SEARCH}?query=${encodeURIComponent(query)}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error searching properties:', error);
      throw error;
    }
  }

  /**
   * Create a new property
   */
  async createProperty(payload: FormData): Promise<MutationResponse> {
    try {
      const response = await fetch(API_ENDPOINTS.PROPERTIES, {
        method: 'POST',
        body: payload
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating property:', error);
      throw error;
    }
  }

  /**
   * Update an existing property
   */
  async updateProperty(id: string, payload: FormData): Promise<MutationResponse> {
    try {
      const response = await fetch(`${API_ENDPOINTS.PROPERTIES}/${id}`, {
        method: 'PUT',
        body: payload
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating property:', error);
      throw error;
    }
  }

  /**
   * Delete a property
   */
  async deleteProperty(id: string): Promise<MutationResponse> {
    try {
      const response = await fetch(`${API_ENDPOINTS.PROPERTIES}/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data?.success) {
        throw new Error(data?.message || 'Failed to delete property');
      }
      return data;
    } catch (error) {
      console.error('Error deleting property:', error);
      throw error;
    }
  }
}

export const propertyService = new PropertyService();
