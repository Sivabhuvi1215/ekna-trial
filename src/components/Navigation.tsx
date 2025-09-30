import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'events', label: 'Events' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'register', label: 'Register' },
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 glassmorphic"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-golden-amber to-warm-coral flex items-center justify-center">
            <span className="text-midnight-blue font-bold text-lg">E</span>
          </div>
          <div className="text-xl font-bold text-soft-white">
            EKNA <span className="text-golden-amber">2025</span>
          </div>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              className={`relative px-3 lg:px-4 py-2 font-medium transition-colors duration-300 text-sm lg:text-base ${
                currentPage === item.id
                  ? 'text-golden-amber'
                  : 'text-soft-white hover:text-golden-amber'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-golden-amber to-teal-cyan"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-soft-white hover:text-golden-amber transition-colors relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 md:hidden bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Dropdown Menu */}
            <motion.div
              className="absolute top-full left-0 right-0 z-40 md:hidden glassmorphic border-t border-golden-amber/20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: `linear-gradient(180deg, 
                  rgba(13, 27, 42, 0.95) 0%, 
                  rgba(58, 12, 163, 0.90) 50%, 
                  rgba(13, 27, 42, 0.95) 100%
                )`,
                backdropFilter: "blur(20px) saturate(180%)"
              }}
            >
              {/* Mobile Navigation Links */}
              <div className="py-6 px-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      currentPage === item.id
                        ? 'text-golden-amber bg-gradient-to-r from-golden-amber/20 to-teal-cyan/10 border border-golden-amber/30'
                        : 'text-soft-white hover:text-golden-amber hover:bg-royal-purple/20 border border-transparent'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 4px 20px rgba(245, 183, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {currentPage === item.id && (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-golden-amber"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                    {currentPage === item.id && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-golden-amber to-teal-cyan rounded-full"
                        layoutId="mobile-navbar-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`mobile-particle-${i}`}
                    className="absolute w-1 h-1 rounded-full bg-golden-amber/30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}