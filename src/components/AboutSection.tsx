
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AboutSection = () => {
  const templeImages = [
    {
      src: "/lovable-uploads/0aac44a4-f8d3-415c-8b20-0c5dc16f4655.png",
      alt: "Temple Ground Plan and Side Elevation - Detailed Architectural Drawings"
    },
    {
      src: "/lovable-uploads/37b6f914-cfda-4e49-888d-9a0c75a17bf9.png", 
      alt: "Sri Gangadevi Temple Side Elevation - Architectural Design"
    },
    {
      src: "/lovable-uploads/f3e6c192-b40f-4c8d-b725-71face2297e0.png",
      alt: "Sri Shivalayam and Sri Gangadevi Temple Front Elevation"
    },
    {
      src: "/lovable-uploads/67f903ea-56b6-4e44-9733-523e4660e716.png",
      alt: "Sri Shivalayam Temple Side Elevation - Detailed Architecture"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Sacred Mission</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <Card className="shadow-lg border-t-4 border-orange-400">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  The Shri Vishwanatha Gangabhavani Trust was established in April 2024 with a divine mission to 
                  construct a magnificent temple dedicated to Lord Shiva (Vishwanatha) and Goddess Ganga (Gangabhavani) 
                  in Talamadla village, Telangana.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-blue-400">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To create a spiritual center that serves as a beacon of dharma, devotion, and cultural revival, 
                    fostering community unity and preserving ancient Hindu traditions for future generations.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Promote spiritual education and Vedic knowledge</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Serve the community through charitable activities</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Preserve and celebrate Hindu culture and traditions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-green-400">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Trust Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700">80G Tax Exemption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700">DARPAN (NITI Aayog) Listed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-700">Registered Trust</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Temple Information Gallery */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-xl border-t-4 border-gradient-to-r from-orange-400 to-red-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Temple Architecture Plans
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Detailed architectural drawings and elevations of our temple complex
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <Carousel className="w-full">
                  <CarouselContent>
                    {templeImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-2">
                          <Card className="border-none shadow-lg">
                            <CardContent className="p-0">
                              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-full object-contain bg-gradient-to-br from-orange-50 to-blue-50"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Swipe or use arrows to view detailed architectural plans
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Width Temple Project Details Gallery */}
        <div className="w-full max-w-none -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-16">
          <Card className="shadow-xl border-t-4 border-gradient-to-r from-orange-400 to-red-500">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Complete Temple Architectural Plans
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Detailed architectural drawings showing ground plans, elevations, and temple design specifications
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {templeImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-2">
                        <Card className="border-none shadow-lg">
                          <CardContent className="p-0">
                            <div className="aspect-[4/3] overflow-hidden rounded-lg">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain bg-gradient-to-br from-orange-50 to-blue-50 hover:scale-105 transition-transform cursor-pointer"
                                onClick={() => window.open(image.src, '_blank')}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Click on any architectural drawing to view in full size | Swipe or use arrows to navigate through all temple plans
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Join Our Sacred Journey</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Every contribution, no matter how small, brings us closer to completing this divine temple. 
              Your donation not only supports the construction but also helps preserve our cultural heritage for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-912815721" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                🙏 Support Our Mission
              </a>
              <a 
                href="#contact" 
                className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                📞 Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
