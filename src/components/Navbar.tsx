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
    <nav className="fixed w-full bg-gradient-to-r from-black/95 via-zinc-950/95 to-stone-950/95 backdrop-blur-md border-b border-primary-900/20 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold whitespace-nowrap">
            Stéphane&nbsp;LE&nbsp;DRO&nbsp;
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-primary-400 transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path ? 'text-primary-500 font-medium' : 'text-zinc-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pl-2 border-l border-zinc-700">
              <LanguageSwitcher />
            </div>
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
              className={`block py-2 px-3 hover:bg-primary-950/30 rounded-lg transition-all duration-300 ${
                location.pathname === item.path ? 'text-primary-500 bg-primary-950/20 font-medium' : 'text-zinc-300'
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

export default Navbar;