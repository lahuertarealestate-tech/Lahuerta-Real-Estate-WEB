
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../App';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  onContactClick: () => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onContactClick, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      if (scrolled) {
        setHasScrolledOnce(true);
      }
    };
    
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica de Estilos Unificada
  const getHeaderStyles = () => {
    // 1. Si el menú móvil está abierto: Fondo transparente (para ver el overlay azul), Texto blanco, Logo blanco
    if (isMobileMenuOpen) {
      return {
        container: 'bg-transparent shadow-none',
        text: 'text-white',
        logoInvert: ''
      };
    }

    // 2. Si estamos en Home, arriba del todo: Fondo transparente, Texto blanco, Logo blanco
    if (currentView === 'home' && !isScrolled) {
      return {
        container: 'bg-transparent shadow-none',
        text: 'text-white',
        logoInvert: ''
      };
    }

    // 3. Cualquier otro caso (Scroll o vistas internas): Fondo sólido Gris/Blanco, Texto oscuro, Logo negro (invertido)
    return {
      container: 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-gray-200/50', // Más sólido para evitar transparencias raras
      text: 'text-navy-900',
      logoInvert: 'invert'
    };
  };

  const { container, text, logoInvert } = getHeaderStyles();

  const navClasses = `fixed w-full z-50 py-5 md:py-8 transition-all duration-500 ease-in-out ${container} ${text}`;
  const showLinks = currentView !== 'home' || hasScrolledOnce;

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false);
    const normalizedItem = item.toUpperCase();

    if (normalizedItem === 'COMPRAR') {
      onNavigate('buy');
    } else if (normalizedItem === 'VENDER') {
      onNavigate('sell');
    } else if (normalizedItem === 'ALQUILAR') {
      onNavigate('rent');
    } else if (normalizedItem === 'CONTACTO') {
      onContactClick();
    } else if (normalizedItem === 'NOSOTROS') {
      onNavigate('about');
    } else if (normalizedItem === 'CREAR') {
      onNavigate('create');
    } else if (normalizedItem === 'HOME') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reorganized as per user request: VENDER – COMPRAR - ALQUILAR (Logo) CREAR – NOSOTROS – CONTACTO
  const leftMenuItems = ['VENDER', 'COMPRAR', 'ALQUILAR'];
  const rightMenuItems = ['CREAR', 'NOSOTROS', 'CONTACTO'];
  const allMenuItems = [...leftMenuItems, ...rightMenuItems];

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between relative">
        
        {/* --- LEFT NAVIGATION BLOCK (Desktop) --- */}
        <div className={`hidden lg:flex items-center gap-10 flex-1 justify-start transition-all duration-700 ease-out ${
            showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
            {leftMenuItems.map((item) => (
                <button 
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="hover-trigger text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-60 transition-opacity bg-transparent"
                >
                    {item}
                </button>
            ))}
        </div>

        {/* --- CENTER LOGO --- */}
        <div 
          className="hover-trigger cursor-pointer select-none z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={() => {
              onNavigate('home');
              setIsMobileMenuOpen(false);
          }}
        >
          <img 
            src="/images/logo_blanco.png" 
            alt="Lahuerta Real Estate" 
            className={`h-20 md:h-32 w-auto object-contain transition-all duration-300 ease-out ${logoInvert}`}
          />
        </div>

        {/* --- RIGHT NAVIGATION BLOCK (Desktop) --- */}
        <div className={`hidden lg:flex items-center gap-10 flex-1 justify-end transition-all duration-700 ease-out ${
            showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
            {rightMenuItems.map((item) => (
                <button 
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="hover-trigger text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-60 transition-opacity bg-transparent"
                >
                    {item}
                </button>
            ))}
        </div>

        {/* --- MOBILE HAMBURGER --- */}
        <button 
          className={`lg:hidden hover-trigger p-2 hover:opacity-60 transition-opacity z-50 absolute right-6 top-1/2 -translate-y-1/2 ${text}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
           {isMobileMenuOpen ? (
              <X size={32} strokeWidth={1.5} className="text-white" />
           ) : (
              <div className="flex flex-col gap-2 items-end">
                  <span className="w-10 h-[1.5px] bg-current"></span>
                  <span className="w-7 h-[1.5px] bg-current"></span>
                  <span className="w-10 h-[1.5px] bg-current"></span>
              </div>
           )}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`fixed inset-0 bg-navy-900 z-40 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-8 p-6 w-full max-w-sm">
            {['HOME', ...allMenuItems].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="hover-trigger text-3xl md:text-5xl text-white font-light tracking-tight hover:text-sand-400 transition-colors duration-300 uppercase py-2 w-full text-center"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item}
                </button>
            ))}
          </nav>
      </div>
    </header>
  );
};

export default Header;
