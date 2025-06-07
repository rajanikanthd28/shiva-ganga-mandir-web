
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TrusteesSection from '../components/TrusteesSection';
import EventsSection from '../components/EventsSection';
import UpcomingActivities from '../components/UpcomingActivities';
import DonationSection from '../components/DonationSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/49347fb5-abda-4bb8-bfc2-c59ea928bf79.png" 
                  alt="Shri Vishwanatha Gangabhavani Trust Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Shri Vishwanatha Gangabhavani Trust</h1>
                <p className="text-sm text-gray-600">Talamadla, Telangana</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">{t('nav.about')}</a>
                <a href="#trustees" className="text-gray-700 hover:text-orange-600 transition-colors">{t('nav.trustees')}</a>
                <a href="#events" className="text-gray-700 hover:text-orange-600 transition-colors">{t('nav.events')}</a>
                <a href="#donate" className="text-gray-700 hover:text-orange-600 transition-colors">{t('nav.donate')}</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">{t('nav.contact')}</a>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Trustees Section */}
      <TrusteesSection />

      {/* Events Section */}
      <EventsSection />

      {/* Upcoming Activities */}
      <UpcomingActivities />

      {/* Donation Section */}
      <DonationSection />

      {/* Recent Activities Feed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('recent.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-600">{t('recent.updates')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p className="font-semibold text-gray-800">{t('recent.foundation')}</p>
                    <p className="text-sm text-gray-600">November 2024</p>
                    <p className="text-gray-700 mt-2">{t('recent.foundation.desc')}</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-semibold text-gray-800">{t('recent.kalyanam.title')}</p>
                    <p className="text-sm text-gray-600">October 2024</p>
                    <p className="text-gray-700 mt-2">{t('recent.kalyanam.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">{t('recent.social')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">{t('recent.facebook')}</p>
                      <p className="text-sm text-gray-600">{t('recent.facebook.desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Twitter className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold">{t('recent.twitter')}</p>
                      <p className="text-sm text-gray-600">{t('recent.twitter.desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Youtube className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="font-semibold">{t('recent.youtube')}</p>
                      <p className="text-sm text-gray-600">{t('recent.youtube.desc')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/49347fb5-abda-4bb8-bfc2-c59ea928bf79.png" 
                    alt="Shri Vishwanatha Gangabhavani Trust Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Shri Vishwanatha Gangabhavani Trust</h3>
              </div>
              <p className="text-gray-300 mb-4">
                {t('footer.motto')}
              </p>
              <p className="text-sm text-gray-400">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quicklinks')}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">{t('nav.about')}</a></li>
                <li><a href="#trustees" className="text-gray-300 hover:text-orange-400 transition-colors">{t('nav.trustees')}</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-orange-400 transition-colors">{t('nav.events')}</a></li>
                <li><a href="#donate" className="text-gray-300 hover:text-orange-400 transition-colors">{t('nav.donate')}</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.connect')}</h4>
              <div className="flex space-x-4 mb-4">
                <a href="https://www.facebook.com/profile.php?id=61559781564126" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/srivgbt/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@SriVishwanathaGangabhavaniTrus" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-gray-400">
                {t('footer.registration')}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              {t('footer.copyright')}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              {t('footer.established')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
