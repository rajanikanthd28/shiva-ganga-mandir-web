
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Languages className="w-4 h-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-md p-1">
        <Button
          variant={language === 'te' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('te')}
          className={`text-xs px-3 py-1 ${
            language === 'te' 
              ? 'bg-orange-500 text-white hover:bg-orange-600' 
              : 'text-gray-600 hover:text-orange-600'
          }`}
        >
          తెలుగు
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={`text-xs px-3 py-1 ${
            language === 'en' 
              ? 'bg-orange-500 text-white hover:bg-orange-600' 
              : 'text-gray-600 hover:text-orange-600'
          }`}
        >
          English
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
