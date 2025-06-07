
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with spiritual imagery */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-blue-50 to-purple-100">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-30 animate-pulse"></div>
        
        {/* Om symbols */}
        <div className="absolute top-1/4 right-1/4 text-6xl text-orange-200 opacity-20 animate-spin" style={{animationDuration: '20s'}}>ॐ</div>
        <div className="absolute bottom-1/4 left-1/4 text-4xl text-blue-200 opacity-20 animate-spin" style={{animationDuration: '25s'}}>ॐ</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl rounded-full bg-white/10 backdrop-blur-sm">
            <img 
              src="/lovable-uploads/49347fb5-abda-4bb8-bfc2-c59ea928bf79.png" 
              alt="Shri Vishwanatha Gangabhavani Trust Logo" 
              className="w-28 h-28 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {t('hero.title1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </h1>
        </div>

        {/* Inspirational Quote */}
        <div className="max-w-4xl mx-auto mb-8">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed">
            "{t('hero.quote')}"
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {t('hero.mission')}
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
             onClick={() => window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-912815721', '_blank')}
            >
            {t('hero.donateBtn')}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t('hero.eventsBtn')}
          </Button>
        </div>

        {/* Floating lotus petals animation */}
        <div className="absolute top-1/3 left-1/3 w-8 h-8 opacity-30">
          <div className="w-full h-full bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 opacity-30">
          <div className="w-full h-full bg-orange-300 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 opacity-30">
          <div className="w-full h-full bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
