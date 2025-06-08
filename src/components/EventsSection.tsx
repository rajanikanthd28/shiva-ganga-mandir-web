
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EventsSection = () => {
  const projectorImages = [
    "/lovable-uploads/IMG_9857.png",
    "/lovable-uploads/bb45e637-dd00-43e4-a210-83b5e6f98dd6.png",
    "/lovable-uploads/f2a16f62-e2c9-4566-a623-5945f7bba03c.png",
    "/lovable-uploads/26ea8568-eced-4260-b253-21cc73f95937.png",
    "/lovable-uploads/854daba4-cc25-41b4-8aec-3045e2aea178.png",
    "/lovable-uploads/d861c08a-8946-461e-b5de-6ec598922311.png"
  ];

  const events = [
    {
      title: "Projector Donation to Government School",
      date: "September 2024",
      images: projectorImages,
      description: "Donated state-of-the-art projectors to enhance digital learning in the local government school, benefiting 200+ students.",
      impact: "500+ students benefited",
      category: "Education"
    },
    {
      title: "Shiva Homam and Abhishekam",
      date: "November 2024", 
      image: "/placeholder.svg",
      description: "Organized a Sacred fire ritual and ceremonial bathing of Shiva Lingam with milk, honey, and holy water.",
      impact: "500+ participants",
      category: "Spiritual"
    },
    {
      title: "Lord Shiva Kalyanam Celebration",
      date: "November 2024",
      image: "/placeholder.svg", 
      description: "Grand celebration of Lord Shiva's divine marriage with elaborate rituals, bringing together devotees from across the region.",
      impact: "500+ devotees attended",
      category: "Festival"
    },
    {
      title: "Temple Basement Construction",
      date: "Completed",
      image: "/placeholder.svg",
      description: "Major milestone achieved with completion of the temple's foundation and basement structure, marking significant progress.",
      impact: "Foundation completed",
      category: "Construction"
    },
    {
      title: "Temple Foundation Stone Laying",
      date: "15th August 2024",
      image: "/placeholder.svg",
      description: "Auspicious ceremony for laying the foundation stone of the main temple structure with elaborate Vedic rituals.",
      impact: "1000+ people attended",
      category: "Festival"
    },
    {
      title: "Annadanam Program",
      date: "Monthly",
      image: "/placeholder.svg",
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
                    src={event.image} 
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
      </div>
    </section>
  );
};

export default EventsSection;
