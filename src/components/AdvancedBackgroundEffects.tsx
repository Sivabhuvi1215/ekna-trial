import { motion } from "motion/react";

export function AdvancedBackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full opacity-10" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            background: `
              linear-gradient(rgba(245, 183, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 183, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        >
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="rgba(245, 183, 0, 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Enhanced Floating Geometric Shapes */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          {i % 3 === 0 && (
            <div 
              className="w-full h-full border border-teal-cyan/20 rotate-45"
              style={{
                background: "linear-gradient(45deg, rgba(0, 180, 216, 0.1), transparent)"
              }}
            />
          )}
          {i % 3 === 1 && (
            <div 
              className="w-full h-full rounded-full border border-golden-amber/20"
              style={{
                background: "radial-gradient(circle, rgba(245, 183, 0, 0.1), transparent)"
              }}
            />
          )}
          {i % 3 === 2 && (
            <div 
              className="w-full h-full"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                background: "linear-gradient(180deg, rgba(255, 111, 97, 0.1), transparent)",
                border: "1px solid rgba(255, 111, 97, 0.2)"
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Curved Energy Streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`curved-stream-${i}`}
          className="absolute opacity-20"
          style={{
            left: `${5 + i * 12}%`,
            top: "0%",
            width: "2px",
            height: "100%",
          }}
        >
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 20 800" 
            className="absolute inset-0"
          >
            <defs>
              <linearGradient id={`curveGradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="rgba(245, 183, 0, 0.6)" />
                <stop offset="50%" stopColor="rgba(0, 180, 216, 0.8)" />
                <stop offset="80%" stopColor="rgba(255, 111, 97, 0.6)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <motion.path
              d={`M10,0 Q${15 + Math.sin(i) * 5},200 ${5 + Math.cos(i) * 5},400 Q${15 + Math.sin(i + 1) * 5},600 10,800`}
              stroke={`url(#curveGradient-${i})`}
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  `M10,0 Q${15 + Math.sin(i) * 5},200 ${5 + Math.cos(i) * 5},400 Q${15 + Math.sin(i + 1) * 5},600 10,800`,
                  `M10,0 Q${5 + Math.cos(i) * 5},200 ${15 + Math.sin(i) * 5},400 Q${5 + Math.cos(i + 1) * 5},600 10,800`,
                  `M10,0 Q${15 + Math.sin(i) * 5},200 ${5 + Math.cos(i) * 5},400 Q${15 + Math.sin(i + 1) * 5},600 10,800`
                ],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Enhanced Orbital Particles */}
      {[...Array(35)].map((_, i) => {
        const radius = 100 + Math.random() * 200;
        const duration = 10 + Math.random() * 15;
        
        return (
          <motion.div
            key={`orbital-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(245, 183, 0, 0.8)' :
                i % 3 === 1 ? 'rgba(0, 180, 216, 0.8)' :
                'rgba(255, 111, 97, 0.8)'
              }, transparent)`,
              left: "50%",
              top: "50%",
              boxShadow: `0 0 10px ${
                i % 3 === 0 ? 'rgba(245, 183, 0, 0.6)' :
                i % 3 === 1 ? 'rgba(0, 180, 216, 0.6)' :
                'rgba(255, 111, 97, 0.6)'
              }`
            }}
            animate={{
              x: [
                Math.cos(0) * radius,
                Math.cos(Math.PI * 0.5) * radius,
                Math.cos(Math.PI) * radius,
                Math.cos(Math.PI * 1.5) * radius,
                Math.cos(Math.PI * 2) * radius,
              ],
              y: [
                Math.sin(0) * radius,
                Math.sin(Math.PI * 0.5) * radius,
                Math.sin(Math.PI) * radius,
                Math.sin(Math.PI * 1.5) * radius,
                Math.sin(Math.PI * 2) * radius,
              ],
              scale: [1, 1.5, 1, 0.5, 1],
              opacity: [0.3, 0.8, 0.3, 0.1, 0.3],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * duration,
            }}
          />
        );
      })}

      {/* Cinematic Light Rays */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${25 * i}%`,
              top: "-10%",
              width: "2px",
              height: "120%",
              background: `linear-gradient(to bottom,
                transparent 0%,
                rgba(245, 183, 0, 0.8) 30%,
                rgba(0, 180, 216, 0.6) 50%,
                rgba(255, 111, 97, 0.4) 70%,
                transparent 100%
              )`,
              transform: `rotate(${15 + i * 5}deg)`,
              transformOrigin: "center top",
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.5, 1, 0.5],
              rotate: [15 + i * 5, 20 + i * 5, 15 + i * 5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Nebula Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 20% 80%, rgba(245, 183, 0, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(0, 180, 216, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 40%, rgba(255, 111, 97, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            background: [
              `radial-gradient(ellipse at 20% 80%, rgba(245, 183, 0, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 80% 20%, rgba(0, 180, 216, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 40% 40%, rgba(255, 111, 97, 0.1) 0%, transparent 50%)`,
              `radial-gradient(ellipse at 80% 20%, rgba(245, 183, 0, 0.1) 0%, transparent 60%),
               radial-gradient(ellipse at 40% 80%, rgba(0, 180, 216, 0.2) 0%, transparent 40%),
               radial-gradient(ellipse at 60% 60%, rgba(255, 111, 97, 0.15) 0%, transparent 50%)`,
              `radial-gradient(ellipse at 20% 80%, rgba(245, 183, 0, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 80% 20%, rgba(0, 180, 216, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 40% 40%, rgba(255, 111, 97, 0.1) 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* DNA Helix Structure */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20">
        <svg width="100" height="400" viewBox="0 0 100 400">
          <defs>
            <linearGradient id="helixGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(245, 183, 0, 0.8)" />
              <stop offset="50%" stopColor="rgba(0, 180, 216, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 111, 97, 0.8)" />
            </linearGradient>
          </defs>
          
          {[...Array(20)].map((_, i) => {
            const y = i * 20;
            const rotation = (i * 18) % 360;
            const x1 = 50 + Math.cos((rotation * Math.PI) / 180) * 30;
            const x2 = 50 - Math.cos((rotation * Math.PI) / 180) * 30;
            
            return (
              <g key={i}>
                <motion.circle
                  cx={x1}
                  cy={y}
                  r="3"
                  fill="url(#helixGradient)"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                />
                <motion.circle
                  cx={x2}
                  cy={y}
                  r="3"
                  fill="url(#helixGradient)"
                  animate={{ opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                />
                <motion.line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="url(#helixGradient)"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, delay: i * 0.15, repeat: Infinity }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Flowing Particle Streams */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`flowing-particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i % 4 === 0 ? 'rgba(245, 183, 0, 0.9)' :
              i % 4 === 1 ? 'rgba(0, 180, 216, 0.9)' :
              i % 4 === 2 ? 'rgba(255, 111, 97, 0.9)' :
              'rgba(58, 12, 163, 0.9)'
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 8px ${
              i % 4 === 0 ? 'rgba(245, 183, 0, 0.8)' :
              i % 4 === 1 ? 'rgba(0, 180, 216, 0.8)' :
              i % 4 === 2 ? 'rgba(255, 111, 97, 0.8)' :
              'rgba(58, 12, 163, 0.8)'
            }`
          }}
          animate={{
            x: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
            ],
            y: [
              Math.random() * 150 - 75,
              Math.random() * 150 - 75,
              Math.random() * 150 - 75,
              Math.random() * 150 - 75,
            ],
            scale: [0.5, 1.2, 0.8, 1.5, 0.3],
            opacity: [0.2, 0.8, 0.4, 0.9, 0.1],
            rotate: [0, 180, 360, 540, 720],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        />
      ))}

      {/* Circuit Board Pattern */}
      <div className="absolute left-10 bottom-10 opacity-15">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
              <rect width="40" height="40" fill="none" />
              <path d="M0 20h40M20 0v40" stroke="rgba(245, 183, 0, 0.5)" strokeWidth="1" />
              <circle cx="20" cy="20" r="3" fill="rgba(0, 180, 216, 0.7)" />
              <circle cx="0" cy="20" r="2" fill="rgba(255, 111, 97, 0.6)" />
              <circle cx="40" cy="20" r="2" fill="rgba(255, 111, 97, 0.6)" />
              <circle cx="20" cy="0" r="2" fill="rgba(255, 111, 97, 0.6)" />
              <circle cx="20" cy="40" r="2" fill="rgba(255, 111, 97, 0.6)" />
            </pattern>
          </defs>
          <motion.rect 
            width="200" 
            height="200" 
            fill="url(#circuit)"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>
    </div>
  );
}