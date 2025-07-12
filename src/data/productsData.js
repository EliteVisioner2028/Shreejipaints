import { Home, Shield, Droplets, TreePine, Brush } from "lucide-react"
import interiorImg from "../assets/Images/Interior.jpg"
import exteriorImg from "../assets/Images/exter.jpg"
import waterproofingImg from "../assets/Images/waterproof.jpeg"
import woodfinish from "../assets/Images/woodfinishes.jpg"
import undercoating from "../assets/Images/undercoating.jpeg"
import OnePureElegance from "../assets/ProductImages/OnePureElegance.webp"
import CalistaEverWash from "../assets/ProductImages/CalistaEverWash.webp"
import CalistaEverClear from "../assets/ProductImages/CalistaEverClear.webp"
import StyleColorSmart from "../assets/ProductImages/StyleColorSmart.webp"
import StyleSuperBright from "../assets/ProductImages/StyleSuperBright.webp"
import BisonGlow from "../assets/ProductImages/Bison.jpg"
import OneTrueLook from "../assets/ProductImages/OneTrueLook.webp"
import CalistaNeoStar from "../assets/ProductImages/CalistaNeoStar.webp"
import CalistaNeoStarShine from "../assets/ProductImages/CalistaNeoStarShine.webp"
import StylePowerBright from "../assets/ProductImages/StylePowerBright.webp"
import WeatherCoatLongLife10 from "../assets/ProductImages/LongLife.png"
import WeatherCoatLongLifeFlexo from "../assets/ProductImages/LongLifeFlexo.png"
import WeatherCoatAntiDustt from "../assets/ProductImages/AntiDustt.jpg"
import WeatherCoatGlow from "../assets/ProductImages/Glow.png"
import Walmasta from "../assets/ProductImages/Walmasta.jpg"
import EasyClean from "../assets/ProductImages/EasyClean.png"
import RangoliTotalCare from "../assets/ProductImages/Rangoli.png"
import SilkGlamor from "../assets/ProductImages/SilkGlamor.png"
import DampstopElasto from "../assets/ProductImages/DampstopElasto.png"
import RoofKoolAndSeal from "../assets/ProductImages/RoofKoolAndSeal.png"
import AlldryWallRoof10 from "../assets/ProductImages/AlldryWallRoof10.webp"
import AlldryWallRoof12 from "../assets/ProductImages/AlldryWallRoof12.webp"
import AllwoodMelamine from "../assets/ProductImages/AllwoodMelamine.webp"
import AllwoodItalianPU from "../assets/ProductImages/AllwoodItalianPU.webp"
import AllwoodPUInterior from "../assets/ProductImages/AllwoodPUInterior.webp"
import Melamine24Carat from "../assets/ProductImages/Melamine24Carat.png"
import Woodkeeper1KPU from "../assets/ProductImages/Woodkeeper1KPU.webp"
import Rainbow from "../assets/ProductImages/Rainbow.webp"

