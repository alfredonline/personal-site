"use client";
import { useLanguage } from '@/context/LanguageContext';
import { IconLanguage } from '@tabler/icons-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 py-2 px-2 rounded-md text-sm text-secondary hover:text-primary transition duration-200"
    >
      <IconLanguage className="h-4 w-4 flex-shrink-0" />
      <span>
        {language === 'en' ? t('Leer en Español') : t('Switch to English')}
      </span>
    </button>
  );
}; 