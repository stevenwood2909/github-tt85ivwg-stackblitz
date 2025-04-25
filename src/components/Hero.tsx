import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen">
      <div
        className="absolute object-fit bg-[auto_50%] inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph_ledrro_pic5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2IwOGExZWYzLWExMzAtNGQxYi05NDIxLThjYTUwNzY0NTkxYyJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGhfbGVkcnJvX3BpYzUuanBnIiwiaWF0IjoxNzQ1NjE0MTk5LCJleHAiOjE5MDMyOTQxOTl9.jm9U2-dS6moaFavawdVfZY4CQnuknhww85xyv-9uVDE)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Stéphane&nbsp;LE&nbsp;DRO
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-200">
          {t('hero.title')}
        </p>
      </div>

      <SocialLinks />
    </div>
  );
};

export default Hero;