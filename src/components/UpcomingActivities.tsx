
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const UpcomingActivities = () => {
  const upcomingEvents = [
    {
      title: "Shiva Homam and Abhishekam",
      date: "24 November 2024",
      time: "6:00 AM - 12:00 PM",
      description: "Sacred fire ritual and ceremonial bathing of Shiva Lingam with milk, honey, and holy water.",
      venue: "Temple Construction Site",
      highlights: ["Vedic Chanting", "Sacred Fire Ceremony", "Prasadam Distribution"],
      status: "Completed"
    },
    {
      title: "Fundraising Drive for Temple Completion",
      date: "Ongoing",
      time: "All Day",
      description: "Intensive fundraising campaign to gather resources for completing the temple's superstructure and sanctum sanctorum.",
      venue: "Multiple Locations",
      highlights: ["Door-to-door Campaign", "Corporate Partnerships", "Online Donations"],
      status: "Active"
    },
    {
      title: "Ganga Aarti and Cultural Program",
      date: "15 December 2024",
      time: "7:00 PM - 9:00 PM", 
      description: "Evening aarti dedicated to Gangamatha with classical music, dance performances, and spiritual discourses.",
      venue: "Pedda Cheruvu, Talamadla",
      highlights: ["Classical Dance", "Devotional Music", "Community Feast"],
      status: "Planning"
    },
    {
      title: "New Year Blessing Ceremony",
      date: "1 January 2025",
      time: "12:00 AM - 2:00 AM",
      description: "Special midnight prayers and blessings to welcome the new year with divine grace and positive energy.",
      venue: "Temple Premises",
      highlights: ["Midnight Prayers", "Special Abhishekam", "Community Celebration"],
      status: "Completed"
    },
    {
      title: "Youth Spiritual Workshop",
      date: "20 January 2025",
      time: "10:00 AM - 4:00 PM",
      description: "Educational workshop for young devotees focusing on Hindu philosophy, meditation practices, and cultural values.",
      venue: "Community Hall",
      highlights: ["Meditation Training", "Philosophy Sessions", "Q&A with Scholars"],
      status: "Planned"
    },
    {
      title: "Temple Foundation Stone Laying",
      date: "February 2025",
      time: "TBA",
      description: "Auspicious ceremony for laying the foundation stone of the main temple structure with elaborate Vedic rituals.",
      venue: "Temple Site",
      highlights: ["Vedic Rituals", "Community Participation", "Historic Milestone"],
      status: "Scheduled"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      Confirmed: "bg-green-100 text-green-800 border-green-200",
      Active: "bg-blue-100 text-blue-800 border-blue-200",
      Planning: "bg-orange-100 text-orange-800 border-orange-200", 
      Planned: "bg-purple-100 text-purple-800 border-purple-200",
      Scheduled: "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Sacred Activities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Join us in our upcoming spiritual activities and be part of our divine journey. 
            Every event is an opportunity to connect with the divine and serve the community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all transform hover:scale-102 bg-white border-l-4 border-blue-400">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold">{event.date}</CardDescription>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Event Highlights:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🙏</span>
                    <span className="text-sm text-gray-600">All devotees welcome</span>
                  </div>
                  {event.status === 'Confirmed' && (
                    <div className="text-green-600 text-sm font-semibold">Registration Open</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Connected for Updates</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Follow our social media channels and subscribe to our newsletter to receive timely updates 
                about all upcoming events, special ceremonies, and important announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  📧 Subscribe to Newsletter
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  🔔 Get Event Notifications
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingActivities;