export const productCategories = [
  {
    id: "interior",
    name: "Interior Paints",
    icon: Home,
    image: interiorImg,
    description: "Transform your indoor spaces with premium interior paints",
    priceRange: "₹150-700/L",
    bestFor: "Living rooms, bedrooms, kitchens",
    coverage: "50-120 sq ft/L",
    brands: [
      "Bison Emulsion",
      "Rangoli",
      "Silk Glamor",
      "EasyClean",
      "Style Color Smart",
      "Calista Ever Clear",
      "Calista Ever Wash",
      "One Pure Elegance",
      "Style Super Bright",
      "Bison Acrylic Distemper",
    ],
    features: [
      "Low VOC formulation for healthier air",
      "Easy application and smooth finish",
      "Wide range of colors available",
      "Washable and durable coating",
    ],
    primaryColor: "#7A0000", // Dark Red
  },
  {
    id: "exterior",
    name: "Exterior Paints",
    icon: Shield,
    image: exteriorImg,
    description: "Weather-resistant paints for exterior protection",
    priceRange: "₹240-700/L",
    bestFor: "Walls, gates, outdoor surfaces",
    coverage: "50-120 sq ft/L",
    brands: [
      "Walmasta",
      "WeatherCoat Glow",
      "Long Life Flexo",
      "Long Life 10",
      "Calista Neo Star",
      "Calista Power Bright",
      "One True Look",
    ],
    features: [
      "UV protection against sun damage",
      "Weather resistant formula",
      "Anti-fungal properties",
      "Long-lasting color retention",
    ],
    primaryColor: "#A23A00", // Burnt Orange
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    icon: Droplets,
    image: waterproofingImg,
    description: "Complete moisture protection solutions",
    priceRange: "₹300-550/L",
    bestFor: "Bathrooms, terraces, basements",
    coverage: "35-40 sq ft/L",
    brands: ["Dampstop Elasto", "Roof Kool & Seal", "PU Roof Coat", "AllDry 10", "AllDry 12"],
    features: [
      "Complete moisture barrier",
      "Crack bridging technology",
      "All weather conditions",
      "Long-term durability",
    ],
    primaryColor: "#B38C00", // Mustard Yellow
  },
  {
    id: "woodfinishes",
    name: "Wood Finishes",
    icon: TreePine,
    image: woodfinish,
    description: "Premium wood stains and protective finishes",
    priceRange: "₹300-1500/L",
    bestFor: "Furniture, doors, wooden surfaces",
    coverage: "100-130 sq ft/L",
    brands: [
      "Melamine",
      "PU Base",
      "Imperial",
      "AllWood Mellamine",
      "Allwood Interior & Exterior PU",
      "AllWood Italian PU",
    ],
    features: [
      "Enhances natural wood grain",
      "Termite and insect protection",
      "UV resistant formulation",
      "Easy maintenance",
    ],
    primaryColor: "#3A552F", // Dark Olive Green
  },
  {
    id: "primers",
    name: "Primers & Undercoats",
    icon: Brush,
    image: undercoating,
    description: "Essential base coats for perfect adhesion",
    priceRange: "₹150-600",
    bestFor: "All surfaces before painting",
    coverage: "110-120 sq ft/L",
    brands: ["BP White", "Dampstop Duo", "Calisto Pro Hide", "Calista Pro Fresh"],
    features: [
      "Superior adhesion properties",
      "Seals porous surfaces",
      "Prevents paint peeling",
      "Compatible with all topcoats",
    ],
    primaryColor: "#00495C", // Deep Teal
  },
]

