import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  transitionType?: 'slide' | 'fade' | 'scale' | 'rotate' | 'matrix' | 'hologram';
}

export function PageTransition({ children, transitionType = 'matrix' }: PageTransitionProps) {
  const getTransitionVariants = () => {
    switch (transitionType) {
      case 'slide':
        return {
          initial: { x: '100%', opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '-100%', opacity: 0 }
        };
      
      case 'fade':
        return {
          initial: { opacity: 0, filter: 'blur(10px)' },
          animate: { opacity: 1, filter: 'blur(0px)' },
          exit: { opacity: 0, filter: 'blur(10px)' }
        };
      
      case 'scale':
        return {
          initial: { scale: 0.8, opacity: 0, rotateY: 45 },
          animate: { scale: 1, opacity: 1, rotateY: 0 },
          exit: { scale: 1.2, opacity: 0, rotateY: -45 }
        };
      
      case 'rotate':
        return {
          initial: { 
            rotateX: 90, 
            opacity: 0, 
            transformPerspective: 1000,
            filter: 'brightness(0.5)'
          },
          animate: { 
            rotateX: 0, 
            opacity: 1,
            filter: 'brightness(1)'
          },
          exit: { 
            rotateX: -90, 
            opacity: 0,
            filter: 'brightness(0.5)'
          }
        };
      
      case 'matrix':
        return {
          initial: { 
            opacity: 0,
            scale: 0.95,
            filter: 'hue-rotate(180deg) contrast(2) brightness(0.3)',
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
          },
          animate: { 
            opacity: 1,
            scale: 1,
            filter: 'hue-rotate(0deg) contrast(1) brightness(1)',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          },
          exit: { 
            opacity: 0,
            scale: 1.05,
            filter: 'hue-rotate(180deg) contrast(2) brightness(0.3)',
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
          }
        };
      
      case 'hologram':
        return {
          initial: { 
            opacity: 0,
            scale: 0.9,
            rotateY: 45,
            skewX: 10,
            filter: 'hue-rotate(120deg) saturate(2) brightness(1.5)',
            backgroundImage: 'linear-gradient(45deg, rgba(0,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,0,255,0.1) 75%)'
          },
          animate: { 
            opacity: 1,
            scale: 1,
            rotateY: 0,
            skewX: 0,
            filter: 'hue-rotate(0deg) saturate(1) brightness(1)'
          },
          exit: { 
            opacity: 0,
            scale: 1.1,
            rotateY: -45,
            skewX: -10,
            filter: 'hue-rotate(240deg) saturate(2) brightness(1.5)'
          }
        };
      
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getTransitionVariants();
  
  const transitionConfig = {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1]
  };

  return (
    <motion.div
      className="relative min-h-screen"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transitionConfig}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
    >
      {/* Digital Grid Overlay for Matrix/Hologram effects */}
      {(transitionType === 'matrix' || transitionType === 'hologram') && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.8, times: [0, 0.5, 1] }}
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, 0.05) 25%, rgba(255, 0, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, 0.05) 75%, rgba(255, 0, 255, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      )}

      {/* Scan Line Effect for Matrix transitions */}
      {transitionType === 'matrix' && (
        <motion.div
          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-cyan to-transparent z-40 pointer-events-none"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '100vh', opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            boxShadow: '0 0 20px rgba(0, 180, 216, 0.8), 0 0 40px rgba(0, 180, 216, 0.4)'
          }}
        />
      )}

      {/* Holographic Shimmer for Hologram transitions */}
      {transitionType === 'hologram' && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 1, times: [0, 0.5, 1] }}
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 30%, 
                rgba(255, 255, 255, 0.1) 40%, 
                rgba(0, 255, 255, 0.2) 50%, 
                rgba(255, 0, 255, 0.1) 60%, 
                transparent 70%
              )
            `,
            backgroundSize: '200% 200%',
            animation: 'gradient-flow 2s ease-in-out'
          }}
        />
      )}

      {/* Glitch Bars for Technical effects */}
      {(transitionType === 'matrix' || transitionType === 'hologram') && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 bg-gradient-to-r from-transparent via-golden-amber/20 to-transparent"
              style={{
                height: '2px',
                top: `${20 + i * 30}%`
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 0], 
                opacity: [0, 0.8, 0],
                x: ['-100%', '0%', '100%']
              }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {children}
    </motion.div>
  );
}