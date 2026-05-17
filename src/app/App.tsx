import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PostHeroSections } from './components/PostHeroSections';
import { SmartSearchSection } from './components/SmartSearchSection';
import { HealthConcerns } from './components/HealthConcerns';
import { HowItWorks } from './components/HowItWorks';
import { ReportsAndApp } from './components/ReportsAndApp';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { HealthConcierge } from './components/HealthConcierge';
import { NotFound } from './components/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // 1. Smooth Scroll (Lenis)
    const lenis = new Lenis();
    (window as any).lenis = lenis;
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Content Protection (Disable Right-click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    // 3. Prevent Screenshot Shortcuts (Enhanced)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+P, Ctrl+S, Ctrl+U, PrintScreen, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J
      const isScreenshotKey = e.key === 'PrintScreen' || (e.shiftKey && e.metaKey && (e.key === '3' || e.key === '4')); // Mac
      const isWindowScreenshot = (e.shiftKey && e.metaKey && e.key === 's') || (e.shiftKey && e.ctrlKey && e.key === 'S'); // Win
      
      if (
        (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'u')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
        isScreenshotKey || isWindowScreenshot
      ) {
        e.preventDefault();
        alert("Content Protection Enabled: Screenshots are restricted on this platform.");
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      lenis.destroy();
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Expose navigate globally for simple access in this prototype
  (window as any).appNavigate = navigate;

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <Header onNavigate={navigate} />
      <main className="flex-1">
        {currentPath === '/404' ? (
          <NotFound onNavigate={navigate} />
        ) : (
          <>
            <Hero />
            <PostHeroSections />
            <SmartSearchSection />
            <HealthConcerns />
            <HowItWorks />
            <ReportsAndApp />
            <Testimonials />
            <FAQ />
            <FinalCTA />
          </>
        )}
      </main>
      <Footer onNavigate={navigate} />
      <HealthConcierge />

      {/* Device Blocker Overlay
      <div id="device-blocker">
        <div className="max-w-[300px]">
          <h2 className="text-3xl font-bold mb-4">Desktop Version Only</h2>
          <p className="text-gray-300">
            Please view this application on a Laptop or Desktop for the best experience.
          </p>
        </div>
      </div> */}
    </div>
  );
}
