import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isSplineReady, setIsSplineReady] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show button after 5 seconds
  useEffect(() => {
    let buttonTimer: NodeJS.Timeout | null = null;
    if (isSplineReady) {
      buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 5000);
    }
    return () => {
      if (buttonTimer) clearTimeout(buttonTimer);
    };
  }, [isSplineReady]);

  // Auto-redirect after 12 seconds if not clicked
  useEffect(() => {
    let redirectTimer: NodeJS.Timeout | null = null;
    if (showButton) {
      redirectTimer = setTimeout(() => {
        onComplete();
      }, 12000);
    }
    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [showButton, onComplete]);

  const handleSplineLoad = () => {
    setIsSplineReady(true);
  };

  // Enhanced responsive sizing
  const getSplineStyles = () => {
    if (windowWidth >= 1024) {
      return {
        height: "100vh",
        width: "100%",
        transform: "scale(1)",
        marginTop: "0"
      }; // Desktop
    }
    if (windowWidth >= 768) {
      return {
        height: "90vh",
        width: "100%",
        transform: "scale(0.95)",
        marginTop: "5vh"
      }; // Tablet
    }
    return {
      height: "85vh",
      width: "100%",
      transform: "scale(0.9)",
      marginTop: "7.5vh"
    }; // Mobile
  };

  const getButtonStyles = () => {
    if (windowWidth >= 1024) {
      return {
        padding: "1.5rem 4rem",
        fontSize: "1.5rem",
        bottom: "6rem",
        borderRadius: "1rem"
      };
    }
    if (windowWidth >= 768) {
      return {
        padding: "1.25rem 3rem",
        fontSize: "1.25rem",
        bottom: "5rem",
        borderRadius: "0.875rem"
      };
    }
    return {
      padding: "1rem 2rem",
      fontSize: "1.125rem",
      bottom: "4rem",
      borderRadius: "0.75rem"
    };
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      >
        <div className="w-full h-full relative flex items-center justify-center">
          {/* Spline animation */}
          <div 
            className="absolute inset-0 z-10 flex items-center justify-center" 
            style={getSplineStyles()}
          >
            <Spline
              scene="https://prod.spline.design/jsUaZFIE7ZcJJefj/scene.splinecode"
              onLoad={handleSplineLoad}
              className="w-full h-full"
              style={{
                transform: getSplineStyles().transform,
                borderRadius: windowWidth < 768 ? "1rem" : "0"
              }}
            />
          </div>

          {/* Loading indicator for better UX */}
          {!isSplineReady && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80">
              <motion.div
                className="w-16 h-16 border-4 border-golden-amber border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p 
                className="absolute mt-32 text-golden-amber text-lg font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading Experience...
              </motion.p>
            </div>
          )}

          {/* Enhanced Button */}
          <AnimatePresence>
            {showButton && (
              <motion.button
                onClick={onComplete}
                className="absolute left-1/2 -translate-x-1/2 z-20
                  font-extrabold
                  bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                  text-black shadow-2xl border-2 border-yellow-500
                  hover:scale-110 hover:shadow-3xl transition-all duration-300
                  focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75
                  cinematic-glow"
                style={{
                  padding: getButtonStyles().padding,
                  fontSize: getButtonStyles().fontSize,
                  bottom: getButtonStyles().bottom,
                  borderRadius: getButtonStyles().borderRadius,
                  background: windowWidth < 768 
                    ? "linear-gradient(135deg, #F5B700, #FFD700, #FFF8DC)" 
                    : "linear-gradient(135deg, #F5B700, #FF6F61, #00B4D8)",
                  boxShadow: windowWidth < 768
                    ? "0 8px 32px rgba(245, 183, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.4)"
                    : "0 12px 48px rgba(245, 183, 0, 0.8), 0 0 30px rgba(255, 111, 97, 0.5), 0 0 50px rgba(0, 180, 216, 0.3)"
                }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  boxShadow: windowWidth >= 768 ? [
                    "0 12px 48px rgba(245, 183, 0, 0.8), 0 0 30px rgba(255, 111, 97, 0.5)",
                    "0 16px 64px rgba(0, 180, 216, 0.8), 0 0 40px rgba(245, 183, 0, 0.6)",
                    "0 12px 48px rgba(245, 183, 0, 0.8), 0 0 30px rgba(255, 111, 97, 0.5)"
                  ] : undefined
                }}
                exit={{ opacity: 0, y: 50, scale: 0.8 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: windowWidth >= 768 ? 1.12 : 1.08,
                  rotateX: windowWidth >= 768 ? 5 : 0,
                  rotateY: windowWidth >= 768 ? -2 : 0
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button content with responsive text */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {windowWidth >= 768 ? '🚀 Enter EKNA 2025' : '🚀 Enter'}
                  <motion.span
                    animate={{ 
                      rotate: [0, 15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ⚡
                  </motion.span>
                </span>
                
                {/* Desktop-only shimmer effect */}
                {windowWidth >= 768 && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "300%"] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
            )}
          </AnimatePresence>

          {/* Skip indicator for mobile */}
          {windowWidth < 768 && isSplineReady && !showButton && (
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-golden-amber/70 text-sm text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p>Loading will complete shortly...</p>
              <div className="flex justify-center mt-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-golden-amber/50 rounded-full mx-1"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5] 
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
