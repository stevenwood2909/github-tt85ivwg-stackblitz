import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Biography = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-20 min-h-screen bg-section-pattern">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('bio.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph_ledro_pic1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGhfbGVkcm9fcGljMS5qcGciLCJpYXQiOjE3NDE3MDg0NTIsImV4cCI6MTg5OTM4ODQ1Mn0.mKE7YrKh3_FrQklkQytmFLpMYHQIUA59Ixieqm9mjBA" 
              alt="Stéphane LE DRO performing"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6 text-zinc-300">
            <p>{t('bio.p1')}</p>
            <p>{t('bio.p2')}</p>
            <p>{t('bio.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;