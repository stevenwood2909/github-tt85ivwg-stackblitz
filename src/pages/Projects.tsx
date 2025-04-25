import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  role: string;
  link?: string;
}

const Projects = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "Solo Project",
      description: t('projects.solo.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/steph_ledro_solo_reduc_landscape.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RlcGhfbGVkcm9fc29sb19yZWR1Y19sYW5kc2NhcGUucG5nIiwiaWF0IjoxNzQxNzA5OTM3LCJleHAiOjE4OTkzODk5Mzd9.6rfZnMzoq49OCVuyU827LH6khfdbV4gOBo09KZ5mjsE",
      year: "2020-Present",
      role: t('projects.solo.role'),
      link: "https://www.youtube.com/embed/2Dm9-lGBGds?autoplay=1&cc_load_policy=3"

    },
    {    id: 2,
      title: "SOUL LAB",
      description: t('projects.soullab.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/photo_SOUL_LAB_web.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcGhvdG9fU09VTF9MQUJfd2ViLmpwZyIsImlhdCI6MTc0Mjg1Mjk4MCwiZXhwIjoxOTAwNTMyOTgwfQ.pjvIMC2lAX_pufQwL0hg4yrOw-fI4zMqnBA_SfBKbLU",
      year: "2023-Present",
      role: t('projects.soullab.role'),
      link : "https://youtu.be/ZRIlTl-4eqQ?si=9iqM5aDPxtJ8Oe39",
    },
    {
      id: 3,
      title: "Yvan Knorst Trio",
      description: t('projects.knorst.description'),
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2072",
      year: "2022-Present",
      role: t('projects.knorst.role'),
    },
    {
      id:4,
      title: "Jim Poleya groups",
      description: t('projects.jimpoleya.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/jimpoleya.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2IwOGExZWYzLWExMzAtNGQxYi05NDIxLThjYTUwNzY0NTkxYyJ9.eyJ1cmwiOiJpbWFnZXMvamltcG9sZXlhLmpwZyIsImlhdCI6MTc0NTYxNjc4NCwiZXhwIjoxOTAzMjk2Nzg0fQ.f4Vk7GnrNz8WhPekB4ReX0-V2YnoEblxqM06L1msWJg",
      year: "2010-present",
      role: t('projects.jimpoleya.role'),
      link: "https://www.youtube.com/watch?v=9NJb52L17lE&list=PL90jIJ2vHeIAiNXvVwJu_OILWLW9DWeV7&index=2"
    },
    {
      id:5,
      title: "Mahmoud Ahmed & Badume's Band",
      description: t('projects.badume.description'),
      image: "https://bszyjfznackeyzqhqmtp.supabase.co/storage/v1/object/sign/images/mahmoud-ahmed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2IwOGExZWYzLWExMzAtNGQxYi05NDIxLThjYTUwNzY0NTkxYyJ9.eyJ1cmwiOiJpbWFnZXMvbWFobW91ZC1haG1lZC53ZWJwIiwiaWF0IjoxNzQ1NjE4ODgwLCJleHAiOjE3NzcxNTQ4ODB9.2SyAVojkQtxUZ-D_BIMho9wWi7QcCkPMZ27GnNe5nxw",
      year: "2010-2015",
      role: t('projects.badume.role'),
      link: "https://www.youtube.com/watch?v=YhMgUTvV4XY"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">{t('projects.title')}</h1>
        
        <div className="grid gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 "
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-yellow-500">{project.role}</p>
                    <p className="text-sm text-zinc-400">{project.year}</p>
                    <p className="text-zinc-300">{project.description}</p>
                    
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
                      >
                        {t('projects.watchVideo')} →
                      </a>
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