// Separate data file for easy editing
export const productsData = {
  interiors: [
    {
      id: 1,
      name: "One Pure Elegance",
      image: OnePureElegance,
      description:
        "Luxurious interior emulsion offering stain and scuff resistance, silky smooth finish, and 9-year warranty.",
      features: [],
      dataSheet: {
        size: "1.2MB",
        type: "PDF",
      },
    },
    {
      id: 2,
      name: "Calista Everwash",
      image: CalistaEverWash,
      description:
        "Get long-lasting, clean walls with Birla Opus Calista Everwash. Its stain-resistant formula allows easy cleaning with over 5000+ washes.",
      dataSheet: {
        size: "1MB",
        type: "PDF",
      },
    },
    {
      id: 3,
      name: "Calista Ever Clear",
      image: CalistaEverClear,
      description:
        "Invest in a shield of protection for your walls with Birla Opus Calista Ever Clear – a premium emulsion offering excellent stain resistance and lasting performance.",
      dataSheet: {
        size: "1MB",
        type: "PDF",
      },
    },
    {
      id: 4,
      name: "Style Color Smart",
      image: StyleColorSmart,
      description:
        "Birla Opus Style Color Smart delivers superior coverage and a spotless matt finish—perfect for budget-friendly, beautiful interiors.",
      dataSheet: {
        size: "900KB",
        type: "PDF",
      },
    },
    {
      id: 5,
      name: "Style Super Bright",
      image: StyleSuperBright,
      description:
        "Live the vibrant difference with Birla Opus Style Super Bright, a premium acrylic distemper that elevates your space with unparalleled brightness and whiteness. Get a spotless, long-lasting finish that hides imperfections, aided by a 6-month warranty.",
      dataSheet: {
        size: "1.3MB",
        type: "PDF",
      },
    },
    {
      id: 6,
      name: "Bison Glow",
      image: BisonGlow,
      description:
        "A budget-friendly acrylic interior emulsion offering a soft sheen finish. It provides better coverage, strong durability with water-based acrylic polymers, and is GreenPro certified for sustainability.",
      dataSheet: {
        size: "1.2MB",
        type: "PDF",
      },
    },
    {
      id: 7,
      name: "Easy Clean",
      image: EasyClean,
      description:
        "Premium interior emulsion with a soft sheen finish that features Cross-Linking Polymers for superior washability and stain resistance. Offers anti-fading protection and a velvety, elegant look for your walls.",
      dataSheet: {
        size: "1.4MB",
        type: "PDF",
      },
    },
    {
      id: 8,
      name: "Silk Glamor Soft Sheen",
      image: SilkGlamor,
      description:
        "Silk Glamor Soft Sheen is a luxury interior emulsion paint that delivers a rich sheen finish, superior cleanability, and crack protection with its elastomeric film. It's APEO and formaldehyde-free, low in VOC, and Green Pro certified.",
      dataSheet: {
        size: "1.9MB",
        type: "PDF",
      },
    },
    {
      id: 9,
      name: "Rangoli Total Care",
      image: RangoliTotalCare,
      description:
        "Rangoli Total Care is a premium interior emulsion with fine extenders for a buttery smooth finish and an enhanced bio-resistant formula that protects walls from microbial growth. It is also Green Pro certified for eco-friendly living.",
      dataSheet: {
        size: "1.6MB",
        type: "PDF",
      },
    },
  ],
  exteriors: [
    {
      id: 1,
      name: "One True Look",
      image: OneTrueLook,
      description:
        "Premium exterior paint with dust, algae, and crack resistance. PU technology ensures durability and a 9-year warranty for lasting elegance.",
      dataSheet: {
        size: "1.6MB",
        type: "PDF",
      },
    },
    {
      id: 2,
      name: "Calista Neo Star",
      image: CalistaNeoStar,
      description:
        "Durable exterior emulsion with strong weather protection, vibrant colour retention, and resistance to dust and fungus. Ideal for all climates.",
      dataSheet: {
        size: "1.3MB",
        type: "PDF",
      },
    },
    {
      id: 3,
      name: "Calista Neo Star Shine",
      image: CalistaNeoStarShine,
      description:
        "Premium exterior paint with long-lasting shine, algae resistance, and anti-carbonation protection. Offers solar reflectance and a 7-year warranty.",
      dataSheet: {
        size: "1.4MB",
        type: "PDF",
      },
    },
    {
      id: 4,
      name: "Style Power Bright",
      image: StylePowerBright,
      description:
        "Vibrant, budget-friendly exterior paint with peel protection, anti-algal properties, and superior whiteness. Backed by a 3-year warranty for lasting value.",
      dataSheet: {
        size: "1.1MB",
        type: "PDF",
      },
    },
    {
      id: 5,
      name: "Weathercoat Long Life 10",
      image: WeatherCoatLongLife10,
      description:
        "Luxury exterior emulsion with PU & Silicon Technology, designed for heavy rainfall regions. Offers 10-year warranty, excellent water and dust repellence, and anti-algal protection.",
      dataSheet: {
        size: "1.4MB",
        type: "PDF",
      },
    },
    {
      id: 6,
      name: "Weathercoat Anti Dustt",
      image: WeatherCoatAntiDustt,
      description:
        "100% acrylic exterior emulsion with unique Dust Guard technology that repels dust and prevents algal/fungal growth. Offers a rich sheen finish, all-weather protection, and comes with a 6-year performance warranty.",
      dataSheet: {
        size: "1.4MB",
        type: "PDF",
      },
    },
    {
      id: 7,
      name: "Weathercoat Glow",
      image: WeatherCoatGlow,
      description:
        "100% acrylic outdoor wall paint featuring Stay-Clean technology that washes off dust with rain. Provides a rich sheen finish, resists algal/fungal growth, and ensures complete weather protection with a 6-year warranty.",
      dataSheet: {
        size: "1.3MB",
        type: "PDF",
      },
    },
    {
      id: 8,
      name: "Walmasta",
      image: Walmasta,
      description:
        "Walmasta Advanced is a water-based acrylic exterior emulsion designed for dry and low-humidity climates. It offers a stylish matt finish and protects against algal and fungal growth, backed by a 4-year performance warranty.",
      dataSheet: {
        size: "1.1MB",
        type: "PDF",
      },
    },
    {
      id: 9,
      name: "Weathercoat Long Life Flexo",
      image: WeatherCoatLongLifeFlexo,
      description:
        "High-performance exterior emulsion with elastomeric film that covers hairline cracks. Offers 8-year warranty, silicon protection for rain resistance, and superior dust repellence with a high-sheen finish.",
      dataSheet: {
        size: "1.5MB",
        type: "PDF",
      },
    },
  ],
  waterproofing: [
    {
      id: 1,
      name: "HomeShield Dampstop Elasto",
      image: DampstopElasto,
      description:
        "Dampstop Elasto is a fibre-reinforced liquid waterproofing membrane formulated with PU-modified binders and PP fibers. It covers minor cracks, dampness, and provides a protective barrier coat.",
      dataSheet: {
        size: "1.4MB",
        type: "PDF",
      },
    },
    {
      id: 2,
      name: "HomeShield Roof Kool & Seal",
      image: RoofKoolAndSeal,
      description:
        "HS Roof Kool & Seal is a 100% acrylic elastomeric waterproofing membrane with heat-reflecting properties. It reduces indoor temperature and protects against cracks, microbes, and dirt.",
      dataSheet: {
        size: "1.7MB",
        type: "PDF",
      },
    },
    {
      id: 3,
      name: "Alldry Wall n Roof 10",
      image: AlldryWallRoof10,
      description:
        "Alldry Wall n Roof 10 by Birla Opus is a high-performance waterproofing solution with a 10-year warranty, excellent crack-bridging ability, and up to 10°C cooling effect. Resists 10 bar water pressure.",
      dataSheet: {
        size: "2.1MB",
        type: "PDF",
      },
    },
    {
      id: 4,
      name: "Alldry Wall n Roof 12",
      image: AlldryWallRoof12,
      description:
        "Meet Alldry Wall n Roof 12, your next-gen waterproofing solution with a 12-year warranty. It offers up to 12°C surface cooling and resists 12 bar water pressure. The flexible film adapts to surface movements, preventing cracks for long-lasting protection.",
      dataSheet: {
        size: "2.3MB",
        type: "PDF",
      },
    },
  ],
  woodFinishes: [
    {
      id: 1,
      name: "Allwood Melamine",
      image: AllwoodMelamine,
      description: "Premium finish which gives a smooth and durable finish to wooden surfaces.",
      features: ["Non-yellowing", "Smooth finish", "Long-lasting"],
      dataSheet: {
        size: "1.2MB",
        type: "PDF",
      },
    },
    {
      id: 2,
      name: "Allwood Italian PU",
      image: AllwoodItalianPU,
      description: "A long-lasting ultra rich finish for wooden surfaces.",
      features: ["Ultra-rich look", "Durable", "Ideal for luxury interiors"],
      dataSheet: {
        size: "1.5MB",
        type: "PDF",
      },
    },
    {
      id: 3,
      name: "Allwood PU Interior",
      image: AllwoodPUInterior,
      description: "High-performance, long-lasting finish for interior wooden surfaces.",
      features: ["High durability", "Smooth application", "Resistant to stains"],
      dataSheet: {
        size: "1.3MB",
        type: "PDF",
      },
    },
    {
      id: 4,
      name: "Melamine 24 Carat",
      image: Melamine24Carat,
      description: "Interior wood finishing with a mirror-like finish",
      dataSheet: {
        size: "1.1MB",
        type: "PDF",
      },
    },
    {
      id: 5,
      name: "Woodkeeper 1K PU",
      image: Woodkeeper1KPU,
      description: "A multi-shade coating solution for woodwork",
      dataSheet: {
        size: "1.3MB",
        type: "PDF",
      },
    },
    {
      id: 6,
      name: "Rainbow",
      image: Rainbow,
      description: "Crystal-clear shades with matte and glossy finishes",
      dataSheet: {
        size: "1.2MB",
        type: "PDF",
      },
    },
  ],
}

export const categoryInfo = {
  interiors: {
    title: "Interior Paints",
    description: "Transform your indoor spaces with our premium interior paint collection",
    icon: "🏠",
    color: "#E91E63",
  },
  exteriors: {
    title: "Exterior Paints",
    description: "Weather-resistant paints designed to protect and beautify your exteriors",
    icon: "🏢",
    color: "#3CA673",
  },
  waterproofing: {
    title: "Waterproofing Solutions",
    description: "Complete waterproofing systems for roofs, walls, and foundations",
    icon: "💧",
    color: "#2196F3",
  },
  woodFinishes: {
    title: "Wood Finishes",
    description: "Specialized finishes to enhance and protect wooden surfaces",
    icon: "🌳",
    color: "#8BC34A",
  },
}
