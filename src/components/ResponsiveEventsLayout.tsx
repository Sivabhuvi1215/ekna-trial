import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Event } from "./EventsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundEffects } from "./BackgroundEffects";

interface ResponsiveEventsLayoutProps {
  events: Event[];
  track: 'technical' | 'non_technical';
  onEventSelect: (event: Event) => void;
  onBack: () => void;
}

export function ResponsiveEventsLayout({ events, track, onEventSelect, onBack }: ResponsiveEventsLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const trackTitle = track === 'technical' ? 'Technical Events' : 'Non-Technical Events';
  const trackColor = track === 'technical' ? 'teal-cyan' : 'warm-coral';

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    // Scroll to the current item
    if (scrollContainerRef.current) {
      const cardWidth = 280; // Approximate card width
      const scrollPosition = currentIndex * (cardWidth + 16); // 16px gap
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Auto-update currentIndex based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const cardWidth = 280;
    const newIndex = Math.round(scrollLeft / (cardWidth + 16));
    setCurrentIndex(Math.min(newIndex, events.length - 1));
  };

  const EventCard = ({ event, index }: { event: Event; index: number }) => (
    <motion.div
      className={`group relative bg-gradient-to-br from-royal-purple/30 to-midnight-blue/50 glassmorphic rounded-2xl overflow-hidden hover-lift cursor-pointer ${
        isMobile ? 'flex-shrink-0 w-72 mx-2 mobile-card-enhanced' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onEventSelect(event)}
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={isMobile ? { scrollSnapAlign: 'center' } : {}}
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={event.imageUrl}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          track === 'technical' 
            ? 'bg-teal-cyan text-midnight-blue' 
            : 'bg-warm-coral text-midnight-blue'
        }`}>
          {track === 'technical' ? 'Technical' : 'Creative'}
        </div>

        {/* Fee Badge */}
        {event.fee && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-golden-amber text-midnight-blue">
            ₹{event.fee}
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-soft-white text-glow mb-3 line-clamp-2"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {event.name}
        </motion.h3>

        <p className="text-soft-white/80 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-golden-amber text-sm">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{event.coordinators}</span>
          </div>
          
          <div className="flex items-center text-golden-amber text-sm">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{event.prizes}</span>
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          className={`w-full py-3 px-4 rounded-lg text-center font-semibold transition-all duration-300 ${
            track === 'technical'
              ? 'bg-gradient-to-r from-teal-cyan to-golden-amber text-midnight-blue'
              : 'bg-gradient-to-r from-warm-coral to-golden-amber text-midnight-blue'
          } group-hover:shadow-lg`}
          whileHover={{ scale: 1.02 }}
        >
          View Details →
        </motion.div>
      </div>

      {/* Hover Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              track === 'technical' ? 'bg-teal-cyan' : 'bg-warm-coral'
            }`}
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Glowing Border Effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
        ${track === 'technical' 
          ? 'shadow-[0_0_30px_rgba(0,180,216,0.5)]' 
          : 'shadow-[0_0_30px_rgba(255,111,97,0.5)]'
        }`} 
      />
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue">
      <BackgroundEffects />
      <div className="max-w-7xl mx-auto px-6 py-12">
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

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        )}

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="relative">
            {/* Carousel Container */}
            <div 
              ref={scrollContainerRef}
              className="mobile-enhanced-scroll flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onScroll={handleScroll}
            >
              {events.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {events.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    if (scrollContainerRef.current) {
                      const cardWidth = 280;
                      const scrollPosition = index * (cardWidth + 16);
                      scrollContainerRef.current.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? track === 'technical' 
                        ? 'bg-teal-cyan shadow-lg' 
                        : 'bg-warm-coral shadow-lg'
                      : 'bg-soft-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Current Event Counter */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-soft-white/60 text-sm">
                {currentIndex + 1} of {events.length} events
              </span>
            </motion.div>
          </div>
        )}

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
            onClick={() => {
              // Navigate to registration - this would be passed as a prop or handled by parent
              console.log('Navigate to registration');
            }}
          >
            Register for Events
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

ResponsiveEventsLayout.displayName = 'ResponsiveEventsLayout';