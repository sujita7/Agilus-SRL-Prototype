import React, { useState, useRef, useEffect } from "react";
import { X, Send, Upload, HelpCircle, Lightbulb, Mic } from "lucide-react";
import botIcon from "../../assets/icons/bot.svg";

export function HealthConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const chatRef = useRef(null);
  const headerRef = useRef(null);
  const inputRef = useRef(null);

  // ✅ Outside click handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  //Logic for blocking scroll on header and input
  useEffect(() => {
    const handleCapture = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const header = headerRef.current;
    const input = inputRef.current;

    if (isOpen && header) {
      header.addEventListener("wheel", handleCapture, { passive: false });
      header.addEventListener("touchmove", handleCapture, { passive: false });
    }
    if (isOpen && input) {
      input.addEventListener("wheel", handleCapture, { passive: false });
      input.addEventListener("touchmove", handleCapture, { passive: false });
    }

    return () => {
      if (header) {
        header.removeEventListener("wheel", handleCapture);
        header.removeEventListener("touchmove", handleCapture);
      }
      if (input) {
        input.removeEventListener("wheel", handleCapture);
        input.removeEventListener("touchmove", handleCapture);
      }
    };
  }, [isOpen]);

  const quickOptions = [
    { icon: HelpCircle, label: "What test do I need?", color: "blue" },
    { icon: Upload, label: "Upload prescription", color: "teal" },
    { icon: Lightbulb, label: "Pre-test guidance", color: "purple" },
  ];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100",
    teal: "bg-teal-50 border-teal-100 text-teal-700 hover:bg-teal-100",
    purple:
      "bg-purple-50 border-purple-100 text-purple-700 hover:bg-purple-100",
  };

  return (
    <>
      <style>{`
        @keyframes slideInOutOnce {
          0% { opacity: 0; transform: translateX(20px) scale(0.95); pointer-events: none; }
          10% { opacity: 1; transform: translateX(0) scale(1); pointer-events: auto; }
          85% { opacity: 1; transform: translateX(0) scale(1); pointer-events: auto; }
          100% { opacity: 0; transform: translateX(20px) scale(0.95); pointer-events: none; }
        }
        .animate-message {
          animation: slideInOutOnce 8s ease-in-out forwards;
        }
      `}</style>

      {/* Floating button and Animated Message */}
      {!isOpen && (
        <div className="fixed bottom-10 right-6 z-50 flex items-end gap-3">
          {/* Animated Message Bubble */}
          <div className="animate-message pointer-events-none bg-white text-gray-800 text-[14px] font-semibold px-4 py-2.5 rounded-2xl rounded-br-sm shadow-[0_4px_16px_rgba(0,0,0,0.1)] border-2 border-[#1055A8] mb-2 whitespace-nowrap">
            How can I help you?
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 hover:scale-110 transition-transform relative flex items-center justify-center"
          >
            <img
              src={botIcon}
              alt="Bot"
              className="w-full h-full object-contain"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </button>
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:left-auto md:translate-x-0 md:right-6 w-[92%] max-w-[340px] md:w-[320px] h-[85vh] max-h-[500px] md:h-[480px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div
            ref={headerRef}
            className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={botIcon}
                    alt="Bot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Health Concierge</h3>
                  <div className="flex items-center gap-1 text-[10px] text-blue-100">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-blue-100">
              How can we help with your health today?
            </p>
          </div>

          <div
            className="flex-1 p-6 space-y-4 overflow-y-auto bg-gray-50"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            style={{ overscrollBehavior: "contain" }}
          >
            {/* Bot message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <img
                  src={botIcon}
                  alt="Bot"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-900 leading-relaxed">
                    Hello! I'm your health concierge. I can help you find the
                    right tests, understand your prescriptions, or answer
                    health-related questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick options */}
            <div className="space-y-2">
              <p className="text-[10px] text-gray-500 px-1">Quick options:</p>
              {quickOptions.map((option, index) => {
                const Icon = option.icon;
                const activeColorClass = colorClasses[option.color];
                return (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-2 p-2 rounded-xl border transition-colors ${activeColorClass}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input area */}
         <div ref={inputRef} className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              {/* Upload */}
              <button className="w-10 h-10 min-w-[40px] min-h-[40px] flex-shrink-0 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Upload className="w-4 h-4 text-gray-600" />
              </button>

              {/* Mic */}
              <button className="w-10 h-10 min-w-[40px] min-h-[40px] flex-shrink-0 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Mic className="w-4 h-4 text-gray-600" />
              </button>

              {/* Input */}
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 min-w-0 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
              />

              {/* Send */}
              <button className="w-9 h-9 min-w-[36px] min-h-[36px] flex-shrink-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-md transition-all flex items-center justify-center">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2 text-center">
              Available 24/7 to assist you
            </p>
          </div>
        </div>
      )}
    </>
  );
}