import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Award,
  Shield,
  Palette,
  Home,
  CheckCircle,
  Star,
  Wrench,
  Car,
  Building,
  Brush,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import GoldCard from "../../assets/Images/GoldCard.jpg";
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeColorTheme, setActiveColorTheme] = useState(0);
  const sectionRef = useRef(null);

  // Color themes with wall overlay colors
  const colorThemes = useMemo(
    () => [
      {
        name: "Ocean Dreams",
        colors: ["#0E4D64", "#145374", "#5588A3", "#1B262C", "#2E8BC0"],
        bg: "#F0FFFF",
        wallOverlay: "rgba(78, 205, 196, 0.1)", // Lighter ocean tint
      },
      {
        name: "Sunset Paradise",
        colors: ["#C0392B", "#D35400", "#E74C3C", "#A93226", "#BA4A00"], // Darker sunset tones
        bg: "#FFF8DC",
        wallOverlay: "rgba(255, 107, 107, 0.12)", // Light warm tint
      },
      {
        name: "Forest Magic",
        colors: ["#145A32", "#196F3D", "#1E8449", "#27AE60", "#52BE80"], // Deep forest greens
        bg: "#F0FFF0",
        wallOverlay: "rgba(46, 204, 113, 0.12)", // Light forest overlay
      },
      {
        name: "Royal Purple",
        colors: ["#512E5F", "#633974", "#7D3C98", "#884EA0", "#A569BD"], // Deep purples
        bg: "#FAF0E6",
        wallOverlay: "rgba(155, 89, 182, 0.12)", // Light purple overlay
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      {
        icon: Award,
        title: "Gold Card Dealer",
        description: "Authorized Gold Card Dealer",
        color: "#F4C430",
      },
    ],
    []
  );

  const presence = useMemo(
    () => [
      {
        icon: Home,
        title: "Beautiful Homes",
        description:
          "Premium paints that add elegance and protection to living spaces.",
        color: "#E91E63",
        paintSwatch: ["#FFE4E1", "#FFC0CB", "#FF69B4", "#E91E63"],
      },
      {
        icon: Wrench,
        title: "Industrial Plants",
        description:
          "Coatings that endure tough environments in oil, gas & energy sectors.",
        color: "#3CA673",
        paintSwatch: ["#F0FFF0", "#98FB98", "#32CD32", "#3CA673"],
      },
      {
        icon: Car,
        title: "Wood Coating",
        description:
          "Wood finishes that deliver luxury, lustre, and lasting protection.",
        color: "#6C4AB6",
        paintSwatch: ["#F3E8FF", "#DDD6FE", "#A78BFA", "#6C4AB6"],
      },
      {
        icon: Building,
        title: "Smart Infrastructure",
        description:
          "Road marking and construction coatings seen across public infrastructure.",
        color: "#F4C430",
        paintSwatch: ["#FFFBEB", "#FEF3C7", "#FBBF24", "#F4C430"],
      },
    ],
    []
  );

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Theme switching
  const handleThemeChange = useCallback((index) => {
    setActiveColorTheme(index);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 md:py-20 relative overflow-hidden transition-all duration-1000"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1260727/pexels-photo-1260727.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dynamic Wall Color Overlay */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          backgroundColor: colorThemes[activeColorTheme].wallOverlay,
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Additional warm tone overlay for better text readability */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          mixBlendMode: "screen",
        }}
      ></div>

      {/* Decorative paint drops */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-5">
        <div
          className="absolute top-10 left-10 w-8 h-8 rounded-full blur-sm transition-all duration-1000"
          style={{ backgroundColor: colorThemes[activeColorTheme].colors[0] }}
        />
        <div
          className="absolute top-20 right-20 w-6 h-6 rounded-full blur-sm transition-all duration-1000"
          style={{ backgroundColor: colorThemes[activeColorTheme].colors[1] }}
        />
        <div
          className="absolute bottom-20 left-20 w-10 h-10 rounded-full blur-sm transition-all duration-1000"
          style={{ backgroundColor: colorThemes[activeColorTheme].colors[2] }}
        />
        <div
          className="absolute bottom-10 right-10 w-8 h-8 rounded-full blur-sm transition-all duration-1000"
          style={{ backgroundColor: colorThemes[activeColorTheme].colors[3] }}
        />
      </div>

      {/* Color Selector */}
      <div className="mb-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-200 transition-all duration-1000"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="text-center mb-4">
              <h3
                className="text-lg sm:text-xl font-bold flex items-center justify-center gap-2"
                style={{
                  color: "#75070C",
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 700,
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-[#75070C]" />
                🎨 Choose Your Color World
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#F4C430]" />
              </h3>
            </div>

            {/* Theme selector */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {colorThemes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => handleThemeChange(index)}
                  className={`relative flex-shrink-0 p-3 sm:p-4 rounded-xl transition-all duration-300 transform active:scale-95 ${
                    activeColorTheme === index
                      ? "ring-4 ring-blue-600 shadow-2xl scale-105"
                      : "hover:shadow-lg hover:scale-102"
                  }`}
                  style={{ backgroundColor: theme.bg }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    {/* Color dots */}
                    <div className="flex space-x-1">
                      {theme.colors.slice(0, 4).map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    {/* Theme name */}
                    <p
                      className="text-xs sm:text-sm font-bold leading-tight text-center min-w-0"
                      style={{
                        color: "#75070C",
                        fontFamily:
                          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {theme.name}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {activeColorTheme === index && (
                    <div className="absolute -top-1 -right-1">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 bg-white rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center justify-center mb-6 space-y-4">
            <div
              className="relative p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-gray-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Palette className="h-8 w-8 md:h-10 md:w-10 text-[#75070C]" />
              <Sparkles className="absolute -top-1 -right-1 md:-top-2 md:-right-2 h-4 w-4 md:h-6 md:w-6 text-[#000c03]" />
            </div>
            <div className="text-center">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight mb-2"
                style={{
                  color: "#75070C",
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 800,
                }}
              >
                About Shreeji Paints & Hardware
              </h2>
              <div className="flex justify-center items-center space-x-3 mb-5">
                <span className="px-5 py-3 text-base bg-[#75070C] text-[#fbeab1] rounded-xl  shadow-lg mt-4 inline-block font-semibold tracking-wide">
                  Nimesh Patel
                </span>
              </div>

              <h2
                className="text-1xl sm:text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#02008f] via-[#13110c] to-[#005029] bg-clip-text text-transparent"
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 700,
                  textShadow: "0 1px 2px",
                }}
              >
                Trusted Paint Supplier Since 2022
              </h2>
            </div>
          </div>
          <p
            className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-semibold px-4"
            style={{
              color: "#5A0509",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            Shreeji Paints & Hardware is your go-to destination for premium
            paint solutions across residential, commercial, and industrial
            spaces. We’re not just about color — we’re about quality,
            durability, and trusted relationships
          </p>

          {/* Paint Palette */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {colorThemes[activeColorTheme].colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-gray-400"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Presence Section */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4"
            style={{
              color: "#75070C",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 700,
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            <Brush className="h-6 w-6 md:h-8 md:w-8 text-[#2b00a1]" />
            <span>Our Magical Touch Everywhere</span>
            <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-[#E91E63]" />
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {presence.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border-2 border-gray-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Paint Swatch Header */}
                  <div className="h-3 md:h-4 flex">
                    {item.paintSwatch.map((swatchColor, swatchIndex) => (
                      <div
                        key={swatchIndex}
                        className="flex-1 transition-all duration-300"
                        style={{ backgroundColor: swatchColor }}
                      />
                    ))}
                  </div>

                  <div className="p-6 md:p-10">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* Icon */}
                      <div className="p-4 flex justify-center sm:justify-start flex-shrink-0">
                        <IconComponent
                          className="h-8 w-8 md:h-10 md:w-10"
                          style={{ color: item.color }}
                        />
                      </div>

                      {/* Text content */}
                      <div className="flex-1 text-center sm:text-left">
                        <h4
                          className="text-xl md:text-2xl font-bold mb-2 md:mb-3"
                          style={{
                            color: "#75070C",
                            fontFamily:
                              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="leading-relaxed font-medium text-sm md:text-base"
                          style={{
                            color: "#5A0509",
                            fontFamily:
                              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        {/* Simplified Achievements */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 px-4">
            <Award className="h-6 w-6 md:h-8 md:w-8 text-orange-600 md:mr-4" />
            <span>Our Golden Credentials</span>
          </h3>

          <div className="flex flex-col gap-8 px-4 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={`achievement-${index}`}
                className="w-full group bg-gradient-to-br from-orange-900 via-orange-700 to-orange-500 rounded-3xl shadow-xl p-1"
              >
                <div className="flex flex-col md:flex-row bg-white/95 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-200 h-full">
                  {/* Left: Large Image */}
                  <div className="md:w-[60%] w-full p-4 flex justify-center items-center">
                    <div className="relative w-full h-full">
                      <img
                        src={GoldCard}
                        alt={achievement.title}
                        className="w-full h-auto object-contain rounded-xl border-4 border-orange-200 shadow-lg max-h-[500px]"
                      />
                      <div className="absolute top-[-9px] right-[-8px] px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow">
                        TRUSTED
                      </div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br from-orange-800 to-orange-700 rounded-full flex items-center justify-center border-2 border-white text-white font-bold text-xs">
                        ✓
                      </div>
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="md:w-[40%] w-full p-6 md:p-8 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center border-2 border-orange-200 shadow-md">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {achievement.title}
                      </h4>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mb-3 mx-auto md:mx-0 rounded-full"></div>
                      <p className="text-sm md:text-base text-gray-600 font-medium mb-4">
                        Certified Excellence in Industry Standards
                      </p>
                      <div className="flex justify-center md:justify-start items-center space-x-3 mb-6">
                        <span className="px-3 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md">
                          Shreeji Paints & Hardware
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 italic">
                        "Verified proof of our commitment to excellence and
                        industry-leading standards"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
