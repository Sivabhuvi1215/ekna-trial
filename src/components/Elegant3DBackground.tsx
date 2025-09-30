import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface Elegant3DBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function Elegant3DBackground({ children, className = "" }: Elegant3DBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Elegant 3D Animated Background */}
      <div className="absolute inset-0">
        {/* Smooth Gradient Base */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(58, 12, 163, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 80%, rgba(245, 183, 0, 0.3) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 50%, rgba(0, 180, 216, 0.2) 0%, transparent 70%),
              linear-gradient(135deg, rgba(13, 27, 42, 0.95) 0%, rgba(58, 12, 163, 0.8) 50%, rgba(13, 27, 42, 0.95) 100%)
            `,
            backgroundSize: "120% 120%"
          }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "20% 10%",
              "40% 20%",
              "60% 10%",
              "80% 0%",
              "100% 10%",
              "80% 20%",
              "60% 30%",
              "40% 20%",
              "20% 10%",
              "0% 0%"
            ]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating 3D Geometric Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
              width: `${30 + Math.sin(i) * 20}px`,
              height: `${30 + Math.cos(i) * 20}px`,
              background: `linear-gradient(135deg, 
                rgba(245, 183, 0, 0.1) 0%, 
                rgba(0, 180, 216, 0.08) 50%, 
                rgba(255, 111, 97, 0.06) 100%
              )`,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '8px',
              border: '1px solid rgba(245, 183, 0, 0.15)',
              backdropFilter: 'blur(10px)',
              transformStyle: "preserve-3d"
            }}
            animate={{
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
              rotateZ: [0, 90, 180, 270, 360],
              x: [0, Math.sin(i * 1.5) * 30, 0],
              y: [0, Math.cos(i * 1.5) * 20, 0],
              z: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}

        {/* Elegant Grid Structure */}
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {/* Vertical Lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: "10%",
                width: "1px",
                height: "80%",
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  rgba(245, 183, 0, 0.2) 30%, 
                  rgba(0, 180, 216, 0.25) 50%, 
                  rgba(245, 183, 0, 0.2) 70%, 
                  transparent 100%
                )`,
                transformOrigin: "center center",
                transformStyle: "preserve-3d"
              }}
              animate={{
                rotateY: [0, 5, 0, -5, 0],
                scaleY: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Horizontal Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute"
              style={{
                left: "15%",
                top: `${25 + i * 25}%`,
                width: "70%",
                height: "1px",
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(245, 183, 0, 0.15) 30%, 
                  rgba(0, 180, 216, 0.2) 50%, 
                  rgba(245, 183, 0, 0.15) 70%, 
                  transparent 100%
                )`,
                transformOrigin: "center center",
                transformStyle: "preserve-3d"
              }}
              animate={{
                rotateX: [0, 3, 0, -3, 0],
                scaleX: [1, 1.02, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Gentle Floating Orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              background: `radial-gradient(circle, 
                ${i % 4 === 0 ? 'rgba(245, 183, 0, 0.3)' : 
                  i % 4 === 1 ? 'rgba(0, 180, 216, 0.25)' : 
                  i % 4 === 2 ? 'rgba(255, 111, 97, 0.2)' : 
                  'rgba(199, 125, 255, 0.2)'} 0%, 
                transparent 70%
              )`,
              filter: "blur(1px)",
              transformStyle: "preserve-3d"
            }}
            animate={{
              x: [0, Math.sin(i * 0.8) * 60, 0],
              y: [0, Math.cos(i * 0.8) * 40, 0],
              z: [0, 15, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
          />
        ))}

        {/* Subtle Parallax Layers */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, 
                rgba(245, 183, 0, 0.08) 0%, 
                rgba(0, 180, 216, 0.06) 40%, 
                transparent 70%
              )
            `,
            transform: `
              perspective(2000px) 
              rotateX(${mousePosition.y * 1}deg) 
              rotateY(${mousePosition.x * 1}deg)
              translateZ(10px)
            `,
            transformStyle: "preserve-3d"
          }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        />

        {/* Elegant Wave Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute"
              style={{
                left: "-20%",
                top: `${30 + i * 20}%`,
                width: "140%",
                height: "2px",
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(245, 183, 0, 0.15) 25%, 
                  rgba(0, 180, 216, 0.2) 50%, 
                  rgba(255, 111, 97, 0.15) 75%, 
                  transparent 100%
                )`,
                filter: "blur(0.5px)",
                transformOrigin: "center center"
              }}
              animate={{
                x: ["-10%", "10%", "-10%"],
                rotateZ: [0, 2, 0, -2, 0],
                scaleX: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Depth Enhancement Layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(13, 27, 42, 0.1) 0%, 
                transparent 30%, 
                rgba(58, 12, 163, 0.05) 70%, 
                rgba(13, 27, 42, 0.1) 100%
              )
            `,
            transform: `
              perspective(2000px) 
              rotateX(${mousePosition.y * 0.5}deg) 
              rotateY(${mousePosition.x * 0.5}deg)
              translateZ(20px)
            `,
            transformStyle: "preserve-3d"
          }}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content Layer */}
      <div 
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateZ(30px)`
        }}
      >
        {children}
      </div>

      {/* Subtle Overlay for Content Clarity */}
      <div 
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: `
            radial-gradient(circle at center, 
              transparent 0%, 
              rgba(13, 27, 42, 0.1) 70%, 
              rgba(13, 27, 42, 0.3) 100%
            )
          `
        }}
      />
    </div>
  );
}