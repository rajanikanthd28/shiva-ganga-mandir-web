
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message. We will contact you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Connect With Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We welcome your inquiries, suggestions, and participation in our sacred mission. 
            Reach out to us for any information about donations, events, or volunteer opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-t-4 border-blue-400">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Phone Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Main Office</p>
                    <p className="text-gray-600">+91 9281401019</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Trustee (Chairman)</p>
                    <p className="text-gray-600">+91 9281401019</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Secretary</p>
                    <p className="text-gray-600">+91 7032344599</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  Email Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">General Inquiries</p>
                    <p className="text-gray-600 break-all">srivgbt@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Donations</p>
                    <p className="text-gray-600 break-all">srivgbt@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Events</p>
                    <p className="text-gray-600 break-all">events@vishwanathatemple.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-orange-400">
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">Shri Vishwanatha Gangabhavani Trust</p>
                  <p className="text-gray-600">Near Pedda Cheruvu</p>
                  <p className="text-gray-600">Talamadla Village</p>
                  <p className="text-gray-600">Telangana - 502001</p>
                  <p className="text-gray-600">India</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-purple-400">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="text-gray-600">10:00 AM - 1:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    *Available for emergency calls 24/7
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-t-4 border-gradient-to-r from-blue-400 to-purple-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Send Us a Message</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="volunteer">Volunteer Opportunity</option>
                        <option value="events">Event Information</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback/Suggestions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Please share your message, questions, or how you'd like to contribute to our mission..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      * Required fields
                    </p>
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      Send Message 📧
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
            <div className="mt-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-red-500" />
                    Temple Location
                  </CardTitle>
                  <CardDescription>
                    Find us near Pedda Cheruvu in Talamadla village, Telangana
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold">Interactive Map</p>
                      <p className="text-sm">Talamadla Village, Telangana</p>
                      <p className="text-xs mt-2">Google Maps integration would be embedded here</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                      📍 Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
