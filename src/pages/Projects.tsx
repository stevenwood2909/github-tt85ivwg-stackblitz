//import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  role: string;
  link?: string;
  more?: string;
  aspectRatio?: 'video' | 'auto';
}

const Projects = () => {
  //const { tWithLineBreaks } = useLanguage();
  const { t} =  useLanguage();
  const projects: Project[] = [
    {
      id: 1,
      title: "Solo Project",
      description: t('projects.solo.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph_ledro_solo_reduc_landscape.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGhfbGVkcm9fc29sb19yZWR1Y19sYW5kc2NhcGUucG5nIiwiaWF0IjoxNzQxNzA5OTM3LCJleHAiOjE4OTkzODk5Mzd9.6rfZnMzoq49OCVuyU827LH6khfdbV4gOBo09KZ5mjsE",
      year: "2024-Present",
      role: t('projects.solo.role'),
      link: "https://www.youtube.com/embed/2Dm9-lGBGds?autoplay=1&cc_load_policy=3",
      aspectRatio: 'video'
    },
    {
      id: 2,
      title: "SOUL LAB",
      description: t('projects.soullab.description').replace(/\\n/g, "\n"),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/photo_SOUL_LAB_web.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcGhvdG9fU09VTF9MQUJfd2ViLmpwZyIsImlhdCI6MTc0Mjg1Mjk4MCwiZXhwIjoxOTAwNTMyOTgwfQ.pjvIMC2lAX_pufQwL0hg4yrOw-fI4zMqnBA_SfBKbLU",
      year: "2023-Present",
      role: t('projects.soullab.role'),
      link: "https://youtu.be/ZRIlTl-4eqQ?si=9iqM5aDPxtJ8Oe39",
      more: "https://www.facebook.com/soullabtrio/",
      aspectRatio: 'auto'
    },
    {
      id: 3,
      title: "2 REEDS",
      description: t('projects.tworeeds.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/Two%20reeds-photo-reduc.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hN2U0N2EyMy05MjgyLTQ3ZjktOTM0NC1mMWQxYzE0N2NjNGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvVHdvIHJlZWRzLXBob3RvLXJlZHVjLmpwZWciLCJpYXQiOjE3NjI2Mjg0NzAsImV4cCI6MTc5NDE2NDQ3MH0.CWSeZx8W16czpO8H-FXrDQyGT0USyHiRMrQwfbnGycs",
      year: "2025-present",
      role: t('projects.tworeeds.role'),
      aspectRatio: 'auto'
    },
    {
      id: 4,
      title: "Jim Poleya groups",
      description: t('projects.jimpoleya.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/jimpoleya.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hN2U0N2EyMy05MjgyLTQ3ZjktOTM0NC1mMWQxYzE0N2NjNGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvamltcG9sZXlhLmpwZyIsImlhdCI6MTc1OTY3MDczOCwiZXhwIjoxODIyNzQyNzM4fQ.WTj7IoOQ2LbFhKtf1voGN8jqGhWOh1GDiAXbk7T_8ak",
      year: "2010-present",
      role: t('projects.jimpoleya.role'),
      link: "https://www.youtube.com/watch?v=9NJb52L17lE&list=PL90jIJ2vHeIAiNXvVwJu_OILWLW9DWeV7&index=2",
      aspectRatio: 'auto'
    },

    {
      id: 5,
      title: "Yvan Knorst Trio",
      description: t('projects.knorst.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/photo_trio_KLDD_reduc.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hN2U0N2EyMy05MjgyLTQ3ZjktOTM0NC1mMWQxYzE0N2NjNGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvcGhvdG9fdHJpb19LTEREX3JlZHVjLmpwZyIsImlhdCI6MTc1OTY3MDgzOSwiZXhwIjoxODIyNzQyODM5fQ.Sepyqhi9Esc-6tWrAbpj9HXNbBwGE9EnjF7gtO5A6g0",
      year: "2022-2025",
      role: t('projects.knorst.role'),
      link: "https://www.youtube.com/watch?v=dRLmGg-xQu8",
      aspectRatio: 'auto'
    },
    {
      id: 6,
      title: "Mahmoud Ahmed & Badume's Band",
      description: t('projects.badume.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/mahmoud-ahmed.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hN2U0N2EyMy05MjgyLTQ3ZjktOTM0NC1mMWQxYzE0N2NjNGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvbWFobW91ZC1haG1lZC53ZWJwIiwiaWF0IjoxNzU5NjcwNzg2LCJleHAiOjE4MjI3NDI3ODZ9.E-leYH9pdEvupC6m63UFPILKcVFUkPJG303gTrx9S0k",
      year: "2010-2015",
      role: t('projects.badume.role'),
      link: "https://www.youtube.com/watch?v=YhMgUTvV4XY",
      aspectRatio: 'auto'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">{t('projects.title')}</h1>
        
        <div className="grid gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 "
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className={`relative overflow-hidden rounded-lg ${
                  project.aspectRatio === 'video' ? 'aspect-video' : 'aspect-auto'
                } ${project.aspectRatio === 'auto' ? 'min-h-64 md:min-h-80' : ''}`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-primary-400">{project.role}</p>
                    <p className="text-sm text-zinc-400">{project.year}</p>
                    <p className="text-zinc-300 whitespace-pre-line">{project.description}</p>
                    
                    {project.link && (
                      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        {t('projects.watchVideo')}
                      </a>
                      {project.more &&
                      <a 
                      href={project.more}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {t('projects.more')}
                    </a>}
                    </div>
                      
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;