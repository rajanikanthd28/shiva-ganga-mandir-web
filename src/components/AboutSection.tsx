import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AboutSection = () => {
  const templeImages = [
    {
      src: "/svgbt-uploads/6e0057b4-c948-4449-bd2c-83fc3e24fc6c.png",
      alt: "Temple Project Banner - Shri Vishwanatha Gangabhavani Trust"
    },
    {
      src: "/svgbt-uploads/555ca018-628e-40c4-a384-4c0c8ac4a4c0.png", 
      alt: "Temple History and Significance"
    },
    {
      src: "/svgbt-uploads/0c877f5a-0d26-45cb-8b65-539f1c7b1d11.png",
      alt: "Temple Deities and Sacred Items"
    },
    {
      src: "/svgbt-uploads/e7cff029-b9f8-40ce-b33d-736f27cb15b3.png",
      alt: "Temple Architecture Plans"
    },
    {
      src: "/svgbt-uploads/ad727908-1328-4646-bce5-aabcffe73f22.png",
      alt: "Temple Specifications and Features"
    },
    {
      src: "/svgbt-uploads/71b1a4a6-d1b0-42ed-a5a7-3b57de5c1267.png",
      alt: "Temple Construction Cost Breakdown"
    },
    {
      src: "/svgbt-uploads/248fb4e7-27fb-4d8c-9619-74333cd7fd89.png",
      alt: "Trust 80G Tax Exemption Certificate"
    },
    {
      src: "/svgbt-uploads/50541aad-bc2c-4ea6-b110-777015e3a40b.png",
      alt: "ISO 9001:2015 Certificate and NGO Registration"
    },
    {
      src: "/svgbt-uploads/b34baa60-dd82-46ef-ad5d-22dbf856b425.png",
      alt: "Online Donations and Bank Account Details"
    },
    {
      src: "/svgbt-uploads/563b292c-e016-4274-a31b-6d16b708d0d6.png",
      alt: "Donation Benefits and Tax Exemption Information"
    }
  ];

  const architecturalPlans = [
    {
      src: "/svgbt-uploads/6ce0059a-1919-4f09-a507-5b5325bc6f70.png",
      alt: "Sri Gangadevi Ammavaru Temple and Sri Shivalayam Temple Ground Plan, Side Elevation and Section Views"
    },
    {
      src: "/svgbt-uploads/c3e6a692-a1dd-4bce-9615-a5fafb0c829c.png",
      alt: "Front Elevation of Sri Shivalayam Temple and Sri Gangadevi Temple"
    },
    {
      src: "/svgbt-uploads/ff0285ec-dc7d-4121-ac70-d858e4890f52.png",
      alt: "Side Elevation of Sri Gangadevi Temple"
    },
    {
      src: "/svgbt-uploads/13c469c3-c176-4ca7-9698-4272f1014658.png",
      alt: "Side Elevation of Sri Shivalayam Temple"
    },
    {
      src: "/svgbt-uploads/a545d56a-335c-4092-b8e3-f91c35bfb113.png",
      alt: "Complete Front Elevation View of Both Temples"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Sacred Mission</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Temple Proposed Design Section */}
        <div className="mb-16">
          <Card className="shadow-xl border-t-4 border-gradient-to-r from-orange-400 to-red-500">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Proposed Temple Design
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Divine architectural vision of Sri Vishwanatha and Sri Gangadevi Temples
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src="/svgbt-uploads/c3e6a692-a1dd-4bce-9615-a5fafb0c829c.png"
                        alt="Front Elevation of Sri Shivalayam Temple and Sri Gangadevi Temple"
                        className="w-full h-full object-contain bg-gradient-to-br from-orange-50 to-blue-50 hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => window.open("/svgbt-uploads/c3e6a692-a1dd-4bce-9615-a5fafb0c829c.png", '_blank')}
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src="/svgbt-uploads/a545d56a-335c-4092-b8e3-f91c35bfb113.png"
                        alt="Complete Front Elevation View of Both Temples"
                        className="w-full h-full object-contain bg-gradient-to-br from-orange-50 to-blue-50 hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => window.open("/svgbt-uploads/a545d56a-335c-4092-b8e3-f91c35bfb113.png", '_blank')}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Click on images to view in full size | Detailed architectural vision of our sacred temple complex
                </p>
              </div>
            </CardContent>
          </Card>
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

          {/* Temple Project Details Gallery */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-xl border-t-4 border-gradient-to-r from-orange-400 to-red-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Temple Project Details
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Detailed architectural plans and project information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <Carousel className="w-full">
                  <CarouselContent>
                    {architecturalPlans.map((image, index) => (
                      <CarouselItem key={index}>
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

        {/* Complete Temple Architectural Plans */}
        <div className="mb-16">
          <Card className="shadow-xl border-t-4 border-gradient-to-r from-orange-400 to-red-500">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Complete Temple Architectural Plans
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Comprehensive architectural documentation and project information
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {templeImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                  Click on any image to view in full size | Swipe or use arrows to navigate through all project details
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
