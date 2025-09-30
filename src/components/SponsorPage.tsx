import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SponsorPageProps {
  onBack: () => void;
}

export function SponsorPage({ onBack }: SponsorPageProps) {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue relative overflow-hidden">
      {/* Enhanced Background Animations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Sponsor Logos */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sponsor-particle-${i}`}
            className="absolute w-8 h-8 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? '#F5B700' : i % 3 === 1 ? '#00B4D8' : '#FF6F61'
              }, transparent)`,
            }}
            animate={{
              y: [-50, 50, -30, 40],
              x: [-30, 30, -20, 25],
              rotate: [0, 180, -90, 270, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5],
              opacity: [0.1, 0.3, 0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Sponsor Energy Waves */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute rounded-full border border-golden-amber/20"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Sponsor Brand Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`brand-element-${i}`}
            className="absolute w-2 h-20 bg-gradient-to-b from-golden-amber/40 to-transparent"
            style={{
              left: `${10 + i * 11}%`,
              top: `${Math.random() * 60 + 20}%`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
            }}
            animate={{
              scaleY: [0.5, 1.5, 0.8, 1.2, 0.5],
              opacity: [0.2, 0.7, 0.3, 0.8, 0.2],
              rotate: [0, 90, -45, 135, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Dynamic Partnership Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={`connection-${i}`}
              cx={`${20 + i * 15}%`}
              cy={`${30 + i * 10}%`}
              r="2"
              fill="#F5B700"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0.5, 1.2, 0],
                opacity: [0, 0.8, 0.3, 0.9, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {[...Array(4)].map((_, i) => (
            <motion.path
              key={`connection-line-${i}`}
              d={`M ${100 + i * 200} ${150 + i * 100} Q ${300 + i * 100} ${100 + i * 80} ${500 + i * 150} ${200 + i * 120}`}
              stroke="#00B4D8"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.button
            onClick={onBack}
            className="inline-flex items-center text-soft-white/80 hover:text-golden-amber transition-colors mb-6 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: -5 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </motion.button>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-soft-white text-glow mb-4 md:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Sponsors
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-soft-white/80 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powering Innovation and Excellence in Technical Symposium
          </motion.p>
        </div>

        {/* Main Sponsor Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative glassmorphic rounded-3xl overflow-hidden hover-lift group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Sponsor Image */}
            <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
              <ImageWithFallback
                src="https://imgs.search.brave.com/pM7jaWYMQ0sAPG7XWMHCKXrekCIr0VFJxp0X0thLhIM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tLzA1NTcw/OWJkLTdlZDctNGEw/ZS05NzQ2LTIxMzEz/MTY1ZjRmZi9Ccm9j/aHVyZTIuanBn"
                alt="EKNA 2025 Main Sponsor"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 via-transparent to-royal-purple/20" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-golden-amber via-teal-cyan to-warm-coral rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
            </div>

            {/* Sponsor Information */}
            <div className="p-6 md:p-8 lg:p-12">
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-soft-white text-glow mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Title Sponsor
              </motion.h2>
              
              <motion.p
                className="text-base md:text-lg text-soft-white/80 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                We are grateful to our title sponsor for their continued support in making EKNA 2025 
                a premier technical symposium. Their commitment to fostering innovation and 
                excellence in engineering education has been instrumental in our success.
              </motion.p>

              {/* Sponsor Benefits */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {[
                  { icon: "🏆", title: "Innovation Partner", desc: "Supporting cutting-edge research" },
                  { icon: "🎯", title: "Excellence Award", desc: "Recognizing outstanding talent" },
                  { icon: "🚀", title: "Future Focus", desc: "Investing in tomorrow's engineers" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="glassmorphic p-4 md:p-6 rounded-xl text-center hover-lift"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl md:text-3xl mb-2">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-golden-amber mb-2">{benefit.title}</h3>
                    <p className="text-sm text-soft-white/70">{benefit.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`floating-${i}`}
                  className="absolute w-3 h-3 rounded-full bg-golden-amber/30"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [-20, 20, -15, 15],
                    x: [-10, 10, -8, 12],
                    opacity: [0.3, 0.8, 0.4, 0.9],
                    scale: [0.8, 1.3, 0.9, 1.1],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Additional Sponsors Section */}
          <motion.div
            className="mt-12 md:mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-soft-white text-glow mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Partnership Opportunities
            </h3>
            
            <p className="text-base md:text-lg text-soft-white/80 mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of engineering education. Become a sponsor and be part of 
              India's most prestigious technical symposium.
            </p>

            <motion.button
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-golden-amber to-warm-coral text-midnight-blue font-bold rounded-lg text-base md:text-lg hover-lift cinematic-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Sponsor
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Sponsor Background Effects */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-blue/40 to-transparent pointer-events-none" />
      
      {/* Sponsor Signature Glow */}
      <motion.div
        className="fixed top-1/2 left-1/2 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 183, 0, 0.3) 0%, rgba(0, 180, 216, 0.2) 50%, transparent 100%)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.4, 0.9, 1.3, 1],
          opacity: [0.2, 0.4, 0.1, 0.5, 0.2],
          rotate: [0, 180, -90, 270, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}