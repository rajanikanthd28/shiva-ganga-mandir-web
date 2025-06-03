
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Sacred Mission</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-3">Our Trust</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Shri Vishwanatha Gangabhavani Trust was established in April 2024 with the divine vision 
                  of constructing a magnificent temple dedicated to Lord Shiva (Shri Vishwanatha) and 
                  Gangamatha (Shri Gangabhavani) in the sacred village of Talamadla, Telangana.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create a spiritual sanctuary that serves as a beacon of dharma, devotion, and cultural 
                  preservation. Our temple will be a place where devotees can find peace, seek blessings, 
                  and connect with the divine essence of Lord Shiva and the sacred Ganga.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-600 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To establish a center of spiritual learning and cultural revival that will serve generations 
                  of devotees, promoting Hindu values, traditions, and the timeless teachings of 
                  Sanatana Dharma while fostering community service and social upliftment.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-400">
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center">
                  🏛️ Trust Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>PAN Registered</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>80G Tax Exemption Certified</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>ISO Certified Organization</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Listed on DARPAN (NITI Aayog)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-400">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  💫 Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🙏</div>
                    <h4 className="font-semibold text-orange-600">Devotion</h4>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🤝</div>
                    <h4 className="font-semibold text-blue-600">Service</h4>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">🕉️</div>
                    <h4 className="font-semibold text-purple-600">Dharma</h4>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">💝</div>
                    <h4 className="font-semibold text-green-600">Compassion</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
