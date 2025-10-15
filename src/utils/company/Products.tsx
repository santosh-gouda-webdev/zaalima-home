import React from 'react';
import { CheckCircle, ArrowRight, Star, Users, Target, Zap, Shield, Clock, Play } from "lucide-react";
import { Link } from 'react-router';
import { MacbookScrollDemo1 } from '../carosel/MacbookScroll1';
import { AppleCardsCarouselDemo } from '../carosel/Scroller';
import { AnimatedTeamDemo } from '../Hero/Testimonials';
import FaqPage from '../Hero/Faq';
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  impact: string;
  pricing: string;
  category: string;
  popular?: boolean;
}

const ServicesPageProduct: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Customer Relationship Management",
      description: "Transform customer interactions with our intelligent CRM platform designed for modern businesses.",
      icon: Users,
      features: [
        "360° Customer View",
        "Smart Lead Scoring",
        "Automated Workflows",
        "Real-time Analytics",
        "Mobile-First Design",
        "Advanced Integrations"
      ],
      impact: "Boost revenue by 35% while improving customer satisfaction scores",
      pricing: "From $29/month",
      category: "Sales & Marketing",
      popular: true
    },
    {
      id: 2,
      title: "Digital Learning Platform",
      description: "Empower your team with next-generation learning experiences that drive real results.",
      icon: Target,
      features: [
        "AI-Powered Content",
        "Skills Assessment",
        "Interactive Modules",
        "Progress Tracking",
        "Social Learning",
        "Certification Paths"
      ],
      impact: "Reduce training costs by 60% with 3x better retention rates",
      pricing: "From $15/user",
      category: "Education & Development"
    },
    {
      id: 3,
      title: "Quality Assurance Automation",
      description: "Accelerate software delivery with intelligent testing automation that scales with your needs.",
      icon: Shield,
      features: [
        "Smart Test Generation",
        "Cross-Platform Testing",
        "Performance Insights",
        "CI/CD Integration",
        "Risk Assessment",
        "Automated Reporting"
      ],
      impact: "Cut testing time by 70% while catching 95% more bugs early",
      pricing: "From $99/month",
      category: "Development & QA"
    },
    {
      id: 4,
      title: "Enterprise Resource Planning",
      description: "Unify your business operations with our comprehensive enterprise management solution.",
      icon: Zap,
      features: [
        "Financial Control",
        "Supply Chain Optimization",
        "HR Management",
        "Business Intelligence",
        "Multi-Location Support",
        "Custom Workflows"
      ],
      impact: "Increase operational efficiency by 45% with streamlined processes",
      pricing: "Custom Solutions",
      category: "Enterprise Management"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                <Star className="w-4 h-4 fill-current" />
                Trusted by 10,000+ companies worldwide
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Scale Your Business
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    With Smart Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Transform your operations with our suite of intelligent tools designed to boost productivity, 
                  streamline workflows, and accelerate growth.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-a-quote">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 inline-flex items-center gap-2 group shadow-lg shadow-blue-500/25">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
                <Link to="/contact">
                  <button className="border border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 inline-flex items-center gap-2 group backdrop-blur-sm">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">4.9/5</span> rating
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">99.9%</span> uptime
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">24/7</span> support
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="Business analytics dashboard and growth charts"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
      <MacbookScrollDemo1 />
      </div>
      <div className='max-w-7xl mx-auto py-6'>
        <AppleCardsCarouselDemo/>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive suite of business solutions, each designed to deliver 
              measurable results and drive sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative group"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-8">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-blue-600 mb-2">{service.category}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      Key Capabilities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="text-sm font-medium text-green-800 mb-1">Expected Impact</div>
                    <div className="text-sm text-green-700">{service.impact}</div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="text-xl font-bold text-gray-900">{service.pricing}</div>
                    </div>
                    <div className="flex gap-3">
                        <Link to="/contact">    
                      <button className="px-6 py-2 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Learn More
                      </button>
                        </Link>
                        <Link to="/get-a-quote">
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Get Started
                      </button>
                        </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security with end-to-end encryption, compliance certifications, 
                and regular security audits to protect your data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized performance with 99.9% uptime guarantee. Our global infrastructure 
                ensures your tools are always available when you need them.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated success team with 24/7 support, comprehensive training programs, 
                and ongoing strategic guidance to maximize your ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

   <div>
    <AnimatedTeamDemo />
   </div>

      <FaqPage/>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already using our solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-a-quote">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            </Link>
            <Link to="/contact">
            <button className="border-2 border-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPageProduct;