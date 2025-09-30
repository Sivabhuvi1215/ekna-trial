import { motion } from "motion/react";
import { BackgroundEffects } from "./BackgroundEffects";

interface EventsGatewayProps {
  onSelectTrack: (track: 'technical' | 'non_technical') => void;
}

export function EventsGateway({ onSelectTrack }: EventsGatewayProps) {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue relative overflow-hidden">
      <BackgroundEffects />
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-golden-amber to-transparent opacity-20"
            style={{
              left: `${(i * 3.33) % 100}%`,
              top: `${(i * 5) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-soft-white text-glow mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Choose Your Track
        </motion.h1>

        <motion.p
          className="text-xl text-soft-white/80 mb-16 text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Step into the world of innovation and discover events that match your passion
        </motion.p>

        {/* Gateway Buttons */}
        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-5xl">
          {/* Technical Events Button */}
          <motion.button
            onClick={() => onSelectTrack('technical')}
            className="relative group flex-1 h-72 bg-gradient-to-br from-royal-purple to-midnight-blue glassmorphic rounded-2xl overflow-hidden hover-lift spotlight energy-lines electric-border"
            initial={{ opacity: 0, x: -100, rotateY: -45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ 
              scale: 1.03,
              rotateX: 5,
              rotateY: -2
            }}
            whileTap={{ scale: 0.97 }}
            style={{ perspective: 1000 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-teal-cyan rounded-full"
                  style={{
                    left: `${(i * 7) % 100}%`,
                    top: `${(i * 11) % 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-teal-cyan to-golden-amber rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10 text-midnight-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-soft-white text-glow mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Technical Events
              </h2>
              
              <p className="text-soft-white/80 mb-6">
                Challenge your technical skills with cutting-edge competitions, hackathons, and innovation showcases.
              </p>
              
              <div className="text-golden-amber font-semibold group-hover:text-teal-cyan transition-colors">
                10 Exciting Events →
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(45deg, rgba(0, 180, 216, 0.1), rgba(245, 183, 0, 0.1))",
              }}
            />
          </motion.button>

          {/* Non-Technical Events Button */}
          <motion.button
            onClick={() => onSelectTrack('non_technical')}
            className="relative group flex-1 h-72 bg-gradient-to-br from-royal-purple to-midnight-blue glassmorphic rounded-2xl overflow-hidden hover-lift spotlight energy-lines electric-border holographic"
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ 
              scale: 1.03,
              rotateX: -5,
              rotateY: 2
            }}
            whileTap={{ scale: 0.97 }}
            style={{ perspective: 1000 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-warm-coral rounded-full"
                  style={{
                    left: `${(i * 8) % 100}%`,
                    top: `${(i * 9) % 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-warm-coral to-golden-amber rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-10 h-10 text-midnight-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-soft-white text-glow mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Non-Technical Events
              </h2>
              
              <p className="text-soft-white/80 mb-6">
                Express your creativity and showcase your talents in gaming, arts, debates, and entertainment.
              </p>
              
              <div className="text-golden-amber font-semibold group-hover:text-warm-coral transition-colors">
                10 Amazing Events →
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(45deg, rgba(255, 111, 97, 0.1), rgba(245, 183, 0, 0.1))",
              }}
            />
          </motion.button>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-golden-amber rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}