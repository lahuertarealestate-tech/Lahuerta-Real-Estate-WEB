
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BuySection from './components/BuySection';
import SellSection from './components/SellSection';
import RentSection from './components/RentSection';
import CreateSection from './components/CreateSection';
import TeamSection from './components/TeamSection';
import Services from './components/Services';
import Founders from './components/Founders';
import Story from './components/Story';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import CaptacionLanding from './components/CaptacionLanding';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export type ViewState = 'home' | 'buy' | 'sell' | 'rent' | 'create' | 'about' | 'contact' | 'captacion';

function App() {
  // 1. LECTURA INICIAL DE URL
  // Leemos el parámetro ?page= al montar el componente para definir el estado inicial
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      const validViews: ViewState[] = ['home', 'buy', 'sell', 'rent', 'create', 'about', 'contact', 'captacion'];
      return validViews.includes(page as ViewState) ? (page as ViewState) : 'home';
    }
    return 'home';
  });

  const [isLoading, setIsLoading] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // 2. MANEJO DEL BOTÓN ATRÁS (POPSTATE)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      const validViews: ViewState[] = ['home', 'buy', 'sell', 'rent', 'create', 'about', 'contact', 'captacion'];
      const nextView = validViews.includes(page as ViewState) ? (page as ViewState) : 'home';
      
      setCurrentView(nextView);
      
      // Reset de scroll al navegar con flechas del navegador
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // FORCE TITLE UPDATE
    document.title = "Lahuerta Real Estate | Consultora Inmobiliaria";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Control ChatBot visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (currentView === 'home') {
        const threshold = window.innerHeight * 0.8; 
        setShowChatBot(window.scrollY > threshold);
      } else {
        setShowChatBot(true);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // 3. FUNCIÓN DE NAVEGACIÓN PERSONALIZADA
  const handleNavigate = (view: ViewState) => {
    if (view === currentView) return;

    setCurrentView(view);
    
    // Actualizar URL sin recargar
    const url = view === 'home' ? window.location.pathname : `?page=${view}`;
    window.history.pushState({}, '', url);
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'auto' });
    lenisRef.current?.scrollTo(0, { immediate: true });
  };

  const handleContactClick = () => {
    handleNavigate('contact');
  };

  return (
    <>
      <CustomCursor />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {currentView === 'captacion' ? (
        <CaptacionLanding />
      ) : (
        <main className="min-h-screen bg-white flex flex-col overflow-x-hidden">
          <Header onNavigate={handleNavigate} onContactClick={handleContactClick} currentView={currentView} />
          
          <div className="flex-grow w-full">
            {currentView === 'home' && (
              <div key="home" className="animate-fade-in">
                <Hero />
                <AboutSection />
                <Services onNavigate={handleNavigate} onContactClick={handleContactClick} />
                <Founders />
                <Story />
                <Contact />
              </div>
            )}

            {currentView === 'buy' && <div key="buy" className="animate-fade-in"><BuySection /></div>}
            {currentView === 'sell' && <div key="sell" className="animate-fade-in"><SellSection /></div>}
            {currentView === 'rent' && <div key="rent" className="animate-fade-in"><RentSection /></div>}
            {currentView === 'create' && <div key="create" className="animate-fade-in"><CreateSection onContactClick={handleContactClick} /></div>}
            {currentView === 'about' && <div key="about" className="animate-fade-in"><TeamSection /></div>}
            {currentView === 'contact' && <div key="contact" className="animate-fade-in"><ContactPage /></div>}
          </div>

          <Footer onNavigate={handleNavigate} />
        </main>
      )}
    </>
  );
}

export default App;
