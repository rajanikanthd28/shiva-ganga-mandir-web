
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TrusteesSection from '../components/TrusteesSection';
import EventsSection from '../components/EventsSection';
import UpcomingActivities from '../components/UpcomingActivities';
import DonationSection from '../components/DonationSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ॐ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Shri Vishwanatha Gangabhavani Trust</h1>
                <p className="text-sm text-gray-600">Talamadla, Telangana</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#trustees" className="text-gray-700 hover:text-orange-600 transition-colors">Trustees</a>
              <a href="#events" className="text-gray-700 hover:text-orange-600 transition-colors">Events</a>
              <a href="#donate" className="text-gray-700 hover:text-orange-600 transition-colors">Donate</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Activities</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-600">Latest Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p className="font-semibold text-gray-800">Temple Foundation Work Completed</p>
                    <p className="text-sm text-gray-600">November 2024</p>
                    <p className="text-gray-700 mt-2">The basement construction of our sacred temple has been successfully completed with devotees' blessings.</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-semibold text-gray-800">500+ Devotees Participated in Shiva Kalyanam</p>
                    <p className="text-sm text-gray-600">October 2024</p>
                    <p className="text-gray-700 mt-2">A grand celebration of Lord Shiva's divine marriage brought together devotees from across the region.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Follow us on Facebook</p>
                      <p className="text-sm text-gray-600">Daily updates and spiritual content</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Twitter className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold">Connect on Twitter</p>
                      <p className="text-sm text-gray-600">Join our spiritual community</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Youtube className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="font-semibold">Watch on YouTube</p>
                      <p className="text-sm text-gray-600">Temple events and spiritual discourses</p>
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
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ॐ</span>
                </div>
                <h3 className="text-xl font-bold">Shri Vishwanatha Gangabhavani Trust</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "Serve the Lord, Serve the People."
              </p>
              <p className="text-sm text-gray-400">
                Building a sacred abode for Lord Shiva and Gangamatha in Talamadla village, Telangana.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#trustees" className="text-gray-300 hover:text-orange-400 transition-colors">Trustees</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-orange-400 transition-colors">Events</a></li>
                <li><a href="#donate" className="text-gray-300 hover:text-orange-400 transition-colors">Donate</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-gray-400">
                Registered Trust | PAN: XXXXX | 80G Certified | ISO Certified | DARPAN Listed
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Shri Vishwanatha Gangabhavani Trust. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Established April 2024 | Talamadla Village, Telangana, India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
