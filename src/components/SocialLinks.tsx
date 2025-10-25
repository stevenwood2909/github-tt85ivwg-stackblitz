import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

type SocialLinksProps = {
  items?: string[]; // optional list of platform names to include
  links?: Record<string, string>; // optional map: platform → href
};

const SocialLinks = ({ items, links }: SocialLinksProps)  => {


  const defaultSocialLinks = [
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

  //  Filter by items (if provided)
  let filtered = items ? defaultSocialLinks.filter(link => items.includes(link.label)) : defaultSocialLinks;

  //  Override hrefs if `links` provided
  if (links) {
    filtered = filtered.map(link => ({
      ...link,
      href: links[link.label] ?? link.href, // use custom URL if available
    }));
  }

  return (
    <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center space-x-6">
      {filtered.map((link) => (
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