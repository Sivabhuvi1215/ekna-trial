import { motion } from "motion/react";

export function NewFooterLayout() {
  return (
    <section className="py-20 bg-black relative">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0">
        {/* Gentle Motion Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`footer-line-${i}`}
            className="absolute"
            style={{
              left: `${i * 16.67}%`,
              top: "0%",
              width: "1px",
              height: "100%",
              background: `linear-gradient(180deg, 
                transparent 0%, 
                rgba(245, 183, 0, 0.1) 30%, 
                rgba(0, 180, 216, 0.15) 50%, 
                rgba(245, 183, 0, 0.1) 70%, 
                transparent 100%
              )`
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleY: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Section - Map */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 
              className="text-2xl font-bold text-golden-amber mb-6"
              style={{ fontFamily: "'Orbitron', 'Cinzel', serif" }}
            >
              Find Us
            </h3>
            
            {/* Compact Map */}
            <div className="relative mb-6">
              <div className="aspect-video bg-gradient-to-br from-royal-purple to-midnight-blue rounded-lg overflow-hidden border border-golden-amber/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.9!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2ee068ad87fd7%3A0x45d2e7e8ceecce3a!2sAnna%20University%20Regional%20Campus%20Coimbatore!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Anna University Regional Campus Coimbatore Location"
                />
              </div>
            </div>

            {/* Compact Location Info */}
            <div className="space-y-3 text-sm text-soft-white/80">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-golden-amber mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium text-soft-white">Anna University Regional Campus</p>
                  <p>Coimbatore, Tamil Nadu 641046</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-golden-amber flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>+91 422 2575 701</p>
              </div>
            </div>

            {/* Get Directions Button */}
            <motion.a
              href="https://maps.google.com/?q=Anna+University+Regional+Campus+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-golden-amber to-teal-cyan text-midnight-blue font-semibold rounded-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Center Section - Logo & Department */}
          <motion.div
            className="lg:col-span-1 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Logo */}
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-golden-amber to-warm-coral mb-6 relative overflow-hidden">
                <div className="w-full h-full rounded-full bg-midnight-blue/20 flex items-center justify-center backdrop-blur-sm">
                  <span 
                    className="text-4xl font-bold text-golden-amber"
                    style={{ 
                      fontFamily: "'Orbitron', serif",
                      textShadow: "0 0 20px rgba(245, 183, 0, 0.6)"
                    }}
                  >
                    E
                  </span>
                </div>
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-golden-amber/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Event Title */}
            <h4 
              className="text-3xl md:text-4xl font-bold text-golden-amber mb-3"
              style={{ 
                fontFamily: "'Orbitron', 'Cinzel', serif",
                textShadow: "0 0 15px rgba(245, 183, 0, 0.4)"
              }}
            >
              EKNA 2025
            </h4>

            {/* Department Details */}
            <div className="space-y-2">
              <p 
                className="text-lg font-semibold text-soft-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Department of Electrical and Electronics Engineering
              </p>
              <p className="text-soft-white/80">Anna University Regional Campus, Coimbatore</p>
              <p className="text-golden-amber font-medium">National Level Technical Symposium</p>
            </div>

            {/* Event Date */}
            <motion.div
              className="mt-6 py-3 px-6 bg-gradient-to-r from-royal-purple/30 to-midnight-blue/30 rounded-lg border border-golden-amber/20"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-golden-amber font-bold text-lg">March 15-16, 2025</p>
              <p className="text-soft-white/70 text-sm">Mark Your Calendar</p>
            </motion.div>

            {/* Follow Us Section - Below Logo */}
            <motion.div
              className="mt-8 pt-6 border-t border-golden-amber/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 
                className="text-lg font-bold text-golden-amber mb-4"
                style={{ fontFamily: "'Orbitron', 'Cinzel', serif" }}
              >
                Follow Us
              </h4>
              
              <p className="text-soft-white/80 mb-4 text-sm">
                Stay updated with announcements and behind-the-scenes content
              </p>

              <div className="flex justify-center space-x-4">
                {[
                  { 
                    name: 'Instagram', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    ),
                    url: 'https://instagram.com/anna_university_coimbatore',
                    color: 'from-pink-500 to-purple-600'
                  },
                  { 
                    name: 'Facebook', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                    url: 'https://facebook.com/annauniversitycoimbatore',
                    color: 'from-blue-600 to-blue-800'
                  },
                  { 
                    name: 'LinkedIn', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    url: 'https://linkedin.com/school/anna-university-regional-campus-coimbatore',
                    color: 'from-blue-700 to-blue-900'
                  },
                  { 
                    name: 'YouTube', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    ),
                    url: 'https://youtube.com/@annauniversitycoimbatore',
                    color: 'from-red-600 to-red-800'
                  },
                  { 
                    name: 'Email', 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    ),
                    url: 'mailto:ekna2025@aurcc.edu.in',
                    color: 'from-golden-amber to-warm-coral'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Email' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(245, 183, 0, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Coordinators & Contact */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 
              className="text-2xl font-bold text-golden-amber mb-6"
              style={{ fontFamily: "'Orbitron', 'Cinzel', serif" }}
            >
              Coordinators
            </h3>

            {/* Faculty Coordinators */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-soft-white mb-4">Faculty Coordinators</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-royal-purple/20 to-midnight-blue/20 rounded-lg border border-golden-amber/20">
                  <p className="font-medium text-golden-amber">Dr. Rajesh Kumar</p>
                  <p className="text-sm text-soft-white/70">Professor & Head, EEE Department</p>
                  <p className="text-sm text-teal-cyan">+91 9876543210</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-royal-purple/20 to-midnight-blue/20 rounded-lg border border-golden-amber/20">
                  <p className="font-medium text-golden-amber">Dr. Priya Sharma</p>
                  <p className="text-sm text-soft-white/70">Associate Professor, EEE</p>
                  <p className="text-sm text-teal-cyan">+91 9876543211</p>
                </div>
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-soft-white mb-4">Student Coordinators</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-royal-purple/20 to-midnight-blue/20 rounded-lg border border-golden-amber/20">
                  <p className="font-medium text-golden-amber">Arun Krishnan</p>
                  <p className="text-sm text-soft-white/70">Final Year, EEE</p>
                  <p className="text-sm text-teal-cyan">+91 9876543212</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-royal-purple/20 to-midnight-blue/20 rounded-lg border border-golden-amber/20">
                  <p className="font-medium text-golden-amber">Divya Menon</p>
                  <p className="text-sm text-soft-white/70">Final Year, EEE</p>
                  <p className="text-sm text-teal-cyan">+91 9876543213</p>
                </div>
              </div>
            </div>

            {/* Contact Email */}
            <div className="p-4 bg-gradient-to-r from-golden-amber/10 to-teal-cyan/10 rounded-lg border border-golden-amber/30">
              <p className="text-sm text-soft-white/70 mb-2">Official Email</p>
              <a 
                href="mailto:ekna2025@aurcc.edu.in"
                className="text-golden-amber font-medium hover:text-white transition-colors duration-300"
              >
                ekna2025@aurcc.edu.in
              </a>
            </div>
          </motion.div>
        </div>



        {/* Copyright with Motion Animation */}
        <motion.div 
          className="mt-12 pt-6 border-t border-golden-amber/20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`bottom-line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-golden-amber/30 to-transparent"
                style={{
                  top: `${25 + i * 25}%`,
                  left: "0%",
                  width: "100%"
                }}
                animate={{
                  x: ["-100%", "100%", "-100%"],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Floating Orbs */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`bottom-orb-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: "50%",
                  background: `radial-gradient(circle, 
                    ${i % 2 === 0 ? 'rgba(245, 183, 0, 0.4)' : 'rgba(0, 180, 216, 0.3)'} 0%, 
                    transparent 70%
                  )`
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <motion.p 
            className="text-soft-white/60 text-sm relative z-10"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © 2025 EKNA - Department of Electrical and Electronics Engineering, Anna University Regional Campus, Coimbatore. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}