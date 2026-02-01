import { API_ENDPOINTS } from '../config/api';

export interface Lead {
  fullName: string;
  contactNumber: string;
  propertyType: string;
  location: string;
  propertyId?: string;
  propertyTitle?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  data?: any;
}

class LeadService {
  /**
   * Submit a new lead to Google Sheets
   */
  async submitLead(leadData: Lead): Promise<LeadResponse> {
    try {
      const response = await fetch(`${API_ENDPOINTS.LEADS}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting lead:', error);
      throw error;
    }
  }
}

export const leadService = new LeadService();
