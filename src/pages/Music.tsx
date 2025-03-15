import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import MyAudio from '../components/MyAudio';

const Music = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      <MyAudio />
    </div>
  );
};

export default Music;