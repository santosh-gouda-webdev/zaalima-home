"use client"
import { MessageCircle, X } from "lucide-react"
import ChatInterface from "./ChatInterface"
import { cn } from "@/lib/utils"

const ChatbotWidget = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) => {
  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:right-6 z-50 animate-slide-up">
          <ChatInterface onClose={() => setIsOpen(false)} />
        </div>
      )}

      {/* Chat Widget Button */}
      <div className="fixed bottom-4 right-4 md:right-6 z-50">
        <button
          onClick={toggleChat}
          className={cn(
            "group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
            "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
            "focus:outline-none focus:ring-4 focus:ring-blue-500/30",
          )}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <div className="relative">
            {isOpen ? (
              <X className="w-6 h-6 text-white transition-transform duration-200" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white transition-transform duration-200 group-hover:scale-110" />
            )}
          </div>

          {/* Pulse animation when closed */}
          {!isOpen && <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />}

          {/* Notification dot */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          )}
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        )}
      </div>
    </>
  )
}


export default ChatbotWidget
