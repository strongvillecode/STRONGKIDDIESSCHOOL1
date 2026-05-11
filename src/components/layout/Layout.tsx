import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import React, { useState, useEffect, ReactNode } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Montessori', path: '/montessori' },
    { name: 'Life at School', path: '/school-life' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
              SK
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-none ${scrolled ? 'text-brand-blue' : 'text-brand-blue'}`}>
                Strong Kiddies
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                Nursery & Primary School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-brand-blue/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-brand-gold text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-blue transition-colors shadow-md"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-brand-blue" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-3 text-base font-medium text-brand-blue hover:bg-brand-cream rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="block w-full text-center bg-brand-blue text-white mt-4 px-6 py-3 rounded-full font-bold shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue font-serif font-bold text-lg">
                SK
              </div>
              <span className="font-serif font-bold text-xl">Strong Kiddies</span>
            </div>
            <p className="text-brand-sky/70 text-sm leading-relaxed">
              Excellence, Discipline & Innovation. Building future leaders through Montessori-inspired learning and moral values.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="hover:text-brand-gold cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-brand-gold cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-brand-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-brand-sky/70">
              <li><Link to="/about" className="hover:text-brand-gold">About Our School</Link></li>
              <li><Link to="/academics" className="hover:text-brand-gold">Academic Excellence</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-gold">Admission Process</Link></li>
              <li><Link to="/montessori" className="hover:text-brand-gold">Montessori Approach</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-gold">School Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-brand-sky/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span>Bariga, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>info@strongkiddies.edu.ng</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm text-brand-sky/70 mb-4">Join our community for latest news and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold text-brand-blue font-bold py-2 rounded-lg text-sm hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-brand-sky/40">
          <p>© {new Date().getFullYear()} Strong Kiddies Nursery & Primary School. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy" className="hover:text-brand-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow pt-20">
        {children}
      </main>
      <Footer />
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2341234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};
