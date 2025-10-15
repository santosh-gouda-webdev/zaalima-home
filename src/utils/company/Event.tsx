"use client"

import { useState } from "react"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Star,
  Video,
  Coffee,
  Presentation,
  CheckCircle,

  Globe,
} from "lucide-react"
import { MacbookScrollDemo } from "../carosel/MacbookScrollDemo"

export default function EventsPage() {
  const [email, setEmail] = useState("")

  // Featured single event
  const featuredEvent = {
    id: 1,
    title: "Enterprise Cloud Migration Workshop",
    image: "/saas-concept-collage.jpg",
    date: "Nov 25, 2025",
    time: "10:00 AM - 12:00 PM",
    duration: "2 hours",
    location: "Virtual Event",
    category: "Cloud Computing",
    description:
      "Master enterprise cloud migration with our comprehensive workshop. Learn proven strategies, cost optimization techniques, and risk mitigation approaches used by Fortune 500 companies.",
    fullDescription: [
      "Infrastructure assessment and readiness evaluation",
      "Migration planning and execution frameworks",
      "Cost optimization and resource management",
      "Security and compliance best practices",
      "Case studies from successful migrations",
      "Interactive Q&A with cloud experts",
    ],
    speaker: {
      name: "Sarah Chen",
      designation: "Principal Cloud Architect",
      company: "CloudTech Solutions",
      avatar: "/professional-business-consultant-headshot.jpg",
      rating: 4.9,
      experience: "15+ years",
      bio: "Sarah is a leading cloud solutions architect with extensive experience in enterprise transformations, having guided 200+ successful cloud migrations.",
    },
    attendees: 245,
    maxAttendees: 500,
    price: "Free",
    originalPrice: "₹299",
    features: [
      "Live workshop with hands-on exercises",
      "Comprehensive migration toolkit",
      "Digital certificate upon completion",
      "30-day session recording access",
      "One-on-one expert consultation",
    ],
    agenda: [
      { time: "10:00 AM", topic: "Welcome & Overview", duration: "15 min" },
      { time: "10:15 AM", topic: "Assessment Strategies", duration: "30 min" },
      { time: "10:45 AM", topic: "Migration Patterns", duration: "45 min" },
      { time: "11:30 AM", topic: "Cost Optimization", duration: "20 min" },
      { time: "11:50 AM", topic: "Expert Q&A", duration: "10 min" },
    ],
    tags: ["Cloud", "Enterprise", "Migration", "AWS", "Azure", "Strategy"],
  }

  // Meeting calendar data
  const calendarEvents = [
    {
      id: 1,
      title: "Cloud Migration Workshop",
      time: "10:00 AM",
      duration: "2h",
      type: "workshop",
      attendees: 245,
      location: "Virtual",
      day: "Monday",
      date: "25",
    },
    {
      id: 2,
      title: "Team Standup",
      time: "11:30 AM",
      duration: "30m",
      type: "meeting",
      attendees: 12,
      location: "Conference Room A",
      day: "Monday",
      date: "25",
    },
    {
      id: 3,
      title: "AI Business Operations",
      time: "2:00 PM",
      duration: "2.5h",
      type: "seminar",
      attendees: 180,
      location: "Tech Hub",
      day: "Thursday",
      date: "28",
    },
    {
      id: 4,
      title: "Coffee & Networking",
      time: "3:30 PM",
      duration: "30m",
      type: "break",
      attendees: 50,
      location: "Lobby",
      day: "Thursday",
      date: "28",
    },
    {
      id: 5,
      title: "Cybersecurity Masterclass",
      time: "9:00 AM",
      duration: "8h",
      type: "workshop",
      attendees: 120,
      location: "Security Center",
      day: "Tuesday",
      date: "2",
    },
    {
      id: 6,
      title: "Lunch & Learn",
      time: "12:00 PM",
      duration: "1h",
      type: "presentation",
      attendees: 85,
      location: "Main Hall",
      day: "Tuesday",
      date: "2",
    },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const weekDays = [
    { name: "Mon", date: "25", events: calendarEvents.filter((e) => e.day === "Monday") },
    { name: "Tue", date: "2", events: calendarEvents.filter((e) => e.day === "Tuesday") },
    { name: "Wed", date: "3", events: [] },
    { name: "Thu", date: "28", events: calendarEvents.filter((e) => e.day === "Thursday") },
    { name: "Fri", date: "5", events: [] },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case "workshop":
        return <Presentation className="h-3 w-3" />
      case "meeting":
        return <Users className="h-3 w-3" />
      case "seminar":
        return <Video className="h-3 w-3" />
      case "break":
        return <Coffee className="h-3 w-3" />
      case "presentation":
        return <Star className="h-3 w-3" />
      default:
        return <Calendar className="h-3 w-3" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-blue-50 border-l-blue-400 text-blue-700"
      case "meeting":
        return "bg-green-50 border-l-green-400 text-green-700"
      case "seminar":
        return "bg-purple-50 border-l-purple-400 text-purple-700"
      case "break":
        return "bg-orange-50 border-l-orange-400 text-orange-700"
      case "presentation":
        return "bg-pink-50 border-l-pink-400 text-pink-700"
      default:
        return "bg-gray-50 border-l-gray-400 text-gray-700"
    }
  }

  const handleSubscribe = () => {
    if (email) {
      alert("Thank you for subscribing! You'll receive updates about our latest events.")
      setEmail("")
    } else {
      alert("Please enter your email address.")
    }
  }

  const handleRegister = () => {
    alert("Registration successful! You'll receive confirmation details via email.")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-600 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Live Events & Workshops
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 ">
              Professional Development
              <span className="block font-medium">Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join industry experts for hands-on workshops, technical discussions, and networking opportunities designed to advance your career.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Monthly Events</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>500+ Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <MacbookScrollDemo/>
      </div>

      {/* Featured Event */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-600 bg-white">
              Featured Workshop
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              This Week's Highlight
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss this opportunity to learn from industry leaders
            </p>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm bg-white">
            <div className="grid lg:grid-cols-2">
              {/* Event Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-96 lg:h-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
                      <img src={featuredEvent.image} alt={featuredEvent.title} className="w-16 h-16 rounded-full object-cover" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Event Preview Available</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white text-gray-800 shadow-sm px-4 py-2 rounded-full text-sm font-medium">
                    {featuredEvent.category}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 leading-tight">
                  {featuredEvent.title}
                </h3>
                
                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>{featuredEvent.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span>{featuredEvent.attendees} registered</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {featuredEvent.description}
                </p>

                {/* Speaker */}
                <div className="flex items-center gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
                  <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600">
                      <img src={featuredEvent.speaker.avatar} alt={featuredEvent.speaker.name} className="w-16 h-16 rounded-full object-cover" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{featuredEvent.speaker.name}</h4>
                    <p className="text-gray-600 mb-1">{featuredEvent.speaker.designation}</p>
                    <p className="text-sm text-gray-500">{featuredEvent.speaker.company}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{featuredEvent.speaker.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{featuredEvent.speaker.experience}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-6">
                  <button 
                    onClick={handleRegister}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-colors text-lg font-medium"
                  >
                    Register Free
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <div className="text-sm">
                    <div className="text-gray-500 line-through">{featuredEvent.originalPrice}</div>
                    <div className="text-green-600 font-semibold">Limited Time: Free</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="border-t border-gray-100 p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* What You'll Learn */}
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-6">What You'll Learn</h4>
                  <ul className="space-y-3">
                    {featuredEvent.fullDescription.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule */}
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-6">Schedule</h4>
                  <div className="space-y-4">
                    {featuredEvent.agenda.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="text-gray-500 min-w-[80px] font-medium">{item.time}</div>
                        <div className="text-gray-700">{item.topic}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-6">What's Included</h4>
                  <ul className="space-y-3">
                    {featuredEvent.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Topics</h4>
                <div className="flex flex-wrap gap-3">
                  {featuredEvent.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-2 text-sm border border-gray-200 rounded-full text-gray-600 bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Weekly Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our upcoming events and workshops
            </p>
          </div>

          {/* Calendar */}
          <div className="border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden">
            {/* Header */}
            <div className="p-8 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-gray-900">March 2024</h3>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Workshop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Meeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span>Seminar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-6">
              {/* Time Column */}
              <div className="bg-gray-50 border-r border-gray-100">
                <div className="p-4 border-b border-gray-100 text-sm font-medium text-gray-500 text-center">
                  Time
                </div>
                {timeSlots.map((time) => (
                  <div key={time} className="p-4 border-b border-gray-100 h-20 flex items-center justify-center">
                    <span className="text-sm text-gray-500 font-medium">{time}</span>
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {weekDays.map((day) => (
                <div key={day.name} className="border-r border-gray-100 last:border-r-0">
                  <div className="p-4 border-b border-gray-100 text-center bg-white">
                    <div className="text-sm font-medium text-gray-700 mb-1">{day.name}</div>
                    <div className="text-2xl font-light text-gray-900">{day.date}</div>
                  </div>
                  {timeSlots.map((time) => {
                    const dayEvents = day.events.filter((event) => {
                      const eventHour = parseInt(event.time.split(":")[0])
                      const timeHour = parseInt(time.split(":")[0])
                      const isPM = event.time.includes("PM")
                      const isTimePM = time.includes("PM")

                      let adjustedEventHour = eventHour
                      let adjustedTimeHour = timeHour

                      if (isPM && eventHour !== 12) adjustedEventHour += 12
                      if (isTimePM && timeHour !== 12) adjustedTimeHour += 12
                      if (eventHour === 12 && !isPM) adjustedEventHour = 0
                      if (timeHour === 12 && !isTimePM) adjustedTimeHour = 0

                      return adjustedEventHour === adjustedTimeHour
                    })

                    return (
                      <div key={`${day.name}-${time}`} className="p-3 border-b border-gray-100 h-20">
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`p-3 rounded-lg border-l-4 text-xs h-full ${getEventColor(event.type)}`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {getEventIcon(event.type)}
                              <span className="font-semibold truncate">{event.title}</span>
                            </div>
                            <div className="text-xs opacity-80 mb-1">{event.duration}</div>
                            <div className="flex items-center gap-1 text-xs opacity-80">
                              <Users className="h-3 w-3" />
                              <span>{event.attendees}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Get notified about upcoming events and exclusive workshops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-lg"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-xl transition-colors font-medium"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>
    </div>
  )
}