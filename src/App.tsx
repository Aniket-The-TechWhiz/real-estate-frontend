import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyList } from './components/PropertyList';
import { PropertyDetail } from './components/PropertyDetail';
import { LoginModal } from './components/LoginModal';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';
import { FloatingContactButton } from './components/FloatingContactButton';
import { FAQSection } from './components/FAQSection';
import { Newsletter } from './components/Newsletter';
import { propertyService } from './services/propertyService';
import { Property } from './types';
import { Loader2 } from 'lucide-react';

type ViewType = 'rent' | 'resale';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('rent');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [loadingProperty, setLoadingProperty] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingPropertyId, setPendingPropertyId] = useState<string | null>(null);
  const [pendingPropertyTitle, setPendingPropertyTitle] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    setSelectedPropertyId(null);
    setSelectedProperty(null);
  };

  const handlePropertyClick = async (propertyId: string) => {
    if (!isLoggedIn) {
      // Fetch property title before showing modal
      try {
        const response = await propertyService.getPropertyById(propertyId);
        setPendingPropertyTitle(response.data.title);
        setPendingPropertyId(propertyId);
        setShowLoginModal(true);
      } catch (error) {
        console.error('Error fetching property:', error);
        alert('Failed to load property. Please try again.');
      }
    } else {
      loadPropertyDetail(propertyId);
    }
  };

  const loadPropertyDetail = async (propertyId: string) => {
    setLoadingProperty(true);
    try {
      const response = await propertyService.getPropertyById(propertyId);
      setSelectedProperty(response.data);
      setSelectedPropertyId(propertyId);
    } catch (error) {
      console.error('Error loading property details:', error);
      alert('Failed to load property details. Please try again.');
    } finally {
      setLoadingProperty(false);
    }
  };

  const handleLoginSubmit = (data: { name: string; phone: string; propertyType: string; location: string }) => {
    console.log('User login data:', data);
    setIsLoggedIn(true);
    setShowLoginModal(false);
    if (pendingPropertyId !== null) {
      loadPropertyDetail(pendingPropertyId);
      setPendingPropertyId(null);
      setPendingPropertyTitle('');
    }
  };

  const handleBackFromProperty = () => {
    setSelectedPropertyId(null);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedPropertyId === null && <Header />}
      {selectedPropertyId === null && <Hero onNavigate={handleNavigate} currentView={currentView} />}
      
      <main id="properties-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedPropertyId === null ? (
          <PropertyList 
            listingType={currentView === 'rent' ? 'Rent' : 'Sale'}
            onSelectProperty={handlePropertyClick}
            title={currentView === 'rent' ? 'Available Rental Properties' : 'Properties for Sale'}
            description={currentView === 'rent' 
              ? 'Browse our selection of premium rental properties in prime locations' 
              : 'Discover exceptional properties available for purchase'}
          />
        ) : loadingProperty ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : selectedProperty ? (
          <PropertyDetail 
            property={selectedProperty}
            onBack={handleBackFromProperty}
          />
        ) : null}
      </main>

      {selectedPropertyId === null && (
        <>
          <StatsSection />
          <CustomerReviews />
          <FAQSection />
          <Newsletter />
        </>
      )}

      {showLoginModal && pendingPropertyId !== null && (
        <LoginModal
          onClose={() => {
            setShowLoginModal(false);
            setPendingPropertyId(null);
            setPendingPropertyTitle('');
          }}
          onSubmit={handleLoginSubmit}
          propertyTitle={pendingPropertyTitle}
          propertyId={pendingPropertyId}
        />
      )}

      <FloatingContactButton />
      {selectedProperty === null && <Footer />}
    </div>
  );
}