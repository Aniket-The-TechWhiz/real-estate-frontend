import { motion } from 'motion/react';
import { ArrowRight, Home, TrendingUp } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: 'rent' | 'resale') => void;
  currentView: 'rent' | 'resale';
}

export function Hero({ onNavigate, currentView }: HeroProps) {
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties-section');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRentClick = () => {
    onNavigate('rent');
    setTimeout(scrollToProperties, 100);
  };

  const handleResaleClick = () => {
    onNavigate('resale');
    setTimeout(scrollToProperties, 100);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Residential Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
        srcSet="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop 1200w, https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop 1600w, https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop 2075w"
        sizes="100vw"
        alt="Luxury residential property"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      
      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-900/60" />
      
      {/* Soft Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-lg text-white" style={{ fontFamily: '"Moniline", cursive', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              Where Luxury Meets
              <br />
              <span className="text-amber-400">Smart Investment</span>
            </h2>
          </motion.div>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white mb-10 leading-relaxed max-w-xl"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            Your trusted partner for quality rental homes and resale properties. We provide well-curated options to match your needs, whether you’re looking to rent, buy, or invest in the right property.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={handleRentClick}
              className={`group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${
                currentView === 'rent'
                  ? 'bg-blue-600 text-white shadow-2xl'
                  : 'bg-white text-blue-700 hover:bg-blue-50 hover:shadow-xl'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Home className="w-5 h-5" />
              <span className="text-lg">Explore Rentals</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleResaleClick}
              className={`group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${
                currentView === 'resale'
                  ? 'bg-blue-600 text-white shadow-2xl'
                  : 'bg-white text-blue-700 hover:bg-blue-50 hover:shadow-xl'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <TrendingUp className="w-5 h-5" />
              <span className="text-lg">View Resale</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-8 text-white"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">500+ Properties Listed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">1000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">15+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Curved Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="rgb(249, 250, 251)" 
          />
        </svg>
      </div>
    </div>
  );
}