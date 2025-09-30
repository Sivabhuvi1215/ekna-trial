import { useEffect } from 'react';

interface PreloadManagerProps {
  onProgress: (progress: number) => void;
  onComplete: () => void;
}

export function PreloadManager({ onProgress, onComplete }: PreloadManagerProps) {
  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = 50; // Estimated total assets to preload
    
    const updateProgress = () => {
      loadedCount++;
      const progress = Math.min((loadedCount / totalAssets) * 100, 100);
      onProgress(progress);
      
      if (progress >= 100) {
        setTimeout(onComplete, 500); // Small delay for smooth completion
      }
    };

    const preloadImages = () => {
      // Event images for preloading
      const imageUrls = [
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80', // Circuit board
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80', // Technology
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', // Code
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // Robot
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', // Data
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80', // Innovation
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', // Brain tech
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80', // Circuit 2
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80', // Programming
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80', // Laptop code
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80', // Team work
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80', // Creative work
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Mountain landscape
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80', // Tech background
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80', // University
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80', // Students
        'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&q=80', // Engineering
        'https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&q=80', // Electronics
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80', // Circuit patterns
        'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&q=80', // Tech workspace
      ];

      imageUrls.forEach((url, index) => {
        const img = new Image();
        img.onload = updateProgress;
        img.onerror = updateProgress; // Count failed loads too
        img.src = url;
        
        // Add loading delay to simulate realistic loading
        setTimeout(() => {
          if (img.complete) updateProgress();
        }, index * 100);
      });
    };

    const preloadFonts = () => {
      // Preload Google Fonts
      const fontUrls = [
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      ];

      fontUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = url;
        link.onload = updateProgress;
        link.onerror = updateProgress;
        document.head.appendChild(link);
      });
    };

    const preloadCriticalResources = () => {
      // Simulate loading of critical JS/CSS resources
      const criticalResources = [
        'motion/react', // Animation library
        'tailwindcss', // CSS framework
        'components', // React components
        'utilities', // Helper functions
        'data', // Event data
        'api-endpoints', // API configurations
        'image-optimization', // Image processing
        'responsive-handlers', // Mobile optimizations
        'performance-metrics', // Analytics
        'accessibility-features' // A11y features
      ];

      criticalResources.forEach((resource, index) => {
        setTimeout(() => {
          updateProgress();
        }, index * 200);
      });
    };

    // Start preloading process
    const startPreloading = async () => {
      // Simulate component loading
      setTimeout(updateProgress, 100);
      
      // Preload fonts first (critical)
      preloadFonts();
      
      // Preload images
      setTimeout(preloadImages, 300);
      
      // Preload other resources
      setTimeout(preloadCriticalResources, 500);
      
      // Ensure minimum loading time for smooth UX
      setTimeout(() => {
        if (loadedCount < totalAssets) {
          const remainingAssets = totalAssets - loadedCount;
          for (let i = 0; i < remainingAssets; i++) {
            setTimeout(updateProgress, i * 50);
          }
        }
      }, 3000);
    };

    startPreloading();

    // Cleanup function
    return () => {
      // Clean up any ongoing processes if component unmounts
    };
  }, [onProgress, onComplete]);

  return null; // This component doesn't render anything
}