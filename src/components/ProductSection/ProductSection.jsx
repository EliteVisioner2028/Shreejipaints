
import { useState, useEffect, useRef } from "react"
import { Download, Star, Shield, Award, ChevronDown, ChevronUp } from "lucide-react"
import { productsData, categoryInfo } from "../../data/productsData" // Adjusted import path for React project

import OnePureElegancePDF from "../../assets/pdfs/one-true-look.pdf";
import CalistaEverwashPDF from "../../assets/pdfs/calista-everwash.pdf";
import CalistaEverClearPDF from "../../assets/pdfs/calista-ever-clear.pdf";
import StyleColorSmartPDF from "../../assets/pdfs/style-color-smart.pdf";
import StyleSuperBrightPDF from "../../assets/pdfs/style-super-bright.pdf";
import BisonGlowPDF from "../../assets/pdfs/bison-glow.pdf";
import EasyCleanPDF from "../../assets/pdfs/easy-clean.pdf";
import SilkGlamorPDF from "../../assets/pdfs/silk-glamor-soft-sheen.pdf";
import RangoliTotalCarePDF from "../../assets/pdfs/rangoli-total-care.pdf";
import OneTrueLookPDF from "../../assets/pdfs/one-true-look.pdf";
import CalistaNeoStarPDF from "../../assets/pdfs/calista-neo-star.pdf";
import CalistaNeoStarShinePDF from "../../assets/pdfs/calista-neo-star-shine.pdf";
import StylePowerBrightPDF from "../../assets/pdfs/style-power-bright.pdf";
import WeathercoatLongLife10PDF from "../../assets/pdfs/weathercoat-longlife-10.pdf";
import WeathercoatAntiDusttPDF from "../../assets/pdfs/weathercoat-anti-dustt.pdf";
import WeathercoatGlowPDF from "../../assets/pdfs/weathercoat-glow.pdf";
import WalmastaPDF from "../../assets/pdfs/walmasta.pdf";
import WeathercoatLongLifeFlexoPDF from "../../assets/pdfs/weathercoat-longlife-flexo.pdf";
import DampstopElastoPDF from "../../assets/pdfs/homeshield-dampstop-elasto.pdf";
import RoofKoolAndSealPDF from "../../assets/pdfs/homeshield-roof-kool-and-seal.pdf";
import AlldryWallRoof10PDF from "../../assets/pdfs/alldry-wall-roof-10.pdf";
import AlldryWallRoof12PDF from "../../assets/pdfs/alldry-wall-roof-12.pdf";
import AllwoodMelaminePDF from "../../assets/pdfs/allwood-melamine.pdf";
import AllwoodItalianPUPDF from "../../assets/pdfs/allwood-italian-pu.pdf";
import AllwoodPUInteriorPDF from "../../assets/pdfs/allwood-pu-interior.pdf";
import Melamine24CaratPDF from "../../assets/pdfs/melamine-24carat.pdf";
import Woodkeeper1KPUPDF from "../../assets/pdfs/woodkeeper-1kpu.pdf";
import RainbowPDF from "../../assets/pdfs/rainbow.pdf";


