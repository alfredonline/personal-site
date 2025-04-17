"use client";
import { useLanguage } from '@/context/LanguageContext';
import { IconLanguage } from '@tabler/icons-react';
import 'flag-icons/css/flag-icons.min.css';

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center justify-center gap-2 rounded-full w-full bg-white px-4 py-2 text-sm font-medium text-slate-900 mb-10 transition-all"
    >
      <div className="flex items-center gap-2">
        <span className="fi flex items-center" style={{ fontSize: '1.2em' }}>
          {language === 'en' ? (
            <span className="fi fi-es"></span>
          ) : (
            <span className="fi fi-gb"></span>
          )}
        </span>
        <span className="flex items-center">
          {language === 'en' ? t('Español') : t('English')}
        </span>
      </div>
    </button>
  );
}; 