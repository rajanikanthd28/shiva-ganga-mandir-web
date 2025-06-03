
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TrusteesSection = () => {
  const trustees = [
    {
      name: "Sri Rajesh Kumar",
      role: "Chairman & Founder Trustee",
      image: "/placeholder.svg",
      description: "A devoted spiritual leader with 25+ years of service to Hindu dharma. Instrumental in establishing multiple temples across Telangana.",
      background: "Former engineer turned spiritual guide, dedicated to preserving ancient traditions and serving the community."
    },
    {
      name: "Smt. Lakshmi Devi",
      role: "Secretary & Trustee",
      image: "/placeholder.svg", 
      description: "An accomplished educator and social worker, passionate about cultural preservation and women's empowerment through spiritual practices.",
      background: "PhD in Sanskrit, 20+ years in education sector, actively involved in promoting Vedic knowledge among youth."
    },
    {
      name: "Sri Venkata Rao",
      role: "Treasurer & Trustee",
      image: "/placeholder.svg",
      description: "A chartered accountant with expertise in financial management and transparent governance of religious institutions.",
      background: "15+ years experience in trust management, ensures all donations are utilized effectively for temple construction."
    },
    {
      name: "Dr. Prasad Reddy",
      role: "Managing Trustee",
      image: "/placeholder.svg",
      description: "A medical professional and spiritual practitioner, oversees all construction activities and community health initiatives.",
      background: "MBBS, MD in Community Medicine, combines modern healthcare with traditional healing practices."
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
