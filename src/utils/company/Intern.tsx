"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Trophy,
  Award,
  Briefcase,
  Zap,
  Rocket,
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
export interface Intern {
  id: number
  name: string
  icon: React.ComponentType<any> // expects a React component, not a string
}
const interns: Intern[] = [
  {
    "id": 1,
    "name": "Likhitha D",
    "domain": "IoT & Robotics",
    "description": "Developed an automated robotic arm system with IoT sensors for real-time monitoring and precision control.",
    "batch": "Spring 2025",
    "image": "https://certificate-verification.zaalima.in/1001.jpg",
    "icon": Cpu,
    "achievement": "Reduced operation error by 35%",
    "projects": 3,
    "technologies": ["Arduino", "Raspberry Pi", "Python"],
    "location": "Bangalore, India",
    "duration": "12 weeks"
  },
  {
    "id": 2,
    "name": "Kavi Shah",
    "domain": "Web Development",
    "description": "Created a full-stack portfolio website with responsive UI and optimized performance using React and Node.js.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1002.jpg",
    "icon": "Code",
    "achievement": "Improved page load speed by 50%",
    "projects": 2,
    "technologies": ["React", "Node.js", "MongoDB"],
    "location": "Mumbai, India",
    "duration": "8 weeks"
  },
  {
    "id": 3,
    "name": "MRITUNJOY MAHATO",
    "domain": "Python Development",
    "description": "Developed automation scripts and data visualization tools using Python and Flask framework.",
    "batch": "Summer 2025",
    "image": "https://certificate-verification.zaalima.in/1003.jpg",
    "icon": "Terminal",
    "achievement": "Automated manual reporting reducing time by 40%",
    "projects": 3,
    "technologies": ["Python", "Flask", "Matplotlib"],
    "location": "Kolkata, India",
    "duration": "10 weeks"
  },
  {
    "id": 4,
    "name": "Nunavath Rakesh",
    "domain": "IoT & Robotics",
    "description": "Designed an IoT-based weather station capable of sending live updates to a cloud dashboard.",
    "batch": "Autumn 2025",
    "image": "https://certificate-verification.zaalima.in/1004.jpg",
    "icon": "Cpu",
    "achievement": "Implemented real-time sensor data integration",
    "projects": 3,
    "technologies": ["C++", "MQTT", "AWS IoT"],
    "location": "Hyderabad, India",
    "duration": "8 weeks"
  },
  {
    "id": 5,
    "name": "Sanika Ravindra Pawar",
    "domain": "Data Analytics",
    "description": "Performed in-depth sales data analysis using Python and Power BI to identify performance trends.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1005.jpg",
    "icon": "BarChart",
    "achievement": "Enhanced reporting accuracy by 25%",
    "projects": 2,
    "technologies": ["Python", "Power BI", "Excel"],
    "location": "Pune, India",
    "duration": "4 weeks"
  },
  {
    "id": 6,
    "name": "Shreya Balaji Boga",
    "domain": "IoT & Robotics",
    "description": "Built a smart home system integrating sensors for temperature and motion detection with mobile control.",
    "batch": "Spring 2025",
    "image": "https://certificate-verification.zaalima.in/1006.jpg",
    "icon": "Cpu",
    "achievement": "Achieved seamless device integration using MQTT",
    "projects": 3,
    "technologies": ["Python", "Arduino", "Blynk"],
    "location": "Chennai, India",
    "duration": "12 weeks"
  },
  {
    "id": 7,
    "name": "MAHUM KAUNAIN S",
    "domain": "Data Science & Machine Learning",
    "description": "Developed predictive models for customer churn analysis using Python and scikit-learn.",
    "batch": "Autumn 2025",
    "image": "https://certificate-verification.zaalima.in/1007.jpg",
    "icon": "Brain",
    "achievement": "Improved prediction accuracy by 18%",
    "projects": 4,
    "technologies": ["Python", "pandas", "scikit-learn"],
    "location": "Bangalore, India",
    "duration": "12 weeks"
  },
  {
    "id": 8,
    "name": "Akash Kumar",
    "domain": "Data Analytics",
    "description": "Designed interactive dashboards for financial KPIs using Tableau and SQL.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1008.jpg",
    "icon": "BarChart",
    "achievement": "Delivered automated BI reports to stakeholders",
    "projects": 2,
    "technologies": ["SQL", "Tableau", "Excel"],
    "location": "Patna, India",
    "duration": "8 weeks"
  },
  {
    "id": 9,
    "name": "Bandam Navadeep Reddy",
    "domain": "Data Science & Machine Learning",
    "description": "Created an image classification model using TensorFlow and CNN for medical diagnostics.",
    "batch": "Summer 2025",
    "image": "https://certificate-verification.zaalima.in/1009.jpg",
    "icon": "Brain",
    "achievement": "Achieved 93% model accuracy",
    "projects": 3,
    "technologies": ["TensorFlow", "Keras", "NumPy"],
    "location": "Hyderabad, India",
    "duration": "12 weeks"
  },
  {
    "id": 10,
    "name": "Abhyuday Rastogi",
    "domain": "Python Development",
    "description": "Implemented a REST API for data processing using Django REST Framework.",
    "batch": "Spring 2025",
    "image": "https://certificate-verification.zaalima.in/1010.jpg",
    "icon": "Terminal",
    "achievement": "Reduced API latency by 30%",
    "projects": 3,
    "technologies": ["Python", "Django", "REST API"],
    "location": "Delhi, India",
    "duration": "8 weeks"
  },
  {
    "id": 11,
    "name": "BALAKRISHNAN R",
    "domain": "Web Development",
    "description": "Developed a modern blog platform with secure authentication and admin dashboard.",
    "batch": "Autumn 2025",
    "image": "https://certificate-verification.zaalima.in/1011.jpg",
    "icon": "Code",
    "achievement": "Integrated user analytics and SEO tools",
    "projects": 2,
    "technologies": ["React", "Firebase", "Node.js"],
    "location": "Chennai, India",
    "duration": "4 weeks"
  },
  {
    "id": 12,
    "name": "Sahana M N",
    "domain": "Web Development",
    "description": "Created an event booking system with React, Express, and MongoDB for dynamic data handling.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1012.jpg",
    "icon": "Code",
    "achievement": "Enhanced backend reliability by 40%",
    "projects": 3,
    "technologies": ["React", "Express", "MongoDB"],
    "location": "Bangalore, India",
    "duration": "8 weeks"
  },
  {
    "id": 13,
    "name": "MOHAMMED ANEEZ",
    "domain": "Web Development",
    "description": "Built a task management web app featuring JWT authentication and cloud deployment.",
    "batch": "Spring 2025",
    "image": "https://certificate-verification.zaalima.in/1013.jpg",
    "icon": "Code",
    "achievement": "Improved app security through token validation",
    "projects": 3,
    "technologies": ["Next.js", "Node.js", "MongoDB"],
    "location": "Kerala, India",
    "duration": "12 weeks"
  },
  {
    "id": 14,
    "name": "Azaz khan",
    "domain": "IoT & Robotics",
    "description": "Engineered a smart irrigation system using IoT moisture sensors and mobile alerts.",
    "batch": "Autumn 2025",
    "image": "https://certificate-verification.zaalima.in/1014.jpg",
    "icon": "Cpu",
    "achievement": "Saved 20% water usage in prototype testing",
    "projects": 3,
    "technologies": ["ESP32", "MQTT", "Python"],
    "location": "Bhopal, India",
    "duration": "8 weeks"
  },
  {
    "id": 15,
    "name": "Arya Guruprasad",
    "domain": "Python Development",
    "description": "Developed a student grading and analytics system using Python and SQLite.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1015.jpg",
    "icon": "Terminal",
    "achievement": "Reduced grading time by 50%",
    "projects": 2,
    "technologies": ["Python", "SQLite", "Tkinter"],
    "location": "Mysore, India",
    "duration": "4 weeks"
  },
  {
    "id": 16,
    "name": "Yashash ravi",
    "domain": "Python Development",
    "description": "Created data automation workflows for report generation using Pandas and Excel.",
    "batch": "Summer 2025",
    "image": "https://certificate-verification.zaalima.in/1016.jpg",
    "icon": "Terminal",
    "achievement": "Automated 90% of manual reporting",
    "projects": 3,
    "technologies": ["Python", "pandas", "Excel"],
    "location": "Bangalore, India",
    "duration": "8 weeks"
  },
  {
    "id": 17,
    "name": "Deepak Mandloi",
    "domain": "Data Science & Machine Learning",
    "description": "Developed a machine learning model for predicting loan defaults using logistic regression.",
    "batch": "Spring 2025",
    "image": "https://certificate-verification.zaalima.in/1017.jpg",
    "icon": "Brain",
    "achievement": "Achieved 89% prediction accuracy",
    "projects": 3,
    "technologies": ["Python", "NumPy", "scikit-learn"],
    "location": "Indore, India",
    "duration": "12 weeks"
  },
  {
    "id": 18,
    "name": "Kushwanth Rasala",
    "domain": "Python Development",
    "description": "Built an attendance automation system with QR code scanning and database integration.",
    "batch": "Autumn 2025",
    "image": "https://certificate-verification.zaalima.in/1018.jpg",
    "icon": "Terminal",
    "achievement": "Deployed system in pilot schools successfully",
    "projects": 2,
    "technologies": ["Python", "OpenCV", "SQLite"],
    "location": "Vijayawada, India",
    "duration": "8 weeks"
  },
  {
    "id": 19,
    "name": "Viraj Sunil Bhuvad",
    "domain": "UI/UX Design",
    "description": "Designed an intuitive travel booking app interface with smooth navigation and accessibility.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1019.jpg",
    "icon": "Layout",
    "achievement": "Enhanced user engagement by 30%",
    "projects": 2,
    "technologies": ["Figma", "Adobe XD", "Canva"],
    "location": "Mumbai, India",
    "duration": "4 weeks"
  },
  {
    "id": 20,
    "name": "Juanita Grace Singh",
    "domain": "UI/UX Design",
    "description": "Developed wireframes and prototypes for an e-learning platform focusing on user retention.",
    "batch": "Spring 2025",
    "image": "https://certificate-verification.zaalima.in/1020.jpg",
    "icon": "Layout",
    "achievement": "Improved onboarding experience by 40%",
    "projects": 3,
    "technologies": ["Figma", "Miro", "Notion"],
    "location": "Chennai, India",
    "duration": "8 weeks"
  },
  {
    "id": 21,
    "name": "Kamalnath",
    "domain": "UI/UX Design",
    "description": "Created an elegant mobile banking app interface prioritizing security and simplicity.",
    "batch": "Autumn 2025",
    "image": "https://certificate-verification.zaalima.in/1021.jpg",
    "icon": "Layout",
    "achievement": "Reduced user drop-off by 25%",
    "projects": 2,
    "technologies": ["Figma", "Sketch", "Illustrator"],
    "location": "Madurai, India",
    "duration": "4 weeks"
  },
  {
    "id": 22,
    "name": "David Franklin D",
    "domain": "Web Development",
    "description": "Built a personal portfolio and blog website with content management using Next.js.",
    "batch": "Spring 2025",
    "image": "https://certificate-verification.zaalima.in/1022.jpg",
    "icon": "Code",
    "achievement": "Improved site SEO score to 98/100",
    "projects": 3,
    "technologies": ["Next.js", "Tailwind CSS", "Vercel"],
    "location": "Bangalore, India",
    "duration": "8 weeks"
  },
  {
    "id": 23,
    "name": "Tushar Gupta",
    "domain": "Web Development",
    "description": "Developed an e-commerce admin dashboard with dynamic charts and inventory management.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1023.jpg",
    "icon": "Code",
    "achievement": "Reduced load time by 45%",
    "projects": 3,
    "technologies": ["React", "Node.js", "MySQL"],
    "location": "Delhi, India",
    "duration": "12 weeks"
  },
  {
    "id": 24,
    "name": "Mohit Kumar",
    "domain": "Basic Electrical",
    "description": "Designed and simulated electrical circuits using AutoCAD Electrical and MATLAB.",
    "batch": "Autumn 2025",
    "image": "https://certificate-verification.zaalima.in/1024.jpg",
    "icon": "Zap",
    "achievement": "Reduced power losses by 10% in test simulations",
    "projects": 2,
    "technologies": ["MATLAB", "AutoCAD", "Simulink"],
    "location": "Lucknow, India",
    "duration": "8 weeks"
  },
  {
    "id": 25,
    "name": "BABULAL MAHTO",
    "domain": "Data Science & Machine Learning",
    "description": "Implemented a natural language processing model for sentiment analysis on customer reviews.",
    "batch": "Summer 2025",
    "image": "https://certificate-verification.zaalima.in/1025.jpg",
    "icon": "Brain",
    "achievement": "Achieved 92% classification accuracy",
    "projects": 3,
    "technologies": ["Python", "NLTK", "TensorFlow"],
    "location": "Ranchi, India",
    "duration": "12 weeks"
  },
  {
    "id": 26,
    "name": "Priti Shashikant Suryawanshi",
    "domain": "IoT & Robotics",
    "description": "Developed a home security robot equipped with motion sensors and live video streaming.",
    "batch": "Winter 2024",
    "image": "https://certificate-verification.zaalima.in/1026.jpg",
    "icon": "Cpu",
    "achievement": "Integrated AI detection with 95% accuracy",
    "projects": 4,
    "technologies": ["Arduino", "Python", "OpenCV"],
    "location": "Pune, India",
    "duration": "12 weeks"
  },{
  "id": 27,
  "name": "DEEPAK MOHANTY",
  "domain": "Data Analytics",
  "description": "Performed data cleaning, transformation, and visualization of marketing performance datasets to identify growth patterns.",
  "batch": "Spring 2025",
  "image": "https://certificate-verification.zaalima.in/1027.jpg",
  "icon": "BarChart",
  "achievement": "Reduced reporting time by 35% using automated dashboards",
  "projects": 3,
  "technologies": ["Python", "Power BI", "SQL"],
  "location": "Bhubaneswar, India",
  "duration": "8 weeks"
},
{
  "id": 28,
  "name": "Himesh Kumar Rana",
  "domain": "Web Development",
  "description": "Developed a dynamic event management website integrating real-time user authentication and content updates.",
  "batch": "Autumn 2025",
  "image": "https://certificate-verification.zaalima.in/1028.jpg",
  "icon": "Code",
  "achievement": "Enhanced platform scalability and user experience",
  "projects": 3,
  "technologies": ["React", "Express", "MongoDB"],
  "location": "Bhubaneswar, India",
  "duration": "12 weeks"
}

];



