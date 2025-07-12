import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import bergerLogo from "../../../Images/berger-paints-seeklogo.png"; // Adjust the path as needed
import birlaLogo from "../../../Images/birla-opus-logo-v1.svg"; // Adjust the path as needed
import "./HeroSection.css"; // For custom animations like 'fade-in-up'

const HeroSection = ({ onGetInTouchClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover overflow-hidden pt-16"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg')",
          backgroundAttachment: "fixed",
      }}
    >
      {/* Oat Color Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "rgb(255, 241, 181)", // Oat color overlay
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Additional warm tone overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "rgba(250, 245, 235, 0.4)", // Lighter warm overlay
          mixBlendMode: "screen",
        }}
      ></div>

      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
          gravity={0.4}
          initialVelocityY={2}
          colors={[
            "#E91E63",
            "#3CA673",
            "#F4C430",
            "#6C4AB6",
            "#E55D4A",
            "#309cf4",
          ]}
          confettiSource={{ x: 0, y: 0, w: width, h: 0 }}
        />
      )}

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
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end md:bottom-10 md:right-10">
          <div className="bg-[#3CA673] rounded-full w-4 h-4 md:w-14 md:h-14"></div>
          <div className="bg-[#309cf4] rounded-full w-3 h-3 md:w-10 md:h-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl font-bold text-[#75070C] mb-8 transition-all duration-2000 text-center break-words leading-tight px-4 ${
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
          className={`mt-8 transition-all duration-2000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-2xl md:text-3xl font-semibold text-[#75070C] mb-4"
            style={{
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Authorised Dealer of
          </p>

          <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
            <div className="w-[280px] md:w-[320px] px-6 py-4 rounded-xl shadow-lg border-2 border-[#B5123C]/70 hover:border-[#75070C] transition duration-500 hover:scale-105 flex flex-col items-center gap-3 text-[#6D1B3B] relative overflow-hidden">
              <span
                className="text-xl md:text-2xl font-bold z-10 drop-shadow"
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Berger Paints
              </span>
              <img
                src={bergerLogo}
                alt="Berger Logo"
                className="h-16 w-auto object-contain z-10 drop-shadow"
              />
            </div>

            <div className="w-[280px] md:w-[320px] px-6 py-4 rounded-xl shadow-lg border-2 border-[#2D572C]/70 hover:border-[#2D572C]/90 transition duration-500 hover:scale-105 flex flex-col items-center gap-3  text-[#2D572C] relative overflow-hidden">
              <span
                className="text-xl md:text-2xl font-bold z-10 drop-shadow"
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
                src={birlaLogo}
                alt="Birla Logo"
                className="h-16 w-auto object-contain z-10 drop-shadow"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-12 transition-all duration-2000 delay-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={onGetInTouchClick}
            className="bg-[#75070C] hover:bg-[#5A0509] text-[#FFEDAB] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
    </section>
  );
};

export default HeroSection;
