import { useState } from 'react';
import { X, User, Phone, Home, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { leadService } from '../services/leadService';

interface LoginModalProps {
  onClose: () => void;
  onSubmit: (data: { name: string; phone: string; propertyType: string; location: string }) => void;
  propertyTitle: string;
  propertyId?: string;
}

// Pune locations list
const PUNE_LOCATIONS = [
  'Koregaon Park',
  'Baner',
  'Kalyani Nagar',
  'Kondhwa',
  'Viman Nagar',
  'Wakad',
  'Hadapsar',
  'Kothrud',
  'Aundh',
  'Shivajinagar',
  'Pashan',
  'Pune City',
  'Fort Area',
  'Camp',
  'Deccan',
  'Boat Club Road',
  'Mundhwa',
  'Hinjewadi',
  'Balewadi',
  'Ravet',
  'Talegaon Dabhade',
  'Mahalunge',
  'Undri'
];

export function LoginModal({ onClose, onSubmit, propertyTitle, propertyId }: LoginModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: '',
    location: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validate phone number (10 digits)
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Contact number must be 10 digits';
    }

    // Property type validation
    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property type';
    }

    // Location validation
    if (!formData.location) {
      newErrors.location = 'Please select your preferred location';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData({ ...formData, phone: value });
    // Clear error when user starts typing
    if (errors.phone) {
      setErrors({ ...errors, phone: '' });
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
    if (errors.name) {
      setErrors({ ...errors, name: '' });
    }
  };

  const handlePropertyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, propertyType: e.target.value });
    if (errors.propertyType) {
      setErrors({ ...errors, propertyType: '' });
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, location: e.target.value });
    if (errors.location) {
      setErrors({ ...errors, location: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Submit lead to backend (which will save to Google Sheets)
      const response = await leadService.submitLead({
        fullName: formData.name,
        contactNumber: formData.phone,
        propertyType: formData.propertyType,
        location: formData.location,
        propertyId: propertyId,
        propertyTitle: propertyTitle
      });

      if (response.success) {
        // Call parent's onSubmit to proceed with login
        onSubmit(formData);
      } else {
        setSubmitError(response.message || 'Failed to submit lead');
      }
    } catch (err) {
      console.error('Error submitting lead:', err);
      setSubmitError('Failed to submit lead. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl mb-2">Login to View Details</h2>
        <p className="text-gray-600 text-sm mb-6">
          Please provide your information to view details for: <span className="text-blue-600">{propertyTitle}</span>
        </p>

        {submitError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex gap-2 items-start">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-600 text-sm font-semibold">Error</p>
              <span className="text-red-600 text-sm">{submitError}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              <User className="w-4 h-4 inline mr-2" />
              Full Name <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={handleNameChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-xs">{errors.name}</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              <Phone className="w-4 h-4 inline mr-2" />
              Contact Number <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter 10-digit phone number"
              maxLength="10"
            />
            {errors.phone && (
              <div className="flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-xs">{errors.phone}</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              <Home className="w-4 h-4 inline mr-2" />
              Looking for Property Type <span className="text-red-500 font-bold">*</span>
            </label>
            <select
              value={formData.propertyType}
              onChange={handlePropertyTypeChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white ${
                errors.propertyType ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Select property type</option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="5+ BHK">5+ BHK</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Penthouse">Penthouse</option>
            </select>
            {errors.propertyType && (
              <div className="flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-xs">{errors.propertyType}</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              <MapPin className="w-4 h-4 inline mr-2" />
              Your Location (Pune) <span className="text-red-500 font-bold">*</span>
            </label>
            <select
              value={formData.location}
              onChange={handleLocationChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white ${
                errors.location ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Select your preferred location</option>
              {PUNE_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            {errors.location && (
              <div className="flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-xs">{errors.location}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}