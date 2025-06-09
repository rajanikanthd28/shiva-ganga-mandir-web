
import React, { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems: GalleryItem[] = [
    // Invitations
    {
      id: '1',
      src: '/lovable-uploads/5074420c-eae3-486c-86af-08d6652fae09.png',
      alt: 'Temple Event Invitation',
      category: 'invitations'
    },
    {
      id: '2',
      src: '/lovable-uploads/01029e1d-4ec5-4f44-b361-11f4584509ef.png',
      alt: 'Donation Drive Invitation',
      category: 'pamphlets'
    },
    {
      id: '3',
      src: '/lovable-uploads/5bba0d57-1c2c-4369-ad73-59ae505929ca.png',
      alt: 'Special Event Invitation',
      category: 'pamphlets'
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
      alt: 'Temple Event',
      category: 'photos'
    }
  ];

  const filterItems = (category: 'invitations' | 'photos' | 'pamphlets') => {
    return galleryItems.filter(item => item.category === category);
  };

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const getCurrentCategoryItems = () => {
    if (!selectedImage) return [];
    return filterItems(selectedImage.category);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentCategoryItems = getCurrentCategoryItems();
    const currentIndex = currentCategoryItems.findIndex(item => item.id === selectedImage.id);
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : currentCategoryItems.length - 1;
    } else {
      newIndex = currentIndex < currentCategoryItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(currentCategoryItems[newIndex]);
  };

  const GalleryGrid = ({ items }: { items: GalleryItem[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card 
          key={item.id} 
          className="group cursor-pointer overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-200/50"
          onClick={() => openModal(item)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  {item.alt}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

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
                className="text-orange-800 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                📜 Invitations
              </TabsTrigger>
              <TabsTrigger 
                value="photos" 
                className="text-orange-800 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                📸 Photos
              </TabsTrigger>
              <TabsTrigger 
                value="pamphlets" 
                className="text-orange-800 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                📋 Pamphlets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="invitations" className="mt-8">
              <GalleryGrid items={filterItems('invitations')} />
            </TabsContent>

            <TabsContent value="photos" className="mt-8">
              <GalleryGrid items={filterItems('photos')} />
            </TabsContent>

            <TabsContent value="pamphlets" className="mt-8">
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pamphlets Coming Soon</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We're preparing our collection of spiritual pamphlets and publications. 
                  Check back soon to explore our religious literature and guides.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-[95%] max-h-[95vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            {getCurrentCategoryItems().length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            {selectedImage && (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            )}

            {/* Image Title */}
            {selectedImage && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-6 py-2 rounded-full">
                <p className="text-sm font-medium">{selectedImage.alt}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
