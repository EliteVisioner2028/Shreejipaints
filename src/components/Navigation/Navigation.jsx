"use client"

import { useState, useEffect, useRef } from "react"

import {
  Menu,
  X,
  Home,
  Wrench,
  Users,
  Mail,
  Package,
  GalleryThumbnailsIcon as Gallery,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import AntiDust from "../../assets/Images/AntiDustt.png" // Assuming this path is correct for your logo image
import Dampstop from "../../assets/Images/Dampstop.png"
import Logo from "../../assets/Images/logo.png"
import Rangoli from "../../assets/Images/Rangoli.jpg"
import EasyClean from "../../assets/Images/EasyClean.png"
import BisonGlow from "../../assets/Images/BisonGlow.png"
import Walmasta from "../../assets/Images/Walmasta.jpg"
import PowerBright from "../../assets/Images/PowerBright.png"
import SuperBright from "../../assets/Images/SuperBright.png"
import EverClear from "../../assets/Images/EverClear.png"
import Glow from "../../assets/Images/Glow.jpg"
import Wall from "../../assets/Images/Wall.png"
import Flexo from "../../assets/Images/Flexo.png"
import Mast from "../../assets/Images/Mast.jpg"
import Mast1 from "../../assets/Images/Mast1.png"
import Mast2 from "../../assets/Images/Mast2.png"
import Mast3 from "../../assets/Images/Mast3.png"
import Mast4 from "../../assets/Images/Mast4.png"
import Mast5 from "../../assets/Images/Mast5.png"
import Mast6 from "../../assets/Images/Mast6.png"
import Mast7 from "../../assets/Images/Mast7.png"


// Define placeholder gallery images
const galleryImages = [
  { src: AntiDust, alt: "AntiDust" },
  {src: Dampstop,alt: "Dampstop",},
  { src: Rangoli , alt: "Rangoli" },
  { src: EasyClean , alt: "EasyClean"},
  { src: BisonGlow, alt: "BisonGlow"},
  { src: Walmasta, alt: "Walmasta"},
  { src: PowerBright, alt: "PowerBright"},
  { src: SuperBright, alt: "SuperBright"},
  { src: EverClear, alt: "EverClear"},
  { src: Glow, alt: "Glow"},
  { src: Wall, alt: "Wall"},
  { src: Flexo, alt: "Flexo"},
  { src: Mast, alt: "Mast"},
  { src: Mast1, alt: "Mast1"},
  { src: Mast2, alt: "Mast2"},
  { src: Mast1, alt: "Mast1"},
  { src: Mast3, alt: "Mast3"},
  { src: Mast4, alt: "Mast4"},
  { src: Mast5, alt: "Mast5"},
  { src: Mast6, alt: "Mast6"},
  { src: Mast7, alt: "Mast7"}
]

const GalleryModal = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  // Scroll to the current image when index changes [^1]
  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[currentIndex]) {
      carouselRef.current.children[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-opacity-75 p-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/20899958/pexels-photo-20899958.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image Gallery"
    >
      <div className="relative border-[#B5123C] border-4 rounded-lg  shadow-xl w-full max-w-3xl h-auto max-h-[90vh] overflow-hidden flex flex-col"
       style={{
        backgroundImage: `url('https://images.pexels.com/photos/20899958/pexels-photo-20899958.jpeg')`,
         backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>
        <div className="p-6 flex-grow flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Gallery</h2>
          <div className="relative w-full overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out snap-x snap-mandatory overflow-x-hidden shadow-xl"
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full snap-center flex justify-center items-center">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="max-w-full max-h-[60vh] object-contain rounded-md"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-[#be2c00]" : "bg-gray-700"
                } transition-colors duration-200`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false) // New state for gallery modal
  const observerRef = useRef(null)
  const [isProgrammaticScrolling, setIsProgrammaticScrolling] = useState(false)

  const navigationItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: Users, href: "#about" },
    { name: "Services", icon: Wrench, href: "#services" },
    {
      name: "Products",
      icon: Package,
      href: "#products",
      dropdown: [
        { name: "Decorative Paints", id: "decorative-paints" },
        { name: "Waterproofing Paints", id: "waterproofing-paints" },
        { name: "Industrial Paints", id: "industrial-paints" },
      ],
    },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  // Split navigation items for desktop layout
  const leftNavItems = navigationItems.slice(0, 2) // Home, About
  const rightNavItems = navigationItems.slice(2) // Services, Products, Contact

  // Handle smooth scrolling
  const handleLinkClick = (linkName, href) => {
    setActiveLink(linkName)
    setIsMobileMenuOpen(false)
    setShowProductsDropdown(false)
    setIsProgrammaticScrolling(true)
    if (href && href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        const navHeight = 64 // Height of fixed navigation
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
        setTimeout(() => {
          setIsProgrammaticScrolling(false)
        }, 800)
      } else {
        setIsProgrammaticScrolling(false)
      }
    } else {
      setIsProgrammaticScrolling(false)
    }
  }

  const handleProductCategoryClick = (categoryId) => {
    setActiveLink("Products")
    setShowProductsDropdown(false)
    setIsMobileMenuOpen(false)
    setIsProgrammaticScrolling(true)
    const element = document.querySelector("#products")
    if (element) {
      const navHeight = 64
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("selectProductCategory", {
            detail: { categoryId },
          }),
        )
        setIsProgrammaticScrolling(false)
      }, 800)
    } else {
      setIsProgrammaticScrolling(false)
    }
  }

  // Use Intersection Observer for smooth, flicker-free navigation [^1]
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    const sections = navigationItems
      .map((item) => ({
        name: item.name,
        element: document.querySelector(item.href),
      }))
      .filter((section) => section.element)

    if (sections.length === 0) return

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries) => {
      if (isProgrammaticScrolling) {
        return
      }
      let mostVisibleSection = null
      let maxIntersectionRatio = 0
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio
          const sectionName = sections.find((s) => s.element === entry.target)?.name
          if (sectionName) {
            mostVisibleSection = sectionName
          }
        }
      })
      if (mostVisibleSection && mostVisibleSection !== activeLink) {
        setActiveLink(mostVisibleSection)
      }
    }

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      if (section.element) {
        observerRef.current.observe(section.element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [isProgrammaticScrolling, activeLink])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleGallery = () => {
    // New function to toggle gallery modal
    setIsGalleryOpen(!isGalleryOpen)
    setIsMobileMenuOpen(false) // Close mobile menu if gallery is opened
  }

  const NavLink = ({ item, isActive }) => {
    const Icon = item.icon
    return (
      <button
        onClick={() => handleLinkClick(item.name, item.href)}
        className={`relative px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out ${
          isActive ? "text-[#FFEDAB] bg-[#FFEDAB]/20" : "text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB]/20"
        }`}
      >
        <Icon size={16} />
        {item.name}
        {isActive && (
          <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FFEDAB] rounded-full transition-all duration-300"></div>
        )}
      </button>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#75070C] shadow-lg overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 md:h-20 flex items-center justify-between">
        {/* Desktop Left Navigation Links */}
        <div className="hidden md:flex items-baseline space-x-4">
          {leftNavItems.map((item) => (
            <NavLink key={item.name} item={item} isActive={activeLink === item.name} />
          ))}
        </div>

        {/* Centered Protruding Logo */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
          <div className="w-28 h-28 md:w-36 md:h-32 bg-[#75070C] rounded-full flex items-center justify-center">
            <img
              src={Logo || "/placeholder.svg"} // Using your original Logo import
              alt="Shreeji Paints Logo"
              className="h-23 sm:h-10 md:h-22 lg:h-32 w-auto"
            />
          </div>
        </div>

        {/* Desktop Right Navigation Links */}
        <div className="hidden md:flex items-baseline space-x-4">
          {rightNavItems.map((item) => {
            const Icon = item.icon
            const isActive = activeLink === item.name
            if (item.dropdown) {
              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => handleLinkClick(item.name, item.href)}
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-[#FFEDAB] bg-[#FFEDAB]/20"
                        : "text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB]/20"
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FFEDAB] rounded-full transition-all duration-300"></div>
                    )}
                  </button>
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                      showProductsDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.id}
                        onClick={() => handleProductCategoryClick(dropdownItem.id)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#63171b] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              )
            }
            return <NavLink key={item.name} item={item} isActive={activeLink === item.name} />
          })}
        </div>

        {/* Mobile menu button - Absolute positioned to the left */}
        <div className="md:hidden absolute left-4">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#FFEDAB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#75070C] transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Gallery button - Absolute positioned to the right */}
        <div className="md:hidden absolute right-4">
          <button
            onClick={toggleGallery}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#FFEDAB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#75070C] transition-colors duration-200"
            aria-label="Open gallery"
          >
            <Gallery size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 border-t border-[#FFEDAB] border-opacity-20"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#75070C] bg-opacity-95 backdrop-blur-sm">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeLink === item.name
            if (item.dropdown) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.name, item.href)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out flex items-center gap-3 ${
                      isActive
                        ? "text-[#FFEDAB] bg-[#FFEDAB]/10 border-l-4 border-[#FFEDAB]"
                        : "text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB}/10"
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </button>
                  {/* Mobile dropdown items */}
                  <div className="ml-6 mt-1 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.id}
                        onClick={() => handleProductCategoryClick(dropdownItem.id)}
                        className="w-full text-left px-3 py-2 text-sm text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB}/10 rounded-md transition-all duration-300"
                      >
                        • {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.name, item.href)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out flex items-center gap-3 ${
                  isActive
                    ? "text-[#FFEDAB] bg-[#FFEDAB]/10 border-l-4 border-[#FFEDAB]"
                    : "text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB}/10"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </button>
            )
          })}
        </div>
      </div>

      {isGalleryOpen && <GalleryModal images={galleryImages} onClose={() => setIsGalleryOpen(false)} />}
    </nav>
  )
}

export default Navigation
