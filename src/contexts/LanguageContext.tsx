import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tWithLineBreaks: (key: string) => React.ReactNode;
}

const translations = {
  en: {
    // Navigation
    'nav.biography': 'Biography',
    'nav.video': 'Video',
    'nav.music': 'Music',
    'nav.concerts': 'Concerts',
    'nav.contact': 'Contact',
    'nav.projects': 'Projects',

    // Hero
    'hero.title': 'Clarinettist & Saxophonist',
    'hero.cta': 'Discover More',

    // Biography
    'bio.title': 'Biography',
    'bio.p1':
      'Stéphane LE DRO has shaped his musical identity through a rich career, from traditional Breton music (Gwenfol Orchestra) to soul/funk (Heatwave) through world music (Mahmoud Ahmed & Badumes Band, Zambrocal, Yvan Knorst). He also studied jazz with Jean-Philippe Lavergne at the CRD in Saint-Brieuc then at the CIM in Paris.',
    'bio.p2':
      'In his solo project, he invites us on a journey through different musical landscapes. His bass clarinet, sometimes playful, sometimes angry, always captivating, immerses us in a musical universe which gives pride of place to heady rhythms and inspired improvisations... The looper allows him to orchestrate his music live, and to enrich it with astonishing sound textures. The diffusion of sound in Quadriphony is a real immersive experience for the listener.',
    'bio.p3': ' ',

    // Projects
    'projects.title': 'Musical Projects',
    'projects.watchVideo': 'Watch Video',
    'projects.more': 'More infos',
    'projects.solo.role': 'Solo artist, Composer',
    'projects.solo.description': 'A unique solo performance combining bass clarinet with live looping and quadraphonic sound diffusion, creating immersive musical landscapes.',
    'projects.soullab.description': "SOUL LAB is a trio of French musicians.  \nTenor sax: Stéphane LE&nbsp;DRO   \nHammond organ & Moog : Olivier GUÉNÉGO   \nDrums : Tony MONTFORT   \nThey distill groove music inspired by the great names of soul and funk from the 70s, and like to appropriate the standards of their masters such as James Brown, Jimmy Smith or Grant Green, by experimenting with new sounds, always in the service of the groove!",
    'projects.soullab.role': 'Saxophonist, Composer',
    'projects.badume.description': 'Collaboration with legendary Ethiopian singer Mahmoud Ahmed, performing traditional and modern Ethiopian music.',
    'projects.badume.role': 'Saxophonist, Arranger',
    'projects.knorst.description': 'Collaboration with guitarist Yvan Knorst and violist Aude-Marie Duperret.',
    'projects.knorst.role': 'Clarinetist, Composer',
'projects.jimpoleya.description': 'Collaboration with Drummer Jimmy Poleya and his soul/funk collective bands : "Electrik City Funk" and "Funny vibes", who perpetuate the hits of soul and funk music.',
    'projects.jimpoleya.role': 'Saxophonist',
    'projects.tworeeds.description': 'Two bass clarinets, two kindred spirits, a shared desire for exploration.\n An intimate sonic journey, inspired by world music, where lyricism and trance, composition and improvisation intertwine. Their incisive playing and unwavering energy are always driven by the simple pleasure of vibrating together. \n Erwan Lhermenier : Clarinets \n Stéphane Le Dro : Clarinets, composition',
    'projects.tworeeds.role': 'Clarinettist, composer',

    // Video
    'video.title': 'Video',
    'video.watch': 'Watch on YouTube',
    'video.description_burnout': 'Live performance in solo',
    'video.description_belomi':
      'Concert with Mahmoud Ahmed & Badumes Band in Hertme ( Netherland )',
    'video.description_addis': 'Live recording in solo',
    'video.description_folie': 'With Yvan Knorst trio ( teaser 2023 ) ',

    // Music
    'music.title': 'Music',
    'music.listen': 'Listen on Spotify',
    'music.noTracks': 'No tracks available',

    // Concerts
    'concerts.title': 'Upcoming Concerts',
    'concerts.getTickets': 'Get Tickets',
    'concerts.noConcerts': 'No upcoming concerts scheduled',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in Touch',
    'contact.description':
      "For bookings, collaborations, or any inquiries, please don't hesitate to reach out.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',

    // Footer
    'footer.rights': '© 2026 Stéphane LE&nbsp;DRO. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.biography': 'Biographie',
    'nav.video': 'Vidéo',
    'nav.music': 'Musique',
    'nav.concerts': 'Concerts',
    'nav.contact': 'Contact',
    'nav.projects': 'Projets',

    // Hero
    'hero.title': 'Clarinettiste & Saxophoniste',
    'hero.cta': 'Découvrir',

    // Biography
    'bio.title': 'Biographie',
    'bio.p1':
      'Stéphane LE DRO a façonné son identité musicale par un parcours riche, de la musique traditionnelle bretonne ( Gwenfol Orchestra ) à la soul/funk ( Heatwave ) en passant par les musiques du monde ( Mahmoud Ahmed & Badumes Band, Zambrocal, Yvan Knorst ). Il a également étudié le jazz auprès de Jean-Philippe Lavergne au CRD de Saint-Brieuc puis au CIM à Paris.',
    'bio.p2':
      " Dans son projet en solo, il nous invite à un voyage à travers différents paysages musicaux. Sa clarinette basse, tantôt enjouée, tantôt rageuse, toujours envoûtante, nous plonge dans un univers musical qui fait la part belle aux rythmes entêtants et aux improvisations inspirées... Le looper lui permet d'orchestrer sa musique en direct, et de l'enrichir d'étonnantes textures sonores. La diffusion du son en Quadriphonie est une vraie epériencce immersive pour l'auditeur .",
    'bio.p3': ' ',

    // Projects
    'projects.title': 'Projets Musicaux',
    'projects.watchVideo': 'Voir la Vidéo',
    'projects.more': 'Plus d\'infos',
    'projects.solo.description': 'Une performance solo unique combinant clarinette basse avec looping en direct et diffusion quadraphonique, créant des paysages musicaux immersifs.',
    'projects.solo.role': 'Artiste Solo, Compositeur',
    'projects.soullab.description': "SOUL LAB est un trio de musiciens français. \nSax ténor : Stéphane LE\u00A0DRO   \nOrgue Hammond & Moog : Olivier GUÉNÉGO   \nBatterie : Tony MONTFORT   \nIls distillent une musique groove inspirée des grands noms de la soul et du funk des années 70, et aiment s\'approprier les standards de leurs maîtres que sont James Brown, Jimmy Smith ou encore Grant Green, en expérimentant de nouvelles sonorités, toujours au service du groove! ",
    'projects.soullab.role': 'Saxophoniste, Compositeur',
    'projects.badume.description': 'Collaboration avec le légendaire chanteur éthiopien Mahmoud Ahmed, interprétant de la musique éthiopienne traditionnelle et moderne.',
    'projects.badume.role': 'Saxophoniste',
    'projects.knorst.description': 'Collaboration avec le guitariste Yvan Knorst et l\'altiste Aude-MArie Duperret.',
    'projects.knorst.role': 'Clarinettiste, Compositeur',
    'projects.jimpoleya.description': 'Collaboration avec le batteur Jimmy Poleya et ses collectifs de soul/funk : "Electrik City Funk" et "Funny vibes", qui perpétuent les hits de la soul et funk music.',
    'projects.jimpoleya.role': 'Saxophoniste',
    'projects.tworeeds.description': '2 clarinettes basses, 2 souffles complices, un même désir d’exploration.\n Un voyage sonore intime, inspiré des musiques du monde, où se mêlent lyrisme et transe, écriture et improvisation.\n Leur jeu incisif et leur énergie obstinée sont toujours animés par ce plaisir simple de vibrer ensemble.\n Erwan Lhermenier : Clarinettes \n Stéphane Le Dro : Clarinettes, composition',
    'projects.tworeeds.role': 'Clarinettiste, composition',

    // Video
    'video.title': 'Vidéo',
    'video.watch': 'Regarder sur YouTube',
    'video.description_burnout': 'Performance en solo',
    'video.description_belomi':
      'Concert avec Mahmoud Ahmed & Badumes Band à Hertme ( Hollande )',
    'video.description_addis': 'Enregistrement live en solo',
    'video.description_folie': 'Avec Yvan Knorst trio ( teaser 2023 ) ',

    // Music
    'music.title': 'Musique',
    'music.listen': 'Écouter sur Spotify',
    'music.noTracks': 'Aucune piste disponible',

    // Concerts
    'concerts.title': 'Prochains Concerts',
    'concerts.getTickets': 'Réserver',
    'concerts.noConcerts': 'Aucun concert à venir',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': ' ',
    'contact.description': ' ',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',

    // Footer
    'footer.rights': '© 2026 Stéphane LE&nbsp;DRO. Tous droits réservés.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)['fr']] || key;
  };

  const tWithLineBreaks = (key: string): React.ReactNode => { const raw = t(key).replace(/\\n/g, "\n"); 
  // normalise \\n → \n 
  const parts = raw.split("\n"); return parts.map((line, i) => ( <React.Fragment key={i}> {line} {i < parts.length - 1 && <br />} </React.Fragment> )); };

return ( <LanguageContext.Provider value={{ language, setLanguage, t, tWithLineBreaks }}> {children} </LanguageContext.Provider> );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}