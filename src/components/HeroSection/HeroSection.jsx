"use client" // Keep this directive for client-side functionality

import React, { useEffect, useState } from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "@react-hook/window-size"

// Keep original image paths
import bergerLogo from "../assets/Images/berger-paints-seeklogo.png"
import birlaLogo from "../assets/Images/birla-opus-logo-v1.svg"
import asianPaintsLogo from "../assets/Images/asian-paints-logo.png"
import taralacLogo from "../assets/Images/taralac.png"

import "./HeroSection.css" // For custom animations like 'fade-in-up'

const HeroSection = ({ onGetInTouchClick }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showConfetti, setShowConfetti] = useState(true)
  const [width, height] = useWindowSize()

  useEffect(() => {
    setIsVisible(true) // Make content visible immediately on mount
    // Confetti will show for 15 seconds, allowing it to fall completely
    const timer = setTimeout(() => setShowConfetti(false), 15000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-repeat overflow-hidden pt-16"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg')",
        backgroundAttachment: "fixed",
      }}
    >
      {showConfetti && (
        <Confetti
          width={width}
          height={height + 200} // Increased height to ensure confetti falls below the viewport
          numberOfPieces={500} // Increased number of pieces for more abundance
          recycle={false}
          gravity={0.03} // Further reduced gravity for a very slow, floaty fall
          initialVelocityY={0.05} // Further reduced initial velocity for a gentler start
          colors={[
            "#f44336",
            "#e91e63",
            "#9c27b0",
            "#673ab7",
            "#3f51b5",
            "#2196f3",
            "#03a9f4",
            "#00bcd4",
            "#009688",
            "#4CAF50",
            "#8BC34A",
            "#CDDC39",
            "#FFEB3B",
            "#FFC107",
            "#FF9800",
            "#FF5722",
            "#795548",
          ]}
          confettiSource={{ x: 0, y: 0, w: width, h: 0 }} // Still from top edge
        />
      )}
      {/* Oat Color Overlay - Sits above the 3D background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(252, 242, 204, 1)", // Oat color overlay
          mixBlendMode: "multiply",
        }}
      ></div>
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-4 left-4 flex flex-col gap-2 md:top-10 md:left-10">
          <div className="bg-[#6C4AB6] rounded-full w-4 h-4 md:w-16 md:h-16"></div>
          <div className="bg-[#3CA673] rounded-full w-3 h-3 md:w-10 md:h-10"></div>
        </div>
        <div className="absolute top-4 right-4 md:top-10 md:right-10">
          <div className="bg-[#F4C430] rounded-full w-4 h-4 md:w-14 md:h-14"></div>
        </div>
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 md:bottom-10 md:left-10">
          <div className="bg-[#E55D4A] rounded-full w-4 h-4 md:w-12 md:h-12"></div>
          <div className="bg-[#6C4AB6] rounded-full w-3 h-3 md:w-10 md:h-10"></div>
        </div>
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end md:bottom-10 md:right-8">
          <div className="bg-[#3CA673] rounded-full w-4 h-4 md:w-14 md:h-14"></div>
          <div className="bg-[#309cf4] rounded-full w-3 h-3 md:w-10 md:h-10"></div>
        </div>
      </div>
      {/* Main Content - Sits on top of everything else */}
      <div className="container mx-auto px-4 text-center relative z-20 py-4">
        <h1
          className={`text-2xl sm:text-5xl md:text-3xl lg:text-4xl font-bold text-[#75070C] mb-1 md:mt-10 transition-all duration-500 delay-0 text-center break-words leading-tight px-2 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          SHREEJI PAINTS & HARDWARE
        </h1>
        <div
          className={`mt-4 md:mt-6 transition-all duration-500 delay-100 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-lg md:text-xl lg:text-2xl font-semibold text-[#75070C] mb-2 md:mb-3"
            style={{
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Authorised Dealer of
          </p>
          {/* Authorized Dealership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto mb-3 md:mb-4">
            {/* Berger Paints Card */}
            <div className="px-4 py-4 md:px-6 md:py-6 rounded-xl shadow-lg border-2 border-[#B5123C]/70 hover:border-[#75070C] transition duration-500 hover:scale-105 flex flex-col items-center gap-3 text-[#6D1B3B] relative overflow-hidden ">
              <span
                className="text-base md:text-lg lg:text-xl font-bold z-10 drop-shadow text-center"
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Berger Paints
              </span>
              <span className="text-sm md:text-base font-semibold z-10 drop-shadow text-center">
                (Gold Card Dealer)
              </span>
              <img
                src={bergerLogo || "/placeholder.svg"}
                alt="Berger Logo"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain z-10 drop-shadow"
              />
            </div>
            {/* Birla Opus Card */}
            <div className="px-4 py-4 md:px-6 md:py-6 rounded-xl shadow-lg border-2 border-[#2D572C]/70 hover:border-[#2D572C]/90 transition duration-500 hover:scale-105 flex flex-col items-center gap-3 text-[#2D572C] relative overflow-hidden ">
              <span
                className="text-base md:text-lg lg:text-xl font-bold z-10 drop-shadow text-center"
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Birla Opus Paints
              </span>
              <img
                src={birlaLogo || "/placeholder.svg"}
                alt="Birla Logo"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain z-10 drop-shadow mt-2"
              />
            </div>
          </div>
          {/* Additional Brands Section */}
          <div className="mt-2 md:mt-3">
            <p
              className="text-sm sm:text-base md:text-lg font-medium text-[#75070C] mb-2"
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.01em",
              }}
            >
              Other Brands (Available on Request)
            </p>
            {/* Additional Brands Logos - No boxes, just logos */}
            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
              {/* Asian Paints */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-25 h-25 md:w-36 md:h-36 lg:w-40 lg:h-25 flex justify-center items-center bg-white border border-gray-700 rounded-xl shadow-md">
                  <img
                    src={asianPaintsLogo || "/placeholder.svg"}
                    alt="Asian Paints Logo"
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              </div>
              {/* Taralac Paints */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-25 h-25 md:w-36 md:h-36 lg:w-40 lg:h-25 flex justify-center items-center bg-white border border-gray-700 rounded-xl shadow-md">
                  <img
                    src={taralacLogo || "/placeholder.svg"}
                    alt="Taralac Logo"
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mt-4 md:mt-6 transition-all duration-500 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={onGetInTouchClick}
            className="bg-[#75070C] hover:bg-[#5A0509] text-[#FFEDAB] px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
      <div className="absolute bottom-[0] left-[0] w-full h-1 md:h-1 z-10 flex">
        <div className="flex-1 bg-[#75070C]" /> {/* Crimson Red */}
      </div>
    </section>
  )
}

export default React.memo(HeroSection)
