import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'en' ? 'Home' : '首页', href: '#home' },
    { name: language === 'en' ? 'About Us' : '关于我们', href: '#about' },
    { name: language === 'en' ? 'Services' : '我们的服务', href: '#services' },
    { name: language === 'en' ? 'Contact' : '联系我们', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-serif font-bold tracking-tighter">
              <span className={scrolled ? 'text-primary' : 'text-white'}>Hock Hoe</span>
              <span className="text-accent ml-1">Engineering</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors ${
                  scrolled ? 'text-primary' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors ${
                scrolled ? 'text-primary' : 'text-white/90'
              }`}
            >
              <Globe size={16} />
              <span>{language === 'en' ? '中文' : 'EN'}</span>
            </button>

            <a
              href="#quote"
              className="bg-accent text-white px-6 py-2.5 rounded-none text-sm font-medium uppercase tracking-wide hover:bg-accent/90 transition-colors"
            >
              {language === 'en' ? 'Get a Quote' : '获取报价'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors ${
                scrolled ? 'text-primary' : 'text-white/90'
              }`}
            >
              <Globe size={16} />
              <span>{language === 'en' ? '中文' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-primary' : 'text-white'} hover:text-accent focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-primary border-b border-gray-100 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center bg-accent text-white px-6 py-3 text-base font-medium uppercase tracking-wide"
              >
                {language === 'en' ? 'Get a Quote' : '获取报价'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
