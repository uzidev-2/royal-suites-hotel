import React from 'react';
import { Mail, MapPin, Phone, Globe, Share2, MessageCircle } from 'lucide-react';
import { LogoWithText } from './Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href === '#' ? 'body' : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <LogoWithText variant="light" />
            <p className="text-white/60 leading-relaxed text-sm">
              Experience the perfect blend of modern luxury and traditional Pakistani hospitality at Royal Suites Hotel Faisalabad. Your comfort is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Rooms', 'Amenities', 'Reviews', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} 
                    onClick={(e) => scrollToSection(e, `#${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`)}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#booking" onClick={(e) => scrollToSection(e, '#booking')} className="text-white/60 hover:text-white transition-colors text-sm">Book a Room</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-white/60">
                  Opposite Aziz Fatima Hospital, Block H, Gulistan Colony 1, Faisalabad, 38000, Pakistan
                </span>
              </div>
              <div className="flex gap-3 text-sm items-center">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="tel:03219663452" className="text-white/60 hover:text-white">03219663452</a>
              </div>
              <div className="flex gap-3 text-sm items-center">
                <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="mailto:info@royalsuites.pk" className="text-white/60 hover:text-white">info@royalsuites.pk</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {currentYear} Royal Suites Hotel Faisalabad. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Premium Pakistani Hospitality</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
