"use client"

import { useState, useRef } from "react" // Import useState and useRef
import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/AboutSection/AboutSection"
import ProductSection from "../components/ProductSection/ProductSection" // Corrected import path and component name
import ContactSection from "../components/ContactSection/ContactSection"
import ServiceSection from "../components/HeroSection/ServiceSection"

const Home = () => {
  const [activeMainCategoryId, setActiveMainCategoryId] = useState(null)
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(null)
  const productsSectionRef = useRef(null)

  // Handle Get In Touch button click
  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      const navHeight = 64 // Height of fixed navigation
      const elementPosition = contactSection.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const handleCategoryChange = (mainId, subId) => {
    setActiveMainCategoryId(mainId)
    setActiveSubCategoryId(subId)
    // Scroll to products section when category changes via navigation
    if (productsSectionRef.current) {
      const navHeight = 64 // Height of fixed navigation
      const elementPosition = productsSectionRef.current.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <HeroSection onGetInTouchClick={handleGetInTouchClick} />
      <AboutSection />
      {/* Removed the duplicate ProductsSection import */}
      <ServiceSection />
      <div ref={productsSectionRef}>
        <ProductSection
          initialMainCategory={activeMainCategoryId}
          initialSubCategory={activeSubCategoryId}
          onCategoryChange={handleCategoryChange} // Pass down for internal clicks to update URL/state
        />
      </div>
      <ContactSection />
    </>
  )
}

export default Home
