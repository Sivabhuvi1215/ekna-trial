import { motion } from "motion/react";
import { Event } from "./EventsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EventDetailProps {
  event: Event;
  onBack: () => void;
  onRegister: () => void;
}

export function EventDetail({ event, onBack, onRegister }: EventDetailProps) {
  const trackColor = event.category === 'technical' ? 'teal-cyan' : 'warm-coral';

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
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
          Back to Events
        </motion.button>

        {/* Event Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Event Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video rounded-2xl overflow-hidden glassmorphic">
              <ImageWithFallback
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 to-transparent" />
            </div>
            
            {/* Category Badge */}
            <div className={`absolute top-4 right-4 px-4 py-2 rounded-full font-semibold ${
              event.category === 'technical' 
                ? 'bg-teal-cyan text-midnight-blue' 
                : 'bg-warm-coral text-midnight-blue'
            }`}>
              {event.category === 'technical' ? 'Technical Event' : 'Creative Event'}
            </div>
          </motion.div>

          {/* Event Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 
              className="text-4xl md:text-5xl font-bold text-soft-white text-glow"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {event.name}
            </h1>

            <p className="text-lg text-soft-white/90 leading-relaxed">
              {event.description}
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glassmorphic p-4 rounded-xl">
                <div className="flex items-center text-golden-amber mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Prize Pool
                </div>
                <p className="text-soft-white font-semibold">{event.prizes}</p>
              </div>

              <div className="glassmorphic p-4 rounded-xl">
                <div className="flex items-center text-golden-amber mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Coordinators
                </div>
                <p className="text-soft-white font-semibold">{event.coordinators}</p>
              </div>
            </div>

            {/* Register Button */}
            <motion.button
              onClick={onRegister}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg cinematic-glow hover-lift ${
                event.category === 'technical'
                  ? 'bg-gradient-to-r from-teal-cyan to-golden-amber text-midnight-blue'
                  : 'bg-gradient-to-r from-warm-coral to-golden-amber text-midnight-blue'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register for this Event
            </motion.button>
          </motion.div>
        </div>

        {/* Event Details */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Rules & Guidelines */}
          <motion.div
            className="glassmorphic p-8 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-golden-amber text-glow mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Rules & Guidelines
            </h3>
            
            <ul className="space-y-4">
              {event.rules.map((rule, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-soft-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                    event.category === 'technical' ? 'bg-teal-cyan' : 'bg-warm-coral'
                  }`} />
                  {rule}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Spotlight Section */}
            <div className="glassmorphic p-8 rounded-2xl relative overflow-hidden">
              {/* Spotlight Effect */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-golden-amber/30 to-transparent rounded-full"
                animate={{
                  x: [-50, 200, -50],
                  y: [-50, 150, -50],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <h3 className="text-2xl font-bold text-golden-amber text-glow mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Event Highlights
              </h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center text-soft-white/90">
                  <svg className="w-5 h-5 mr-3 text-golden-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Professional judges and industry experts
                </div>
                
                <div className="flex items-center text-soft-white/90">
                  <svg className="w-5 h-5 mr-3 text-golden-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certificates for all participants
                </div>
                
                <div className="flex items-center text-soft-white/90">
                  <svg className="w-5 h-5 mr-3 text-golden-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Networking opportunities with peers
                </div>
                
                <div className="flex items-center text-soft-white/90">
                  <svg className="w-5 h-5 mr-3 text-golden-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Live streaming and documentation
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glassmorphic p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-golden-amber mb-4">Need Help?</h4>
              <p className="text-soft-white/90 mb-4">
                Have questions about this event? Contact our coordinators for more information.
              </p>
              <div className="text-golden-amber font-semibold">
                📧 ekna2025@aurcc.edu.in
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              event.category === 'technical' ? 'bg-teal-cyan' : 'bg-warm-coral'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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

EventDetail.displayName = 'EventDetail';