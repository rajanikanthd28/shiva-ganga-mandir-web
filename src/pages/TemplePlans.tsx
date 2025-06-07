
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TemplePlans = () => {
  const templeImages = [
    {
      src: "/lovable-uploads/6e0057b4-c948-4449-bd2c-83fc3e24fc6c.png",
      alt: "Temple Project Banner - Shri Vishwanatha Gangabhavani Trust"
    },
    {
      src: "/lovable-uploads/555ca018-628e-40c4-a384-4c0c8ac4a4c0.png", 
      alt: "Temple History and Significance"
    },
    {
      src: "/lovable-uploads/0c877f5a-0d26-45cb-8b65-539f1c7b1d11.png",
      alt: "Temple Deities and Sacred Items"
    },
    {
      src: "/lovable-uploads/e7cff029-b9f8-40ce-b33d-736f27cb15b3.png",
      alt: "Temple Architecture Plans"
    },
    {
      src: "/lovable-uploads/ad727908-1328-4646-bce5-aabcffe73f22.png",
      alt: "Temple Specifications and Features"
    },
    {
      src: "/lovable-uploads/71b1a4a6-d1b0-42ed-a5a7-3b57de5c1267.png",
      alt: "Temple Construction Cost Breakdown"
    },
    {
      src: "/lovable-uploads/248fb4e7-27fb-4d8c-9619-74333cd7fd89.png",
      alt: "Trust 80G Tax Exemption Certificate"
    },
    {
      src: "/lovable-uploads/50541aad-bc2c-4ea6-b110-777015e3a40b.png",
      alt: "ISO 9001:2015 Certificate and NGO Registration"
    },
    {
      src: "/lovable-uploads/b34baa60-dd82-46ef-ad5d-22dbf856b425.png",
      alt: "Online Donations and Bank Account Details"
    },
    {
      src: "/lovable-uploads/563b292c-e016-4274-a31b-6d16b708d0d6.png",
      alt: "Donation Benefits and Tax Exemption Information"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600 hover:text-orange-600">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/49347fb5-abda-4bb8-bfc2-c59ea928bf79.png" 
                  alt="Shri Vishwanatha Gangabhavani Trust Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Temple Architectural Plans</h1>
                <p className="text-sm text-gray-600">Shri Vishwanatha Gangabhavani Trust</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Complete Temple Architectural Plans
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Comprehensive architectural documentation and project information for our sacred temple complex
            </p>
          </div>

          {/* Full Page Carousel */}
          <Card className="shadow-2xl border-t-4 border-gradient-to-r from-orange-400 to-red-500">
            <CardContent className="p-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {templeImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <div className="aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-contain bg-gradient-to-br from-orange-50 to-blue-50 cursor-pointer"
                            onClick={() => window.open(image.src, '_blank')}
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <p className="text-white text-lg font-semibold">{image.alt}</p>
                          <p className="text-gray-200 text-sm">Image {index + 1} of {templeImages.length}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 w-12 h-12" />
                <CarouselNext className="right-4 w-12 h-12" />
              </Carousel>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Click on any image to view in full size | Use arrows to navigate through all project details
            </p>
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplePlans;
