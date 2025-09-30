import { motion } from "motion/react";

interface SchedulePageProps {
  onBack: () => void;
}

export function SchedulePage({ onBack }: SchedulePageProps) {
  const scheduleData = [
    {
      time: "09:00 AM",
      event: "Registration & Welcome",
      description: "Participant registration and welcome refreshments",
      venue: "Main Auditorium",
    },
    {
      time: "10:00 AM",
      event: "Inaugural Ceremony",
      description: "Opening ceremony with keynote speeches",
      venue: "Main Auditorium",
    },
    {
      time: "11:00 AM",
      event: "Technical Events Begin",
      description: "Paper Presentation, Circuit Debugging, Project Expo",
      venue: "Multiple Venues",
    },
    {
      time: "11:30 AM",
      event: "Non-Technical Events",
      description: "Gaming, Photography, Treasure Hunt",
      venue: "Various Locations",
    },
    {
      time: "01:00 PM",
      event: "Lunch Break",
      description: "Networking lunch for all participants",
      venue: "Campus Cafeteria",
    },
    {
      time: "02:00 PM",
      event: "Hackathon Begins",
      description: "24-hour coding marathon starts",
      venue: "Computer Lab",
    },
    {
      time: "03:00 PM",
      event: "Robo Race & Line Follower",
      description: "Robotics competitions",
      venue: "Engineering Lab",
    },
    {
      time: "04:00 PM",
      event: "Cultural Events",
      description: "Music, Comedy, Short Film screenings",
      venue: "Auditorium",
    },
    {
      time: "06:00 PM",
      event: "Prize Distribution",
      description: "Award ceremony for completed events",
      venue: "Main Auditorium",
    },
    {
      time: "07:00 PM",
      event: "Closing Ceremony",
      description: "Closing remarks and group photo",
      venue: "Main Auditorium",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue">
      <div className="max-w-6xl mx-auto px-6 py-12">
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
          Back to Home
        </motion.button>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-5xl md:text-6xl font-bold text-soft-white text-glow mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Event Schedule
          </h1>
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto">
            Your complete guide to EKNA 2025 timeline. Plan your day and never miss an event!
          </p>
        </motion.div>

        {/* Date Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glassmorphic p-6 rounded-2xl inline-block cinematic-glow">
            <h2 className="text-3xl font-bold text-golden-amber text-glow mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
              March 15, 2025
            </h2>
            <p className="text-soft-white/80">Saturday • Anna University Regional Campus, Coimbatore</p>
          </div>
        </motion.div>

        {/* Schedule Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-golden-amber via-teal-cyan to-warm-coral transform md:-translate-x-px"></div>

          <div className="space-y-8">
            {scheduleData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-golden-amber to-warm-coral rounded-full transform md:-translate-x-2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-golden-amber to-warm-coral rounded-full animate-ping opacity-75"></div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="glassmorphic p-6 rounded-2xl hover-lift">
                    {/* Time Badge */}
                    <div className="inline-block bg-gradient-to-r from-golden-amber to-warm-coral text-midnight-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
                      {item.time}
                    </div>

                    <h3 className="text-xl font-bold text-soft-white text-glow mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                      {item.event}
                    </h3>

                    <p className="text-soft-white/80 mb-3">
                      {item.description}
                    </p>

                    <div className="flex items-center text-golden-amber text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {item.venue}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 w-full bg-midnight-blue/50 rounded-full h-1">
                      <motion.div
                        className="h-1 bg-gradient-to-r from-golden-amber to-teal-cyan rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((index + 1) / scheduleData.length) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                {index % 3 === 0 && (
                  <motion.div
                    className="absolute w-2 h-2 bg-teal-cyan rounded-full opacity-60"
                    style={{
                      left: `${20 + index * 5}%`,
                      top: `${-10 + (index % 2) * 20}px`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <motion.div
          className="mt-16 glassmorphic p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-golden-amber text-glow mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
            Important Notes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-golden-amber rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-soft-white/90">All participants must report 30 minutes before their event.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-cyan rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-soft-white/90">Lunch will be provided for all registered participants.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-coral rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-soft-white/90">Certificates will be distributed during the closing ceremony.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-golden-amber rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-soft-white/90">Photography and videography will be done throughout the event.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-cyan rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-soft-white/90">Technical support will be available at all venues.</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-coral rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-soft-white/90">Live updates will be posted on our social media channels.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-soft-white/80 mb-6">
            Ready to be part of this exciting journey?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-golden-amber to-warm-coral text-midnight-blue font-bold rounded-lg text-lg hover-lift cinematic-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>

        {/* Floating Background Elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-golden-amber rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.4, 0.8, 0.4],
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