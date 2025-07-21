import { useState, useEffect, useRef } from "react"
import { Download, Star, Shield, Award, ChevronDown, X, ArrowLeft, HelpCircle, MousePointer } from 'lucide-react'
import { productCategories, productsData, pdfFiles } from "../../data/productsData"

// Mapping string icon names to Lucide React components
const LucideIcons = {
  Home: ({ size, className }) => (
    <span className={className} style={{ fontSize: size }}>
      🏠
    </span>
  ),
  Shield: ({ size, className }) => (
    <span className={className} style={{ fontSize: size }}>
      🛡️
    </span>
  ),
  Droplets: ({ size, className }) => (
    <span className={className} style={{ fontSize: size }}>
      💧
    </span>
  ),
  TreePine: ({ size, className }) => (
    <span className={className} style={{ fontSize: size }}>
      🌲
    </span>
  ),
  Brush: ({ size, className }) => (
    <span className={className} style={{ fontSize: size }}>
      🖌️
    </span>
  ),
  Factory: ({ size, className }) => (
    <span className={className} style={{ fontSize: size }}>
      🏭
    </span>
  ),
  Award: Award, // Keep Lucide for Award
}

// Enhanced Back Button Component
const BackButton = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-[#63171b] to-[#88022f] hover:from-[#75070C] hover:to-[#9a0233] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
    >
      <ArrowLeft size={18} className="mr-2" />
      <span className="text-sm md:text-base font-medium">{children}</span>
    </button>
  )
}

