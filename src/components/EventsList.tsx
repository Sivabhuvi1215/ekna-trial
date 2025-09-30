import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Event } from "./EventsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundEffects } from "./BackgroundEffects";

interface EventsListProps {
  events: Event[];
  track: 'technical' | 'non_technical';
  onEventSelect: (event: Event) => void;
  onBack: () => void;
}

export function EventsList({ events, track, onEventSelect, onBack }: EventsListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackTitle = track === 'technical' ? 'Technical Events' : 'Non-Technical Events';
  const trackColor = track === 'technical' ? 'teal-cyan' : 'warm-coral';

  const nextEvent = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, events.length - 1));
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToEvent = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/swipe handling for mobile
  useEffect(() => {
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX - endX > 50) {
        // Swipe left - next event
        setCurrentIndex((prev) => Math.min(prev + 1, events.length - 1));
      } else if (endX - startX > 50) {
        // Swipe right - previous event
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    // Only add touch listeners on mobile
    if (window.innerWidth < 768) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [events.length]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue relative">
      <BackgroundEffects />
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.button
            onClick={onBack}
            className="inline-flex items-center text-soft-white/80 hover:text-golden-amber transition-colors mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: -5 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Gateway
          </motion.button>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-soft-white text-glow mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {trackTitle}
          </motion.h1>

          <motion.p
            className="text-xl text-soft-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {track === 'technical' 
              ? 'Push the boundaries of innovation with these challenging technical competitions'
              : 'Unleash your creativity and showcase your talents in these exciting events'
            }
          </motion.p>
        </div>

        {/* Events Display - Mobile: Horizontal Sliding, Desktop: Vertical Scrolling */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile Horizontal Scrolling View */}
          <div className="md:hidden">
            <div 
              className="flex overflow-x-auto space-x-4 px-4 py-2 smooth-scroll snap-x snap-mandatory hide-scrollbar"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="relative glassmorphic rounded-lg overflow-hidden cursor-pointer group flex-shrink-0 w-80 snap-center"
                  style={{
                    background: "rgba(237, 237, 237, 0.06)",
                    backdropFilter: "blur(15px) saturate(160%)",
                    border: "1px solid rgba(245, 183, 0, 0.3)",
                    boxShadow: `
                      0 0 15px rgba(245, 183, 0, 0.2),
                      inset 0 0 10px rgba(245, 183, 0, 0.1)
                    `
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => onEventSelect(event)}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Mobile Event Image - Adjusted Aspect Ratio */}
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/95 via-midnight-blue/40 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-2 right-2 px-3 py-1 rounded-full font-semibold text-xs ${
                      track === 'technical' 
                        ? 'bg-teal-cyan/90 text-midnight-blue' 
                        : 'bg-warm-coral/90 text-midnight-blue'
                    }`}>
                      {track === 'technical' ? 'Tech' : 'Creative'}
                    </div>

                    {/* Event Index */}
                    <div className="absolute top-2 left-2 text-soft-white/70 font-bold text-sm bg-midnight-blue/60 px-2 py-1 rounded">
                      {String(index + 1).padStart(2, '0')} / {String(events.length).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Mobile Event Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-soft-white text-glow mb-2 line-clamp-2" style={{ fontFamily: "'Cinzel', serif" }}>
                      {event.name}
                    </h3>
                    <p className="text-soft-white/80 text-sm mb-3 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Mobile Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-golden-amber text-xs">
                        <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium truncate">{event.coordinators}</span>
                      </div>
                      
                      <div className="flex items-center text-golden-amber text-xs">
                        <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{event.prizes}</span>
                      </div>
                    </div>

                    {/* Mobile Action Button */}
                    <motion.div
                      className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        track === 'technical'
                          ? 'bg-gradient-to-r from-teal-cyan to-golden-amber text-midnight-blue'
                          : 'bg-gradient-to-r from-warm-coral to-golden-amber text-midnight-blue'
                      } hover:shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Mobile Flowing Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${
                          track === 'technical' ? 'bg-teal-cyan' : 'bg-warm-coral'
                        }`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          x: [-10, 10, -10],
                          y: [-5, 5, -5],
                          scale: [0, 1, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="mt-4 text-center px-4">
              <motion.div
                className="inline-flex items-center text-soft-white/60 text-sm mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="mr-2">Swipe to explore {events.length} events</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
              
              {/* Progress dots */}
              <div className="flex justify-center space-x-1.5">
                {events.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full bg-golden-amber/30"
                    whileInView={{ 
                      backgroundColor: "rgba(245, 183, 0, 0.8)",
                      scale: 1.3,
                      boxShadow: "0 0 8px rgba(245, 183, 0, 0.6)"
                    }}
                    viewport={{ margin: "-40%" }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid View - 2 events per row, Compact Design */}
          <div className="hidden md:block">
            <div className="max-h-[70vh] overflow-y-auto pr-4 smooth-scroll">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="relative glassmorphic rounded-lg overflow-hidden cursor-pointer group hover-lift"
                    style={{
                      background: "rgba(237, 237, 237, 0.06)",
                      backdropFilter: "blur(15px) saturate(160%)",
                      border: "1px solid rgba(245, 183, 0, 0.3)",
                      boxShadow: `
                        0 0 15px rgba(245, 183, 0, 0.2),
                        inset 0 0 10px rgba(245, 183, 0, 0.1)
                      `
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => onEventSelect(event)}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `
                        0 0 25px rgba(245, 183, 0, 0.4),
                        0 0 40px rgba(0, 180, 216, 0.2),
                        inset 0 0 15px rgba(245, 183, 0, 0.15)
                      `
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Glowing Border Animation */}
                    <div className="absolute inset-0 rounded-lg pointer-events-none">
                      <div 
                        className="absolute inset-0 rounded-lg opacity-60"
                        style={{
                          background: `linear-gradient(45deg, 
                            rgba(245, 183, 0, 0.3) 0%, 
                            rgba(0, 180, 216, 0.2) 25%, 
                            rgba(255, 111, 97, 0.2) 50%, 
                            rgba(245, 183, 0, 0.3) 75%, 
                            rgba(0, 180, 216, 0.2) 100%
                          )`,
                          backgroundSize: "200% 200%",
                          animation: "holographic 4s linear infinite",
                          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          maskComposite: "subtract",
                          padding: "1px"
                        }}
                      />
                    </div>

                    {/* Compact Event Image */}
                    <div className="relative h-24 overflow-hidden">
                      <ImageWithFallback
                        src={event.imageUrl}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/95 via-midnight-blue/40 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className={`absolute top-1 right-1 px-2 py-0.5 rounded-full font-semibold text-xs ${
                        track === 'technical' 
                          ? 'bg-teal-cyan/90 text-midnight-blue' 
                          : 'bg-warm-coral/90 text-midnight-blue'
                      }`}>
                        {track === 'technical' ? 'Tech' : 'Creative'}
                      </div>

                      {/* Event Index */}
                      <div className="absolute top-1 left-1 text-soft-white/70 font-bold text-xs bg-midnight-blue/60 px-1.5 py-0.5 rounded">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Ultra Compact Event Content */}
                    <div className="p-3">
                      <h3 className="text-base font-bold text-soft-white text-glow mb-1.5 line-clamp-1" style={{ fontFamily: "'Cinzel', serif" }}>
                        {event.name}
                      </h3>
                      <p className="text-soft-white/75 text-xs mb-2 line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Ultra Compact Event Details */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-golden-amber text-xs">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium truncate">{event.coordinators}</span>
                        </div>
                        
                        <div className="flex items-center text-golden-amber text-xs">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">{event.prizes}</span>
                        </div>
                      </div>

                      {/* Compact Action Button */}
                      <motion.div
                        className={`inline-flex items-center px-3 py-1.5 rounded-md font-semibold text-xs transition-all duration-300 ${
                          track === 'technical'
                            ? 'bg-gradient-to-r from-teal-cyan to-golden-amber text-midnight-blue'
                            : 'bg-gradient-to-r from-warm-coral to-golden-amber text-midnight-blue'
                        } hover:shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Details
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Flowing Particle Effects */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 rounded-full ${
                            track === 'technical' ? 'bg-teal-cyan' : 'bg-warm-coral'
                          }`}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            x: [-10, 10, -10],
                            y: [-5, 5, -5],
                            scale: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Grid Indicator */}
            <div className="mt-6 text-center">
              <motion.div
                className="inline-flex items-center text-soft-white/60 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="mr-2">Browse all {events.length} events • Scroll to see more</span>
                <motion.div
                  className="w-2 h-2 rounded-full bg-golden-amber"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="md:hidden mt-4 text-center">
            <motion.div
              className="inline-flex items-center text-soft-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="mr-2">Swipe to browse events</span>
              <motion.div
                className="w-2 h-2 rounded-full bg-golden-amber"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-soft-white/80 mb-6">
            Ready to participate? Register for multiple events and showcase your skills!
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-golden-amber to-warm-coral text-midnight-blue font-bold rounded-lg text-lg hover-lift cinematic-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register for Events
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}