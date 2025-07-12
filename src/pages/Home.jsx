import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/AboutSection/AboutSection"
import ProductsSection from "../components/HeroSection/ProductsSection"
import ContactSection from "../components/ContactSection/ContactSection"
import ProductSection from "../components/ProductSection/ProductSection"

const Home = () => {
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

  return (
    <>
      <HeroSection onGetInTouchClick={handleGetInTouchClick} />
      <AboutSection />
      <ProductsSection />
      <ProductSection />
      <ContactSection />
    </>
  )
}

export default Home
