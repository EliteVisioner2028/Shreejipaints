"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import StickySocialIcons from "./StickySocialIcons" // Adjust path as needed

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9537400529 (Nimesh Patel)"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["shreejipaintshw@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["G9 ,RadhaArcade Nr Indira Statue , Anand Lambhvel Road , Anand , 388001"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: 8:00 AM - 12:00 PM"],
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1260727/pexels-photo-1260727.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none z-0" />

      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FCE205] rounded-full blur-xl" />
        <div className="absolute top-32 right-16 w-24 h-24 bg-[#D2042D] rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#FCE205] rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#8B0000] rounded-full blur-xl" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 font-serif">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-800 font-semibold max-w-3xl mx-auto leading-relaxed tracking-wide">
            Ready to transform your space with premium paints? We’re here to help you choose the perfect colors and products for your project.
          </p>
        </div>

        {/* Contact Info */}
        <div className="gap-8 items-start">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-[#8B0000] mb-6 flex justify-center">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-[#ffffff] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-[#FCE205]/20 text-[#D2042D] flex-shrink-0">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold text-[#8B0000] mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 text-sm break-words leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="flex justify-center text-lg font-semibold text-[#8B0000] mb-4">
                Quick Actions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <a
                  href="tel:9537400529"
                  className="flex items-center justify-center space-x-2 p-3 bg-[#D2042D] text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium text-sm">Call Now</span>
                </a>
                <a
                  href="mailto:shreejipaintshw@gmail.com"
                  className="flex items-center justify-center space-x-2 p-3 bg-[#D2042D] text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-medium text-sm">Send Email</span>
                </a>
                <a
                  href="https://www.google.com/maps/dir//G-9,+RADHA+ARCADE,+Lambhvel+Rd,+Ganesh+Colony,+Anand,+Gujarat+388001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 bg-[#D2042D] text-white rounded-lg hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium text-sm">Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Icons */}
      <StickySocialIcons />
    </section>
  )
}

export default ContactSection
