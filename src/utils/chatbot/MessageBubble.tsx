"use client"

import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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

interface MessageBubbleProps {
  message: Message
  onButtonClick: (button: NonNullable<Message["buttons"]>[0]) => void
}

const MessageBubble = ({ message, onButtonClick }: MessageBubbleProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  return (
    <div className={cn("flex gap-2 animate-fade-in", message.isBot ? "justify-start" : "justify-end")}>
      {message.isBot && (
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-xs font-bold">Z</span>
        </div>
      )}

      <div className={cn("max-w-[80%] space-y-2", message.isBot ? "items-start" : "items-end")}>
        <div
          className={cn(
            "px-4 py-2 rounded-2xl text-sm leading-relaxed",
            message.isBot
              ? "bg-gray-100 text-gray-800 rounded-bl-sm"
              : "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-sm",
          )}
        >
          <div className="whitespace-pre-line text-pretty">{message.text}</div>
        </div>

        {/* Action Buttons */}
        {message.buttons && message.buttons.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.buttons.map((button, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => onButtonClick(button)}
                className="text-xs h-8 px-3 bg-white hover:bg-gray-50 border-green-200 text-green-700 hover:text-green-800 hover:border-green-300"
              >
                {button.text}
                {button.action === "link" && <ExternalLink className="w-3 h-3 ml-1" />}
              </Button>
            ))}
          </div>
        )}

        <div className={cn("text-xs text-gray-500 px-1", message.isBot ? "text-left" : "text-right")}>
          {formatTime(message.timestamp)}
        </div>
      </div>

      {!message.isBot && (
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-xs font-bold">U</span>
        </div>
      )}
    </div>
  )
}

export default MessageBubble
