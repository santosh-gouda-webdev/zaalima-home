const TypingIndicator = () => {
  return (
    <div className="flex gap-2 animate-fade-in">
      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <span className="text-white text-xs font-bold">Z</span>
      </div>

      <div className="max-w-[80%]">
        <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
            </div>
            <span className="text-xs text-gray-500 ml-2">Typing...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator
