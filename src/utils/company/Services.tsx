import React from 'react';
import { 
  Code, 
  Brain, 
  TrendingUp, 
  Smartphone, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import FaqPage from '../Hero/Faq';
import { AnimatedTeamDemo } from '../Hero/Testimonials';
import { MacbookScrollDemo2 } from '../carosel/MacScroll2';
import { AppleCardsCarouselDemo } from '../carosel/Scroller';
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  price: string;
  timeline: string;
}

const ZaalimaServicesPage: React.FC = () => {
  
  

  const services: Service[] = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions", 
        "Progressive Web Apps",
        "API Development",
        "Performance Optimization",
        "SEO Implementation"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
      price: "Starting from $2,999",
      timeline: "4-12 weeks"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that transform business operations with AI",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbot Development",
        "Data Mining",
        "AI Model Training"
      ],
      technologies: ["Python", "TensorFlow", "OpenAI", "PyTorch", "Scikit-learn"],
      price: "Starting from $5,999",
      timeline: "6-16 weeks"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost your online presence",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "PPC Advertising",
        "Content Strategy",
        "Email Campaigns",
        "Analytics & Reporting"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot"],
      price: "Starting from $1,999/month",
      timeline: "Ongoing"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Native iOS & Android",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Backend Integration"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      price: "Starting from $8,999",
      timeline: "8-20 weeks"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps for modern businesses",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "DevOps & CI/CD",
        "Container Orchestration",
        "Security & Compliance",
        "24/7 Monitoring"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      price: "Starting from $3,999",
      timeline: "6-14 weeks"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Identity Management",
        "Data Encryption",
        "Compliance Management",
        "Incident Response"
      ],
      technologies: ["OWASP", "Nessus", "Splunk", "CrowdStrike", "Azure AD"],
      price: "Starting from $4,999",
      timeline: "4-10 weeks"
    }
  ];

  


  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
    

      {/* Hero Section */}
       <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                  Welcome to Zaalima Development
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-600 bg-clip-text text-transparent">
                    Digital Vision
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  We craft exceptional digital experiences through innovative web development, 
                  AI solutions, and cutting-edge technology services that drive business growth.
                </p>
              </div>

             

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToServices}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/get-a-quote">
              
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl text-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                >
                  Get in Touch
                </button>
                  </Link>
              </div>

             
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[700px]">
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Modern software development workspace with coding and AI technology"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-100">
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">525+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <MacbookScrollDemo2/>
      </div>
      <div className='max-w-7xl mx-auto my-4'>
        <AppleCardsCarouselDemo />
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">{service.price}</span>
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                 <Link to="/get-a-quote">
                  <button 
                    onClick={scrollToContact}
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 <FaqPage />
     <AnimatedTeamDemo />

     
    </div>
  );
};

export default ZaalimaServicesPage;