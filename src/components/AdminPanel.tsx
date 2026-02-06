import { useEffect, useMemo, useState } from 'react';
import { Plus, RefreshCcw, Shield, Save, X } from 'lucide-react';
import { Property } from '../types';
import { propertyService } from '../services/propertyService';
import { PropertyCard } from './PropertyCard';
import { LoadingAnimation } from './LoadingAnimation';

interface AdminPanelProps {
  onExit: () => void;
}

const CATEGORY_OPTIONS = [
  'Apartment',
  'House',
  'Villa',
  'Studio',
  'Penthouse',
  'Condo',
  'Townhouse',
  'Other'
];

const LISTING_OPTIONS: Array<'Rent' | 'Sale'> = ['Rent', 'Sale'];

const FURNISHING_OPTIONS = [
  'Furnished',
  'Semi-Furnished',
  'Unfurnished',
  'Fully Furnished'
];

const STATUS_OPTIONS: Array<'Available' | 'Rented' | 'Sold'> = [
  'Available',
  'Rented',
  'Sold'
];

type AdminPropertyForm = {
  title: string;
  category: string;
  listingType: 'Rent' | 'Sale';
  price: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  description: string;
  amenities: string;
  furnishing: string;
  location: string;
  status: 'Available' | 'Rented' | 'Sold';
};

const emptyForm: AdminPropertyForm = {
  title: '',
  category: 'Apartment',
  listingType: 'Rent',
  price: '',
  bedrooms: '',
  bathrooms: '',
  area: '',
  description: '',
  amenities: '',
  furnishing: 'Unfurnished',
  location: '',
  status: 'Available'
};

export function AdminPanel({ onExit }: AdminPanelProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [formData, setFormData] = useState<AdminPropertyForm>(emptyForm);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [listingFilter, setListingFilter] = useState<'Rent' | 'Sale'>('Rent');

  const isEditing = Boolean(editingProperty);

  const formTitle = useMemo(
    () => (isEditing ? `Update Property` : 'Create New Property'),
    [isEditing]
  );

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await propertyService.getProperties({ page: 1, limit: 100 });
      setProperties(response.data);
    } catch (err) {
      console.error('Error loading admin properties:', err);
      setError('Failed to load properties. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const resetForm = () => {
    setFormData(emptyForm);
    setImageFiles([]);
    setEditingProperty(null);
    setSubmitError(null);
  };

  const handleEditProperty = (property: Property) => {
    setEditingProperty(property);
    setFormData({
      title: property.title,
      category: property.category,
      listingType: property.listingType,
      price: String(property.price),
      bedrooms: String(property.bedrooms),
      bathrooms: String(property.bathrooms),
      area: String(property.area),
      description: property.description,
      amenities: Array.isArray(property.amenities)
        ? property.amenities.join(', ')
        : property.amenities,
      furnishing: property.furnishing,
      location: property.location,
      status: property.status
    });
    setImageFiles([]);
    setSubmitError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.title.trim()) {
      setSubmitError('Property title is required.');
      return;
    }

    if (!formData.description.trim()) {
      setSubmitError('Property description is required.');
      return;
    }

    if (!formData.price || !formData.bedrooms || !formData.bathrooms || !formData.area) {
      setSubmitError('Please fill in price, bedrooms, bathrooms, and area.');
      return;
    }

    if (!isEditing && imageFiles.length === 0) {
      setSubmitError('Please upload at least one image for the new property.');
      return;
    }

    const formPayload = new FormData();
    formPayload.append('title', formData.title.trim());
    formPayload.append('category', formData.category);
    formPayload.append('listingType', formData.listingType);
    formPayload.append('price', formData.price);
    formPayload.append('bedrooms', formData.bedrooms);
    formPayload.append('bathrooms', formData.bathrooms);
    formPayload.append('area', formData.area);
    formPayload.append('description', formData.description.trim());
    formPayload.append('amenities', formData.amenities);
    formPayload.append('furnishing', formData.furnishing);
    formPayload.append('location', formData.location.trim());
    formPayload.append('status', formData.status);

    imageFiles.forEach((file) => {
      formPayload.append('images', file);
    });

    try {
      setSubmitting(true);
      if (isEditing && editingProperty) {
        await propertyService.updateProperty(editingProperty._id, formPayload);
      } else {
        await propertyService.createProperty(formPayload);
      }
      resetForm();
      await fetchProperties();
    } catch (err) {
      console.error('Error saving property:', err);
      setSubmitError('Failed to save property. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProperty = async (propertyId: string) => {
    try {
      setError(null);
      await propertyService.deleteProperty(propertyId);
      await fetchProperties();
    } catch (err) {
      console.error('Error deleting property:', err);
      setError('Failed to delete property. Please try again.');
    }
  };


  return (
    <div className="space-y-10">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl">Admin Panel</h2>
              <p className="text-sm text-gray-600">Manage properties from the same website.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchProperties}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <RefreshCcw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={onExit}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black"
            >
              <X className="w-4 h-4" />
              Exit Admin Panel
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl flex items-center gap-2">
            <Plus className="w-5 h-5 text-blue-600" />
            {formTitle}
          </h3>

          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
              {submitError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Listing Type</label>
              <select
                value={formData.listingType}
                onChange={(e) => setFormData({ ...formData, listingType: e.target.value as 'Rent' | 'Sale' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {LISTING_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Price</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Area (sq ft)</label>
              <input
                type="number"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Bedrooms</label>
              <input
                type="number"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Bathrooms</label>
              <input
                type="number"
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Furnishing</label>
              <select
                value={formData.furnishing}
                onChange={(e) => setFormData({ ...formData, furnishing: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {FURNISHING_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Available' | 'Rented' | 'Sold' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">Amenities (comma separated)</label>
            <input
              type="text"
              value={formData.amenities}
              onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Wifi, Parking, Gym"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">Property Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImageFiles(Array.from(e.target.files || []))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
            />
            {isEditing && (
              <p className="text-xs text-gray-500 mt-2">
                Leave empty to keep existing images.
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-w-[180px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 text-center"
            >
              <Save className="w-4 h-4" />
              {submitting ? 'Saving...' : isEditing ? 'Update Property' : 'Create Property'}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center justify-center px-6 py-2.5 min-w-[140px] border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center"
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl">All Properties</h3>
            <p className="text-sm text-gray-600">Delete or update properties from this panel.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setListingFilter('Rent')}
              className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                listingFilter === 'Rent'
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => setListingFilter('Sale')}
              className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                listingFilter === 'Sale'
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Resale
            </button>
          </div>
        </div>

        {loading && <LoadingAnimation message="Loading properties..." />}

        {error && (
          <div className="text-center py-10 text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && properties.length === 0 && (
          <div className="text-center py-10 text-gray-600">
            No properties available.
          </div>
        )}

        {!loading && !error && properties.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties
              .filter((property) => property.listingType === listingFilter)
              .map((property) => (
              <PropertyCard
                key={property._id}
                property={property}
                onClick={() => null}
                showAdminActions
                onDelete={() => handleDeleteProperty(property._id)}
                onUpdate={() => handleEditProperty(property)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
