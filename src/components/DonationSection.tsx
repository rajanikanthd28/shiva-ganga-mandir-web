
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DonationSection = () => {
  return (
    <section id="donate" className="py-16 bg-gradient-to-r from-orange-100 via-yellow-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Support Our Sacred Mission</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Your donation helps us build the temple of Shri Vishwanatha and Gangabhavani, creating a lasting 
            legacy of devotion and service. Every contribution, big or small, brings us closer to our divine goal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Donation Card */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-t-4 border-orange-400 bg-white">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardTitle className="text-2xl text-center text-gray-800 flex items-center justify-center">
                  <span className="text-3xl mr-3">🙏</span>
                  Make a Sacred Donation
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Support the construction of Lord Shiva's divine abode
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* UPI/Online Payment */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-orange-600 mb-4">Quick Online Donation</h3>
                    
                    {/* QR Code Section */}
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="w-48 h-48 mx-auto mb-4 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/784db43f-2f0e-4884-8523-c5798db1254e.png" 
                          alt="QR Code for UPI Payment"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Scan with any UPI app</p>
                      <p className="font-mono text-sm bg-white p-2 rounded border">Shri Vishwanatha Gangabhavani Trust</p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                        onClick={() => window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-912815721', '_blank')}
                      >
                        💳 Pay via SBI ePay Gateway
                      </Button>
                      <Button variant="outline" className="w-full border-2 border-orange-400 text-orange-600 hover:bg-orange-50 py-3 text-lg font-semibold">
                        📱 UPI Payment
                      </Button>
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Bank Transfer Details</h3>
                    
                    <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Account Name</label>
                        <p className="font-mono text-sm bg-white p-2 rounded border mt-1">Shri Vishwanatha Gangabhavani Trust</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Bank</label>
                        <p className="font-mono text-sm bg-white p-2 rounded border mt-1">State Bank of India</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Account Number</label>
                        <p className="font-mono text-sm bg-white p-2 rounded border mt-1">42952082648</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-700">IFSC Code</label>
                        <p className="font-mono text-sm bg-white p-2 rounded border mt-1">SBIN0020822</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-700">MICR Code</label>
                        <p className="font-mono text-sm bg-white p-2 rounded border mt-1">500002381</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Branch</label>
                        <p className="font-mono text-sm bg-white p-2 rounded border mt-1">West Malkajgiri</p>
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-gray-700">Trust PAN No.</label>
                        <p className="font-mono text-sm bg-white p-2 rounded border mt-1">ABJTS0488E</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">📋 Tax Benefits & Transparency</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 80G Tax Exemption Certificate provided for all donations</li>
                    <li>• All donations used exclusively for temple construction</li>
                    <li>• Regular financial reports published on our website</li>
                    <li>• ISO certified trust with DARPAN registration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Amounts & Impact */}
          <div className="space-y-6">
            <Card className="shadow-lg border-t-4 border-yellow-400">
              <CardHeader>
                <CardTitle className="text-orange-600">💰 Suggested Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-800">₹5,000</div>
                    <div className="text-sm text-orange-700">Temple Foundation Brick</div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="font-semibold text-yellow-800">₹10,000</div>
                    <div className="text-sm text-yellow-700">Sanctum Construction</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-800">₹25,000</div>
                    <div className="text-sm text-blue-700">Temple Pillar Sponsor</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-800">₹50,000</div>
                    <div className="text-sm text-purple-700">Sacred Chamber Support</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="font-semibold text-red-800">₹1,00,000+</div>
                    <div className="text-sm text-red-700">Major Sponsor Recognition</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-600">🎯 Our Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800 mb-2">₹1.21 Crores</div>
                  <div className="text-sm text-green-700 mb-4">Temple Construction Target</div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full" style={{width: '8.3%'}}></div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">₹10 Lakhs</span> raised so far
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    With your support, we can complete this sacred project by December 2025
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-blue-400">
              <CardHeader>
                <CardTitle className="text-blue-600">🌟 Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>• Donor names inscribed on temple walls</p>
                  <p>• Special recognition ceremonies</p>
                  <p>• Invitation to foundation stone events</p>
                  <p>• Annual appreciation certificates</p>
                  <p>• Lifetime temple visit privileges</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-orange-50 to-red-50 border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🕉️ Your Blessings Matter</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                "దేవాలయ నిర్మాణే ధనస్యం ఫలం చ చిరస్మృతిం, భక్త జనానాం శాంతిం చ అనుగ్రహం చ కల్పయేత్।" - Donating to temple construction grants enduring merit and bestows peace and divine grace upon all devotees. The gift of building a temple is considered one of the greatest acts of charity. 
                Your contribution not only helps in constructing the physical structure but also creates a spiritual 
                center that will serve countless devotees for generations to come.
              </p>
              <div className="text-center">
                <p className="italic text-orange-600 text-lg font-semibold">
                  "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
                </p>
                <p className="text-sm text-gray-600 mt-2">May all beings be happy and free from illness</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