const successVideos: SuccessVideo[] = [
  {
    id: 1,
    name: "Aishita",
    role: "Data Science & ML Intern",
    batch: "Summer 2025",
    company: "Zaalima Development Pvt.Ltd",
    videoUrl: "https://certificate-verification.zaalima.in/1112.mp4",
    thumbnail: "https://certificate-verification.zaalima.in/1500.jpg",
    duration: "1:14",
    title: "From Data to Decisions",
    description: "Aishita shares how she transformed raw datasets into actionable insights using Python and machine learning algorithms."
  },
  {
    id: 2,
    name: "Bhavya Sharma",
    role: "Python Development Intern",
    batch: "Autumn 2025",
    company: "Zaalima Development Pvt.Ltd",
    videoUrl: "https://certificate-verification.zaalima.in/1113.mp4",
    thumbnail: "https://certificate-verification.zaalima.in/1500.jpg",
    duration: "2:15",
    title: "Automating the Future with Python",
    description: "Bhavya explains how she built automation scripts that streamlined backend operations and improved data efficiency."
  },
  {
    id: 3,
    name: "Kavi Shah",
    role: "Web Development Intern",
    batch: "Spring 2025",
    company: "Zaalima Development Pvt.Ltd",
    videoUrl: "https://certificate-verification.zaalima.in/1114.mp4",
    thumbnail: "https://certificate-verification.zaalima.in/1500.jpg",
    duration: "1:18",
    title: "From Static to Dynamic Web",
    description: "Kavi talks about creating responsive and scalable websites using React and Node.js during his internship journey."
  },
  {
    id: 4,
    name: "Sanika Ravindra Pawar",
    role: "Data Analytics Intern",
    batch: "Winter 2025",
    company: "Zaalima Development Pvt.Ltd",
    videoUrl: "https://certificate-verification.zaalima.in/1115.mp4",
    thumbnail: "https://certificate-verification.zaalima.in/1500.jpg",
    duration: "1:12",
    title: "Visualizing Success with Data",
    description: "Sanika describes how she built interactive Power BI dashboards that simplified business reporting and decision-making."
  },
  {
    id: 5,
    name: "Chelsy Rajeshkumar Patel",
    role: "UI/UX Design Intern",
    batch: "Summer 2025",
    company: "Zaalima Development Pvt.Ltd",
    videoUrl: "https://certificate-verification.zaalima.in/1116.mp4",
    thumbnail: "https://certificate-verification.zaalima.in/1500.jpg",
    duration: "1:38",
    title: "Designing for Real Impact",
    description: "Chelsy shares how she improved user engagement by redesigning mobile interfaces based on real-time usability feedback."
  },
  {
    id: 6,
    name: "Anirban Halder",
    role: "Data Science & Machine Learning Intern",
    batch: "Spring 2025",
    company: "Zaalima Development Pvt.Ltd",
    videoUrl: "https://certificate-verification.zaalima.in/1117.mp4",
    thumbnail: "https://certificate-verification.zaalima.in/1500.jpg",
    duration: "1:58",
    title: "Intelligence in Every Model",
    description: "Anirban discusses developing and deploying predictive models that optimized business performance and customer targeting."
  },
]