// Create a mapping object for easy access using the imported PDF variables
const pdfFiles = {
  // Interior products
  1: OnePureElegancePDF, // One Pure Elegance
  2: CalistaEverwashPDF, // Calista Everwash
  3: CalistaEverClearPDF, // Calista Ever Clear
  4: StyleColorSmartPDF, // Style Color Smart
  5: StyleSuperBrightPDF, // Style Super Bright
  6: BisonGlowPDF, // Bison Glow
  7: EasyCleanPDF, // Easy Clean
  8: SilkGlamorPDF, // Silk Glamor
  9: RangoliTotalCarePDF, // Rangoli Total Care
  // Exterior products
  "ext-1": OneTrueLookPDF, // One True Look
  "ext-2": CalistaNeoStarPDF, // Calista Neo Star
  "ext-3": CalistaNeoStarShinePDF, // Calista Neo Star Shine
  "ext-4": StylePowerBrightPDF, // Style Power Bright
  "ext-5": WeathercoatLongLife10PDF, // Weathercoat Long Life 10
  "ext-6": WeathercoatAntiDusttPDF, // Weathercoat Anti Dustt
  "ext-7": WeathercoatGlowPDF, // Weathercoat Glow
  "ext-8": WalmastaPDF, // Walmasta
  "ext-9": WeathercoatLongLifeFlexoPDF, // Weathercoat Long Life Flexo
  // Waterproofing products
  "wp-1": DampstopElastoPDF, // Dampstop Elasto
  "wp-2": RoofKoolAndSealPDF, // Roof Kool & Seal
  "wp-3": AlldryWallRoof10PDF, // Alldry Wall n Roof 10
  "wp-4": AlldryWallRoof12PDF, // Alldry Wall n Roof 12
  // Wood finishes
  "wf-1": AllwoodMelaminePDF, // Allwood Melamine
  "wf-2": AllwoodItalianPUPDF, // Allwood Italian PU
  "wf-3": AllwoodPUInteriorPDF, // Allwood PU Interior
  "wf-4": Melamine24CaratPDF, // Melamine 24 Carat
  "wf-5": Woodkeeper1KPUPDF, // Woodkeeper 1K PU
  "wf-6": RainbowPDF, // Rainbow
}

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("interiors")
  const [isVisible, setIsVisible] = useState(false)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [expandedDescriptions, setExpandedDescriptions] = useState({})
  const [textOverflows, setTextOverflows] = useState({})
  const [downloadingStates, setDownloadingStates] = useState({})
  const descriptionRefs = useRef({})

  // Inline styles for animations and custom CSS
  const styles = {
    fadeInUp: {
      animation: "fadeInUp 0.8s ease-out both",
    },
    lineClamp3: {
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
  }

  // Add keyframes to document head
  useEffect(() => {
    const styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `
    document.head.appendChild(styleSheet)
    return () => {
      document.head.removeChild(styleSheet)
    }
  }, [])

  useEffect(() => {
    const section = document.getElementById("products")
    if (window.innerWidth <= 768) {
      setIsVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -10% 0px",
      },
    )
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Check text overflow for each product description
  useEffect(() => {
    const currentProducts = productsData[activeCategory] || []
    const newTextOverflows = {}
    currentProducts.forEach((product) => {
      const element = descriptionRefs.current[product.id]
      if (element) {
        const lineHeight = 20
        const maxLines = 3
        const maxHeight = lineHeight * maxLines
        newTextOverflows[product.id] = element.scrollHeight > maxHeight
      }
    })
    setTextOverflows(newTextOverflows)
  }, [activeCategory])

  const handleImageLoad = (productId) => {
    setLoadedImages((prev) => new Set([...prev, productId]))
  }

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category)
      setExpandedDescriptions({})
      setTimeout(() => {
        const section = document.getElementById("active-category-info")
        if (section) {
          const rect = section.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const targetPosition = rect.top + scrollTop - 90
          window.scrollTo({ top: targetPosition, behavior: "smooth" })
        }
      }, 100)
    }
  }

  // Modified download function to use imported PDF variables
  const handleDataSheetDownload = async (product, productName, productId) => {
    try {
      // Set downloading state
      setDownloadingStates((prev) => ({ ...prev, [productId]: true }))

      // Create a unique key for each product based on category and id
      let pdfKey
      if (activeCategory === "interiors") {
        pdfKey = product.id
      } else if (activeCategory === "exteriors") {
        pdfKey = `ext-${product.id}`
      } else if (activeCategory === "waterproofing") {
        pdfKey = `wp-${product.id}`
      } else if (activeCategory === "woodFinishes") {
        pdfKey = `wf-${product.id}`
      }

      const pdfFile = pdfFiles[pdfKey] // Get the imported PDF variable

      if (pdfFile) {
        // Create filename for download
        const fileName = `${productName.replace(/\s+/g, "-").toLowerCase()}-datasheet.pdf`

        // Create download link
        const link = document.createElement("a")
        link.href = pdfFile // Use the imported PDF variable
        link.download = fileName
        link.target = "_blank"
        link.style.display = "none"

        // Trigger download
        document.body.appendChild(link)
        link.click()

        // Cleanup
        document.body.removeChild(link)
      } else {
        // Fallback: show alert if PDF not found
        alert(`PDF for ${productName} is not available yet. Please contact support.`)
      }
    } catch (error) {
      console.error("Download failed:", error)
      alert("Download failed. Please try again.")
    } finally {
      // Reset downloading state
      setDownloadingStates((prev) => ({ ...prev, [productId]: false }))
    }
  }

  const toggleDescription = (productId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  const categories = Object.keys(categoryInfo)
  const currentProducts = productsData[activeCategory] || []

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">
                  Our Products
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full mt-2 shadow-sm"></div>
              </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium paints and coatings, designed to meet every need from
            residential to industrial applications.
          </p>
        </div>
        {/* Category Buttons */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {categories.map((category) => {
              const info = categoryInfo[category]
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative px-6 py-4 rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 border-2 backdrop-blur-sm ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg shadow-blue-200"
                      : "bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{info.icon}</span>
                    <div className="text-left">
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-xs opacity-80 hidden md:block">{info.description}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
          {/* Active Category Info */}
          <div id="active-category-info" className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-lg">
              <span className="text-2xl">{categoryInfo[activeCategory].icon}</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{categoryInfo[activeCategory].title}</h3>
                <p className="text-sm text-gray-600">{categoryInfo[activeCategory].description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Products Grid */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-50 translate-y-4"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-gray-200 h-full flex flex-col backdrop-blur-sm"
                style={{
                  ...styles.fadeInUp,
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-white aspect-[4/3] border-b border-gray-200">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${
                      loadedImages.has(product.id) ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(product.id)}
                    loading="lazy"
                  />
                  {!loadedImages.has(product.id) && (
                    <div className="absolute inset-0 bg-white animate-pulse flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-200 rounded-full animate-bounce" />
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Star Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-gray-50 to-gray-100">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {product.name}
                    </h4>
                    <div className="relative">
                      <p
                        ref={(el) => (descriptionRefs.current[product.id] = el)}
                        className="text-gray-600 mb-3 leading-relaxed text-sm transition-all duration-300"
                        style={expandedDescriptions[product.id] ? {} : styles.lineClamp3}
                      >
                        {product.description}
                      </p>
                      {textOverflows[product.id] && (
                        <button
                          onClick={() => toggleDescription(product.id)}
                          className="flex items-center text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-2 py-1 -mx-2"
                        >
                          {expandedDescriptions[product.id] ? (
                            <>
                              <span>Show less</span>
                              <ChevronUp className="h-4 w-4 ml-1" />
                            </>
                          ) : (
                            <>
                              <span>Show more</span>
                              <ChevronDown className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  {/* Download Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => handleDataSheetDownload(product, product.name, product.id)}
                      disabled={downloadingStates[product.id]}
                      className={`w-full px-6 py-3 rounded-2xl font-semibold border transition-all duration-300 transform shadow-md hover:shadow-lg group/download ${
                        downloadingStates[product.id]
                          ? "bg-gray-400 text-white border-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white border-gray-600 hover:border-gray-500 hover:scale-105"
                      }`}
                    >
                      <span className="flex items-center justify-center">
                        <Download
                          className={`h-4 w-4 mr-2 ${
                            downloadingStates[product.id] ? "animate-spin" : "group-hover/download:animate-bounce"
                          }`}
                        />
                        <span>{downloadingStates[product.id] ? "Downloading..." : "Download Data Sheet"}</span>
                      </span>
                      <div className="text-xs text-gray-300 mt-1">PDF • {product.dataSheet?.size || "1MB"}</div>
                    </button>
                  </div>
                </div>
                {/* Bottom accent */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          {/* No Products Message */}
          {currentProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gray-200">
                <Shield className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No Products Found</h3>
              <p className="text-xl text-gray-600 max-w-md mx-auto">
                Products for this category will be available soon. Check back later for updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
