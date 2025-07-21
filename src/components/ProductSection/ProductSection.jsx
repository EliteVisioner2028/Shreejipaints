"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Home, Wrench, Users, Mail, Package } from "lucide-react"

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const observerRef = useRef(null)

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

  // Handle smooth scrolling
  const handleLinkClick = (linkName, href) => {
    setActiveLink(linkName)
    setIsMobileMenuOpen(false)

    // Smooth scroll to section
    if (href && href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        const navHeight = 64 // Height of fixed navigation
        const elementPosition = element.offsetTop - navHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }
  }

  const handleProductCategoryClick = (categoryId) => {
    setActiveLink("Products")
    setShowProductsDropdown(false)
    setIsMobileMenuOpen(false)

    // Scroll to products section first
    const element = document.querySelector("#products")
    if (element) {
      const navHeight = 64
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })

      // After scrolling, trigger the category selection
      setTimeout(() => {
        // Dispatch custom event to ProductSection
        window.dispatchEvent(
          new CustomEvent("selectProductCategory", {
            detail: { categoryId },
          }),
        )
      }, 600)
    }
  }

  // Use Intersection Observer for smooth, flicker-free navigation
  useEffect(() => {
    // Clean up previous observer
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
      rootMargin: "-20% 0px -70% 0px", // Only trigger when section is in the middle 20-70% of viewport
      threshold: 0,
    }

    const observerCallback = (entries) => {
      // Find the section that's most visible
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

      // Only update if we found a visible section
      if (mostVisibleSection) {
        setActiveLink(mostVisibleSection)
      }
    }

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      if (section.element) {
        observerRef.current.observe(section.element)
      }
    })

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, []) // Empty dependency array - only run once

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#75070C] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-[#FFEDAB] text-xl font-bold tracking-wide">SHREEJI PAINTS</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 relative">
              {navigationItems.map((item) => {
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

                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.name, item.href)}
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
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#FFEDAB] hover:text-[#FFEDAB] hover:bg-[#FFEDAB]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFEDAB] transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                        : "text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB]/10"
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
                        className="w-full text-left px-3 py-2 text-sm text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB]/10 rounded-md transition-all duration-300"
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
                    : "text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB]/10"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
