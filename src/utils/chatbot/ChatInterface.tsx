"use client"

import type React from "react"
import { getChatResponse } from "./chatResponses"
import { useState, useRef, useEffect } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  buttons?: Array<{
    text: string
    action: "link" | "message"
    value: string
  }>
}

interface ChatInterfaceProps {
  onClose: () => void
}

const ChatInterface = ({ onClose }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: "1",
      text: "Hello! I'm Zaalima's virtual assistant. I'm here to help you learn about our IT services and internship opportunities. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      buttons: [
        { text: "Apply for Internship", action: "link", value: "/careers" },
        { text: "Our Services", action: "message", value: "Tell me about your services" },
        { text: "FAQ", action: "message", value: "Show me FAQ" },
      ],
    }
    setMessages([welcomeMessage])
  }, [])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Focus input when opened
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = generateBotResponse(text.trim())
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): Message => {
    const response = getChatResponse(userInput)

    return {
      id: Date.now().toString(),
      text: response.text,
      isBot: true,
      timestamp: new Date(),
      buttons: response.buttons,
    }
  }

  const handleButtonClick = (button: { text: string; action: "link" | "message"; value: string }) => {
    if (button.action === "link") {
      window.open(button.value, "_blank")
    } else {
      handleSendMessage(button.value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <div className="w-80 md:w-96 h-[50vh] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">Z</span>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Zaalima Assistant</h3>
            <p className="text-xs text-green-100">Online now</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} onButtonClick={handleButtonClick} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            disabled={isTyping}
          />
          <Button type="submit" size="sm" disabled={!inputValue.trim() || isTyping} className="px-3">
            <Send className="w-4 h-4" />
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            Powered by <span className="font-semibold text-green-600">Zaalima</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface
