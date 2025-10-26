import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SocialLinks from './SocialLinks';

const _Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph_ledro_home.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hN2U0N2EyMy05MjgyLTQ3ZjktOTM0NC1mMWQxYzE0N2NjNGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGhfbGVkcm9faG9tZS5qcGciLCJpYXQiOjE3NjExNDUwNTEsImV4cCI6MTc5MjY4MTA1MX0.6BvqtB09C7wJUt9OwVIuQ85_1j8btE3Ql1yGugZOjoY)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 titre-decale" >
          Stéphane&nbsp;LE_DRO
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-200 texte-tresbas">
          {t('hero.title')}
        </p>
      </div>

      <SocialLinks />
    </div>
  );
};

export default _Hero;