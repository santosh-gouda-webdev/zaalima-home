import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { AppleCardsCarouselDemo } from '../carosel/Scroller';
import SupportChannels from './SupportChannels';
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({isOpen, setIsOpen}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const services = [
    'Web Development',
    'Mobile Applications',
    'Cloud Solutions',
    'Digital Marketing',
    'UI/UX Design',
    'Consulting',
    'Other',
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Electronic City, Bengaluru, Karnataka 560100',
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8277035909',
      color: 'text-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@zaalima.in',
      color: 'text-purple-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9AM-6PM',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     <AppleCardsCarouselDemo />
           </div>
           <div>
        <SupportChannels isOpen={isOpen} setIsOpen={setIsOpen} />
           </div>
      
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help bring your vision to life with our professional services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`${info.color} mt-1`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Services List */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Our Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {services.slice(0, -1).map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@zaalima.in"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 8277035909"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. Your information is secure and will not be shared.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Bengaluru's tech hub, easily accessible by public transport
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div className="aspect-video w-full">
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18764507.376312274!2d82.752529!3d21.068007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b11f55fe06f%3A0x905ab5f1fa7f5a1a!2sZaalima%20Development%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1758653247347!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-xs text-gray-600">Electronic City, Bengaluru, Karnataka 560100</p>
                </div>
                <div>
                  <Clock className="w-5 h-5 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Parking</p>
                  <p className="text-xs text-gray-600">Free visitor parking</p>
                </div>
                <div>
                  <Phone className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Transport</p>
                  <p className="text-xs text-gray-600">Metro accessible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;