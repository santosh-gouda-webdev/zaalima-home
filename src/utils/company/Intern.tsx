"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Code,
  Database,
  Brain,
  Shield,
  Quote,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Trophy,
  Target,
} from "lucide-react"
import { Link } from "react-router"
import { HeroScrollDemo2 } from "../carosel/HeroScroll2"

interface Intern {
  id: number
  name: string
  domain: string
  description: string
  batch: string
  image: string
  icon: React.ComponentType<any>
  achievement: string
  projects: number
  technologies: string[]
  location: string
  duration: string
}

interface SuccessVideo {
  id: number
  name: string
  role: string
  batch: string
  company: string
  videoUrl: string
  thumbnail: string
  duration: string
  title: string
  description: string
}

interface Review {
  id: number
  name: string
  role: string
  batch: string
  rating: number
  review: string
  avatar: string
  company: string
}

const interns: Intern[] = [
  {
    id: 1,
    name: "Anirban Halder",
    domain: "Data Science & Machine Learning",
    description: "Built responsive e-commerce platform with modern React architecture, implementing advanced state management and payment integrations.",
    batch: "Summer 202",
    image: "https://zaalimalearning.com/15.jpg",
    icon: Code,
    achievement: "Increased conversion rate by 45%",
    projects: 3,
    technologies: ["React", "TypeScript", "Next.js"],
    location: "San Francisco, CA",
    duration: "12 weeks"
  },
  {
    id: 2,
    name: "Michael Chen",
    domain: "Data Science",
    description: "Developed predictive analytics models for customer behavior analysis, creating intelligent dashboards for business insights.",
    batch: "Summer 2024",
    image: "/professional-business-consultant-headshot.jpg",
    icon: Database,
    achievement: "Improved forecast accuracy by 60%",
    projects: 4,
    technologies: ["Python", "TensorFlow", "SQL"],
    location: "New York, NY",
    duration: "16 weeks"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    domain: "Machine Learning",
    description: "Created AI-powered chatbot using natural language processing, implementing advanced conversation flows and learning algorithms.",
    batch: "Spring 2024",
    image: "/professional-business-consultant-headshot.jpg",
    icon: Brain,
    achievement: "Reduced response time by 70%",
    projects: 2,
    technologies: ["Python", "NLP", "PyTorch"],
    location: "Austin, TX",
    duration: "14 weeks"
  },
  {
    id: 4,
    name: "David Kim",
    domain: "Cybersecurity",
    description: "Implemented comprehensive security protocols and conducted thorough penetration testing across multiple enterprise systems.",
    batch: "Fall 2024",
    image: "/professional-business-consultant-headshot.jpg",
    icon: Shield,
    achievement: "Identified 15+ vulnerabilities",
    projects: 5,
    technologies: ["Kali Linux", "Python", "Wireshark"],
    location: "Seattle, WA",
    duration: "12 weeks"
  },
  {
    id: 5,
    name: "Jessica Taylor",
    domain: "Full Stack Development",
    description: "Developed progressive web application with real-time features, focusing on performance optimization and user experience.",
    batch: "Summer 2024",
    image: "/professional-business-consultant-headshot.jpg",
    icon: Code,
    achievement: "Achieved 99.9% uptime",
    projects: 3,
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    location: "Denver, CO",
    duration: "16 weeks"
  },
  {
    id: 6,
    name: "Alex Thompson",
    domain: "Data Analytics",
    description: "Built comprehensive business intelligence platform enabling data-driven decision making across multiple departments.",
    batch: "Spring 2024",
    image: "/professional-business-consultant-headshot.jpg",
    icon: Target,
    achievement: "Streamlined reporting by 50%",
    projects: 4,
    technologies: ["Tableau", "R", "PostgreSQL"],
    location: "Boston, MA",
    duration: "14 weeks"
  },
  {
    id: 7,
    name: "Alex Thompson",
    domain: "Data Analytics",
    description: "Built comprehensive business intelligence platform enabling data-driven decision making across multiple departments.",
    batch: "Spring 2024",
    image: "/professional-business-consultant-headshot.jpg",
    icon: Target,
    achievement: "Streamlined reporting by 50%",
    projects: 4,
    technologies: ["Tableau", "R", "PostgreSQL"],
    location: "Boston, MA",
    duration: "14 weeks"
  }
]

