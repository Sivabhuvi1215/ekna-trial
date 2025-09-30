import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlitchTransitionProps {
  children: ReactNode;
  isExiting?: boolean;
}

export function GlitchTransition({ children, isExiting = false }: GlitchTransitionProps) {
  // Generate random glitch fragments
  const generateGlitchFragments = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      width: Math.random() * 200 + 50,
      height: Math.random() * 8 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 0.2 + Math.random() * 0.4,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
  };

  const glitchFragments = generateGlitchFragments(40);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full h-full"
        initial={isExiting ? { opacity: 1 } : { 
          opacity: 0,
          filter: "blur(20px) brightness(0.3)"
        }}
        animate={isExiting ? { 
          opacity: [1, 0.8, 0], 
          filter: ["blur(0px) brightness(1)", "blur(5px) brightness(0.7)", "blur(20px) brightness(0.3)"]
        } : { 
          opacity: 1,
          filter: "blur(0px) brightness(1)"
        }}
        exit={isExiting ? { 
          opacity: 0,
          filter: "blur(30px) brightness(0)"
        } : undefined}
        transition={{ 
          duration: isExiting ? 0.6 : 0.8, 
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {children}
      </motion.div>

      {/* Glitch Fragment Overlay */}
      {(isExiting || !isExiting) && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {/* Digital Scan Lines */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`scanline-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-teal-cyan to-transparent opacity-60"
              style={{ 
                top: `${i * 5}%`,
                filter: "drop-shadow(0 0 2px #00B4D8)"
              }}
              initial={isExiting ? { 
                scaleX: 1, 
                opacity: 0 
              } : { 
                scaleX: 0, 
                opacity: 0 
              }}
              animate={isExiting ? {
                scaleX: [1, 1.5, 0],
                opacity: [0, 0.8, 0],
                x: [0, Math.random() * 200 - 100, Math.random() * 400 - 200]
              } : {
                scaleX: [0, 1.2, 1],
                opacity: [0, 0.6, 0],
                x: [Math.random() * 400 - 200, Math.random() * 100 - 50, 0]
              }}
              transition={{ 
                duration: 0.4 + Math.random() * 0.3, 
                delay: i * 0.02,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Pixelated Fragments */}
          {glitchFragments.map((fragment) => (
            <motion.div
              key={`fragment-${fragment.id}`}
              className="absolute bg-gradient-to-r from-golden-amber via-teal-cyan to-warm-coral opacity-70"
              style={{
                width: `${fragment.width}px`,
                height: `${fragment.height}px`,
                left: `${fragment.x}%`,
                top: `${fragment.y}%`,
                filter: "blur(0.5px) saturate(1.5)",
                mixBlendMode: "screen"
              }}
              initial={isExiting ? { 
                scale: 1, 
                opacity: 0,
                skewX: 0
              } : { 
                scale: 0, 
                opacity: 0,
                skewX: 0
              }}
              animate={isExiting ? {
                scale: [1, 1.2, 0],
                opacity: [0, 0.8, 0],
                skewX: [0, fragment.direction * 15, fragment.direction * 30],
                x: [0, fragment.direction * 100, fragment.direction * 300],
                y: [0, Math.random() * 50 - 25, Math.random() * 100 - 50]
              } : {
                scale: [0, 1.3, 1],
                opacity: [0, 0.7, 0],
                skewX: [fragment.direction * 30, fragment.direction * 15, 0],
                x: [fragment.direction * 300, fragment.direction * 100, 0],
                y: [Math.random() * 100 - 50, Math.random() * 50 - 25, 0]
              }}
              transition={{ 
                duration: fragment.duration + 0.3, 
                delay: fragment.delay,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Digital Noise Overlay */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(245, 183, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(0, 180, 216, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255, 111, 97, 0.1) 0%, transparent 50%)
              `,
              filter: "blur(1px)"
            }}
            initial={isExiting ? { 
              opacity: 0, 
              scale: 1 
            } : { 
              opacity: 0, 
              scale: 0.8 
            }}
            animate={isExiting ? {
              opacity: [0, 0.4, 0],
              scale: [1, 1.1, 1.2],
              filter: ["blur(1px)", "blur(3px)", "blur(10px)"]
            } : {
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.1, 1],
              filter: ["blur(10px)", "blur(3px)", "blur(1px)"]
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut" 
            }}
          />

          {/* Electric Arcs */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(6)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const endX = Math.random() * 100;
              const endY = Math.random() * 100;
              const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 40;
              const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 40;
              
              return (
                <motion.path
                  key={`arc-${i}`}
                  d={`M ${startX}% ${startY}% Q ${midX}% ${midY}% ${endX}% ${endY}%`}
                  stroke={i % 3 === 0 ? "#F5B700" : i % 3 === 1 ? "#00B4D8" : "#FF6F61"}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ 
                    pathLength: 0, 
                    opacity: 0 
                  }}
                  animate={isExiting ? {
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  } : {
                    pathLength: [0, 1, 0.3],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{ 
                    duration: 0.4 + Math.random() * 0.3, 
                    delay: i * 0.05,
                    ease: "easeOut"
                  }}
                  style={{
                    filter: `drop-shadow(0 0 4px currentColor)`
                  }}
                />
              );
            })}
          </svg>

          {/* Digital Particles */}
          {[...Array(30)].map((_, i) => {
            const colors = ["#F5B700", "#00B4D8", "#FF6F61", "#3A0CA3"];
            const color = colors[i % colors.length];
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: color,
                  boxShadow: `0 0 6px ${color}`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                initial={isExiting ? { 
                  scale: 0, 
                  opacity: 0 
                } : { 
                  scale: 0, 
                  opacity: 0 
                }}
                animate={isExiting ? {
                  scale: [0, 2, 0],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 400],
                  y: [0, (Math.random() - 0.5) * 400]
                } : {
                  scale: [0, 1.5, 0.8],
                  opacity: [0, 0.8, 0],
                  x: [(Math.random() - 0.5) * 400, (Math.random() - 0.5) * 100, 0],
                  y: [(Math.random() - 0.5) * 400, (Math.random() - 0.5) * 100, 0]
                }}
                transition={{ 
                  duration: 0.5 + Math.random() * 0.3, 
                  delay: Math.random() * 0.2,
                  ease: "easeOut"
                }}
              />
            );
          })}

          {/* Chromatic Aberration Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none mix-blend-multiply"
            style={{
              background: "linear-gradient(45deg, rgba(255, 0, 0, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 0, 255, 0.1))",
              filter: "blur(2px)"
            }}
            initial={isExiting ? { 
              opacity: 0,
              x: 0,
              y: 0
            } : { 
              opacity: 0,
              x: 0,
              y: 0
            }}
            animate={isExiting ? {
              opacity: [0, 0.3, 0],
              x: [0, 5, 10],
              y: [0, -3, -8]
            } : {
              opacity: [0, 0.2, 0],
              x: [10, 5, 0],
              y: [-8, -3, 0]
            }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut" 
            }}
          />
        </div>
      )}
    </div>
  );
}