
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const EventsSection = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
      title: t('events.projector.title'),
      date: t('date.september2024'),
      images: projectorImages,
      description: t('events.projector.desc'),
      impact: t('events.projector.impact'),
      category: t('category.education')
    },
    {
      title: t('events.bgcompetition.title'),
      date: t('date.august2024'), 
      image: "/placeholder.svg",
      description: t('events.bgcompetition.desc'),
      impact: t('events.bgcompetition.impact'),
      category: t('category.spiritual')
    },
    {
      title: t('events.kalyanam.title'),
      date: t('date.july2024'),
      image: "/placeholder.svg", 
      description: t('events.kalyanam.desc'),
      impact: t('events.kalyanam.impact'),
      category: t('category.festival')
    },
    {
      title: t('events.construction.title'),
      date: t('date.ongoing'),
      image: "/placeholder.svg",
      description: t('events.construction.desc'),
      impact: t('events.construction.impact'),
      category: t('category.construction')
    },
    {
      title: t('events.health.title'),
      date: t('date.june2024'),
      image: "/placeholder.svg",
      description: t('events.health.desc'),
      impact: t('events.health.impact'),
      category: t('category.health')
    },
    {
      title: t('events.annadanam.title'),
      date: t('date.monthly'),
      image: "/placeholder.svg",
      description: t('events.annadanam.desc'),
      impact: t('events.annadanam.impact'),
      category: t('category.service')
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getCategoryColor = (category: string) => {
    const colors = {
      [t('category.education')]: "bg-blue-100 text-blue-800",
      [t('category.spiritual')]: "bg-orange-100 text-orange-800", 
      [t('category.festival')]: "bg-purple-100 text-purple-800",
      [t('category.construction')]: "bg-green-100 text-green-800",
      [t('category.health')]: "bg-red-100 text-red-800",
      [t('category.service')]: "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('events.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-blue-100">
                {event.images ? (
                  <Carousel 
                    className="w-full h-full"
                    setApi={index === 0 ? setApi : undefined}
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent className="h-full">
                      {event.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="h-full">
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
                    <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                    <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
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
                    {event.category === t('category.education') && '📚'}
                    {event.category === t('category.spiritual') && '🕉️'}
                    {event.category === t('category.festival') && '🎉'}
                    {event.category === t('category.construction') && '🏗️'}
                    {event.category === t('category.health') && '🏥'}
                    {event.category === t('category.service') && '🤝'}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-orange-50 to-blue-50 border-t-4 border-orange-400">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('events.impact.title')}</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">2000+</div>
                  <p className="text-gray-700">{t('events.impact.devotees')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <p className="text-gray-700">{t('events.impact.events')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <p className="text-gray-700">{t('events.impact.meals')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">300+</div>
                  <p className="text-gray-700">{t('events.impact.students')}</p>
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