const successVideos: SuccessVideo[] = [
  {
    id: 1,
    name: "Anirban Halder",
    role: "Frontend Development Intern",
    batch: "Summer 2024",
    company: "TechFlow Systems",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "3:24",
    title: "From Student to Frontend Expert",
    description: "Sarah shares her journey mastering React and building production-ready applications that serve thousands of users daily."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Science Intern",
    batch: "Summer 2024",
    company: "DataVision Corp",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "4:15",
    title: "Turning Data Into Business Value",
    description: "Michael discusses building ML models that increased company revenue by 25% through predictive analytics."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "ML Engineering Intern",
    batch: "Spring 2024",
    company: "AI Solutions Inc",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "2:58",
    title: "Building Intelligent Systems",
    description: "Emily explains how she developed an AI chatbot that handles 10,000+ customer interactions daily."
  }
]

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Development Intern",
    batch: "Summer 2024",
    rating: 5,
    review: "This internship completely transformed my career trajectory. The mentorship was exceptional, and I worked on real projects that are now used by thousands of customers. The learning curve was steep but incredibly rewarding.",
    avatar: "/professional-business-consultant-headshot.jpg",
    company: "TechFlow Systems"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Science Intern",
    batch: "Summer 2024",
    rating: 5,
    review: "An absolutely phenomenal experience that exceeded every expectation. I gained hands-on experience with cutting-edge ML algorithms and worked alongside brilliant minds. The skills I learned here are invaluable.",
    avatar: "/professional-business-consultant-headshot.jpg",
    company: "DataVision Corp"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "ML Engineering Intern",
    batch: "Spring 2024",
    rating: 5,
    review: "This program is a game-changer for anyone serious about AI and machine learning. I deployed production models, learned industry best practices, and built solutions that make a real impact.",
    avatar: "/professional-business-consultant-headshot.jpg",
    company: "AI Solutions Inc"
  }
]

const InternHallOfFame: React.FC = () => {
  const [currentReview, setCurrentReview] = useState<number>(0)
  const [currentVideo, setCurrentVideo] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextReview = (): void => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = (): void => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const nextVideo = (): void => {
    setCurrentVideo((prev) => (prev + 1) % successVideos.length)
    setIsPlaying(false)
  }

  const prevVideo = (): void => {
    setCurrentVideo((prev) => (prev - 1 + successVideos.length) % successVideos.length)
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      
      <div>
        <HeroScrollDemo2 />
      </div>

      {/* Featured Interns */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Outstanding Achievers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the exceptional individuals who have demonstrated excellence, innovation, and leadership during their internships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {interns.map((intern) => {
              const IconComponent = intern.icon
              return (
                <Card key={intern.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    {/* Profile Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
                      <img
                        src={intern.image}
                        alt={intern.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <Badge className="bg-white text-gray-800 shadow-sm text-xs">
                          {intern.batch}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{intern.name}</h3>
                      <p className="text-blue-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{intern.domain}</p>
                      
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                        {intern.description}
                      </p>

                      {/* Achievement Badge */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                        <div className="flex items-center">
                          <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-green-800">
                            {intern.achievement}
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap justify-between items-center mb-3 sm:mb-4 text-xs sm:text-sm gap-2">
                        <div>
                          <span className="font-semibold text-gray-900">{intern.projects}</span>
                          <span className="text-gray-500 ml-1">Projects</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">{intern.duration}</span>
                        </div>
                        <div className="w-full sm:w-auto">
                          <span className="text-gray-500 text-xs">{intern.location}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {intern.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Videos */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-6">
              <Play className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hear Their Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our interns share their transformative experiences and the impact they've made.
            </p>
          </div>

          <div className="relative">
            {/* Main Video */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-900 relative">
                <video
                  key={successVideos[currentVideo].videoUrl}
                  className="w-full h-full object-cover"
                  poster={successVideos[currentVideo].thumbnail}
                  muted={isMuted}
                  controls={false}
                >
                  <source src={successVideos[currentVideo].videoUrl} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-white hover:bg-gray-100 text-gray-900"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </Button>
                </div>

                <div className="absolute top-6 right-6 flex gap-2">
                  <span className="bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                    {successVideos[currentVideo].duration}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white border-0"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <Badge className="bg-blue-600 mb-2">{successVideos[currentVideo].batch}</Badge>
                    <h3 className="text-2xl font-bold mb-2">{successVideos[currentVideo].title}</h3>
                    <p className="text-gray-200 mb-2">{successVideos[currentVideo].description}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{successVideos[currentVideo].name}</span>
                      <span>•</span>
                      <span>{successVideos[currentVideo].role}</span>
                      <span>•</span>
                      <span className="text-blue-300">{successVideos[currentVideo].company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <Button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-100 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </Button>
            <Button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-100 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </Button>

            {/* Video Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {successVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentVideo ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Testimonials
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In Their Own Words</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from interns who have been part of our transformative program.
            </p>
          </div>

          <Card className="shadow-lg border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic font-light">
                  "{reviews[currentReview].review}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-lg">{reviews[currentReview].name}</h4>
                    <p className="text-blue-600 font-medium">{reviews[currentReview].role}</p>
                    <p className="text-gray-500 text-sm">{reviews[currentReview].batch} • {reviews[currentReview].company}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 gap-6">
            <Button variant="outline" size="sm" onClick={prevReview} className="w-12 h-12 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentReview ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextReview} className="w-12 h-12 rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Next Cohort</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be part of our Hall of Fame. Applications are now open for Summer 2025 internship program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/contact">
            <Button variant="outline" size="lg" className="border-gray-600 text-black hover:bg-gray-800 px-8 py-4 text-lg">
              Learn More
            </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
            {[
              { title: "Application Deadline", value: "March 15, 2025" },
              { title: "Program Duration", value: "12-16 Weeks" },
              { title: "Stipend", value: "$2K - $8K/month" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-sm text-gray-400 mb-2">{item.title}</div>
                <div className="text-lg font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default InternHallOfFame