"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Building,
  Wrench,
  Construction,
  Truck,
  Users,
  CheckCircle,
  Award,
  Clock,
} from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Services data
  const services = [
    {
      id: 1,
      icon: Shield,
      title: "Corrosion Protection",
      description: "Advanced coatings for industrial assets",
      color: "#E91E63",
    },
    {
      id: 2,
      icon: Building,
      title: "Construction Solutions",
      description: "High-performance chemicals & grouts",
      color: "#3CA673",
    },
    {
      id: 3,
      icon: Wrench,
      title: "Industrial Coatings",
      description: "Offshore & onshore coating systems",
      color: "#F4C430",
    },
    {
      id: 4,
      icon: Construction,
      title: "Surface Marking",
      description: "Highway to runway painting systems",
      color: "#6C4AB6",
    },
  ];

  const infrastructure = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Trained professionals",
      color: "#E91E63",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "On-time service",
      color: "#3CA673",
    },
    {
      icon: Building,
      title: "3000 sq.ft Warehouse",
      description: "Ready stock available",
      color: "#F4C430",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Priority timelines",
      color: "#6C4AB6",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Trusted solutions",
      color: "#309cf4",
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "After-Sales Support",
      description: "Dependable service",
      color: "#E55D4A",
    },
  ];

  // Intersection observer for animations
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

  return (
    
    <section
    
      ref={sectionRef}
      id="services"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg')",
        backgroundAttachment: "fixed",
      }}
      className="relative min-h-screen flex items-center justify-center bg-cover overflow-hidden pt-8 md:pt-16"
    >
      <div className="absolute top-[0] left-[0] w-full h-1 md:h-2 z-10 flex">
        <div className="flex-1 bg-[#D72638]" />   {/* Crimson Red */}
        <div className="flex-1 bg-[#f38d19]" />   {/* Warm Orange */}
        <div className="flex-1 bg-[#000263]" />   {/* Bold Yellow */}
        <div className="flex-1 bg-[#3DBE29]" />   {/* Fresh Green */}
        <div className="flex-1 bg-[#1B98E0]" />   {/* Bright Sky Blue */}
        <div className="flex-1 bg-[#9B59B6]" />   {/* Royal Purple */}
        <div className="flex-1 bg-[#88022f]" />   {/* Rose Pink */}
      </div> 

      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-xl mr-3">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Services
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1"></div>
            </div>
          </div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We're All Around You — From homes to industries, we're part of every
            project.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group p-4 rounded-xl bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="text-center">
                    <div
                      className="w-12 h-12 mx-auto mb-3 rounded-lg shadow-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${service.color}20`,
                        color: service.color,
                      }}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-tight">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infrastructure */}
        <div
          className={`mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Why Choose Us
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {infrastructure.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="text-center">
                    <div
                      className="w-10 h-10 mx-auto mb-2 rounded-lg shadow-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                      }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ServicesSection;
