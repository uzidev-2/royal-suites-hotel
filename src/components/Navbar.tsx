import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { LogoWithText } from './Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href === '#' ? 'body' : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => scrollToSection(e, '#')} className="transition-opacity hover:opacity-90">
            <LogoWithText variant="light" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-brand-gold transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a 
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105"
            >
              Book Your Stay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:03219663452" className="text-white hover:text-brand-gold">
              <Phone className="h-5 w-5" />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-500 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-serif text-white hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto pb-12">
            <a 
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className="block w-full bg-brand-gold text-brand-black text-center py-4 rounded-lg font-bold uppercase tracking-widest mb-6"
            >
              Book Your Stay
            </a>
            <div className="text-white/60 text-sm">
              <p>Opposite Aziz Fatima Hospital,</p>
              <p>Gulistan Colony 1, Faisalabad</p>
              <a href="tel:03219663452" className="text-brand-gold block mt-2 text-lg">03219663452</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
