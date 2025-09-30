import { useEffect, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

export function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [connectionType, setConnectionType] = useState<string>('');

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|ipod|blackberry|windows phone/.test(userAgent);
      setIsMobile(isMobileDevice);

      // Check device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory;
      if (deviceMemory && deviceMemory < 4) {
        setIsLowPerformance(true);
      }

      // Check network connection
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      if (connection) {
        setConnectionType(connection.effectiveType);
        
        // Optimize for slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          setIsLowPerformance(true);
        }
      }
    };

    checkMobile();

    // Apply mobile-specific optimizations
    if (isMobile || isLowPerformance) {
      // Reduce animations on mobile
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
      document.documentElement.style.setProperty('--particle-count', '8');
      
      // Optimize scroll performance
      document.documentElement.style.setProperty('scroll-behavior', 'auto');
      
      // Add mobile-specific meta tags
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover');
      }

      // Enable GPU acceleration for key elements
      const style = document.createElement('style');
      style.textContent = `
        .gpu-optimize {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          /* Reduce particle effects on mobile */
          .particle-system {
            display: none;
          }
          
          /* Simplify animations */
          .complex-animation {
            animation: none !important;
          }
          
          /* Optimize images */
          img {
            image-rendering: optimizeSpeed;
            image-rendering: -webkit-optimize-contrast;
          }
          
          /* Reduce blur effects */
          .glassmorphic {
            backdrop-filter: blur(10px) saturate(120%) !important;
          }
          
          /* Simplify gradients */
          .complex-gradient {
            background: var(--midnight-blue) !important;
          }
        }
        
        @media (max-width: 768px) and (prefers-reduced-motion: no-preference) {
          /* Safe animations for mobile */
          .safe-mobile-animation {
            animation-duration: 0.3s !important;
            animation-timing-function: ease-out !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Preload critical mobile resources
      const criticalMobileCSS = `
        /* Critical mobile styles */
        .mobile-safe {
          font-size: 16px;
          line-height: 1.5;
          touch-action: manipulation;
        }
        
        .mobile-touch-target {
          min-height: 44px;
          min-width: 44px;
        }
        
        .mobile-scroll {
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
        }
      `;
      
      const mobileStyle = document.createElement('style');
      mobileStyle.textContent = criticalMobileCSS;
      document.head.appendChild(mobileStyle);
    }

    // Memory cleanup for mobile
    const cleanupInterval = setInterval(() => {
      if (isMobile) {
        // Force garbage collection if available
        if ((window as any).gc) {
          (window as any).gc();
        }
        
        // Clear unused images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img.complete && img.naturalWidth === 0) {
            img.remove();
          }
        });
      }
    }, 30000); // Every 30 seconds

    return () => {
      clearInterval(cleanupInterval);
    };
  }, [isMobile, isLowPerformance]);

  // Add mobile-specific classes to body
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-device');
      document.body.classList.add('mobile-safe');
    }
    
    if (isLowPerformance) {
      document.body.classList.add('low-performance');
    }

    return () => {
      document.body.classList.remove('mobile-device', 'mobile-safe', 'low-performance');
    };
  }, [isMobile, isLowPerformance]);

  // Performance monitoring for mobile
  useEffect(() => {
    if (isMobile) {
      let lastFrameTime = performance.now();
      let frameCount = 0;
      let fps = 60;

      const measureFPS = () => {
        const now = performance.now();
        frameCount++;
        
        if (now - lastFrameTime >= 1000) {
          fps = Math.round((frameCount * 1000) / (now - lastFrameTime));
          frameCount = 0;
          lastFrameTime = now;
          
          // Reduce effects if FPS is low
          if (fps < 30) {
            document.body.classList.add('low-fps');
          } else {
            document.body.classList.remove('low-fps');
          }
        }
        
        requestAnimationFrame(measureFPS);
      };

      requestAnimationFrame(measureFPS);
    }
  }, [isMobile]);

  return (
    <div className={`mobile-optimizer ${isMobile ? 'mobile-device' : ''} ${isLowPerformance ? 'low-performance' : ''}`}>
      {children}
    </div>
  );
}