import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph_ledrro_pic5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNGVmN2U0MS0zNmJlLTQ1YjEtOGRmZC01YmRkYTM5ZGJiZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGhfbGVkcnJvX3BpYzUuanBnIiwiaWF0IjoxNzUzODg1OTk2LCJleHAiOjE4MTY5NTc5OTZ9.BLBHQObLtkfEAq2Ie0gXb5UO_-k2ArZ3xe1EiWbIzvM)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Stéphane&nbsp;LE&nbsp;DRO</h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-200">
          {t('hero.title')}
        </p>
      </div>

      <SocialLinks />
    </div>
  );
};

export default Home;