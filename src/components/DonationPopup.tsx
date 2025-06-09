
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const DonationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup immediately when component mounts
    setIsOpen(true);
  }, []);

  const handleDonateNow = () => {
    window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-912815721', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 border-2 border-orange-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10 bg-white/80 hover:bg-white p-1 rounded-full"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex flex-col items-center space-y-6 p-6 pt-8">
          {/* Trust Logo with glow effect */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-orange-200/50 p-2">
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg" style={{
              filter: 'drop-shadow(0 0 15px rgba(251, 146, 60, 0.3))'
            }}>
              <img 
                src="/lovable-uploads/49347fb5-abda-4bb8-bfc2-c59ea928bf79.png" 
                alt="Shri Vishwanatha Gangabhavani Trust Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Trust Name */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
              <span className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                Shri Vishwanatha Gangabhavani Trust
              </span>
              <br />
              <span className="text-lg text-gray-700">Talamadla</span>
            </h2>
          </div>

          {/* QR Code with glow effect */}
          <div className="flex justify-center">
            <div className="p-4 bg-white rounded-xl border-2 border-orange-200 shadow-lg" style={{
              filter: 'drop-shadow(0 0 10px rgba(251, 146, 60, 0.2))'
            }}>
              <img 
                src="/lovable-uploads/784db43f-2f0e-4884-8523-c5798db1254e.png"
                alt="Donation QR Code"
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Donation Text */}
          <div className="text-center space-y-3">
            <h3 className="text-lg font-bold text-gray-800">
              🙏 Help Us Build a Sacred Temple 🙏
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Your generous donation will support the construction of<br />
              <strong>Shri Vishwanatha, Gangabhavani,</strong> and other deities' temples at Talamadla.
            </p>
          </div>

          {/* UPI Information */}
          <div className="text-center bg-white/60 p-4 rounded-lg border border-orange-200 w-full">
            <p className="text-sm font-semibold text-gray-800 mb-1">
              UPI ID: <span className="text-orange-700">srivgbt@sbi</span>
            </p>
            <p className="text-xs text-gray-600">
              (Scan the QR code or use UPI ID: srivgbt@sbi to donate)
            </p>
          </div>

          {/* Donate Now Button */}
          <Button 
            onClick={handleDonateNow}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            💖 Donate Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationPopup;
