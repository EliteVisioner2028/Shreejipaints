import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Project1 from "../../assets/Images/Project1.jpg";
import Project2 from "../../assets/Images/Project2.jpg";
import Project3 from "../../assets/Images/Project3.jpg";

const projectsData = [
  {
    name: "Rudveda Life",
    imageUrl: Project1,
    description:
      "Rudveda Life is a fully planned residential enclave set amidst serene natural surroundings, offering spacious layouts, modern amenities, and a peaceful lifestyle for families seeking refined living. Proudly painted by Shreeji Paints and Hardware, ensuring long-lasting beauty and durability.",
  },
  {
    name: "Sahajanand Hostel",
    imageUrl: Project2,
    description:
      "Sahajanand Hostel offers secure, well-managed accommodations for students and professionals — with a focus on comfort, convenience, and community. The property features high-quality finishes, painted by Shreeji Paints and Hardware.",
  },
  {
    name: "Rudveda Apartments",
    imageUrl: Project3,
    description:
      "An urban apartment development by LR Realty, combining smart architecture with aesthetic finesse — Rudveda Apartments deliver practical, elegant homes designed for modern city living. Walls and exteriors finished using premium products from Shreeji Paints and Hardware.",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const itemWidthRef = useRef(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const calculateLayout = useCallback(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const firstChild = scrollRef.current.children[0];
      if (firstChild) {
        const style = window.getComputedStyle(firstChild);
        const marginLeft = parseFloat(style.marginLeft);
        const marginRight = parseFloat(style.marginRight);
        const totalItemWidth =
          firstChild.offsetWidth + marginLeft + marginRight;
        itemWidthRef.current = totalItemWidth;

        if (containerWidth >= 1024) {
          setItemsPerPage(3);
        } else if (containerWidth >= 768) {
          setItemsPerPage(2);
        } else {
          setItemsPerPage(1);
        }
      }
    }
  }, []);

  useEffect(() => {
    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [calculateLayout]);

  useEffect(() => {
    const maxIndex = Math.max(0, projectsData.length - itemsPerPage);
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [itemsPerPage]);

  useEffect(() => {
    if (scrollRef.current && itemWidthRef.current > 0) {
      scrollRef.current.scrollTo({
        left: currentIndex * itemWidthRef.current,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    const maxIndex = Math.max(0, projectsData.length - itemsPerPage);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, projectsData.length - itemsPerPage);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 1rem",
        backgroundImage:
          "url('https://images.pexels.com/photos/8941369/pexels-photo-8941369.jpeg')", // Use a subtle background texture
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "#222",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#D35400",
            textAlign: "center",
            marginBottom: "2.5rem",
            fontFamily: "serif",
            letterSpacing: "0.5px",
          }}
        >
          Projects
        </h2>

        <div style={{ position: "relative" }}>
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              overflowX: "hidden",
              scrollBehavior: "smooth",
              paddingBottom: "1rem",
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: "100%",
                  maxWidth:
                    itemsPerPage === 1
                      ? "100%"
                      : itemsPerPage === 2
                      ? "50%"
                      : "33.33%",
                  padding: "0 0.75rem",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  transform:
                    index >= currentIndex && index < currentIndex + itemsPerPage
                      ? "scale(1)"
                      : "scale(0.95)",
                  opacity:
                    index >= currentIndex && index < currentIndex + itemsPerPage
                      ? 1
                      : 0.6,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "1rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    border: "1px solid #f0e0d0",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease",
                    height: "100%",
                  }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem",
                    }}
                  />

                  <div style={{ padding: "1.5rem", flexGrow: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "#333",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#666",
                        lineHeight: "1.5",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        hyphens: "auto", // ✅ Hyphenates long words
                        overflowWrap: "break-word", // Ensures it doesn't overflow
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#E67E22",
              color: "#fff",
              padding: "0.75rem",
              borderRadius: "50%",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#E67E22",
              color: "#fff",
              padding: "0.75rem",
              borderRadius: "50%",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2.5rem",
            gap: "0.5rem",
          }}
        >
          {Array.from({ length: projectsData.length - itemsPerPage + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  borderRadius: "999px",
                  backgroundColor: currentIndex === index ? "#E67E22" : "#ccc",
                  transform: currentIndex === index ? "scale(1.2)" : "scale(1)",
                  transition: "all 0.2s ease-in-out",
                  border: "none",
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
  
};


export default ProjectsSection;
