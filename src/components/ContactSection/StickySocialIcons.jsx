"use client"

import { useState } from "react"
import { Share2 } from "lucide-react"

import Whatsapp from "../../assets/Images/whatsapp.png"
import Instagram from "../../assets/Images/instagram.png"
import Facebook from "../../assets/Images/facebook.png"

const StickySocialIcons = () => {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    { icon: Whatsapp, href: "https://wa.me/qr/MFXB7A5DFHKUO1", label: "WhatsApp" },
    { icon: Instagram, href: "https://www.instagram.com/shreeji_paints_anandcity?igsh=MTFiNnpwemg2NGo1eQ==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1HfGMVKV6A/", label: "Facebook" },
  ]

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Social Icons */}
        <div
          className={`flex flex-col items-end space-y-3 transition-all duration-300 ease-in-out mb-10 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 border-2 border-black rounded-full shadow-md hover:scale-110 transition-transform duration-300 flex items-center justify-center bg-white"
              aria-label={link.label}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={link.icon.src ?? link.icon}
                alt={link.label}
                className="h-8 w-8 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-[#D2042D] text-white rounded-full shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D2042D] focus:ring-offset-2 animate-bounce-slow"
          aria-label="Toggle social media links"
        >
          <Share2 className="h-6 w-6" />
        </button>
      </div>

      {/* Inline style tag — valid in React JSX */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
          }
        `}
      </style>
    </>
  )
}

export default StickySocialIcons
