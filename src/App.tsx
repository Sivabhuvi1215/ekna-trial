import { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { MobileOptimizer } from './components/MobileOptimizer';
import { PageTransition } from './components/PageTransition';
import { AdvancedBackgroundEffects } from './components/AdvancedBackgroundEffects';
import { eventsData, Event } from './components/EventsData';

// Lazy load non-critical components for better performance
const HomePage = lazy(() => import('./components/HomePage').then(module => ({ default: module.HomePage })));
const EventsGateway = lazy(() => import('./components/EventsGateway').then(module => ({ default: module.EventsGateway })));
const EventsList = lazy(() => import('./components/ResponsiveEventsLayout').then(module => ({ default: module.ResponsiveEventsLayout })));
const EventDetail = lazy(() => import('./components/ResponsiveEventDetail').then(module => ({ default: module.ResponsiveEventDetail })));
const RegistrationPage = lazy(() => import('./components/RegistrationPage').then(module => ({ default: module.RegistrationPage })));
const SchedulePage = lazy(() => import('./components/SchedulePage').then(module => ({ default: module.SchedulePage })));
const SponsorPage = lazy(() => import('./components/SponsorPage').then(module => ({ default: module.SponsorPage })));

type PageType = 'home' | 'schedule' | 'events' | 'register' | 'sponsors' | 'events-list' | 'event-detail';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedTrack, setSelectedTrack] = useState<'technical' | 'non_technical' | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload Google Fonts with display=swap for better performance
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap';
      link.rel = 'preload';
      link.as = 'style';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);

      // Preload critical images
      const criticalImages = [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80', // University
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80', // Students
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });

      // Set up performance monitoring
      if ('performance' in window) {
        // Monitor Core Web Vitals
        new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
          });
        }).observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      }
    };

    preloadCriticalResources();

    // Service Worker registration for caching (if available)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, continue without it
      });
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    setSelectedTrack(null);
    setSelectedEvent(null);
  };

  const handleTrackSelection = (track: 'technical' | 'non_technical') => {
    setSelectedTrack(track);
    setCurrentPage('events-list');
  };

  const handleEventSelection = (event: Event) => {
    setSelectedEvent(event);
    setCurrentPage('event-detail');
  };

  const handleBackToEvents = () => {
    setCurrentPage('events');
    setSelectedTrack(null);
    setSelectedEvent(null);
  };

  const handleBackToEventsList = () => {
    setCurrentPage('events-list');
    setSelectedEvent(null);
  };

  const getFilteredEvents = () => {
    if (!selectedTrack) return eventsData;
    return eventsData.filter(event => event.category === selectedTrack);
  };

  // Loading fallback component
  const PageLoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue">
      <motion.div
        className="w-16 h-16 border-4 border-golden-amber border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  const renderCurrentPage = () => {
    const getTransitionType = () => {
      switch (currentPage) {
        case 'home': return 'hologram';
        case 'events': return 'matrix';
        case 'events-list': return 'slide';
        case 'event-detail': return 'scale';
        case 'register': return 'rotate';
        case 'schedule': return 'fade';
        case 'sponsors': return 'hologram';
        default: return 'fade';
      }
    };

    const pageContent = (() => {
      switch (currentPage) {
        case 'home':
          return <HomePage onNavigate={handlePageChange} />;
        
        case 'schedule':
          return <SchedulePage onBack={() => handlePageChange('home')} />;
        
        case 'events':
          return <EventsGateway onSelectTrack={handleTrackSelection} />;

        case 'sponsors':
          return <SponsorPage onBack={() => handlePageChange('home')} />;
        
        case 'events-list':
          return (
            <EventsList
              events={getFilteredEvents()}
              track={selectedTrack!}
              onEventSelect={handleEventSelection}
              onBack={handleBackToEvents}
            />
          );
        
        case 'event-detail':
          return (
            <EventDetail
              event={selectedEvent!}
              onBack={handleBackToEventsList}
              onRegister={() => handlePageChange('register')}
            />
          );
        
        case 'register':
          return (
            <RegistrationPage
              events={eventsData}
              onBack={() => handlePageChange('home')}
            />
          );
        
        default:
          return null;
      }
    })();

    return (
      <PageTransition key={currentPage} transitionType={getTransitionType()}>
        <Suspense fallback={<PageLoadingFallback />}>
          {pageContent}
        </Suspense>
      </PageTransition>
    );
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <MobileOptimizer>
      <div className="min-h-screen bg-gradient-to-br from-midnight-blue via-royal-purple to-midnight-blue relative overflow-hidden">
        {/* Advanced Background Effects */}
        <AdvancedBackgroundEffects />
        
        {/* Navigation */}
        <Navigation 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />

        {/* Page Content with Smooth Transitions */}
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            {renderCurrentPage()}
          </AnimatePresence>
        </main>
      </div>
    </MobileOptimizer>
  );
}