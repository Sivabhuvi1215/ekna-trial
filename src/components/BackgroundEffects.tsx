import { motion } from "motion/react";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Simplified Ambient Light Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 md:w-80 h-48 md:h-80 rounded-full blur-3xl will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(245, 183, 0, 0.1) 0%, rgba(0, 180, 216, 0.05) 50%, transparent 100%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-15, 15, -15],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 md:w-64 h-40 md:h-64 rounded-full blur-3xl will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, rgba(255, 111, 97, 0.04) 50%, transparent 100%)"
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          x: [15, -15, 15],
          y: [10, -20, 10],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Minimal Grid - Desktop only, GPU optimized */}
      <div className="hidden lg:block">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`grid-${i}`}
            className="absolute h-full w-px will-change-transform"
            style={{ 
              left: `${20 + i * 20}%`,
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                rgba(245, 183, 0, 0.02) 50%, 
                transparent 100%)`
            }}
            animate={{
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`grid-h-${i}`}
            className="absolute w-full h-px will-change-transform"
            style={{ 
              top: `${25 + i * 25}%`,
              background: `linear-gradient(to right, 
                transparent 0%, 
                rgba(0, 180, 216, 0.02) 50%, 
                transparent 100%)`
            }}
            animate={{
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Flowing Particle System */}
      {[...Array(16)].map((_, i) => {
        const colors = ['rgba(245, 183, 0, 0.5)', 'rgba(0, 180, 216, 0.4)', 'rgba(255, 111, 97, 0.4)'];
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              width: '2px',
              height: '2px',
              background: colors[i % 3],
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [0, 50, -30, 20, 0],
              y: [0, -40, 30, -20, 0],
              opacity: [0, 0.8, 0.3, 0.6, 0],
              scale: [0, 1.2, 0.8, 1, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Flowing Trail Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute will-change-transform"
          style={{
            left: `${i * 12.5}%`,
            top: `${20 + Math.random() * 60}%`,
            width: '1px',
            height: '20px',
            background: `linear-gradient(to bottom, 
              rgba(245, 183, 0, 0.6), 
              rgba(0, 180, 216, 0.4), 
              transparent
            )`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -30, 40, 0],
            opacity: [0, 0.7, 0.3, 0],
            scaleY: [0, 1, 0.5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Minimal Energy Lines - Desktop only */}
      <div className="hidden xl:block">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M 150 250 Q 400 150 650 300"
            stroke="#F5B700"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="6,6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}