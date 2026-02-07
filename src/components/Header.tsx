import { Building2, Phone, Mail, Shield, LayoutDashboard, LogOut } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
  onAdminClick: () => void;
  onAdminPanelToggle: () => void;
  onAdminLogout: () => void;
  isAdminAuthenticated: boolean;
  isAdminPanelOpen: boolean;
  transparent?: boolean;
}

export function Header({
  onAdminClick,
  onAdminPanelToggle,
  onAdminLogout,
  isAdminAuthenticated,
  isAdminPanelOpen,
  transparent = false
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const rafIdRef = useRef<number | null>(null);
  const latestScrollRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latestScrollRef.current = latest;
    if (rafIdRef.current !== null) {
      return;
    }
    rafIdRef.current = window.requestAnimationFrame(() => {
      setIsScrolled(latestScrollRef.current > 50);
      rafIdRef.current = null;
    });
  });

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, []);

  const baseHeaderClass = transparent
    ? 'absolute top-0 left-0 right-0 z-50'
    : 'sticky top-0 z-50';
  const headerSurfaceClass = transparent
    ? 'bg-transparent'
    : isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg'
      : 'bg-white shadow-sm';

  return (
    <motion.header 
      className={`${baseHeaderClass} transition-all duration-300 ${headerSurfaceClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-5 gap-4">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-lg shadow-md">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className={`text-2xl ${transparent ? 'text-white' : 'text-gray-900'}`}>PrimeBuild</h1>
              <p className={`text-xs -mt-0.5 ${transparent ? 'text-white/80' : 'text-gray-500'}`}>Premium Property Brokers</p>
            </div>
          </motion.div>

          {/* Contact Details */}
          <div className="hidden md:flex items-center gap-6 flex-wrap">
            <motion.a 
              href="tel:+15551234567" 
              className={`flex items-center gap-2 transition-colors group ${transparent ? 'text-white hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`p-2 rounded-full transition-colors ${transparent ? 'bg-white/10 group-hover:bg-white/20' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                <Phone className={`w-4 h-4 ${transparent ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <span className="text-sm">+1 (555) 123-4567</span>
            </motion.a>
            <motion.a 
              href="mailto:info@primebuild.com" 
              className={`flex items-center gap-2 transition-colors group ${transparent ? 'text-white hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`p-2 rounded-full transition-colors ${transparent ? 'bg-white/10 group-hover:bg-white/20' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                <Mail className={`w-4 h-4 ${transparent ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <span className="text-sm">info@primebuild.com</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-2">
            {isAdminAuthenticated ? (
              <>
                <button
                  onClick={onAdminPanelToggle}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                    transparent
                      ? 'border-white/60 text-white hover:bg-white/10'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {isAdminPanelOpen ? 'Back to Site' : 'Admin Panel'}
                </button>
                <button
                  onClick={onAdminLogout}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                    transparent
                      ? 'border-white/40 text-white hover:bg-white/10'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onAdminClick}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                  transparent
                    ? 'border-white/40 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Shield className={`w-4 h-4 ${transparent ? 'text-white' : 'text-blue-600'}`} />
                Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}