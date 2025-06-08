
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Trustees', href: '#trustees' },
    { name: 'Events', href: '#events' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-gray-700 hover:text-orange-600"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu}>
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="text-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Menu Items */}
            <nav className="p-4">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors text-lg font-medium"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer in Mobile Menu */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2">
                  <img 
                    src="/lovable-uploads/49347fb5-abda-4bb8-bfc2-c59ea928bf79.png" 
                    alt="Trust Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600">
                  Shri Vishwanatha Gangabhavani Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
