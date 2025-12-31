import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Header from './components/Header';
import CoreValues from './components/CoreValues';
import Introduction from './components/Introduction';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  // 모든 a 태그에 onClick 추가
  <a 
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection('contact');
    }}
    className="..."
  ></a>
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-500 selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm" aria-label="주요 네비게이션">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
               <span className="font-serif text-xl font-bold text-slate-900 tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                 인온<span className="text-amber-600">.Tax</span>
               </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-600 hover:text-amber-600 transition-colors font-medium">홈</button>
              <button onClick={() => scrollToSection('introduction')} className="text-slate-600 hover:text-amber-600 transition-colors font-medium">세무사 소개</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-amber-600 transition-colors font-medium">서비스</button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">상담신청</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-amber-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기/닫기"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-slate-100">
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-slate-600 hover:text-amber-600 hover:bg-slate-50 transition-colors font-medium">홈</button>
              <button onClick={() => scrollToSection('introduction')} className="block w-full text-left px-4 py-2 text-slate-600 hover:text-amber-600 hover:bg-slate-50 transition-colors font-medium">세무사 소개</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-600 hover:text-amber-600 hover:bg-slate-50 transition-colors font-medium">서비스</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-600 hover:text-amber-600 hover:bg-slate-50 transition-colors font-medium">상담신청</button>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        <Header />
        <CoreValues />
        <div id="introduction">
          <Introduction />
        </div>
        <div id="services">
          <Services />
        </div>
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;