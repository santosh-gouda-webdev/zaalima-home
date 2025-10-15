"use client"

import { X, Sparkles, Briefcase, Target, TrendingUp, ArrowRight, Zap } from "lucide-react"
import { useCallback, useEffect } from "react"

interface InternshipModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InternshipModal({ isOpen, onClose }: InternshipModalProps) {
  const handleClose = useCallback((e?: any) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    onClose()
  }, [onClose])

  const handleApplyNow = useCallback((e: any) => {
    e.preventDefault()
    e.stopPropagation()
    window.open('https://forms.gle/Q1znrmk5bmnvasWG9', '_blank')
    onClose()
  }, [onClose])

  const handleBackdropClick = useCallback((e: any) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }, [handleClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, handleClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-5xl max-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -right-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 sm:w-72 h-40 sm:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Close Button - Fixed positioning */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-[100] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:rotate-90 transition-all duration-300 group"
          aria-label="Close"
          type="button"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
            {/* Left Side - Hero Section */}
            <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-white">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 w-fit text-xs sm:text-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                <span className="font-semibold text-yellow-200">Limited Spots Available</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                Launch Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                  Tech Career
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-purple-200 mb-6 sm:mb-8 leading-relaxed">
                Join India's fastest-growing internship program with real projects, expert mentorship, and guaranteed placement support.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-1">2000+</div>
                  <div className="text-[10px] sm:text-xs text-purple-300">Alumni</div>
                </div>
                <div className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-1">500+</div>
                  <div className="text-[10px] sm:text-xs text-purple-300">Projects</div>
                </div>
                <div className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-1">95%</div>
                  <div className="text-[10px] sm:text-xs text-purple-300">Success</div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-purple-100">Industry-grade live projects</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-purple-100">1-on-1 expert mentorship</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-purple-100">Performance stipend up to ₹10k</span>
                </div>
              </div>
            </div>

            {/* Right Side - Application Form */}
            <div className="relative bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-indigo-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 w-fit text-xs sm:text-sm">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                <span className="font-semibold text-indigo-900">Premium Internship Program</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Ready to Begin?</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base">
                Apply now and get job assistance with top MNCs after completion.
              </p>

              {/* Domains */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-xs sm:text-sm">Choose Your Domain:</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    'Web Development',
                    'Data Science & ML',
                    'Data Analytics',
                    'UI/UX Design',
                    'Java Development',
                    'Python Development'
                  ].map((domain) => (
                    <div
                      key={domain}
                      className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-500 group-hover:bg-indigo-600 flex-shrink-0"></div>
                      <span className="text-[11px] sm:text-xs lg:text-sm text-gray-700 font-medium">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get */}
              <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-xs sm:text-sm flex items-center gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                  What You'll Get:
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs lg:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700"><strong>Real client projects</strong> for hands-on experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700"><strong>Live training sessions</strong> by industry experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700"><strong>Certificate & LOR</strong> upon completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700"><strong>Guaranteed job assistance</strong> with MNC partners</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={handleApplyNow}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group text-sm sm:text-base"
                  type="button"
                >
                  Apply Now - It's Free
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={handleClose}
                  className="w-full text-gray-600 hover:text-gray-900 font-medium py-2.5 sm:py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm"
                  type="button"
                >
                  I'll Apply Later
                </button>
              </div>

              <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-3 sm:mt-4">
                🔒 Limited spots • First come, first served
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}