// Modal Component for expanded description
const DescriptionModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="mb-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-48 object-contain bg-gray-50 rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            {product.features && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Features</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ProductCard Component - Fixed layout
const ProductCard = ({ product, downloadingStates, handleDataSheetDownload }) => {
  const [loaded, setLoaded] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [overflows, setOverflows] = useState(false)
  const descriptionRef = useRef(null)

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current
      const lineHeight = 20
      const maxLines = 3
      const maxHeight = lineHeight * maxLines
      setOverflows(element.scrollHeight > maxHeight)
    }
  }, [product.description])

  return (
    <>
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-gray-200 h-full flex flex-col backdrop-blur-sm">
        {/* Image Container - Fixed height */}
        <div className="relative overflow-hidden bg-white h-48 border-b border-gray-200">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
          {!loaded && (
            <div className="absolute inset-0 bg-white animate-pulse flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-200 rounded-full animate-bounce" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
          </div>
        </div>
        {/* Content - Fixed layout */}
        <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="flex-grow">
            {/* Product Name - Fixed height */}
            <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight h-14 overflow-hidden">
              {product.name}
            </h4>
            {/* Description - Fixed height with overflow handling */}
            <div className="relative mb-4">
              <p
                ref={descriptionRef}
                className="text-gray-600 leading-relaxed text-sm line-clamp-3 h-16 overflow-hidden"
              >
                {product.description}
              </p>
              {overflows && (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-2 py-1 -mx-2 mt-2"
                >
                  <span>Read more</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              )}
            </div>
          </div>
          {/* Download Button - Fixed position */}
          <div className="mt-auto">
            {product.pdfKey && pdfFiles[product.pdfKey] ? (
              <button
                onClick={() => handleDataSheetDownload(product.pdfKey, product.name)}
                disabled={downloadingStates[product.pdfKey]}
                className={`w-full px-6 py-3 rounded-2xl font-semibold border transition-all duration-300 transform shadow-md hover:shadow-lg group/download ${
                  downloadingStates[product.pdfKey]
                    ? "bg-gray-400 text-white border-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white border-gray-600 hover:border-gray-500 hover:scale-105"
                }`}
              >
                <span className="flex items-center justify-center">
                  <Download
                    className={`h-4 w-4 mr-2 ${
                      downloadingStates[product.pdfKey] ? "animate-spin" : "group-hover/download:animate-bounce"
                    }`}
                  />
                  <span className="whitespace-nowrap">
                    {downloadingStates[product.pdfKey] ? "Downloading..." : "Download Data Sheet"}
                  </span>
                </span>
              </button>
            ) : (
              <button
                disabled
                className="w-full px-6 py-3 rounded-2xl font-semibold border bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Data Sheet Not Available
              </button>
            )}
          </div>
        </div>
        {/* Bottom accent */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Modal for expanded description */}
      <DescriptionModal isOpen={showModal} onClose={() => setShowModal(false)} product={product} />
    </>
  )
}

// SubCategoryCard Component
const SubCategoryCard = ({ subCategory, onClick, isActive }) => {
  const Icon = LucideIcons[subCategory.icon] || LucideIcons.Brush
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center text-center p-4 rounded-lg transition-all duration-200 ease-in-out ${
        isActive
          ? "bg-[#FFEDAB]/20 text-[#63171b] shadow-md scale-105 ring-2 ring-[#88022f]/50"
          : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm hover:scale-102"
      } border border-gray-200 hover:border-[#FFEDAB] cursor-pointer`}
    >
      {/* Hover instruction */}
      <div className="absolute -top-2 -right-2 bg-[#88022f] text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click me!
      </div>

      {subCategory.image && (
        <img
          src={subCategory.image || "/placeholder.svg"}
          alt={subCategory.name}
          width={80}
          height={80}
          className="rounded-full object-cover mb-3"
        />
      )}
      {Icon && <Icon size={40} className="mb-2 text-[#63171b]" />}
      <h3 className="text-lg font-semibold mb-1">{subCategory.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{subCategory.description}</p>

      {/* Visual indicator */}
      <div className="mt-auto">
        <div
          className={`w-full h-1 rounded-full transition-all duration-200 ${
            isActive ? "bg-[#88022f]" : "bg-gray-200 group-hover:bg-[#88022f]/50"
          }`}
        />
      </div>
    </button>
  )
}

// MainCategoryCard Component
const MainCategoryCard = ({ category, onClick }) => {
  const Icon = LucideIcons[category.icon] || LucideIcons.Brush
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center text-center p-6 bg-[#fef7f8] rounded-2xl border-[2.5px] border-[#88022f] shadow-[0_4px_10px_rgba(136,2,47,0.25)] hover:shadow-[0_6px_20px_rgba(136,2,47,0.4)] transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden group"
    >
      <span className="absolute -inset-1 rounded-2xl border-[2px] border-[#88022f] animate-pulse opacity-40 pointer-events-none"></span>

      <div className="relative z-10 group-hover:z-0">
        {Icon && <Icon size={64} className="mb-4 text-[#88022f]" />}
        <h3 className="text-2xl font-bold text-[#88022f] mb-2">{category.name}</h3>
        <p className="text-md text-gray-700">{category.description}</p>

        {/* Click indicator */}
        <div className="mt-3 px-3 py-1 bg-[#88022f]/10 rounded-full">
          <p className="text-xs font-semibold text-[#88022f]">
            {category.subcategories?.length || 0} Categories Available
          </p>
        </div>
      </div>
    </button>
  )
}

// Helper function to get nested data
const getNestedData = (data, path) => {
  return path.reduce((current, key) => current?.[key], data)
}

// ProductSection Component
export default function ProductSection({
  initialMainCategory = null,
  initialSubCategory = null,
  initialSubSubCategory = null,
  onCategoryChange,
}) {
  const [activeMainCategoryId, setActiveMainCategoryId] = useState(initialMainCategory)
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(initialSubCategory)
  const [activeSubSubCategoryId, setActiveSubSubCategoryId] = useState(initialSubSubCategory)
  const [downloadingStates, setDownloadingStates] = useState({})

  useEffect(() => {
    if (initialMainCategory && initialMainCategory !== activeMainCategoryId) {
      setActiveMainCategoryId(initialMainCategory)
      setActiveSubCategoryId(initialSubCategory)
      setActiveSubSubCategoryId(initialSubSubCategory)
    } else if (initialSubCategory && initialSubCategory !== activeSubCategoryId) {
      setActiveSubCategoryId(initialSubCategory)
      setActiveSubSubCategoryId(initialSubSubCategory)
    } else if (initialSubSubCategory && initialSubSubCategory !== activeSubSubCategoryId) {
      setActiveSubSubCategoryId(initialSubSubCategory)
    }
  }, [
    initialMainCategory,
    initialSubCategory,
    initialSubSubCategory,
    activeMainCategoryId,
    activeSubCategoryId,
    activeSubSubCategoryId,
  ])

  useEffect(() => {
    const handleCategorySelection = (event) => {
      const { categoryId } = event.detail
      handleMainCategoryClick(categoryId)
    }

    window.addEventListener("selectProductCategory", handleCategorySelection)

    return () => {
      window.removeEventListener("selectProductCategory", handleCategorySelection)
    }
  }, [])

  const handleMainCategoryClick = (categoryId) => {
    setActiveMainCategoryId(categoryId)
    setActiveSubCategoryId(null)
    setActiveSubSubCategoryId(null)
    if (onCategoryChange) onCategoryChange(categoryId, null, null)
  }

  const handleSubCategoryClick = (subCategoryId) => {
    setActiveSubCategoryId(subCategoryId)
    setActiveSubSubCategoryId(null)
    if (onCategoryChange) onCategoryChange(activeMainCategoryId, subCategoryId, null)
  }

  const handleSubSubCategoryClick = (subSubCategoryId) => {
    setActiveSubSubCategoryId(subSubCategoryId)
    if (onCategoryChange) onCategoryChange(activeMainCategoryId, activeSubCategoryId, subSubCategoryId)
  }

  const handleBackToMainCategories = () => {
    setActiveMainCategoryId(null)
    setActiveSubCategoryId(null)
    setActiveSubSubCategoryId(null)
    if (onCategoryChange) onCategoryChange(null, null, null)
  }

  const handleBackToSubCategories = () => {
    setActiveSubCategoryId(null)
    setActiveSubSubCategoryId(null)
    if (onCategoryChange) onCategoryChange(activeMainCategoryId, null, null)
  }

  const handleBackToSubSubCategories = () => {
    setActiveSubSubCategoryId(null)
    if (onCategoryChange) onCategoryChange(activeMainCategoryId, activeSubCategoryId, null)
  }

  const handleDataSheetDownload = async (pdfKey, productName) => {
    try {
      setDownloadingStates((prev) => ({ ...prev, [pdfKey]: true }))
      const pdfFile = pdfFiles[pdfKey]
      if (pdfFile) {
        const fileName = `${productName.replace(/\s+/g, "-").toLowerCase()}-datasheet.pdf`
        const link = document.createElement("a")
        link.href = pdfFile
        link.download = fileName
        link.target = "_blank"
        link.style.display = "none"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        alert(`PDF for ${productName} is not available yet. Please contact support.`)
      }
    } catch (error) {
      console.error("Download failed:", error)
      alert("Download failed. Please try again.")
    } finally {
      setDownloadingStates((prev) => ({ ...prev, [pdfKey]: false }))
    }
  }

  const currentMainCategory = productCategories.find((cat) => cat.id === activeMainCategoryId)
  const currentSubCategory = currentMainCategory?.subcategories.find((sub) => sub.id === activeSubCategoryId)
  const currentSubSubCategory = currentSubCategory?.subcategories?.find((sub) => sub.id === activeSubSubCategoryId)

  // Determine which products to display
  let productsToDisplay = []
  if (currentMainCategory && currentSubCategory) {
    if (activeSubSubCategoryId && currentSubSubCategory) {
      // Show products from sub-subcategory
      const path = [currentMainCategory.id, currentSubCategory.id, currentSubSubCategory.id]
      productsToDisplay = getNestedData(productsData, path) || []
    } else if (currentSubCategory.subcategories) {
      // If subcategory has sub-subcategories, don't show products yet
      productsToDisplay = []
    } else {
      // Show products from subcategory
      const path = [currentMainCategory.id, currentSubCategory.id]
      productsToDisplay = getNestedData(productsData, path) || []
    }
  }

  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-contain bg-repeat bg-top relative "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/20899958/pexels-photo-20899958.jpeg')`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1 md:h-2 z-10 flex">
        <div className="flex-1 bg-[#D72638]" /> {/* Crimson Red */}
        <div className="flex-1 bg-[#f38d19]" /> {/* Warm Orange */}
        <div className="flex-1 bg-[#000263]" /> {/* Bold Yellow */}
        <div className="flex-1 bg-[#3DBE29]" /> {/* Fresh Green */}
        <div className="flex-1 bg-[#1B98E0]" /> {/* Bright Sky Blue */}
        <div className="flex-1 bg-[#9B59B6]" /> {/* Royal Purple */}
        <div className="flex-1 bg-[#88022f]" /> {/* Rose Pink */}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
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

        {/* Main Categories */}
        {!activeMainCategoryId && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <MainCategoryCard
                key={category.id}
                category={category}
                onClick={() => handleMainCategoryClick(category.id)}
              />
            ))}
          </div>
        )}

        {/* Subcategories */}
        {activeMainCategoryId && !activeSubCategoryId && currentMainCategory && (
          <div className="space-y-8">
            <BackButton onClick={handleBackToMainCategories}>Back to Main Categories</BackButton>
            <h2 className="text-4xl font-extrabold text-center text-[#63171b] mb-8">{currentMainCategory.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMainCategory.subcategories.map((subCategory) => (
                <SubCategoryCard
                  key={subCategory.id}
                  subCategory={subCategory}
                  onClick={() => handleSubCategoryClick(subCategory.id)}
                  isActive={activeSubCategoryId === subCategory.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* Sub-subcategories (for protective coatings) */}
        {activeMainCategoryId &&
          activeSubCategoryId &&
          !activeSubSubCategoryId &&
          currentSubCategory &&
          currentSubCategory.subcategories && (
            <div className="space-y-8">
              <BackButton onClick={handleBackToSubCategories}>
                Back to {currentMainCategory.name} Subcategories
              </BackButton>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">{currentSubCategory.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSubCategory.subcategories.map((subSubCategory) => (
                  <SubCategoryCard
                    key={subSubCategory.id}
                    subCategory={subSubCategory}
                    onClick={() => handleSubSubCategoryClick(subSubCategory.id)}
                    isActive={activeSubSubCategoryId === subSubCategory.id}
                  />
                ))}
              </div>
            </div>
          )}

        {/* Products */}
        {productsToDisplay.length > 0 && (
          <div className="space-y-8">
            {activeSubSubCategoryId && currentSubSubCategory ? (
              <BackButton onClick={handleBackToSubSubCategories}>Back to {currentSubCategory.name}</BackButton>
            ) : (
              <BackButton onClick={handleBackToSubCategories}>
                Back to {currentMainCategory.name} Subcategories
              </BackButton>
            )}
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              {activeSubSubCategoryId ? currentSubSubCategory.name : currentSubCategory.name} Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productsToDisplay.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  downloadingStates={downloadingStates}
                  handleDataSheetDownload={handleDataSheetDownload}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {productsToDisplay.length === 0 &&
          activeMainCategoryId &&
          activeSubCategoryId &&
          !currentSubCategory?.subcategories && (
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

        {/* Floating Help Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="group relative">
            <button className="bg-[#88022f] hover:bg-[#63171b] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <HelpCircle className="h-6 w-6" />
            </button>
            <div className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Click on category cards to explore</li>
                <li>• Use back buttons to navigate</li>
                <li>• Download data sheets for details</li>
                <li>• Contact us for recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[0] left-[0] w-full h-1 md:h-2 z-10 flex">
        <div className="flex-1 bg-[#D72638]" /> {/* Crimson Red */}
        <div className="flex-1 bg-[#f38d19]" /> {/* Warm Orange */}
        <div className="flex-1 bg-[#000263]" /> {/* Bold Yellow */}
        <div className="flex-1 bg-[#3DBE29]" /> {/* Fresh Green */}
        <div className="flex-1 bg-[#1B98E0]" /> {/* Bright Sky Blue */}
        <div className="flex-1 bg-[#9B59B6]" /> {/* Royal Purple */}
        <div className="flex-1 bg-[#88022f]" /> {/* Rose Pink */}
      </div>
    </section>
  )
}
