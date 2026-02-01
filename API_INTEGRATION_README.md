# Backend API Integration - Quick Start

## ✅ Integration Complete!

Your frontend has been successfully integrated with your backend API. All property cards and detail pages now fetch data from your backend server.

## 🚀 Quick Start

### 1. Configure Environment Variables

The `.env` file has been created with default settings:
```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

If your backend runs on a different port or URL, update this value.

### 2. Start Your Backend Server

Make sure your backend is running:
```bash
cd /path/to/your/backend
npm start
```

The backend should be accessible at `http://localhost:5000`

### 3. Start the Frontend

```bash
npm run dev
```

The frontend will automatically connect to your backend API!

## 📁 What Was Changed

### New Files Created

1. **`src/config/api.ts`** - API configuration and endpoints
2. **`src/services/propertyService.ts`** - Property API service layer
3. **`src/services/leadService.ts`** - Lead submission service
4. **`.env`** - Environment configuration
5. **`.env.example`** - Example environment configuration
6. **`INTEGRATION_GUIDE.md`** - Complete integration documentation

### Modified Files

1. **`src/types/index.ts`** - Updated Property interface to match backend schema
2. **`src/components/PropertyCard.tsx`** - Updated to use backend data
3. **`src/components/PropertyDetail.tsx`** - Updated to use backend data
4. **`src/components/PropertyList.tsx`** - Added API integration with pagination, search, and filters
5. **`src/App.tsx`** - Updated to fetch property details from API

## 🎯 Key Features

### ✅ Implemented
- Property listing with server-side pagination
- Property filtering (category, price, bedrooms, bathrooms, furnishing)
- Property search functionality
- Property detail view with API data
- Loading states and spinners
- Error handling with retry functionality
- Image URL handling (both relative and absolute paths)
- Responsive design maintained

### 📋 API Endpoints Being Used

- `GET /api/properties` - Get all properties with filters
- `GET /api/properties/:id` - Get single property details
- `GET /api/properties/search?query=...` - Search properties
- `POST /api/leads` - Submit lead form (ready to use)

## 🔧 How It Works

### Property Listing
The `PropertyList` component now:
1. Fetches properties from your backend API on mount
2. Applies filters and sends them as query parameters
3. Handles pagination server-side
4. Shows loading spinner while fetching
5. Displays error messages if API fails

### Property Details
When a user clicks on a property:
1. Frontend calls `GET /api/properties/:id`
2. Displays loading spinner
3. Shows full property details with all images
4. Handles image URLs (uploads from backend or external URLs)

### Search
When a user searches:
1. Frontend calls `GET /api/properties/search?query=...`
2. Displays matching results
3. Filters by current listing type (Rent/Sale)

## 🖼️ Image Handling

The app automatically handles:
- **External URLs**: `https://example.com/image.jpg` (used as-is)
- **Backend uploads**: `uploads/property-123.jpg` (prepends backend URL)

Example:
```typescript
// If backend returns: "uploads/property.jpg"
// Frontend converts to: "http://localhost:5000/uploads/property.jpg"
```

Make sure your backend serves static files from the `/uploads` directory!

## 🐛 Troubleshooting

### Issue: Properties not loading

**Solution:**
1. Check backend is running: `http://localhost:5000`
2. Verify MongoDB is connected
3. Check browser console for errors
4. Verify `.env` has correct API URL

### Issue: CORS errors

**Solution:**
Your backend needs CORS configured:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Issue: Images not displaying

**Solution:**
1. Verify backend serves `/uploads` directory
2. Check image paths in database
3. Verify backend runs on port specified in `.env`

### Issue: "Network request failed"

**Solution:**
1. Ensure backend is running on correct port
2. Check `.env` file has correct URL
3. Verify no firewall blocking connections

## 📖 API Response Format

Your backend returns data in this format:

**Property List:**
```json
{
  "success": true,
  "count": 6,
  "total": 50,
  "page": 1,
  "pages": 9,
  "data": [
    {
      "_id": "...",
      "title": "Luxury Penthouse",
      "price": 5500,
      "listingType": "Rent",
      ...
    }
  ]
}
```

**Single Property:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Luxury Penthouse",
    ...
  }
}
```

## 🔐 Lead Submission

The lead service is ready to use. To integrate with forms:

```typescript
import { leadService } from './services/leadService';

const handleSubmit = async (formData) => {
  try {
    const response = await leadService.submitLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      propertyType: formData.propertyType,
      location: formData.location,
      message: formData.message
    });
    
    if (response.success) {
      alert('Lead submitted successfully!');
    }
  } catch (error) {
    alert('Failed to submit lead');
  }
};
```

## 📚 Further Reading

- See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) for detailed documentation
- Backend API structure is documented in your backend code
- Property schema is defined in `src/types/index.ts`

## ✨ Next Steps

Consider adding:
1. Property favorites/wishlist
2. User authentication for lead tracking
3. Admin panel for property management
4. Property comparison feature
5. Map view for property locations
6. Contact property owner functionality

## 🎉 You're All Set!

Your frontend is now fully integrated with your backend. Start both servers and test the complete flow!

**Questions?** Check the console for helpful error messages or refer to `INTEGRATION_GUIDE.md` for more details.
