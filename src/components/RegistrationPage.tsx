import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface RegistrationPageProps {
  events?: any[];
  onBack?: () => void;
}

export function RegistrationPage({ events, onBack }: RegistrationPageProps) {
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdExampleFormURL/viewform";
  const vismeAnimationURL =
    "https://forms.visme.co/formsPlayer/7vg07mo7-ekna-registerr-forrm";
  const [showContent, setShowContent] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Track window size for responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 8000); // Reduced to 8-second delay for better UX

    return () => clearTimeout(timer);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen Visme Animation Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={vismeAnimationURL}
          title="EKNA 2025 Registration Animation"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          style={{ 
            pointerEvents: "none",
            transform: isMobile ? "scale(1.1)" : "scale(1)",
            filter: "brightness(0.7) contrast(1.1)"
          }}
        />
      </div>

      {/* Enhanced overlay for better readability */}
      <div className="absolute inset-0 z-10">
        <div 
          className="w-full h-full"
          style={{
            background: isMobile 
              ? "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(13,27,42,0.7), rgba(58,12,163,0.5))"
              : "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(13,27,42,0.6), rgba(58,12,163,0.4))"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        {/* Loading state */}
        {!showContent && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-golden-amber border-t-transparent rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p 
              className="text-golden-amber text-lg font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Preparing Registration...
            </motion.p>
          </motion.div>
        )}

        {/* Main Content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className={`
                relative w-full max-w-md mx-auto
                ${isMobile ? 'max-w-sm' : isTablet ? 'max-w-lg' : 'max-w-xl'}
              `}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              {/* Enhanced Black Box Container */}
              <div 
                className={`
                  relative glassmorphic p-8 rounded-2xl text-center
                  ${isMobile ? 'p-6' : 'p-8'}
                `}
                style={{
                  background: isMobile
                    ? "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(13,27,42,0.85))"
                    : "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(13,27,42,0.75), rgba(58,12,163,0.3))",
                  backdropFilter: "blur(20px) saturate(150%)",
                  border: "2px solid rgba(245, 183, 0, 0.3)",
                  boxShadow: `
                    0 0 40px rgba(245, 183, 0, 0.4),
                    0 0 80px rgba(0, 180, 216, 0.2),
                    inset 0 0 30px rgba(245, 183, 0, 0.1)
                  `
                }}
              >
                {/* Cinematic Border Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(245, 183, 0, 0.2), transparent)",
                    filter: "blur(2px)"
                  }}
                />

                {/* Back Button for Mobile */}
                {isMobile && onBack && (
                  <motion.button
                    onClick={onBack}
                    className="absolute top-4 left-4 text-golden-amber/70 hover:text-golden-amber transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                )}

                {/* Enhanced Title */}
                <motion.h1
                  className={`
                    font-bold tracking-tight mb-4 text-transparent bg-clip-text
                    ${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'}
                  `}
                  style={{
                    background: "linear-gradient(135deg, #F5B700, #FFD700, #FFF8DC, #F5B700)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "'Orbitron', 'Cinzel', serif",
                    filter: "drop-shadow(0 0 15px rgba(245, 183, 0, 0.6))"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  EKNA 2025 Registration
                </motion.h1>

                {/* Enhanced Subtitle */}
                <motion.p
                  className={`
                    text-soft-white/90 mb-6 leading-relaxed
                    ${isMobile ? 'text-sm' : 'text-base md:text-lg'}
                  `}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    textShadow: "0 0 10px rgba(237, 237, 237, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Join us for the National Level Technical Symposium
                  <br />
                  <span className="text-golden-amber/80 font-medium">
                    "Power • Innovation • Future"
                  </span>
                </motion.p>

                {/* Enhanced Registration Button */}
                <motion.button
                  onClick={() => window.open(googleFormURL, "_blank")}
                  className={`
                    relative font-bold rounded-xl shadow-2xl
                    transition-all duration-300 overflow-hidden
                    hover:scale-105 active:scale-95
                    focus:outline-none focus:ring-4 focus:ring-golden-amber/50
                    ${isMobile ? 'py-3 px-6 text-base' : 'py-4 px-8 text-lg'}
                  `}
                  style={{
                    background: "linear-gradient(135deg, #F5B700, #FF6F61, #00B4D8)",
                    backgroundSize: "300% 300%",
                    color: "#0D1B2A",
                    border: "2px solid rgba(245, 183, 0, 0.6)",
                    boxShadow: `
                      0 0 30px rgba(245, 183, 0, 0.6),
                      0 8px 32px rgba(255, 111, 97, 0.4),
                      inset 0 0 20px rgba(245, 183, 0, 0.2)
                    `
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    boxShadow: [
                      "0 0 30px rgba(245, 183, 0, 0.6), 0 8px 32px rgba(255, 111, 97, 0.4)",
                      "0 0 40px rgba(0, 180, 216, 0.7), 0 12px 40px rgba(245, 183, 0, 0.5)",
                      "0 0 30px rgba(245, 183, 0, 0.6), 0 8px 32px rgba(255, 111, 97, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotateX: isMobile ? 0 : 5,
                    rotateY: isMobile ? 0 : -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Button content */}
                  <span className="relative flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 15, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🚀
                    </motion.span>
                    {isMobile ? 'Register Now' : 'Open Registration Form'}
                    <motion.span
                      animate={{ 
                        x: [0, 5, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>

                {/* Additional info for mobile */}
                {isMobile && (
                  <motion.p
                    className="text-xs text-soft-white/60 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Opens in new tab
                  </motion.p>
                )}

                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-golden-amber/30 rounded-full"
                      style={{
                        left: `${10 + (i * 15)}%`,
                        top: `${20 + (i * 10)}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}