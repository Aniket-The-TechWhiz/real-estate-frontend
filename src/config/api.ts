/// <reference types="vite/client" />

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://real-estate-backend-og31.onrender.com/api';

export const API_ENDPOINTS = {
  PROPERTIES: `${API_BASE_URL}/properties`,
  PROPERTIES_SEARCH: `${API_BASE_URL}/properties/search`,
  LEADS: `${API_BASE_URL}/leads`,
} as const;
