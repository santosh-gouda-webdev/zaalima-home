"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 150, suffix: "+", label: "Happy Clients", icon: "👥" },
  { number: 99, suffix: "%", label: "Uptime Guarantee", icon: "⚡" },
  { number: 24, suffix: "/7", label: "Support Available", icon: "🛟" },
  { number: 50, suffix: "+", label: "IT Experts", icon: "👨‍💻" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const increment = target / 50
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev < target) {
          return Math.min(prev + increment, target)
        }
        clearInterval(timer)
        return target
      })
    }, 30)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
      {Math.floor(current)}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Businesses Worldwide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. Here's why companies choose us for their IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}