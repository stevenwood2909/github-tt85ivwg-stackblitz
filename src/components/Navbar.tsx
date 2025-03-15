import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/biography', label: t('nav.biography') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/concerts', label: t('nav.concerts') },
    { path: '/music', label: t('nav.music') },
    { path: '/video', label: t('nav.video') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            Stéphane LE DRO
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-yellow-500 transition-colors ${
                  location.pathname === item.path ? 'text-yellow-500' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-4 py-2 space-y-1 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 px-3 hover:bg-zinc-800/50 rounded-lg transition-colors ${
                location.pathname === item.path ? 'text-yellow-500' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="py-2 px-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar