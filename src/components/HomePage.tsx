import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundEffects } from "./BackgroundEffects";
import { CinematicHeroBackground } from "./CinematicHeroBackground";
import { NewFooterLayout } from "./NewFooterLayout";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const achievements = [
    { number: "200+", label: "Participants in last year's event" },
    { number: "15+", label: "Faculty & Student organizers" },
    { number: "10+", label: "National-level events" },
  ];

  const sponsors = [
    "TechCorp Solutions",
    "Innovation Labs",
    "Future Systems",
    "Digital Dynamics",
    "PowerTech Industries",
  ];

  return (
    <div className="pt-20 relative">
      {/* Hero Section with Cinematic Background */}
      <CinematicHeroBackground className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-golden-amber to-warm-coral relative overflow-hidden">
              <div className="w-full h-full rounded-full bg-midnight-blue/20 flex items-center justify-center backdrop-blur-sm">
                <span 
                  className="text-5xl font-bold text-golden-amber"
                  style={{ 
                    fontFamily: "'Orbitron', serif",
                    textShadow: "0 0 30px rgba(245, 183, 0, 0.8)"
                  }}
                >
                  E
                </span>
              </div>
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-golden-amber/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Elegant Title */}
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            style={{ 
              fontFamily: "'Orbitron', 'Cinzel', serif",
              background: `linear-gradient(135deg, 
                #F5B700 0%, 
                #FFD700 25%, 
                #FFF8DC 50%, 
                #FFD700 75%, 
                #F5B700 100%
              )`,
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(245, 183, 0, 0.6))",
              letterSpacing: "0.1em"
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `linear-gradient(135deg, 
                  #F5B700 0%, 
                  #FFD700 25%, 
                  #FFF8DC 50%, 
                  #FFD700 75%, 
                  #F5B700 100%
                )`,
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              EKNA 2025
            </motion.span>
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p 
              className="text-xl md:text-2xl lg:text-3xl text-soft-white/90 mb-2"
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: "300",
                letterSpacing: "0.05em"
              }}
            >
              Electrical & Electronics Engineering
            </p>
            <p 
              className="text-lg md:text-xl text-golden-amber/80"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: "400"
              }}
            >
              National Level Technical Symposium
            </p>
          </motion.div>

        </div>
      </CinematicHeroBackground>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-midnight-blue to-royal-purple relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-soft-white text-glow mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            About the Symposium
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-soft-white/90 leading-relaxed">
                Welcome to <strong className="text-golden-amber">EKNA 2025</strong>, the national-level technical symposium organized by the Department of Electrical and Electronics Engineering, Anna University Regional Campus, Coimbatore.
              </p>
              <p className="text-lg text-soft-white/90 leading-relaxed">
                Under the theme <strong className="text-teal-cyan">"Power • Innovation • Future"</strong>, we aim to provide a dynamic platform for students, researchers, and professionals to exchange ideas and showcase their talents.
              </p>
              <p className="text-lg text-soft-white/90 leading-relaxed mb-8">
                Our symposium features insightful keynote sessions, challenging technical events, and a chance to network with pioneers in the field. Join us to ignite your passion and power the future of technology.
              </p>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-royal-purple to-midnight-blue rounded-lg glassmorphic flex items-center justify-center cinematic-glow">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581091226649-bf2f2b7c4a24"
                  alt="EKNA 2025 Technology"
                  className="w-full h-full object-cover rounded-lg opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 to-transparent rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-golden-amber rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-midnight-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-golden-amber font-semibold">EKNA 2025 Teaser</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Centered CTA Buttons Section */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <motion.button
                onClick={() => onNavigate('events')}
                className="relative group px-8 py-4 bg-gradient-to-r from-golden-amber via-warm-coral to-golden-amber text-midnight-blue font-bold rounded-xl text-lg overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #F5B700 0%, #FF6F61 50%, #00B4D8 100%)",
                  backgroundSize: "300% 300%",
                  boxShadow: `
                    0 0 30px rgba(245, 183, 0, 0.7),
                    0 8px 32px rgba(255, 111, 97, 0.4),
                    inset 0 0 20px rgba(245, 183, 0, 0.3)
                  `,
                  border: "2px solid rgba(245, 183, 0, 0.9)",
                  transform: "perspective(1000px) rotateX(0deg)"
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotateX: 5,
                  rotateY: -2,
                  backgroundPosition: "100% 0%",
                  boxShadow: `
                    0 0 50px rgba(245, 183, 0, 1),
                    0 12px 48px rgba(0, 180, 216, 0.6),
                    0 0 100px rgba(255, 111, 97, 0.4),
                    inset 0 0 40px rgba(245, 183, 0, 0.4)
                  `
                }}
                whileTap={{ scale: 0.92, rotateX: -2 }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  rotateX: [0, 2, 0],
                  boxShadow: [
                    "0 0 30px rgba(245, 183, 0, 0.7), 0 8px 32px rgba(255, 111, 97, 0.4)",
                    "0 0 40px rgba(0, 180, 216, 0.8), 0 12px 40px rgba(245, 183, 0, 0.6)",
                    "0 0 30px rgba(245, 183, 0, 0.7), 0 8px 32px rgba(255, 111, 97, 0.4)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* 3D Depth Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 rounded-xl pointer-events-none" />
                
                {/* Animated Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[300%] transition-transform duration-1000" />
                
                {/* Button Content with 3D Transform */}
                <div className="relative flex items-center transform transition-transform duration-300 group-hover:translateZ-2">
                  <motion.span 
                    className="mr-3 text-shadow-sm"
                    animate={{ 
                      textShadow: [
                        "2px 2px 4px rgba(0,0,0,0.3)",
                        "1px 1px 8px rgba(0,0,0,0.5)",
                        "2px 2px 4px rgba(0,0,0,0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎯 View Events
                  </motion.span>
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      x: [0, 6, 0],
                      rotateZ: [0, 15, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </div>

                {/* 3D Energy Orbs */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${
                          i % 3 === 0 ? '#F5B700' : i % 3 === 1 ? '#00B4D8' : '#FF6F61'
                        }, transparent)`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        filter: "blur(0.5px)"
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 0.8, 0],
                        rotateZ: [0, 360],
                        y: [-15, -30, -15],
                        x: [0, Math.sin(i) * 10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>

                {/* Edge Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(245, 183, 0, 0.4), transparent)",
                    filter: "blur(12px)",
                    transform: "scale(1.1)"
                  }}
                />
              </motion.button>
              
              <motion.button
                onClick={() => onNavigate('register')}
                className="relative group px-8 py-4 bg-transparent text-golden-amber font-bold rounded-xl text-lg overflow-hidden"
                style={{
                  border: "3px solid transparent",
                  background: "linear-gradient(45deg, rgba(13, 27, 42, 0.8), rgba(58, 12, 163, 0.6)) padding-box, linear-gradient(45deg, #F5B700, #00B4D8, #FF6F61, #F5B700) border-box",
                  backgroundSize: "100% 100%, 300% 300%",
                  backdropFilter: "blur(15px) saturate(150%)",
                  boxShadow: `
                    0 0 30px rgba(245, 183, 0, 0.5),
                    inset 0 0 25px rgba(245, 183, 0, 0.1),
                    0 8px 32px rgba(0, 0, 0, 0.3)
                  `,
                  transform: "perspective(1000px) rotateX(0deg)"
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotateX: -5,
                  rotateY: 2,
                  backgroundColor: "rgba(245, 183, 0, 0.15)",
                  boxShadow: `
                    0 0 50px rgba(245, 183, 0, 0.8),
                    0 0 100px rgba(0, 180, 216, 0.5),
                    0 0 150px rgba(255, 111, 97, 0.3),
                    inset 0 0 40px rgba(245, 183, 0, 0.2),
                    0 12px 48px rgba(0, 0, 0, 0.4)
                  `
                }}
                whileTap={{ scale: 0.92, rotateX: 2 }}
                animate={{
                  backgroundPosition: ["0% 0%, 0% 0%", "100% 100%, 100% 0%", "0% 0%, 0% 0%"],
                  rotateX: [0, -2, 0],
                  boxShadow: [
                    "0 0 30px rgba(245, 183, 0, 0.5), inset 0 0 25px rgba(245, 183, 0, 0.1)",
                    "0 0 40px rgba(0, 180, 216, 0.7), inset 0 0 30px rgba(0, 180, 216, 0.15)",
                    "0 0 35px rgba(255, 111, 97, 0.6), inset 0 0 25px rgba(255, 111, 97, 0.1)",
                    "0 0 30px rgba(245, 183, 0, 0.5), inset 0 0 25px rgba(245, 183, 0, 0.1)"
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Holographic Matrix Effect */}
                <div className="absolute inset-0 rounded-xl pointer-events-none">
                  <div 
                    className="absolute inset-1 rounded-lg opacity-40"
                    style={{
                      background: `conic-gradient(
                        from 0deg at 50% 50%,
                        rgba(245, 183, 0, 0.3) 0deg,
                        rgba(0, 180, 216, 0.3) 90deg,
                        rgba(255, 111, 97, 0.3) 180deg,
                        rgba(58, 12, 163, 0.3) 270deg,
                        rgba(245, 183, 0, 0.3) 360deg
                      )`,
                      animation: "spin 8s linear infinite",
                      filter: "blur(8px)"
                    }}
                  />
                </div>

                {/* Scanning Line Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(245, 183, 0, 0.6), transparent)",
                    animation: "scan-line 2s ease-in-out infinite",
                    height: "2px",
                    top: "50%",
                    transform: "translateY(-50%)"
                  }}
                />

                {/* Button Content with Cyberpunk Effect */}
                <div className="relative flex items-center transform transition-transform duration-300 group-hover:translateZ-2">
                  <motion.span 
                    className="mr-3 relative"
                    animate={{ 
                      textShadow: [
                        "0 0 5px rgba(245, 183, 0, 0.8)",
                        "0 0 15px rgba(0, 180, 216, 0.8)",
                        "0 0 10px rgba(255, 111, 97, 0.8)",
                        "0 0 5px rgba(245, 183, 0, 0.8)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🚀 Register Now
                  </motion.span>
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                </div>

                {/* Cyberpunk Data Streams */}
                <div className="absolute inset-0 pointer-events-none opacity-60">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-full"
                      style={{
                        left: `${(i * 7) % 100}%`,
                        background: `linear-gradient(180deg, 
                          transparent, 
                          ${i % 3 === 0 ? '#F5B700' : i % 3 === 1 ? '#00B4D8' : '#FF6F61'}40, 
                          transparent
                        )`,
                        filter: "blur(0.5px)"
                      }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scaleY: [0, 1, 0],
                        y: ["-100%", "0%", "100%"]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>

                {/* Corner Quantum Dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${
                        i % 3 === 0 ? '#F5B700' : i % 3 === 1 ? '#00B4D8' : '#FF6F61'
                      }, transparent)`,
                      top: i < 4 ? `${(i * 25) % 100}%` : 'auto',
                      bottom: i >= 4 ? `${((i - 4) * 25) % 100}%` : 'auto',
                      left: i % 2 === 0 ? `${(i * 12.5) % 100}%` : 'auto',
                      right: i % 2 === 1 ? `${((i - 1) * 12.5) % 100}%` : 'auto',
                      filter: "drop-shadow(0 0 4px currentColor)"
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.3, 1, 0.3],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.375,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* 3D Depth Shadow */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,0,0,0.2), transparent, rgba(255,255,255,0.1))",
                    transform: "translateZ(-10px)",
                    filter: "blur(20px)"
                  }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-royal-purple to-midnight-blue">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-soft-white text-glow mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Achievements
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center glassmorphic p-8 rounded-xl hover-lift"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-golden-amber text-glow mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                >
                  {achievement.number}
                </motion.div>
                <p className="text-soft-white/90 text-lg">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-to-b from-midnight-blue to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-soft-white text-glow mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Sponsors
          </motion.h2>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-12"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 glassmorphic rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="text-golden-amber font-semibold text-sm text-center px-4">
                    {sponsor}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="glassmorphic p-12 rounded-2xl cinematic-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-golden-amber text-glow mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              A Thank You to Our Organizers
            </h3>
            <p className="text-lg text-soft-white/90 leading-relaxed">
              We extend our heartfelt gratitude to our dedicated faculty and student coordinators. Your hard work and commitment have made EKNA 2025 possible. We appreciate your tireless efforts in empowering the next generation of innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* New Footer Layout - Map, Logo, Coordinators */}
      <NewFooterLayout />
    </div>
  );
}