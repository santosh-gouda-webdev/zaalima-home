"use client"

import { X, Sparkles, Briefcase, Zap, ArrowRight, Award, Users, Rocket } from "lucide-react"
import { useEffect } from "react"

interface InternshipModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InternshipModal({ isOpen, onClose }: InternshipModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleApplyNow = () => {
    window.open('https://forms.gle/Q1znrmk5bmnvasWG9', '_blank')
    onClose()
  }

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-0 sm:p-6 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div 
        className="relative w-full h-full sm:h-auto sm:max-h-[95vh] max-w-6xl bg-white dark:bg-gray-900 sm:rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden"
      >
        {/* Close Button - Fixed at top right, always visible, NOT inside stopPropagation */}
        <button
          onClick={handleCloseClick}
          className="fixed sm:absolute top-3 right-3 sm:top-6 sm:right-6 z-[10001] w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          aria-label="Close modal"
          type="button"
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
            {/* Left Side - Hero */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-white overflow-hidden">
              {/* Animated Background Shapes */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-10 -left-10 w-40 h-40 sm:w-72 sm:h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 sm:w-72 sm:h-72 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div className="relative z-10 pt-14 sm:pt-0 pb-6">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 sm:px-4 py-2 mb-5 sm:mb-6">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-semibold">Premium Internship Program</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                  Transform Your
                  <span className="block text-yellow-300">
                    Tech Journey
                  </span>
                </h1>
                
                <p className="text-base sm:text-base lg:text-lg mb-6 sm:mb-8 text-white leading-relaxed">
                  Join 2000+ successful interns who landed jobs at top tech companies through our industry-leading program.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-1">2000+</div>
                    <div className="text-xs sm:text-xs text-white/90">Alumni</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-1">95%</div>
                    <div className="text-xs sm:text-xs text-white/90">Placed</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-1">₹10k</div>
                    <div className="text-xs sm:text-xs text-white/90">Stipend</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    { icon: Rocket, text: "Real projects with top companies" },
                    { icon: Award, text: "Industry-recognized certification" },
                    { icon: Users, text: "Expert 1-on-1 mentorship" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm sm:text-sm lg:text-base">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 lg:p-12 flex flex-col justify-center pb-8">
              <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950 rounded-full px-4 py-2 mb-5 sm:mb-6 w-fit">
                <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">Apply Now</span>
              </div>

              <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">Ready to Start?</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                Join our next cohort and kickstart your tech career with guaranteed placement support.
              </p>

              {/* Domains */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm">Choose Your Domain:</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    'Web Development',
                    'Data Science',
                    'Data Analytics',
                    'UI/UX Design',
                    'Java Development',
                    'Python Development'
                  ].map((domain) => (
                    <div
                      key={domain}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md transition-all duration-200"
                    >
                      <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <span className="text-xs sm:text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-medium">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get */}
              <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Program Benefits:
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 text-sm">
                  {[
                    'Live client projects',
                    'Industry expert training',
                     'Live Training',
                    'Certificate & LOR',
                    'Placement assistance'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold text-base">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleApplyNow}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group mb-3 text-base"
                type="button"
              >
                Apply Now - It's Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                🔒 Limited spots • First come, first served
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
