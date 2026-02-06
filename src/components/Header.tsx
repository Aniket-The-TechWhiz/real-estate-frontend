import { Building2, Phone, Mail, Shield, LayoutDashboard, LogOut } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

interface HeaderProps {
  onAdminClick: () => void;
  onAdminPanelToggle: () => void;
  onAdminLogout: () => void;
  isAdminAuthenticated: boolean;
  isAdminPanelOpen: boolean;
}

export function Header({
  onAdminClick,
  onAdminPanelToggle,
  onAdminLogout,
  isAdminAuthenticated,
  isAdminPanelOpen
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
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
              <h1 className="text-2xl text-gray-900">PrimeBuild</h1>
              <p className="text-xs text-gray-500 -mt-0.5">Premium Property Brokers</p>
            </div>
          </motion.div>

          {/* Contact Details */}
          <div className="hidden md:flex items-center gap-6 flex-wrap">
            <motion.a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm">+1 (555) 123-4567</span>
            </motion.a>
            <motion.a 
              href="mailto:info@primebuild.com" 
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm">info@primebuild.com</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-2">
            {isAdminAuthenticated ? (
              <>
                <button
                  onClick={onAdminPanelToggle}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  {isAdminPanelOpen ? 'Back to Site' : 'Admin Panel'}
                </button>
                <button
                  onClick={onAdminLogout}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onAdminClick}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Shield className="w-4 h-4 text-blue-600" />
                Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}