const reviews: Review[] = [
  {
    id: 1,
    name: "Mohammed Aneez",
    role: "Web Development Intern",
    batch: "Summer 2025",
    rating: 5,
    review: "It was worth the time being at Zaalima doing internship. Good training and guidance.",
    avatar: "https://certificate-verification.zaalima.in/1030.jpg",
    company: "Zaalima Development Pvt.Ltd"
  },
  {
    id: 2,
    name: "Yashash R",
    role: "Python Development Intern",
    batch: "Summer 2025",
    rating: 4,
    review: "My internship was an enriching experience that significantly enhanced my practical skills. I am grateful for the opportunity to work with such a cooperative and supportive team, which made the learning environment highly positive and impactful.",
    avatar: "https://certificate-verification.zaalima.in/1030.jpg",
    company: "Zaalima Development Pvt.Ltd"
  },
  {
    id: 3,
    name: "Tushar Gupta",
    role: "Data Science & Machine Learning Intern",
    batch: "Spring 2025",
    rating: 5,
    review: "I complete my internship recently it was amazing experience.",
    avatar: "https://certificate-verification.zaalima.in/1029.jpg",
    company: "Zaalima Development Pvt.Ltd"
  },
  {
    id: 4,
    name: "Raushan ranjan",
    role: "Data Analytics Intern",
    batch: "Spring 2025",
    rating: 5,
    review: "Zaalima is good company, i have done internship in this company. the trainer is good in nature, they teach us very well , the clear every doubt.they are friendly in nature..",
    avatar: "https://certificate-verification.zaalima.in/1030.jpg",
    company: "Zaalima Development Pvt.Ltd"
  },
  {
    id: 5,
    name: "Rassmika",
    role: "UI/UX Design Intern",
    batch: "Spring 2025",
    rating: 5,
    review: "Very useful I gained more knowledge in this internship.",
    avatar: "https://certificate-verification.zaalima.in/1029.jpg",
    company: "Zaalima Development Pvt.Ltd"
  },
]

