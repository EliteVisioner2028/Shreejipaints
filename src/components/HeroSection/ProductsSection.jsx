import React, { useState } from "react"
import { productCategories } from "../../data/productsData"
import { Palette, Award, Timer, Star } from "lucide-react"

const ProductsSection = () => {
  const [expandedBrands, setExpandedBrands] = useState({})
  const colorPalette = ["#0091B9", "#BAE4F0", "#004F9B", "#FF6500", "#FFD500"]

  const toggleBrands = (categoryId) => {
    setExpandedBrands((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  return (
    <section
      className="py-12 md:py-20 relative overflow-hidden bg-[#010714]"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-32 w-36 h-36 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
            <div className="p-3 md:p-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-lg mb-4 sm:mb-0 sm:mr-4">
              <Palette className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-center sm:text-left">
              Types of Paints We Offer
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
            Discover our comprehensive range of premium painting solutions, carefully crafted for every surface and application.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-orange-400/30">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-orange-400" />
              <span className="text-xs md:text-sm font-medium text-white">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-green-400/30">
              <Timer className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
              <span className="text-xs md:text-sm font-medium text-white">Long Lasting</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-cyan-400/30">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 fill-current" />
              <span className="text-xs md:text-sm font-medium text-white">Trusted Brands</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {productCategories.map((category) => {
            const IconComponent = category.icon
            const isExpanded = expandedBrands[category.id]

            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01] overflow-hidden"
              >
                <div className="relative h-6 md:h-8 rounded-t-2xl overflow-hidden">
                  <div className="h-full flex">
                    {colorPalette.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`flex-1 transition-all duration-300 ${
                          color === category.primaryColor
                            ? "transform scale-y-125 z-10"
                            : "hover:transform hover:scale-y-110"
                        }`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row">
                  <div className="w-full lg:w-2/5 p-4">
                    <div className="relative w-full h-48 sm:h-56 md:h-48 lg:aspect-square rounded-xl overflow-hidden shadow-lg mb-4">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <div className="px-2 md:px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                          <span className="text-xs md:text-sm font-bold text-gray-800">{category.priceRange}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-lg p-3 shadow-sm"
                      style={{
                        backgroundColor: `${category.primaryColor}10`,
                        borderLeft: `4px solid ${category.primaryColor}`,
                      }}
                    >
                      <p className="text-sm text-gray-800 leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  <div className="w-full md:w-3/5 p-4 space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${category.primaryColor}15` }}
                      >
                        <IconComponent className="h-5 w-5" style={{ color: category.primaryColor }} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">{category.name}</h3>
                    </div>

                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: `${category.primaryColor}08`,
                        border: `1px solid ${category.primaryColor}20`,
                      }}
                    >
                      <div className="text-sm font-medium mb-1" style={{ color: category.primaryColor }}>
                        Best For
                      </div>
                      <div className="text-sm font-semibold text-gray-800">{category.bestFor}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 gap-2 sm:gap-0">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.primaryColor }}></div>
                        <span className="text-sm font-medium text-gray-700">Coverage</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{category.coverage}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Popular Brands</div>
                      <div className="flex flex-wrap gap-2">
                        {(isExpanded ? category.brands : category.brands.slice(0, 2)).map((brand, brandIndex) => (
                          <span
                            key={brandIndex}
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{
                              backgroundColor: `${category.primaryColor}15`,
                              color: category.primaryColor,
                              border: `1px solid ${category.primaryColor}30`,
                            }}
                          >
                            {brand}
                          </span>
                        ))}
                        {category.brands.length > 2 && (
                          <button
                            onClick={() => toggleBrands(category.id)}
                            className="px-3 py-1 text-xs text-white rounded-full font-medium transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            style={{ backgroundColor: category.primaryColor }}
                          >
                            {isExpanded ? "Show Less" : `+${category.brands.length - 2} more`}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Key Features</div>
                      <div className="space-y-1">
                        {category.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: category.primaryColor }}
                            ></div>
                            <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
