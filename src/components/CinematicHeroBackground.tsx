import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface CinematicHeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function CinematicHeroBackground({ children, className = "" }: CinematicHeroBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(245, 183, 0, 0.15) 0%, 
            rgba(0, 180, 216, 0.1) 25%, 
            rgba(58, 12, 163, 0.8) 50%, 
            rgba(13, 27, 42, 0.95) 100%
          )`,
        }}
        animate={{
          background: [
            `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(245, 183, 0, 0.15) 0%, 
              rgba(0, 180, 216, 0.1) 25%, 
              rgba(58, 12, 163, 0.8) 50%, 
              rgba(13, 27, 42, 0.95) 100%
            )`,
            `radial-gradient(circle at ${mousePosition.x + 10}% ${mousePosition.y + 10}%, 
              rgba(0, 180, 216, 0.15) 0%, 
              rgba(255, 111, 97, 0.1) 25%, 
              rgba(58, 12, 163, 0.8) 50%, 
              rgba(13, 27, 42, 0.95) 100%
            )`,
            `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(245, 183, 0, 0.15) 0%, 
              rgba(0, 180, 216, 0.1) 25%, 
              rgba(58, 12, 163, 0.8) 50%, 
              rgba(13, 27, 42, 0.95) 100%
            )`
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Energy Orbs */}
      <div className="absolute inset-0 z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${
                ['#F5B700', '#00B4D8', '#FF6F61', '#3A0CA3'][i % 4]
              } 0%, transparent 70%)`,
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 120, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.3, 0.1, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 z-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-golden-amber rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-golden-amber/30 to-transparent"
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute w-1 h-full bg-gradient-to-b from-transparent via-teal-cyan/20 to-transparent"
          animate={{
            x: ['0vw', '100vw'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
        />
      </div>

      {/* Enhanced Energy Flow Lines (replacing matrix rain) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`energy-${i}`}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-teal-cyan/20 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Electric Arc Effects */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5B700" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF6F61" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={`arc-${i}`}
              d={`M${20 + i * 180} 20 Q${100 + i * 150} ${200 + i * 100} ${300 + i * 120} ${400 + i * 80}`}
              stroke="url(#electric-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000, opacity: 0 }}
              animate={{
                strokeDashoffset: [-1000, 0, 1000],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Holographic Grid Overlay */}
      <div 
        className="absolute inset-0 z-30 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 183, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 183, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
}

CinematicHeroBackground.displayName = 'CinematicHeroBackground';