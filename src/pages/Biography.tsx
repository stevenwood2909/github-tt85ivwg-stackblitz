import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Biography = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-20 min-h-screen bg-warm-gradient">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary-400 to-warmGold-DEFAULT bg-clip-text text-transparent">{t('bio.title')}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group">
            <img
              src="https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph_le_dro_tenor_plouescat.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGhfbGVfZHJvX3Rlbm9yX3Bsb3Vlc2NhdC5qcGciLCJpYXQiOjE3NDIwNDgyOTYsImV4cCI6MTg5OTcyODI5Nn0.Ckz-bPI-P9aCnqjxpgROYDarXmpvOkv9fjH4GiaxA54"
              alt="Stéphane LE DRO performing"
              className="rounded-lg shadow-2xl shadow-primary-950/50 ring-1 ring-primary-800/20 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="space-y-6 text-zinc-300">
            <p className="leading-relaxed">{t('bio.p1')}</p>
            <p className="leading-relaxed">{t('bio.p2')}</p>
            <p className="leading-relaxed">{t('bio.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;