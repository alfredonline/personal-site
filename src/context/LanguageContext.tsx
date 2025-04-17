"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Simple translation function
  const t = (key: string): string => {
    return (translations[language] as { [key: string]: string })[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations = {
  en: {
    // Home page
    'greeting': 'My name is',
    'intro': 'I\'m a full-stack software engineer who enjoys',
    'building_useful': 'building useful',
    'products_description': 'products in the education sector as well as micro SaaS solutions for creators.',
    'experience': 'I have 3 years of commercial experience working as a',
    'full_stack_engineer': 'full-stack engineer',
    'and_instructor': 'and bootcamp instructor. I have extensive experience working with Next.js, React, Node.js/Express, MongoDB, PostgreSQL, TypeScript, Git, and Rust.',
    'recent_projects': 'Here are some products I\'ve built recently.',
    
    // About page
    'about_me': 'About Me',
    'about_intro': 'My name is Alfie. I am a problem solver who enjoys building products that are both functional and aesthetically pleasing.',
    'about_work': 'I work as a full-stack developer and bootcamp instructor. I have experience with Next.js, React, Node.js/Express, MongoDB, PostgreSQL, TypeScript, Git, Rust, and some Go. I also have a',
    'youtube_channel': 'YouTube Channel',
    'about_youtube': 'where I post videos about web development and programming.',
    'about_project': 'I built YouTubeToSlides.com, a user-friendly application that allows people to convert YouTube videos into presentations for educational purposes. To date, users from around the world have generated over 500 presentations with this tool. I also built LinguaTrackr, a tool for language learners who want to keep track of their immersion time in their target language(s)',
    'rust_developer': 'I\'m also a Rust developer, working on high-performance applications and systems programming projects.',
    'contact_me': 'If you\'d like to work with me or hire me, please reach out via',
    'email': 'email',
    
    // Projects page
    'projects_title': 'What I\'ve been working on',
    
    // Contact page
    'contact_title': 'Contact Me',
    'contact_description': 'Reach out to me over email or fill out this contact form. I will get back to you as soon as possible. Do not hesitate to reach out!',
    'your_name': 'Your Name',
    'your_email': 'Your email address',
    'your_message': 'Your Message',
    'submit': 'Submit',
    'sending': 'Sending...',
    
    // Navigation
    'home': 'Home',
    'about': 'About',
    'projects': 'Projects',
    'contact': 'Contact',
    'socials': 'Socials',
    'developer': 'Developer',
    
    // Language switcher
    'switch_to_spanish': 'Switch to Spanish',
    'switch_to_english': 'Switch to English',
  },
  es: {
    // Home page
    'greeting': 'Mi nombre es',
    'intro': 'Soy un ingeniero de software full-stack que disfruta',
    'building_useful': 'creando',
    'products_description': 'productos útiles en el sector educativo así como soluciones micro SaaS para creadores.',
    'experience': 'Tengo 3 años de experiencia profesional trabajando como',
    'full_stack_engineer': 'ingeniero full-stack',
    'and_instructor': 'e instructor de bootcamp. Tengo amplia experiencia trabajando con Next.js, React, Node.js/Express, MongoDB, PostgreSQL, TypeScript, Git, Rust, y algo de Go.',
    'recent_projects': 'Estos son algunos productos que he desarrollado recientemente.',
    
    // About page
    'about_me': 'Sobre Mí',
    'about_intro': 'Mi nombre es Alfie. Soy un solucionador de problemas que disfruta creando productos que son tanto funcionales como estéticamente atractivos.',
    'about_work': 'Trabajo como desarrollador full-stack e instructor de bootcamp. Tengo experiencia con Next.js, React, Node.js/Express, MongoDB, PostgreSQL, TypeScript, Git, Rust, y algo de Go. También tengo un',
    'youtube_channel': 'Canal de YouTube',
    'about_youtube': 'donde publico videos sobre desarrollo web y programación.',
    'about_project': 'Desarrollé YouTubeToSlides.com, una aplicación fácil de usar que permite a las personas convertir videos de YouTube en presentaciones con fines educativos. Hasta la fecha, usuarios de todo el mundo han generado más de 200 presentaciones con esta herramienta. También desarrollé LinguaTrackr, una herramienta para aprendices de idiomas que quieren rastrear su tiempo de inmersión en su idioma objetivo(s)',
    'rust_developer': 'También soy desarrollador de Rust, trabajando en aplicaciones de alto rendimiento y proyectos de programación de sistemas.',
    'contact_me': 'Si deseas trabajar conmigo o contratarme, por favor contáctame a través de',
    'email': 'correo electrónico',
    
    // Projects page
    'projects_title': 'En qué he estado trabajando',
    
    // Contact page
    'contact_title': 'Contáctame',
    'contact_description': 'Comunícate conmigo por correo electrónico o completa este formulario de contacto. Te responderé lo antes posible. ¡No dudes en contactarme!',
    'your_name': 'Tu Nombre',
    'your_email': 'Tu dirección de correo electrónico',
    'your_message': 'Tu Mensaje',
    'submit': 'Enviar',
    'sending': 'Enviando...',
    
    // Navigation
    'home': 'Inicio',
    'about': 'Sobre Mí',
    'projects': 'Proyectos',
    'contact': 'Contacto',
    'socials': 'Redes Sociales',
    'developer': 'Desarrollador',
    
    // Language switcher
    'switch_to_spanish': 'Cambiar a Español',
    'switch_to_english': 'Cambiar a Inglés',
  }
}; 