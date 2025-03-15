import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGguanBnIiwiaWF0IjoxNzM5MDUzMTk0LCJleHAiOjE3NzA1ODkxOTR9.2gP6RHQZwK_NOdPeEojXY9iMpNpxd78q9mfsDw_bGCA)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Stéphane LE DRO</h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-200">
          {t('hero.title')}
        </p>
      </div>
    </div>
  );
};

export default Home