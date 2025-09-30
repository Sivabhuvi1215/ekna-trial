import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Event } from "./EventsData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundEffects } from "./BackgroundEffects";

interface ResponsiveEventDetailProps {
  event: Event;
  onBack: () => void;
  onRegister: () => void;
}

export function ResponsiveEventDetail({ event, onBack, onRegister }: ResponsiveEventDetailProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Ensure event data has all required properties with fallbacks
  const safeEvent = {
    ...event,
    coordinators: event.coordinators || "Contact organizers",
    fee: event.fee || 0,
    rules: event.rules || ["Rules will be announced soon"],
    prizes: event.prizes || "Prizes to be announced"
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'details', label: 'Details', icon: '📝' },
    { id: 'rules', label: 'Rules', icon: '📏' },
    { id: 'prizes', label: 'Prizes', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const trackColor = safeEvent.category === 'technical' ? 'teal-cyan' : 'warm-coral';

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // Overview
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphic p-6 rounded-xl">
              <h3 className="text-xl font-bold text-golden-amber mb-4">Event Description</h3>
              <p className="text-soft-white/90 leading-relaxed">
                {safeEvent.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="glassmorphic p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-bold text-golden-amber mb-1">Category</h4>
                <p className="text-soft-white/80 text-sm">
                  {safeEvent.category === 'technical' ? 'Technical Event' : 'Creative Event'}
                </p>
              </div>

              <div className="glassmorphic p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-bold text-golden-amber mb-1">Registration</h4>
                <p className="text-soft-white/80 text-sm">
                  {safeEvent.fee ? `₹${safeEvent.fee}` : 'Free'}
                </p>
              </div>

              <div className="glassmorphic p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-bold text-golden-amber mb-1">Coordinators</h4>
                <p className="text-soft-white/80 text-sm">
                  {safeEvent.coordinators}
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 1: // Details
        return (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphic p-6 rounded-xl">
              <h3 className="text-xl font-bold text-golden-amber mb-4">Event Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-golden-amber/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-golden-amber">📝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-white mb-1">Description</h4>
                    <p className="text-soft-white/80 text-sm leading-relaxed">
                      {safeEvent.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-cyan/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-teal-cyan">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-white mb-1">Event Type</h4>
                    <p className="text-soft-white/80 text-sm">
                      {safeEvent.category === 'technical' 
                        ? 'Technical Competition - Requires specialized knowledge and skills'
                        : 'Creative Event - Showcase your artistic and creative talents'
                      }
                    </p>
                  </div>
                </div>

                {safeEvent.fee && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-warm-coral/20 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-warm-coral">💰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-soft-white mb-1">Registration Fee</h4>
                      <p className="text-soft-white/80 text-sm">
                        ₹{safeEvent.fee} per participant/team
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 2: // Rules
        return (
          <motion.div
            key="rules"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphic p-6 rounded-xl">
              <h3 className="text-xl font-bold text-golden-amber mb-4">Competition Rules</h3>
              <div className="space-y-3 text-soft-white/90 text-sm">
                {safeEvent.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-golden-amber font-bold flex-shrink-0 mt-1">{index + 1}.</span>
                    <span className="leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphic p-6 rounded-xl">
              <h4 className="text-lg font-bold text-golden-amber mb-3">Important Notes</h4>
              <div className="bg-warm-coral/10 border border-warm-coral/30 rounded-lg p-4">
                <p className="text-soft-white/90 text-sm leading-relaxed">
                  Please read all rules carefully. Violation of any rule may result in disqualification 
                  from the event. For clarifications, contact the event coordinators.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 3: // Prizes
        return (
          <motion.div
            key="prizes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphic p-6 rounded-xl">
              <h3 className="text-xl font-bold text-golden-amber mb-4">Prize Structure</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-golden-amber/20 to-warm-coral/10 rounded-lg border border-golden-amber/30">
                  <div className="text-3xl">🥇</div>
                  <div>
                    <h4 className="font-bold text-golden-amber">Winners</h4>
                    <p className="text-soft-white/90">{safeEvent.prizes}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-cyan/20 to-royal-purple/10 rounded-lg border border-teal-cyan/30">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <h4 className="font-bold text-teal-cyan">All Participants</h4>
                    <p className="text-soft-white/90">Certificate of Participation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphic p-6 rounded-xl">
              <h4 className="text-lg font-bold text-golden-amber mb-3">Additional Benefits</h4>
              <ul className="space-y-2 text-soft-white/90 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-golden-amber">•</span>
                  Certificate of participation for all
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-cyan">•</span>
                  Networking opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-warm-coral">•</span>
                  Industry exposure
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-golden-amber">•</span>
                  Skill development platform
                </li>
              </ul>
            </div>
          </motion.div>
        );

      case 4: // Contact
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphic p-6 rounded-xl">
              <h3 className="text-xl font-bold text-golden-amber mb-4">Event Coordinators</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-golden-amber to-teal-cyan rounded-full flex items-center justify-center text-midnight-blue font-bold">
                    {safeEvent.coordinators ? safeEvent.coordinators.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase() : 'EC'}
                  </div>
                  <div>
                    <h4 className="font-bold text-soft-white">{safeEvent.coordinators}</h4>
                    <p className="text-soft-white/70 text-sm">Event Coordinators</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-golden-amber/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-golden-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <span className="text-soft-white/90">ekna2025@aurcc.edu.in</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-cyan/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-cyan" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-soft-white/90">+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphic p-6 rounded-xl">
              <h4 className="text-lg font-bold text-golden-amber mb-3">Quick Actions</h4>
              <div className="space-y-3">
                <a 
                  href="https://drive.google.com/drive/folders/sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-royal-purple/20 rounded-lg border border-royal-purple/30 hover:bg-royal-purple/30 transition-colors"
                >
                  <svg className="w-5 h-5 text-royal-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-soft-white">Drive Resources</span>
                  <svg className="w-4 h-4 text-soft-white/60 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <button 
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  className="w-full flex items-center gap-3 p-3 bg-teal-cyan/20 rounded-lg border border-teal-cyan/30 hover:bg-teal-cyan/30 transition-colors"
                >
                  <svg className="w-5 h-5 text-teal-cyan" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-soft-white">WhatsApp Support</span>
                </button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  // Desktop View
  if (!isMobile) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue">
        <BackgroundEffects />
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
                  src={safeEvent.imageUrl}
                  alt={safeEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/60 to-transparent" />
              </div>
              
              {/* Category Badge */}
              <div className={`absolute top-4 right-4 px-4 py-2 rounded-full font-semibold ${
                safeEvent.category === 'technical' 
                  ? 'bg-teal-cyan text-midnight-blue' 
                  : 'bg-warm-coral text-midnight-blue'
              }`}>
                {safeEvent.category === 'technical' ? 'Technical Event' : 'Creative Event'}
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
                {safeEvent.name}
              </h1>

              <p className="text-lg text-soft-white/90 leading-relaxed">
                {safeEvent.description}
              </p>

              {/* Event Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glassmorphic p-4 rounded-xl">
                  <div className="text-2xl mb-2">💰</div>
                  <h4 className="font-bold text-golden-amber mb-1">Fee</h4>
                  <p className="text-soft-white/80">
                    {safeEvent.fee ? `₹${safeEvent.fee}` : 'Free'}
                  </p>
                </div>
                
                <div className="glassmorphic p-4 rounded-xl">
                  <div className="text-2xl mb-2">🏆</div>
                  <h4 className="font-bold text-golden-amber mb-1">Prizes</h4>
                  <p className="text-soft-white/80">
                    {safeEvent.prizes}
                  </p>
                </div>
              </div>

              {/* Register Button */}
              <motion.button
                onClick={onRegister}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                  safeEvent.category === 'technical'
                    ? 'bg-gradient-to-r from-teal-cyan to-golden-amber text-midnight-blue'
                    : 'bg-gradient-to-r from-warm-coral to-golden-amber text-midnight-blue'
                } hover:shadow-lg hover:scale-105`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now{safeEvent.fee ? ` - ₹${safeEvent.fee}` : ' - Free'}
              </motion.button>
            </motion.div>
          </div>

          {/* Desktop Tabs */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Tab Navigation */}
            <div className="space-y-2">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-golden-amber to-teal-cyan text-midnight-blue'
                      : 'glassmorphic text-soft-white hover:bg-royal-purple/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {renderTabContent()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile View
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue relative">
      <BackgroundEffects />
      
      {/* Mobile Header */}
      <div className="px-4 py-4">
        <motion.button
          onClick={onBack}
          className="inline-flex items-center text-soft-white/80 hover:text-golden-amber transition-colors mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -5 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        {/* Event Image */}
        <motion.div
          className="aspect-video rounded-xl overflow-hidden glassmorphic mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={safeEvent.imageUrl}
            alt={safeEvent.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Event Title */}
        <motion.h1
          className="text-2xl font-bold text-golden-amber mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {safeEvent.name}
        </motion.h1>

        <motion.p
          className="text-soft-white/70 text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {safeEvent.category === 'technical' ? 'Technical Event' : 'Creative Event'}
        </motion.p>
      </div>

      {/* Horizontal Scrolling Tabs */}
      <motion.div
        className="px-4 mb-6 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Gradient fade indicators for scrollable area */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-midnight-blue via-midnight-blue/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-midnight-blue via-midnight-blue/80 to-transparent z-10 pointer-events-none" />
        
        <div className="flex space-x-3 overflow-x-auto pb-3 scrollbar-hide scroll-smooth" style={{ scrollSnapType: 'x mandatory' }}>
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap relative ${
                activeTab === index
                  ? 'bg-gradient-to-r from-golden-amber to-teal-cyan text-midnight-blue shadow-lg'
                  : 'bg-royal-purple/30 text-soft-white border border-golden-amber/20 hover:bg-royal-purple/50'
              }`}
              style={{ scrollSnapAlign: 'start' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="px-4 pb-24">
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </div>

      {/* Fixed Register Button */}
      <motion.div
        className="fixed bottom-4 left-4 right-4 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button
          onClick={onRegister}
          className="w-full py-4 bg-gradient-to-r from-golden-amber to-teal-cyan text-midnight-blue font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Register Now{safeEvent.fee ? ` - ₹${safeEvent.fee}` : ' - Free'}
        </button>
      </motion.div>
    </div>
  );
}

ResponsiveEventDetail.displayName = 'ResponsiveEventDetail';