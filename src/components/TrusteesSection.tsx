
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TrusteesSection = () => {
  const trustees = [
    {
      name: "Chairman & Founder Trustee",
      role: "Spiritual Leader & Engineer",
      image: "/lovable-uploads/d3f059c1-7b5c-4b80-af41-3c6a2ccc5c02.png",
      description: "A devoted spiritual guide with over 25 years of dedicated service to Sanatana Dharma. As a Computer Science Engineer turned spiritual mentor, he has played a pivotal role in spreading Hindu values and Vedic knowledge, especially among the youth.",
      background: "His unwavering commitment to preserving ancient traditions and uplifting the community is the driving force behind the establishment of the Shri Vishwanatha Gangabhavani Trust."
    },
    {
      name: "Shri K. Narsimloo",
      role: "Secretary & Trustee",
      image: "/lovable-uploads/044e6b0f-8d7b-4b21-86da-c93cb2e574b6.png", 
      description: "An accomplished educator and social worker with more than 20 years of experience in the education sector. Shri Narsimloo is deeply passionate about preserving Indian culture through spiritual education.",
      background: "His leadership ensures that the Trust's activities remain rooted in dharma and focused on community upliftment."
    },
    {
      name: "Shri K. Narayana",
      role: "Treasurer & Trustee",
      image: "/lovable-uploads/d5b836b6-0608-41d0-8790-93d6de668828.png",
      description: "A former Government employee with strong expertise in financial management and transparent governance. Shri Narayana plays a crucial role in ensuring that all donations are utilized effectively and responsibly for the temple's construction.",
      background: "His integrity and accountability make him a pillar of the Trust's financial stewardship and associated charitable activities."
    }
  ];

  const otherMembers = [
    {
      name: "SHRI K YADAGIRI S/o LATE K RAJAIAH",
      image: "/lovable-uploads/171d53e0-8fda-4572-8522-36ee86384094.png"
    },
    {
      name: "SHRI K YADAGIRI S/o LATE K BALAIAH",
      image: "/lovable-uploads/2f91e0e6-5750-47b0-8f0a-7e978e97b3bc.png"
    },
    {
      name: "SHRI K SRINIVAS",
      image: "/lovable-uploads/a64a99be-a235-479f-9ba4-dadc4c4fc5ba.png"
    },
    {
      name: "SHRI D PRAKASH",
      image: "/lovable-uploads/077280d0-736c-47e4-b1bf-0d54a2bec4e1.png"
    },
    {
      name: "SHRI D RAMESH",
      image: "/lovable-uploads/57d2af16-d09c-4343-bbeb-88b5c39f1a6d.png"
    },
    {
      name: "SHRI M MEGHANATH",
      image: "/lovable-uploads/bb9e16ce-1831-423a-8a7e-defc31bb30d3.png"
    }
  ];

  return (
    <section id="trustees" className="py-16 bg-gradient-to-b from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Dedicated Trustees</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our trustees are devoted individuals who have dedicated their lives to serving Lord Shiva and the community, 
            bringing decades of experience in spiritual service and organizational leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {trustees.map((trustee, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all transform hover:scale-105 bg-white border-t-4 border-orange-400">
              <CardHeader className="text-center pb-2">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGRkY1RjUiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSIzMiIgcj0iMTIiIGZpbGw9IiNGRjc4NzUiLz4KPHBhdGggZD0iTTIwIDY1QzIwIDU1LjA1ODkgMjguMDU4OSA0NyAzOCA0N0g0MkM1MS45NDExIDQ3IDYwIDU1LjA1ODkgNjAgNjVWNzBIMjBWNjVaIiBmaWxsPSIjRkY3ODc1Ii8+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{trustee.name}</CardTitle>
                <CardDescription className="text-orange-600 font-semibold">{trustee.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{trustee.description}</p>
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 leading-relaxed">{trustee.background}</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="text-2xl">🙏</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Members Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Other Trust Members</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 border-none">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-400">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGRkY1RjUiLz4KPGNpcmNsZSBjeD0iMjQiIGN5PSIxOSIgcj0iNyIgZmlsbD0iI0ZGNzg3NSIvPgo8cGF0aCBkPSJNMTIgMzlDMTIgMzMuMDM1MyAxNi4wMzUzIDI4IDIyIDI4SDI2QzMxLjk2NDcgMjggMzYgMzMuMDM1MyAzNiAzOVY0MkgxMlYzOVoiIGZpbGw9IiNGRjc4NzUiLz4KPC9zdmc+Cg==';
                        }}
                      />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{member.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-orange-100 to-blue-100 border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Transparency</h3>
              <p className="text-gray-700 leading-relaxed">
                All our trustees serve without any compensation, dedicating their time and expertise purely out of 
                devotion to Lord Shiva and service to the community. We maintain complete transparency in all our 
                activities and financial dealings, ensuring every donation is utilized for the sacred purpose of 
                temple construction and community service.
              </p>
              <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Regular Audits</span>
                <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Public Reports</span>
                <span className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>80G Certified</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrusteesSection;
