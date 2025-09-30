import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
  width?: number;
  height?: number;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  lazy = true,
  width,
  height,
  quality = 80,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Optimize image URL with quality and size parameters
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      const params = new URLSearchParams();
      if (width) params.append('w', width.toString());
      if (height) params.append('h', height.toString());
      params.append('q', quality.toString());
      params.append('auto', 'format');
      
      return `${originalSrc.split('?')[0]}?${params.toString()}`;
    }
    return originalSrc;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [lazy, priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Fallback for broken images
  const fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMEQxQjJBIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVCNzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RUtOQSAyMDI1PC90ZXh0Pjwvc3ZnPg==';

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Loading Placeholder */}
      {!isLoaded && isInView && !hasError && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-midnight-blue/60 to-royal-purple/60 flex items-center justify-center"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(13, 27, 42, 0.6), rgba(58, 12, 163, 0.6))",
              "linear-gradient(45deg, rgba(58, 12, 163, 0.6), rgba(245, 183, 0, 0.3))",
              "linear-gradient(45deg, rgba(245, 183, 0, 0.3), rgba(13, 27, 42, 0.6))"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-golden-amber border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      )}

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={hasError ? fallbackSrc : getOptimizedSrc(src)}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            willChange: isLoaded ? 'auto' : 'opacity'
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.1
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-midnight-blue/80 flex items-center justify-center">
          <div className="text-center text-soft-white/60">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
}