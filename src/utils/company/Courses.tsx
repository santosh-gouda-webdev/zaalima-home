import React from 'react';
import { 
  Clock, 
  Star, 

  Code, 
  Database, 
  Shield, 
  Cloud, 
  Smartphone, 
  Globe,
  CheckCircle,
  Award,
  Target,
  Lightbulb,
  Users2,
  TrendingUp,
  Zap,
  Heart,
  ArrowRight,
  Play,
  ChevronRight,
  MapPin,
  Calendar
} from 'lucide-react';
import { AppleCardsCarouselDemo2 } from '../carosel/Scroller2';
import { Link } from 'react-router';
import { StickyScrollRevealDemo } from '../carosel/StickyScrollRevealDemo';
interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  level: string;
  price: string;
  icon: React.ComponentType<any>;
  skills: string[];
  img: string;
}

interface TrainingProgram {
  title: string;
  description: string;
  duration: string;
  format: string;
  price: string;
  features: string[];
}

interface MethodologyStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface SpecialFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const popularCourses: Course[] = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Complete web development course covering frontend and backend technologies",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
    level: "Intermediate",
    price: "₹9,999",
    icon: Code,
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    img: "/web.jpg"
  },
  {
    id: 2,
    title: "Cloud Architecture",
    description: "Master cloud computing with AWS, Azure, and Google Cloud Platform",
    duration: "10 weeks",
    students: 980,
    rating: 4.9,
    level: "Advanced",
    price: "₹11,299",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    img: "/cc4.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity",
    description: "Comprehensive security training with hands-on penetration testing",
    duration: "8 weeks",
    students: 750,
    rating: 4.7,
    level: "Intermediate",
    price: "₹11,799",
    icon: Shield,
    skills: ["Ethical Hacking", "Network Security", "CISSP", "CompTIA"],
    img: "/s1.jpg"
  },
  {
    id: 4,
    title: "Data Science",
    description: "Transform data into insights using Python and machine learning",
    duration: "16 weeks",
    students: 890,
    rating: 4.8,
    level: "Advanced",
    price: "₹9,499",
    icon: Database,
    skills: ["Python", "TensorFlow", "SQL", "Tableau"],
    img: "/aa2.jpg"
  },
  {
    id: 5,
    title: "Mobile Development",
    description: "Build native and cross-platform mobile applications",
    duration: "10 weeks",
    students: 650,
    rating: 4.6,
    level: "Intermediate",
    price: "₹8,999",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android"],
    img: "/app4.jpg"
  },
  {
    id: 6,
    title: "DevOps Engineering",
    description: "Master CI/CD, automation, and infrastructure management",
    duration: "12 weeks",
    students: 720,
    rating: 4.7,
    level: "Advanced",
    price: "₹10,099",
    icon: Globe,
    skills: ["Jenkins", "Docker", "Terraform", "Monitoring"],
    img: "/cc2.jpg"
  },
];

const trainingPrograms: TrainingProgram[] = [
  {
    title: "Enterprise IT Solutions Bootcamp",
    description: "Comprehensive 6-month program covering enterprise-level IT infrastructure, cloud migration, and digital transformation strategies.",
    duration: "6 months",
    format: "Hybrid Learning",
    price: "₹12,999",
    features: [
      "Real-world project portfolio",
      "1-on-1 mentorship sessions",
      "Job placement assistance",
      "Access to enterprise tools",
      "Industry networking events",
      "Capstone project presentation",
    ],
  },
  {
    title: "Leadership in Technology",
    description: "Executive-level training for IT leaders focusing on strategic planning, team management, and innovation leadership.",
    duration: "3 months",
    format: "Executive Workshops",
    price: "₹24,999",
    features: [
      "C-level instructor access",
      "Strategic case studies",
      "Peer networking sessions",
      "Innovation lab access",
      "Executive coaching sessions",
      "Leadership assessment tools",
    ],
  },
];

const methodologySteps: MethodologyStep[] = [
  {
    step: "01",
    title: "Assess & Plan",
    description: "We evaluate your current skills and create a personalized learning roadmap.",
    icon: Target,
  },
  {
    step: "02",
    title: "Learn & Practice",
    description: "Engage with hands-on projects and real-world scenarios.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Mentor & Support",
    description: "Get guidance from industry experts and collaborate with peers.",
    icon: Users2,
  },
  {
    step: "04",
    title: "Apply & Advance",
    description: "Build your portfolio and receive career support for job placement.",
    icon: TrendingUp,
  },
];

const specialFeatures: SpecialFeature[] = [
  {
    title: "Expert Instructors",
    description: "Learn from professionals with years of industry experience at top tech companies.",
    icon: Award,
  },
  {
    title: "Project-Based Learning",
    description: "Build real applications that you can showcase in your professional portfolio.",
    icon: Code,
  },
  {
    title: "Flexible Schedule",
    description: "Choose from live classes, self-paced learning, or hybrid programs.",
    icon: Clock,
  },
  {
    title: "Career Support",
    description: "Resume reviews, interview prep, and job placement assistance included.",
    icon: TrendingUp,
  },
  {
    title: "Updated Curriculum",
    description: "Courses updated regularly to reflect the latest industry trends.",
    icon: Zap,
  },
  {
    title: "Alumni Network",
    description: "Join our community for continued learning and networking opportunities.",
    icon: Heart,
  },
];

const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Available for enrollment
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional IT Training
                <span className="block text-gray-600">Courses</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your career with comprehensive training programs designed by industry experts. 
                We deliver practical skills that employers value most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
                <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
             <img src='/course.jpg' alt="IT Training" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>
     
      <div className='max-w-6xl mx-auto'>
        <AppleCardsCarouselDemo2 />
      </div>
       <div className='max-w-6xl mx-auto'>
        <StickyScrollRevealDemo />
      </div>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Students Trained", value: "5,000+" },
              { label: "Course Completion", value: "94%" },
              { label: "Job Placement", value: "89%" },
              { label: "Industry Partners", value: "50+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT training programs tailored for modern professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => {
              const IconComponent = course.icon;
              return (
                <div key={course.id} className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="relative mb-6">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs font-medium">
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{course.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                        <span className="mx-1">•</span>
                        {course.students} enrolled
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{course.price}</div>
                      <Link to="/get-a-quote">
                      <button className="text-gray-600 hover:text-gray-900 text-sm mt-1 flex items-center">
                        Learn more
                        <ArrowRight className="ml-1 h-3 w-3" />
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

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced training programs for career advancement and leadership development
            </p>
          </div>

          <div className="space-y-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                    
                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">{program.duration}</div>
                          <div className="text-sm text-gray-500">Duration</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">{program.format}</div>
                          <div className="text-sm text-gray-500">Format</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 mr-3 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">{program.price}</div>
                          <div className="text-sm text-gray-500">Investment</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included</h4>
                    <div className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact">
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition-colors">
                      Get Details
                    </button>
                    </Link> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic methodology designed to maximize learning outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center relative">
                  {index < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gray-200"></div>
                  )}
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The advantages that set our training programs apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-left p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Join our community of successful professionals and take the next step in your career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-a-quote">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Journey
            </button>
            </Link>
            <Link to="/contact">
            <button className="border border-gray-600 px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Schedule Consultation
            </button>
            </Link>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default CoursesPage;