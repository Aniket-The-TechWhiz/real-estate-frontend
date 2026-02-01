# Backend API Integration Guide

## Overview
This document explains how the frontend is integrated with the backend property API.

## Backend API Endpoints

The backend provides the following endpoints:

### Properties
- **GET** `/api/properties` - Get all properties with filters
- **GET** `/api/properties/:id` - Get single property by ID
- **GET** `/api/properties/search?query=...` - Search properties
- **POST** `/api/properties` - Create new property (admin)
- **PUT** `/api/properties/:id` - Update property (admin)
- **DELETE** `/api/properties/:id` - Delete property (admin)

### Query Parameters for GET /api/properties
- `category` - Filter by property category (Apartment, House, Villa, etc.)
- `listingType` - Filter by Rent or Sale
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `bedrooms` - Filter by number of bedrooms
- `bathrooms` - Filter by number of bathrooms
- `furnishing` - Filter by furnishing status
- `status` - Filter by property status (Available, Rented, Sold)
- `page` - Page number for pagination (default: 1)
- `limit` - Items per page (default: 10)

## Frontend Integration

### 1. API Configuration
Location: `src/config/api.ts`

Configure your backend URL:
```typescript
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
```

Set the environment variable in `.env`:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

### 2. Property Service
Location: `src/services/propertyService.ts`

The `propertyService` handles all API calls:
- `getProperties(filters?)` - Fetch properties with optional filters
- `getPropertyById(id)` - Fetch single property
- `searchProperties(query)` - Search properties by text
- `createProperty(formData)` - Create new property
- `updateProperty(id, formData)` - Update property
- `deleteProperty(id)` - Delete property

### 3. Property Type
Location: `src/types/index.ts`

The Property interface matches the backend schema:
```typescript
interface Property {
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
  amenities: string[];
  furnishing: string;
  location: string;
  status: 'Available' | 'Rented' | 'Sold';
  createdAt: string;
  updatedAt: string;
}
```

### 4. Components

#### PropertyList
- Fetches properties from the API based on filters
- Handles pagination server-side
- Displays loading and error states
- Searches properties using the search endpoint

#### PropertyCard
- Displays individual property information
- Handles image URLs (both relative and absolute paths)
- Shows property status and furnishing badges

#### PropertyDetail
- Loads full property details by ID
- Displays all property information and amenities
- Shows property image gallery

#### App.tsx
- Manages application state
- Loads property details when selected
- Handles navigation between rental and sale properties

## Image Handling

Images can be either:
1. Full URLs (starting with `http://` or `https://`)
2. Relative paths from the backend (e.g., `uploads/property-123.jpg`)

The frontend automatically prepends the backend URL for relative paths:
```typescript
const getImageUrl = (imagePath: string) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${API_BASE_URL.replace('/api', '')}/${imagePath}`;
};
```

## Running the Application

### 1. Start the Backend
```bash
cd backend
npm install
npm start
```
Backend will run on `http://localhost:5000`

### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on `http://localhost:5173`

### 3. Configure Environment
Make sure your `.env` file has the correct backend URL:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

## Features Implemented

✅ Property listing with pagination
✅ Property filtering (category, price, bedrooms, bathrooms, furnishing)
✅ Property search
✅ Property detail view
✅ Loading states
✅ Error handling
✅ Image handling (relative and absolute URLs)
✅ Responsive design
✅ Real-time API integration

## Next Steps (Optional)

### For Admin Features:
1. Create admin authentication
2. Add property create/edit forms
3. Add image upload functionality
4. Add property delete confirmation

### For Enhanced User Experience:
1. Add favorites/wishlist
2. Add property comparison
3. Add virtual tours
4. Add contact property owner feature
5. Add property analytics

## API Response Examples

### Get Properties
```json
{
  "success": true,
  "count": 6,
  "total": 50,
  "page": 1,
  "pages": 9,
  "data": [...]
}
```

### Get Single Property
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Luxury Penthouse",
    "price": 5500,
    ...
  }
}
```

### Search Properties
```json
{
  "success": true,
  "count": 3,
  "data": [...]
}
```

## Troubleshooting

### CORS Issues
If you encounter CORS errors, make sure your backend has CORS configured:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Connection Refused
- Verify backend is running on port 5000
- Check `.env` file has correct API URL
- Check MongoDB connection is successful

### Images Not Loading
- Verify backend serves static files from `/uploads`
- Check image paths in database
- Verify `getImageUrl` function in components
