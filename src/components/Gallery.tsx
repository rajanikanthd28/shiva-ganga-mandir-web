
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'invitations' | 'photos' | 'pamphlets';
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<'invitations' | 'photos' | 'pamphlets'>('invitations');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems: GalleryItem[] = [
    // Invitations
    {
      id: '1',
      src: '/lovable-uploads/5074420c-eae3-486c-86af-08d6652fae09.png',
      alt: 'Temple Event Invitation',
      category: 'invitations'
    },
    // Photos
    {
      id: '4',
      src: '/lovable-uploads/e2dbab80-3bc3-4696-b2fd-f52801b5c4cf.png',
      alt: 'Trust Members Meeting',
      category: 'photos'
    },
    {
      id: '5',
      src: '/lovable-uploads/b704b72a-0f71-409e-8323-5a3cc1f6d5ed.png',
      alt: 'Community Gathering',
      category: 'photos'
    },
    {
      id: '6',
      src: '/lovable-uploads/5456ef70-efe3-47c1-a7e8-7ca0c08437a9.png',
      alt: 'Meeting with Hon\'ble MLA(Kamareddy) K Venkata Ramana Reddy',
      category: 'photos'
    },
    // Pamphlets
    {
      id: '2',
      src: '/lovable-uploads/01029e1d-4ec5-4f44-b361-11f4584509ef.png',
      alt: 'Donation Drive Invitation',
      category: 'pamphlets'
    },
    {
      id: '3',
      src: '/lovable-uploads/5bba0d57-1c2c-4369-ad73-59ae505929ca.png',
      alt: 'Donation Drive Invitation',
      category: 'pamphlets'
    }
  ];

  const getCategoryItems = (category: 'invitations' | 'photos' | 'pamphlets') => {
    return galleryItems.filter(item => item.category === category);
  };

  const getRepresentativeImage = (category: 'invitations' | 'photos' | 'pamphlets') => {
    const items = getCategoryItems(category);
    return items[0]; // Return first image as representative
  };

  const openModal = (category: 'invitations' | 'photos' | 'pamphlets') => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const currentCategoryItems = getCategoryItems(selectedCategory);
    const maxIndex = currentCategoryItems.length - 1;
    
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : maxIndex);
    } else {
      setCurrentImageIndex(currentImageIndex < maxIndex ? currentImageIndex + 1 : 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'Escape':
          closeModal();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex, selectedCategory]);

  const SingleImagePreview = ({ category }: { category: 'invitations' | 'photos' | 'pamphlets' }) => {
    const representativeImage = getRepresentativeImage(category);
    const categoryItems = getCategoryItems(category);
    
    if (!representativeImage) return null;

    return (
      <div className="flex justify-center">
        <Card 
          className="group cursor-pointer overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-200/50 max-w-md w-full"
          onClick={() => openModal(category)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={representativeImage.src}
                alt={representativeImage.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  {categoryItems.length} {categoryItems.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const getCurrentImage = () => {
    const currentCategoryItems = getCategoryItems(selectedCategory);
    return currentCategoryItems[currentImageIndex];
  };

  return (
    <>
      <section id="gallery" className="py-16 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text mb-4" 
                style={{ fontFamily: 'serif' }}>
              ✨ Memories & Publications ✨
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Discover our journey through sacred moments, community gatherings, and spiritual publications
            </p>
          </div>

          {/* Tabbed Gallery */}
          <Tabs defaultValue="invitations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-orange-100 to-yellow-100 p-1 rounded-xl border-2 border-orange-200">
              <TabsTrigger 
                value="invitations" 
                className="text-orange-800 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:border-b-4 data-[state=active]:border-orange-600 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                📜 Invitations
              </TabsTrigger>
              <TabsTrigger 
                value="photos" 
                className="text-orange-800 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:border-b-4 data-[state=active]:border-orange-600 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                📸 Photos
              </TabsTrigger>
              <TabsTrigger 
                value="pamphlets" 
                className="text-orange-800 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:border-b-4 data-[state=active]:border-orange-600 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                📋 Pamphlets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="invitations" className="mt-8">
              <SingleImagePreview category="invitations" />
            </TabsContent>

            <TabsContent value="photos" className="mt-8">
              <SingleImagePreview category="photos" />
            </TabsContent>

            <TabsContent value="pamphlets" className="mt-8">
              <SingleImagePreview category="pamphlets" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Full-Screen Modal with Navigation */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            {getCategoryItems(selectedCategory).length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Current Image */}
            {getCurrentImage() && (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={getCurrentImage().src}
                  alt={getCurrentImage().alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            )}

            {/* Image Counter and Title */}
            {getCurrentImage() && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full">
                <div className="text-center">
                  <p className="text-sm font-medium">{getCurrentImage().alt}</p>
                  {getCategoryItems(selectedCategory).length > 1 && (
                    <p className="text-xs text-gray-300 mt-1">
                      {currentImageIndex + 1} of {getCategoryItems(selectedCategory).length}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
