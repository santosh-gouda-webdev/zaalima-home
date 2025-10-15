"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"

export default function FaqSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const popularSearches = ["Cloud Migration", "Cybersecurity", "Pricing", "Support", "Implementation", "Data Backup"]

  return (
    <div className="text-center space-y-6">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for answers... (e.g., 'cloud services', 'pricing', 'support')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        <span className="text-sm text-gray-500 mr-2">Popular searches:</span>
        {popularSearches.map((search, index) => (
          <button
            key={index}
            onClick={() => setSearchQuery(search)}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors duration-200"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  )
}