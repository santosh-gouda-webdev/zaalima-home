
"use client"

import React, { useState, type JSX } from "react"
import { Button } from "@/components/ui/button"
import { AppleCardsCarouselDemo } from "../carosel/Scroller"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge";
import { AnimatedTeamDemo } from "../Hero/Testimonials"
import { 
  Phone, Mail, MapPin, Shield, ArrowRight, Code, Cloud,
  Users, CheckCircle, Clock, Globe, Smartphone, 
 Palette, Headphones, Star, Award,
  Target, BarChart3, Settings
} from "lucide-react"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectDescription: string;
  timeline: string;
  budget: string;
}

export default function EnhancedServiceWebsite(): JSX.Element {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    timeline: "",
    budget: "",
  })

  const services: string[] = [
    "Web Development",
    "Mobile App Development", 
    "Cloud Solutions",
    "Cybersecurity",
    "IT Consulting",
    "Database Management",
    "DevOps Services",
    "UI/UX Design",
    "Digital Marketing",
    "Maintenance & Support",
  ]

  const handleServiceToggle = (service: string): void => {
    setSelectedServices((prev: string[]) => 
      prev.includes(service) 
        ? prev.filter((s: string) => s !== service) 
        : [...prev, service]
    )
  }

  const handleSubmit = (e?: React.MouseEvent): void => {
    e?.preventDefault()
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.projectDescription) {
      alert("Please fill in all required fields.")
      return
    }
    alert("Your quote request has been submitted successfully!")
    console.log("Form Data:", formData)
    console.log("Selected Services:", selectedServices)
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectDescription: "",
      timeline: "",
      budget: "",
    })
    setSelectedServices([])
  }

  const scrollToQuote = (): void => {
    const element = document.getElementById('quote-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl  text-gray-900 mb-8 font-bold ">
                Digital Solutions
                <br />
                <span className="text-gray-600">That Scale</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We create tailored technology solutions that help businesses grow, optimize operations, and stay competitive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-sm font-normal transition-all duration-300 hover:scale-105"
                  onClick={scrollToQuote}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-sm  transition-all duration-300"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="l">
                <img src="/back.jpg" alt="Hero" className="rounded-2xl object-contain " />
                
               
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <img src="/logo2.png" alt="Tech Icon" className="w-20 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<AppleCardsCarouselDemo />
      </div>
      

      {/* Services Grid */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6 font-bold">Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and accelerate growth
            </p>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group text-center p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-all duration-300">
                <Code className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600">Custom web and mobile applications built with modern technologies and best practices</p>
            </div>

            <div className="group text-center p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-all duration-300">
                <Cloud className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Cloud Solutions</h3>
              <p className="text-gray-600">Scalable cloud infrastructure, migration services, and optimization strategies</p>
            </div>

            <div className="group text-center p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-all duration-300">
                <Shield className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600">Comprehensive cybersecurity solutions and compliance management</p>
            </div>

            <div className="group text-center p-8 bg-white rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-all duration-300">
                <Target className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Consulting</h3>
              <p className="text-gray-600">Strategic technology consulting and digital transformation guidance</p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Mobile Apps</h4>
                <p className="text-sm text-gray-600">iOS & Android development</p>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <Palette className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">UI/UX Design</h4>
                <p className="text-sm text-gray-600">User-centered design solutions</p>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">DevOps</h4>
                <p className="text-sm text-gray-600">Automation & deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                We combine technical expertise with business acumen to deliver solutions that drive real results for your organization.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">10+ years of experience delivering complex technology solutions across industries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Agile methodology ensures rapid development and deployment of your solutions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Headphones className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Continuous support and maintenance to keep your systems running smoothly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Image */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                  <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <Users className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <div className="text-2xl font-light text-gray-900">500+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <Award className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <div className="text-2xl font-light text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <Globe className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <div className="text-2xl font-light text-gray-900">25+</div>
                    <div className="text-xs text-gray-600">Countries</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-6 shadow-sm text-center">
                    <Star className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-2xl font-light text-white">4.9</div>
                    <div className="text-xs text-gray-300">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AnimatedTeamDemo />
      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl font-light mb-2">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl font-light mb-2">98%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Client Retention</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl font-light mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Support Available</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl font-light mb-2">10+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Project</h2>
            <p className="text-gray-600">Tell us about your requirements and we will get back to you within 24 hours</p>
            <div className="w-16 h-px bg-gray-300 mx-auto mt-6"></div>
          </div>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-normal">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, firstName: e.target.value })}
                      className="mt-2 border-gray-200 rounded-sm focus:border-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-normal">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, lastName: e.target.value })}
                      className="mt-2 border-gray-200 rounded-sm focus:border-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-normal">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 border-gray-200 rounded-sm focus:border-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-normal">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 border-gray-200 rounded-sm focus:border-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-700 font-normal">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-2 border-gray-200 rounded-sm focus:border-gray-400"
                  />
                </div>

                {/* Services Selection */}
                <div>
                  <Label className="text-gray-700 font-normal">Services Required *</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-4">
                    {services.map((service: string) => (
                      <div key={service} className="flex items-center space-x-3">
                        <Checkbox
                          id={service}
                          checked={selectedServices.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                          className="rounded-sm"
                        />
                        <Label htmlFor={service} className="text-gray-700 font-normal">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {selectedServices.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedServices.map((service: string) => (
                        <Badge key={service} variant="secondary" className="rounded-sm bg-gray-100 text-gray-700">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <Label htmlFor="description" className="text-gray-700 font-normal">Project Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe your project requirements and objectives..."
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="mt-2 border-gray-200 rounded-sm focus:border-gray-400"
                    required
                  />
                </div>

                {/* Timeline & Budget */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-gray-700 font-normal">Timeline *</Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value: string) => setFormData({ ...formData, timeline: value })}
                      className="mt-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asap" id="asap" />
                        <Label htmlFor="asap" className="font-normal">ASAP (Rush project)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-2months" id="1-2months" />
                        <Label htmlFor="1-2months" className="font-normal">1-2 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-6months" id="3-6months" />
                        <Label htmlFor="3-6months" className="font-normal">3-6 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6months+" id="6months+" />
                        <Label htmlFor="6months+" className="font-normal">6+ months</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-gray-700 font-normal">Budget Range</Label>
                    <Select onValueChange={(value: string) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger className="mt-2 border-gray-200 rounded-sm">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-sm font-normal"
                    disabled={selectedServices.length === 0}
                  >
                    Send Quote Request
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    We will respond within 24 hours with a detailed proposal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-6 h-6 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-900 font-medium">+91 8277035909</p>
              <p className="text-gray-600 text-sm mt-1">Mon-Fri 9AM-6PM</p>
            </div>
            <div>
              <Mail className="w-6 h-6 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-900 font-medium">info@zaalima.in</p>
              <p className="text-gray-600 text-sm mt-1">2 hour response time</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-900 font-medium">Electronic City, Bengaluru, Karnataka 560100</p>
              <p className="text-gray-600 text-sm mt-1">Serving clients globally</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}