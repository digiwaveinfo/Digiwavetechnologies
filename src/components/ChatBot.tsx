"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

// Animated Robot Icon matching theme color
const AnimatedRobot = ({ size = 80 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    {/* Glow effect */}
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Antenna with pulse */}
    <circle cx="40" cy="8" r="5" fill="#00BFD2" className="animate-pulse" filter="url(#glow)" />
    <rect x="38" y="11" width="4" height="9" fill="#00BFD2" />
    
    {/* Head */}
    <rect x="12" y="20" width="56" height="32" rx="8" fill="#00BFD2" />
    <rect x="16" y="24" width="48" height="24" rx="4" fill="#008a9a" opacity="0.3" />
    
    {/* Eyes - animated */}
    <ellipse cx="28" cy="36" rx="7" ry="8" fill="white" />
    <ellipse cx="52" cy="36" rx="7" ry="8" fill="white" />
    <circle cx="28" cy="36" r="4" fill="#0a2540" className="animate-[blink_3s_ease-in-out_infinite]" />
    <circle cx="52" cy="36" r="4" fill="#0a2540" className="animate-[blink_3s_ease-in-out_infinite]" />
    {/* Eye shine */}
    <circle cx="30" cy="34" r="1.5" fill="white" />
    <circle cx="54" cy="34" r="1.5" fill="white" />
    
    {/* Mouth - smile */}
    <path d="M32 44 Q40 50 48 44" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
    
    {/* Body */}
    <rect x="18" y="54" width="44" height="22" rx="6" fill="#00BFD2" />
    
    {/* Body screen/panel */}
    <rect x="26" y="58" width="28" height="10" rx="2" fill="#008a9a" opacity="0.4" />
    <circle cx="40" cy="63" r="3" fill="white" className="animate-pulse" />
    
    {/* Arms - animated wave */}
    <rect x="2" y="56" width="14" height="8" rx="4" fill="#00BFD2" className="origin-right animate-[wave_2s_ease-in-out_infinite]" />
    <rect x="64" y="56" width="14" height="8" rx="4" fill="#00BFD2" />
    
    {/* Hands */}
    <circle cx="4" cy="60" r="4" fill="#00BFD2" className="origin-right animate-[wave_2s_ease-in-out_infinite]" />
    <circle cx="76" cy="60" r="4" fill="#00BFD2" />
  </svg>
);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Digi, your assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Show suggestion bubble after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowSuggestion(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Hide suggestion when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowSuggestion(false);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeSuggestion = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSuggestion(false);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message! Our team will get back to you soon. For immediate assistance, please contact us at info@digiwavetechnologies.in",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-28 right-4 sm:right-6 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00BFD2] to-[#00a5b5] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <AnimatedRobot size={48} />
              </div>
              <div>
                <h3 className="font-semibold text-base">Digi</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 mr-2 flex-shrink-0">
                    <AnimatedRobot size={32} />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    message.isBot
                      ? "bg-white text-gray-800 shadow-sm"
                      : "bg-[#00BFD2] text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Digi anything..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BFD2] focus:border-transparent text-sm"
              />
              <button
                onClick={sendMessage}
                className="bg-[#00BFD2] text-white p-3 rounded-full hover:bg-[#00a5b5] transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Suggestion Bubble */}
      {!isOpen && showSuggestion && (
        <div className="fixed bottom-28 right-4 sm:right-6 z-40 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl shadow-xl p-4 max-w-[260px] relative border border-gray-100">
            <button 
              onClick={closeSuggestion}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-gray-800 text-sm font-medium mb-1">👋 Need help?</p>
            <p className="text-gray-600 text-xs">Ask Digi about our services, pricing, or anything else!</p>
            {/* Arrow pointing to robot */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 sm:right-6 w-20 h-20 transition-all duration-300 z-40 flex items-center justify-center hover:scale-110"
      >
        {isOpen ? (
          <div className="w-16 h-16 bg-[#00BFD2] rounded-full flex items-center justify-center shadow-lg">
            <X className="w-7 h-7 text-white" />
          </div>
        ) : (
          <div className="relative">
            <AnimatedRobot size={80} />
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00BFD2]/30 animate-ping"></div>
          </div>
        )}
      </button>
    </>
  );
}
