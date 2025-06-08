import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const projectorImages = [
    "/lovable-uploads/IMG_9857.png",
    "/lovable-uploads/bb45e637-dd00-43e4-a210-83b5e6f98dd6.png",
    "/lovable-uploads/f2a16f62-e2c9-4566-a623-5945f7bba03c.png",
    "/lovable-uploads/26ea8568-eced-4260-b253-21cc73f95937.png",
    "/lovable-uploads/854daba4-cc25-41b4-8aec-3045e2aea178.png",
    "/lovable-uploads/d861c08a-8946-461e-b5de-6ec598922311.png"
  ];

  const foundationImages = [
    "/lovable-uploads/afe47ffe-dff2-43b8-933c-a53dc0265041.png"
  ];

  const constructionImages = [
    "/lovable-uploads/aff109bc-8006-4c78-b49e-a2a4fd0403bd.png"
  ];

  const shivaHomamImages = [
    "/lovable-uploads/3f2c5c56-8069-4194-8dfa-08a9af27b97d.png"
  ];

  const kalyanamImages = [
    "/lovable-uploads/cb5f3962-c55f-4585-a8de-c6a397b60526.png"
  ];

  const annadanamImages = [
    "/lovable-uploads/a37583e6-cad0-44b5-bd36-ad8f88fc22c2.png"
  ];

  const events = [
     {
      title: "Temple Foundation Stone Laying",
      date: "15th August 2024",
      images: foundationImages,
      description: "Auspicious ceremony for laying the foundation stone of the main temple structure with elaborate Vedic rituals.",
      impact: "1000+ people attended",
      category: "Festival"
    },
    {
      title: "Projector Donation to Government School",
      date: "September 2024",
      images: projectorImages,
      description: "Donated state-of-the-art projectors to enhance digital learning in the local government school, benefiting 200+ students.",
      impact: "500+ students benefited",
      category: "Education"
    },
    {
      title: "Temple Basement Construction",
      date: "Completed",
      images: constructionImages,
      description: "Major milestone achieved with completion of the temple's foundation and basement structure, marking significant progress.",
      impact: "Foundation completed",
      category: "Construction"
    },
    {
      title: "Shiva Homam and Abhishekam",
      date: "November 2024", 
      images: shivaHomamImages,
      description: "Organized a Sacred fire ritual and ceremonial bathing of Shiva Lingam with milk, honey, and holy water.",
      impact: "500+ participants",
      category: "Spiritual"
    },
    {
      title: "Lord Shiva Kalyanam Celebration",
      date: "November 2024",
      images: kalyanamImages, 
      description: "Grand celebration of Lord Shiva's divine marriage with elaborate rituals, bringing together devotees from across the region.",
      impact: "500+ devotees attended",
      category: "Festival"
    },
    {
      title: "Annadanam Program",
      date: "Monthly",
      images: annadanamImages,
      description: "Regular free meal distribution program serving nutritious food to devotees and the underprivileged community members.",
      impact: "1000+ meals monthly",
      category: "Service"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Education: "bg-blue-100 text-blue-800",
      Spiritual: "bg-orange-100 text-orange-800", 
      Festival: "bg-purple-100 text-purple-800",
      Construction: "bg-green-100 text-green-800",
      Health: "bg-red-100 text-red-800",
      Service: "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Sacred Activities & Events</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Through devotion and service, we organize various spiritual, educational, and community welfare activities 
            that strengthen our bond with the divine and serve humanity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-blue-100">
                {event.images ? (
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {event.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <img 
                            src={image} 
                            alt={`${event.title} - Image ${imgIndex + 1}`}
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  <img 
                    src="/placeholder.svg" 
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">{event.date}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 leading-tight">{event.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-700">{event.impact}</span>
                  </div>
                  <div className="text-2xl">
                    {event.category === 'Education' && '📚'}
                    {event.category === 'Spiritual' && '🕉️'}
                    {event.category === 'Festival' && '🎉'}
                    {event.category === 'Construction' && '🏗️'}
                    {event.category === 'Health' && '🏥'}
                    {event.category === 'Service' && '🤝'}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-orange-50 to-blue-50 border-t-4 border-orange-400">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Impact So Far</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">2000+</div>
                  <p className="text-gray-700">Devotees Served</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <p className="text-gray-700">Events Organized</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <p className="text-gray-700">Meals Distributed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">300+</div>
                  <p className="text-gray-700">Students Supported</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Temple Location and Social Media Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Google Map Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-red-500" />
                Temple Location
              </CardTitle>
              <CardDescription>
                Visit our sacred temple in Talamadla Village, Telangana
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8!2d78.34921136416641!3d18.22819804637545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDEzJzQxLjUiTiA3OMKwMjAnNTcuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Near Pedda Cheruvu, Talamadla Village, Telangana - 502001
                </p>
                <Button 
                  onClick={() => window.open(`https://www.google.com/maps?q=18.22819804637545,78.34921136416641`, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Connect With Us</CardTitle>
              <CardDescription>
                Follow our spiritual journey and stay updated with temple activities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* YouTube Channel */}
              <div className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <Youtube className="w-8 h-8 text-red-600 mr-4" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">YouTube Channel</h4>
                  <p className="text-sm text-gray-600">Watch temple events, spiritual discourses, and live ceremonies</p>
                </div>
                <Button 
                  onClick={() => window.open('https://www.youtube.com/@SriVishwanathaGangabhavaniTrus', '_blank')}
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50"
                >
                  Subscribe
                </Button>
              </div>

              {/* Facebook Page */}
              <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Facebook className="w-8 h-8 text-blue-600 mr-4" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Facebook Page</h4>
                  <p className="text-sm text-gray-600">Daily updates, spiritual content, and community discussions</p>
                </div>
                <Button 
                  onClick={() => window.open('https://www.facebook.com/profile.php?id=61559781564126', '_blank')}
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50"
                >
                  Follow
                </Button>
              </div>

              {/* Instagram */}
              <div className="flex items-center p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                <div className="w-8 h-8 text-pink-600 mr-4 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <p className="text-sm text-gray-600">Beautiful moments from temple life and spiritual insights</p>
                </div>
                <Button 
                  onClick={() => window.open('https://www.instagram.com/srivgbt/', '_blank')}
                  variant="outline"
                  className="border-pink-500 text-pink-600 hover:bg-pink-50"
                >
                  Follow
                </Button>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg text-center">
                <p className="text-sm text-gray-700 font-medium">
                  🙏 Join our digital sangam and be part of our spiritual journey
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
