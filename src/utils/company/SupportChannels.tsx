import React, { useState } from 'react';
import { MessageCircle, Mail, Briefcase, Clock, Zap, Users } from 'lucide-react';

interface SupportChannel {
  id: string;
  title: string;
  description: string;
  availability: string;
  response: string;
  buttonText: string;
  buttonColor: string;
  icon: React.ReactNode;
  iconBg: string;
}

const SupportChannels: React.FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const channels: SupportChannel[] = [
    {
      id: 'chat',
      title: 'Live Chat Support',
      description: 'Get instant help from our AI-powered chatbot available 24/7',
      availability: 'Available 24/7',
      response: 'Instant',
      buttonText: 'Start Chat',
      buttonColor: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      icon: <MessageCircle className="w-5 h-5 text-red-500" />,
      iconBg: 'bg-red-100'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us detailed queries and get comprehensive responses',
      availability: 'Available 24/7',
      response: 'Within 24 hours',
      buttonText: 'support@zaalima.in',
      buttonColor: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      icon: <Mail className="w-5 h-5 text-teal-500" />,
      iconBg: 'bg-teal-100'
    },
    {
      id: 'business',
      title: 'Business Email',
      description: 'For business inquiries and partnerships',
      availability: 'Available 24/7',
      response: 'Within 24 hours',
      buttonText: 'info@zaalima.in',
      buttonColor: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      icon: <Briefcase className="w-5 h-5 text-green-600" />,
      iconBg: 'bg-green-100'
    }
  ];

  const handleChannelClick = (channel: SupportChannel) => {
    if (channel.id === 'chat') {
      // Handle chat initiation
      if(!isOpen){
        setIsOpen(true);
      }
      else{
        setIsOpen(false);
      }
    } else {
      // Handle email links
      window.open(`mailto:${channel.buttonText}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the support channel that works best for you. We're committed to providing
            <span className="font-semibold text-blue-600"> quick and effective solutions</span>.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                hoveredCard === channel.id ? 'scale-102' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredCard(channel.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
              
              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Icon Section */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${channel.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-5 h-5">{channel.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {channel.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow leading-relaxed text-sm">
                  {channel.description}
                </p>

                {/* Availability & Response Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-2 text-blue-500" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Zap className="w-3 h-3 mr-2 text-green-500" />
                    <span>Response: {channel.response}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleChannelClick(channel)}
                  className={`w-full py-3 px-4 bg-gradient-to-r ${channel.buttonColor} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50 shadow-md hover:shadow-lg text-sm`}
                >
                  <span className="flex items-center justify-center">
                    {channel.buttonText}
                    {channel.id === 'chat' && (
                      <MessageCircle className="w-4 h-4 ml-2 animate-pulse" />
                    )}
                  </span>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated support team is always ready to assist you with any questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>Average response time: 12 hours</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                <span>24/7 AI-powered assistance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportChannels;