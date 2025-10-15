"use client"

import React, { useState, type JSX } from "react"
import { Button } from "@/components/ui/button"
import { HeroScrollDemo } from "../carosel/HeroScroll"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Clock,
  Users,
  Shield,
  Zap,
  Heart,
  Coffee,
  Laptop,
  GraduationCap,
  Building,
  ArrowRight,
  Award,
  Star,
} from "lucide-react"
import { Link } from "react-router"

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  stipend: string;
  duration: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
  link: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Custom Rupee Icon Component
const RupeeIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3h12M6 8h8M6 13l4 6h6l-4-6c2-1 4-3 4-6 0-3-2-5-5-5H6"/>
  </svg>
);

const jobs: Job[] = [
  {
    id: 1,
    title: "Web Development Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    stipend: "Upto ₹10,000 / month",
    duration: "3 months",
    experience: "Basic knowledge required",
    description:
      "Contribute to real-world web applications using HTML, CSS, JavaScript, and React. Perfect for students passionate about full-stack or frontend development.",
    requirements: ["HTML", "CSS", "JavaScript", "React.js", "Git"],
    posted: "2 days ago",
    link: "https://forms.gle/Q1znrmk5bmnvasWG9",
  },
  {
    id: 3,
    title: "Java Development Intern",
    department: "Software Engineering",
    location: "Remote",
    type: "Internship",
    stipend: "Upto ₹12,000 / month",
    duration: "3–6 months",
    experience: "Basic Java programming & OOP concepts",
    description:
      "Work with the engineering team to develop and maintain Java-based applications, implement new features, and optimize existing code. Great opportunity to gain real-world backend development experience.",
    requirements: ["Java", "OOP Concepts", "Spring Boot", "MySQL", "Git/GitHub"],
    posted: "2 days ago",
    link: "https://forms.gle/Q1znrmk5bmnvasWG9",
},

  {
    id: 2,
    title: "Data Science & Machine Learning Intern",
    department: "Data & Analytics",
    location: "Remote",
    type: "Internship",
    stipend: "Upto ₹10,000 / month",
    duration: "3 months",
    experience: "Basic Python & ML concepts",
    description:
      "Assist in building ML models, preprocessing data, and evaluating algorithms. Ideal for those interested in hands-on AI experience.",
    requirements: ["Python", "NumPy", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    posted: "3 days ago",
    link: "https://forms.gle/Q1znrmk5bmnvasWG9",
  },
  {
    id: 3,
    title: "Data Analytics Intern",
    department: "Data & Analytics",
    location: "Remote",
    type: "Internship",
    stipend: "Upto ₹10,000 / month",
    duration: "3 months",
    experience: "Fundamentals of data and reporting",
    description:
      "Work on cleaning, analyzing, and visualizing datasets to support key decisions. Exposure to BI tools and SQL queries.",
    requirements: ["Excel", "SQL", "Power BI or Tableau", "Data Cleaning", "Reports"],
    posted: "1 day ago",
    link: "https://forms.gle/Q1znrmk5bmnvasWG9",
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote",
    type: "Internship",
    stipend: "Upto ₹10,000 / month",
    duration: "3 months",
    experience: "Some design project/portfolio preferred",
    description:
      "Work on wireframes, mockups, and usability testing. Collaborate with developers and learn user-centric design processes.",
    requirements: ["Figma", "Adobe XD", "Wireframing", "User Research", "Prototyping"],
    posted: "4 days ago",
    link: "https://forms.gle/Q1znrmk5bmnvasWG9",
  },
  {
    id: 5,
    title: "Python Developer Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    stipend: "Upto ₹10,000 / month",
    duration: "3 months",
    experience: "Python basics with OOP",
    description:
      "Develop APIs, automate tasks, and contribute to backend projects using Python frameworks. Ideal for backend enthusiasts.",
    requirements: ["Python", "Flask / Django", "REST APIs", "OOP", "Git"],
    posted: "5 days ago",
    link: "https://forms.gle/Q1znrmk5bmnvasWG9",
  }
];

const benefits: Benefit[] = [
  {
    icon: <Award className="h-5 w-5" />,
    title: "Professional Growth",
    description: "Structured mentorship programs and career advancement opportunities",
  },
  {
    icon: <Coffee className="h-5 w-5" />,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours that fit your lifestyle",
  },
  {
    icon: <Laptop className="h-5 w-5" />,
    title: "Modern Tools",
    description: "Access to latest technology stack and development tools",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Learning Budget",
    description: "Annual allowance for courses, books, and skill development",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Collaborative Team",
    description: "Work with experienced professionals in a supportive environment",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Job Security",
    description: "Stable work environment with long-term project commitments",
  },
];

export default function CareersPage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All")

  const departments: string[] = [
    "All",
    "Engineering",
    "Design",
    "Data & Analytics",
    "Product",
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
    <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Column */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your Career
            <span className="block text-gray-600">With Purpose</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
            Join our team of dedicated professionals creating innovative IT solutions 
            that make a difference in businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
              onClick={() => scrollToSection('careers')}
            >
              View Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 hover:border-gray-400 px-8 py-3"
              onClick={() => scrollToSection('benefits')}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src="/cr.jpg"
              alt="Team collaboration and career growth"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-900 rounded-2xl opacity-20 hidden lg:block"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-600 rounded-2xl opacity-15 hidden lg:block"></div>
          
          {/* Stats Overlay Card */}
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Employees</div>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <div>
      <HeroScrollDemo />
      </div>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We believe in creating an environment where talent thrives and innovation flourishes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Zap className="h-6 w-6" />, title: "Innovation", desc: "Cutting-edge solutions" },
                { icon: <Users className="h-6 w-6" />, title: "Collaboration", desc: "Supportive team culture" },
                { icon: <Star className="h-6 w-6" />, title: "Excellence", desc: "Quality in everything we do" },
                { icon: <Heart className="h-6 w-6" />, title: "Balance", desc: "Work-life harmony" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-gray-700">{value.icon}</div>
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
     

      {/* Jobs Section */}
      <section className="py-20 bg-gray-50" id="careers">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600 text-lg">Discover opportunities that match your skills and ambitions</p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-gray-400"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept)}
                    className={`${
                      selectedDepartment === dept 
                        ? 'bg-gray-900 hover:bg-gray-800' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-medium text-gray-900 mb-3">{job.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <Building className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <RupeeIcon className="h-4 w-4" />
                            <span>{job.stipend}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {job.experience}
                        </Badge>
                        <span className="text-sm text-gray-500">{job.posted}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                      {job.description}
                    </CardDescription>

                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-gray-900">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="border-gray-200 text-gray-600"
                          >
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="bg-gray-900 hover:bg-gray-800 text-white px-6"
                        onClick={() => window.open(job.link, "_blank")}
                      >
                        Apply Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-gray-200 hover:border-gray-400 px-6"
                        onClick={() => window.open(job.link, "_blank")}
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">
                  No positions found. Please try adjusting your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" id="benefits">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We invest in our people with comprehensive benefits that support both 
                professional growth and personal well-being
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <div className="text-gray-700">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Ready to Join Us?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Don't see the right role? We're always interested in connecting with talented individuals. 
              Reach out and let's explore opportunities together.
            </p>
            <Link to="/contact" >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-white hover:text-gray-900 px-8 py-3"
              
            >
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}