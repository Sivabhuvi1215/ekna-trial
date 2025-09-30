import { motion } from "motion/react";
import { useState, useEffect } from "react";
import exampleImage from 'figma:asset/40db297fe1bbdd083fceee6a8ad6f697eee99341.png';

interface Animated3DBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function Animated3DBackground({ children, className = "" }: Animated3DBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* 3D Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Base Background with Image */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 70%, rgba(58, 12, 163, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(245, 183, 0, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0, 180, 216, 0.4) 0%, transparent 50%),
              linear-gradient(135deg, #3A0CA3 0%, #7B2CBF 25%, #C77DFF 50%, #E0AAFF 75%, #F5B700 100%)
            `,
            backgroundSize: "400% 400%"
          }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 100%",
              "0% 100%", 
              "100% 0%",
              "0% 0%"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating 3D Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#F5B700' : i % 3 === 1 ? '#00B4D8' : '#FF6F61'}80,
                ${i % 3 === 0 ? '#FF6F61' : i % 3 === 1 ? '#F5B700' : '#00B4D8'}40
              )`,
              borderRadius: i % 4 === 0 ? '50%' : i % 4 === 1 ? '0%' : i % 4 === 2 ? '20%' : '10px',
              filter: "blur(1px)",
              transformStyle: "preserve-3d"
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 30, 0],
              z: [0, 50, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* 3D Grid Lines */}
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="absolute"
              style={{
                left: `${i * 12.5}%`,
                top: "0%",
                width: "1px",
                height: "100%",
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  rgba(245, 183, 0, 0.3) 25%, 
                  rgba(0, 180, 216, 0.4) 50%, 
                  rgba(255, 111, 97, 0.3) 75%, 
                  transparent 100%
                )`,
                transformOrigin: "center center",
                transformStyle: "preserve-3d"
              }}
              animate={{
                rotateY: [0, 10, 0],
                scaleY: [1, 1.1, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Floating Data Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, 
                  ${i % 4 === 0 ? '#F5B700' : i % 4 === 1 ? '#00B4D8' : i % 4 === 2 ? '#FF6F61' : '#C77DFF'}, 
                  transparent
                )`,
                filter: "blur(0.5px)",
                boxShadow: `0 0 10px ${i % 4 === 0 ? '#F5B700' : i % 4 === 1 ? '#00B4D8' : i % 4 === 2 ? '#FF6F61' : '#C77DFF'}40`
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3],
                x: [0, Math.sin(i) * 100, 0],
                y: [0, Math.cos(i) * 50, 0],
                z: [0, 30, 0],
                rotateZ: [0, 360]
              }}
              transition={{
                duration: 6 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Interactive 3D Depth Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
                rgba(245, 183, 0, 0.2) 0%, 
                rgba(0, 180, 216, 0.1) 40%, 
                transparent 70%
              )
            `,
            transform: `
              perspective(1000px) 
              rotateX(${mousePosition.y * 2}deg) 
              rotateY(${mousePosition.x * 2}deg)
              translateZ(${isHovered ? 20 : 0}px)
            `,
            transformStyle: "preserve-3d"
          }}
          animate={{
            scale: isHovered ? 1.02 : 1,
            filter: isHovered ? "blur(0px)" : "blur(1px)"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Cinematic Light Rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute"
              style={{
                left: `${i * 16.67}%`,
                top: "-10%",
                width: "2px",
                height: "120%",
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  rgba(245, 183, 0, 0.4) 30%, 
                  rgba(255, 255, 255, 0.2) 50%, 
                  rgba(0, 180, 216, 0.3) 70%, 
                  transparent 100%
                )`,
                filter: "blur(1px)",
                transformOrigin: "top center"
              }}
              animate={{
                rotateZ: [0, 5, -5, 0],
                scaleY: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* EKNA Logo Integration */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: 0.05,
            transform: "translateZ(-50px)",
            transformStyle: "preserve-3d"
          }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotateZ: [0, 2, -2, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src={exampleImage} 
            alt="EKNA 2025 Background"
            className="w-full h-full object-cover opacity-20"
            style={{
              filter: "blur(3px) brightness(0.7) hue-rotate(15deg)",
              mixBlendMode: "overlay"
            }}
          />
        </motion.div>
      </div>

      {/* Content Layer with Enhanced Typography */}
      <div 
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateZ(${isHovered ? 10 : 0}px)`
        }}
      >
        {children}
      </div>

      {/* Overlay Gradient for Better Text Readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, 
              transparent 0%, 
              rgba(13, 27, 42, 0.3) 50%, 
              rgba(13, 27, 42, 0.6) 100%
            )
          `
        }}
      />
    </div>
  );
}