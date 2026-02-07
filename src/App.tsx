import { lazy, Suspense, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyList } from './components/PropertyList';
import { propertyService } from './services/propertyService';
import { Property } from './types';
import { LoadingAnimation } from './components/LoadingAnimation';

const PropertyDetail = lazy(() =>
  import('./components/PropertyDetail').then((module) => ({ default: module.PropertyDetail }))
);
const LoginModal = lazy(() =>
  import('./components/LoginModal').then((module) => ({ default: module.LoginModal }))
);
const CustomerReviews = lazy(() =>
  import('./components/CustomerReviews').then((module) => ({ default: module.CustomerReviews }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((module) => ({ default: module.Footer }))
);
const StatsSection = lazy(() =>
  import('./components/StatsSection').then((module) => ({ default: module.StatsSection }))
);
const FloatingContactButton = lazy(() =>
  import('./components/FloatingContactButton').then((module) => ({ default: module.FloatingContactButton }))
);
const FAQSection = lazy(() =>
  import('./components/FAQSection').then((module) => ({ default: module.FAQSection }))
);
const Newsletter = lazy(() =>
  import('./components/Newsletter').then((module) => ({ default: module.Newsletter }))
);
const AdminLoginModal = lazy(() =>
  import('./components/AdminLoginModal').then((module) => ({ default: module.AdminLoginModal }))
);
const AdminPanel = lazy(() =>
  import('./components/AdminPanel').then((module) => ({ default: module.AdminPanel }))
);

type ViewType = 'rent' | 'resale';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('rent');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [loadingProperty, setLoadingProperty] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loadingLoginForm, setLoadingLoginForm] = useState(false);
  const [pendingPropertyId, setPendingPropertyId] = useState<string | null>(null);
  const [pendingPropertyTitle, setPendingPropertyTitle] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState<string | null>(null);

  const MOCK_ADMIN = {
    username: 'admin@primebuild.com',
    password: 'Admin@123'
  };

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    setSelectedPropertyId(null);
    setSelectedProperty(null);
  };

  useEffect(() => {
    const hasFilledForm = localStorage.getItem('hasFilledPropertyForm') === 'true';
    if (hasFilledForm) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const storedAdminAuth = localStorage.getItem('isAdminAuthenticated') === 'true';
    if (storedAdminAuth) {
      setIsAdminAuthenticated(true);
    }
  }, []);

  const handlePropertyClick = async (propertyId: string) => {
    // Check if user has already filled the form
    const hasFilledForm = localStorage.getItem('hasFilledPropertyForm') === 'true';

    if (!isLoggedIn && !hasFilledForm) {
      // Fetch property title before showing modal
      setLoadingLoginForm(true);
      try {
        const response = await propertyService.getPropertyById(propertyId);
        setPendingPropertyTitle(response.data.title);
        setPendingPropertyId(propertyId);
        setShowLoginModal(true);
      } catch (error) {
        console.error('Error fetching property:', error);
        alert('Failed to load property. Please try again.');
      } finally {
        setLoadingLoginForm(false);
      }
    } else {
      // User already filled form or is logged in, skip to property details
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

  const handleLoginSubmit = async (data: { name: string; phone: string; propertyType: string; location: string }) => {
    console.log('User login data:', data);
    
    // Save to localStorage so user doesn't see form again in this browser
    localStorage.setItem('hasFilledPropertyForm', 'true');
    
    setIsLoggedIn(true);
    setShowLoginModal(false);
    if (pendingPropertyId !== null) {
      // Start loading before fetching property detail
      setLoadingProperty(true);
      setSelectedPropertyId(pendingPropertyId);
      await loadPropertyDetail(pendingPropertyId);
      setPendingPropertyId(null);
      setPendingPropertyTitle('');
    }
  };

  const handleBackFromProperty = () => {
    setSelectedPropertyId(null);
    setSelectedProperty(null);
  };

  const handleAdminLogin = (data: { username: string; password: string }) => {
    if (
      data.username.trim().toLowerCase() === MOCK_ADMIN.username.toLowerCase() &&
      data.password === MOCK_ADMIN.password
    ) {
      setIsAdminAuthenticated(true);
      localStorage.setItem('isAdminAuthenticated', 'true');
      setIsAdminPanelOpen(true);
      setShowAdminLoginModal(false);
      setAdminLoginError(null);
    } else {
      setAdminLoginError('Invalid admin credentials.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setIsAdminPanelOpen(false);
    localStorage.removeItem('isAdminAuthenticated');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedPropertyId === null && (
        <Header
          onAdminClick={() => {
            setShowAdminLoginModal(true);
            setAdminLoginError(null);
          }}
          onAdminPanelToggle={() => setIsAdminPanelOpen((prev) => !prev)}
          onAdminLogout={handleAdminLogout}
          isAdminAuthenticated={isAdminAuthenticated}
          isAdminPanelOpen={isAdminPanelOpen}
        />
      )}
      {selectedPropertyId === null && !isAdminPanelOpen && (
        <Hero onNavigate={handleNavigate} currentView={currentView} />
      )}
      
      <main id="properties-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedPropertyId === null ? (
          isAdminPanelOpen ? (
            <Suspense fallback={<LoadingAnimation fullScreen type="progress-bar" />}>
              <AdminPanel onExit={() => setIsAdminPanelOpen(false)} />
            </Suspense>
          ) : (
            <PropertyList 
              listingType={currentView === 'rent' ? 'Rent' : 'Sale'}
              onSelectProperty={handlePropertyClick}
              title={currentView === 'rent' ? 'Available Rental Properties' : 'Properties for Sale'}
              description={currentView === 'rent' 
                ? 'Browse our selection of premium rental properties in prime locations' 
                : 'Discover exceptional properties available for purchase'}
            />
          )
        ) : selectedProperty ? (
          <Suspense fallback={<LoadingAnimation fullScreen type="progress-bar" />}>
            <PropertyDetail 
              property={selectedProperty}
              onBack={handleBackFromProperty}
            />
          </Suspense>
        ) : null}
      </main>

      {selectedPropertyId === null && !isAdminPanelOpen && (
        <Suspense fallback={<LoadingAnimation fullScreen type="progress-bar" />}>
          <StatsSection />
          <CustomerReviews />
          <FAQSection />
          <Newsletter />
        </Suspense>
      )}

      {showLoginModal && pendingPropertyId !== null && (
        <Suspense fallback={<LoadingAnimation fullScreen type="progress-bar" />}>
          <LoginModal
            onClose={() => {
              setShowLoginModal(false);
              setPendingPropertyId(null);
              setPendingPropertyTitle('');
            }}
            onSubmit={handleLoginSubmit}
            propertyTitle={pendingPropertyTitle}
            propertyId={pendingPropertyId}
            loading={loadingLoginForm}
          />
        </Suspense>
      )}

      {loadingLoginForm && !showLoginModal && (
        <LoadingAnimation fullScreen type="progress-bar" />
      )}

      {showAdminLoginModal && (
        <Suspense fallback={<LoadingAnimation fullScreen type="progress-bar" />}>
          <AdminLoginModal
            onClose={() => {
              setShowAdminLoginModal(false);
              setAdminLoginError(null);
            }}
            onSubmit={handleAdminLogin}
            error={adminLoginError}
          />
        </Suspense>
      )}

      <Suspense fallback={null}>
        <FloatingContactButton />
      </Suspense>
      {selectedProperty === null && !isAdminPanelOpen && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}