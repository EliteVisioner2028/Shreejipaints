import { useState, useEffect } from "react"
import { Menu, X, Home, Package, Users, Mail } from "lucide-react"

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isManualScroll, setIsManualScroll] = useState(false)

  const navigationItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: Users, href: "#about" },
    { name: "Products", icon: Package, href: "#products" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  const handleLinkClick = (linkName, href) => {
    setActiveLink(linkName)
    setIsManualScroll(true) // Disable scroll-based updates temporarily
    setIsMobileMenuOpen(false)

    if (href && href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        const navHeight = 64
        const elementPosition = element.offsetTop - navHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })

        // Re-enable scroll-based updates after scroll likely ends
        setTimeout(() => {
          setIsManualScroll(false)
        }, 500) // adjust this if needed
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return // Skip scroll-based updates during manual scroll

      const sections = navigationItems
        .map((item) => ({
          name: item.name,
          element: document.querySelector(item.href),
        }))
        .filter((section) => section.element)

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element.offsetTop <= scrollPosition) {
          setActiveLink(section.name)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isManualScroll]) // Re-run effect if scroll-lock changes

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
                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.name, item.href)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-200 ease-in-out ${
                      isActive
                        ? "text-[#FFEDAB] bg-[#FFEDAB]/20"
                        : "text-[#fbeab1] hover:text-[#FFEDAB] hover:bg-[#FFEDAB]/20"
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FFEDAB] rounded-full"></div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile menu toggle */}
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
            return (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.name, item.href)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out flex items-center gap-3 ${
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
