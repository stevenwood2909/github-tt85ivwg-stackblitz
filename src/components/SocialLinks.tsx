import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Facebook size={24} />,
      href: 'https://facebook.com/stephaneledro',
      label: 'Facebook',
    },
    {
      icon: <Instagram size={24} />,
      href: 'https://instagram.com/steph.ledro',
      label: 'Instagram',
    },
    {
      icon: <Youtube size={24} />,
      href: 'https://youtube.com/@stephaneledromusic',
      label: 'YouTube',
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:contact@stephaneledro.com',
      label: 'Email',
    },
  ];

  return (
    <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;