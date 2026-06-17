
import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32 border-t border-gray-100 pt-24">
            
            {/* Left Column */}
            <div>
                 <div className="w-[1px] h-32 bg-gray-100 hidden md:block mb-8 origin-top transform rotate-45"></div> 
                 
                 <div className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-gray-400">
                    <button onClick={() => onNavigate('home')} className="hover:text-navy-900 transition-colors text-left uppercase">
                      Home
                    </button>
                    <button onClick={() => onNavigate('contact')} className="hover:text-navy-900 transition-colors text-left uppercase">
                      Contacto
                    </button>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-navy-900 transition-colors w-fit">
                      Ubicación
                    </a>
                 </div>
            </div>

            {/* Right Column - Cleaned (Reserved for future real socials) */}
            <div className="flex flex-col md:items-end">
                 {/* Espacio libre para futuras redes reales */}
            </div>
        </div>

        {/* Bottom Legal */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 text-sm text-navy-900">
            <div className="flex flex-col md:flex-row gap-8">
                <a href="#" className="hover:text-sand-400 transition-colors">Política de privacidad</a>
                <a href="#" className="hover:text-sand-400 transition-colors">Términos y condiciones</a>
                <a href="#" className="hover:text-sand-400 transition-colors">Cookies</a>
            </div>
            <div className="text-gray-400">
                © {new Date().getFullYear()} Lahuerta Real Estate. All Rights Reserved.
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