const InternHallOfFame: React.FC = () => {
  const [currentReview, setCurrentReview] = useState<number>(0)
  const [currentVideo, setCurrentVideo] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div>
        <HeroScrollDemo2 />
      </div>

      {/* Outstanding Achievers */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">Hall of Fame</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Outstanding Achievers
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the exceptional individuals who have demonstrated excellence, innovation, and leadership during their internships.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {interns.map((intern) => {
              const IconComponent = intern.icon
              return (
                <Card key={intern.id} className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    {/* Profile Image - Circular */}
                    <div className="relative mb-4">
                      <div className="w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-500 p-1">
                        <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
                          <img
                            src={intern.image}
                            alt={intern.name}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Domain Badge - Bottom Left */}
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg">
                          <IconComponent className="w-3 h-3 mr-1 inline" />
                          {intern.domain}
                        </Badge>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{intern.name}</h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                      {intern.description}
                    </p>

                    {/* Achievement Badge */}
                    <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-3 h-3 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-xs font-medium text-green-900 dark:text-green-200 line-clamp-1">
                          {intern.achievement}
                        </span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        <span className="font-semibold text-gray-900 dark:text-white">{intern.projects}</span>
                        <span>Projects</span>
                      </div>
                      <div>{intern.duration}</div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {intern.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Date Badge */}
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>📅 {intern.batch}</span>
                        <span>📍 {intern.location.split(',')[0]}</span>
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm mb-6">
              <Play className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
              <span className="font-semibold text-indigo-900 dark:text-indigo-200">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Hear Their Journey</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Watch our interns share their transformative experiences and the impact they've made.
            </p>
          </div>

          <div className="relative">
            {/* Main Video */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-900 relative">
                <video
                  ref={videoRef}
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
                    className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-2xl"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </Button>
                </div>

                <div className="absolute top-6 right-6 flex gap-2">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    {successVideos[currentVideo].duration}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white border-0"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 sm:p-8">
                  <div className="text-white">
                    <Badge className="bg-indigo-600 mb-3">{successVideos[currentVideo].batch}</Badge>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{successVideos[currentVideo].title}</h3>
                    <p className="text-gray-200 mb-2 text-sm sm:text-base">{successVideos[currentVideo].description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold">{successVideos[currentVideo].name}</span>
                      <span>•</span>
                      <span>{successVideos[currentVideo].role}</span>
                      <span>•</span>
                      <span className="text-indigo-300">{successVideos[currentVideo].company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <Button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </Button>
            <Button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-xl"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </Button>

            {/* Video Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {successVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`h-2 rounded-full transition-all ${index === currentVideo ? "bg-indigo-600 w-8" : "bg-gray-300 dark:bg-gray-600 w-2"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm mb-6">
              <Quote className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
              <span className="font-semibold text-indigo-900 dark:text-indigo-200">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">In Their Own Words</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real experiences from interns who have been part of our transformative program.
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white dark:bg-gray-800">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-light">
                  "{reviews[currentReview].review}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full border-2 border-indigo-200 dark:border-indigo-800"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{reviews[currentReview].name}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{reviews[currentReview].role}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{reviews[currentReview].batch} • {reviews[currentReview].company}</p>
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
                  className={`h-2 rounded-full transition-all ${index === currentReview ? "bg-indigo-600 w-8" : "bg-gray-300 dark:bg-gray-600 w-2"
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
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-semibold">Limited Spots Available</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Join Our Next Cohort</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Be part of our Hall of Fame. Applications are now open for Summer 2025 internship program.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfP3af9aBHT8hte8LSrz-32M7f32l1dz6iRnPFCP9clS6c1VA/viewform" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-xl w-full sm:w-auto">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="border-2 border-white text-black hover:bg-white hover:text-indigo-600 px-8 py-6 text-lg font-bold w-full">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/20">
                {[
                  { icon: Zap, title: "Application Deadline", value: "October 05, 2025" },
                  { icon: Briefcase, title: "Program Duration", value: "08-12 Weeks" },
                  { icon: Award, title: "Stipend", value: "$1K - $6K/month" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl mb-3">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="text-sm text-white/80 mb-1">{item.title}</div>
                    <div className="text-lg font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InternHallOfFame
