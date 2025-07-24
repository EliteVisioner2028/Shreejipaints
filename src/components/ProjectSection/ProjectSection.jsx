import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Paintbrush } from "lucide-react";
import Project1 from "../../assets/Images/Project1.jpg";
import Project2 from "../../assets/Images/Project2.jpg";
import Project3 from "../../assets/Images/Project3.jpg";
import Project4 from "../../assets/Images/Project4.jpg";
import Project5 from "../../assets/Images/Project5.jpg";
import Project6 from "../../assets/Images/Project6.jpg";
import School from "../../assets/Images/School.jpg";

const projectsData = [
  {
    name: "Rudveda Life",
    imageUrl: Project1,
    description:
      "Rudveda Life is a fully planned residential enclave set amidst serene natural surroundings, offering spacious layouts, modern amenities, and a peaceful lifestyle for families seeking refined living. Proudly painted by Shreeji Paints and Hardware, ensuring long-lasting beauty and durability.",
  },
  {
    name: "Iscon Habitat",
    imageUrl: Project4,
    description:
      "Iscon Habitat is a modern condominium complex in Gujarat featuring premium amenities and elegant living spaces. Painted by Shreeji Paints & Hardware.",
  },
  {
    name: "Sahajanand Hostel",
    imageUrl: Project2,
    description:
      "Sahajanand Hostel offers secure, well-managed accommodations for students and professionals — with a focus on comfort, convenience, and community. The property features high-quality finishes, painted by Shreeji Paints and Hardware.",
  },
  {
    name: "Iscon Height",
    imageUrl: Project5,
    description:
      "Iscon Heights blends architectural finesse with everyday comfort, featuring refined residences and curated amenities. All paint supplies sourced from Shreeji Paints & Hardware, ensuring a lasting finish and quality aesthetic.",
  },
  {
    name: "Rudveda Apartments",
    imageUrl: Project3,
    description:
      "An urban apartment development by LR Realty, combining smart architecture with aesthetic finesse — Rudveda Apartments deliver practical, elegant homes designed for modern city living. Walls and exteriors finished using premium products from Shreeji Paints and Hardware.",
  },
  {
    name: "Pratham Bluets",
    imageUrl: Project6,
    description:
      "Pratham Bluets is an award-winning residential project recognized by CNBC for excellence in design and execution. Its exceptional paint finishes are supported through high-quality materials supplied by Shreeji Paints & Hardware.",
  },
  {
    name: "Govt. School Upliftment",
    imageUrl: School,
    description:
      "A rejuvenation project focused on creating a brighter, more inspiring learning environment. The entire school was repainted using durable and child-safe products by Shreeji Paints and Hardware — adding color, life, and motivation to every classroom.",
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
        padding: "2rem 6rem",
        backgroundImage:
          "url('https://images.pexels.com/photos/8941369/pexels-photo-8941369.jpeg')",
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
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Paintbrush
            size={48}
            color="#D35400"
            style={{ marginBottom: "0.5rem" }}
          />
        </div>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: "800",
            color: "#D35400",
            textAlign: "center",
            marginBottom: "1rem",
            fontFamily: "serif",
            letterSpacing: "0.5px",
            padding: "0 1rem",
          }}
        >
          "Paint Supplied, Perfection Applied"
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
                }}
              >
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "1rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    border: "1px solid #f0e0d0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ flex: "0 0 80%", height: "80%" }}>
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "1 1 20%",
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        marginBottom: "0.4rem",
                        color: "#333",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.4",
                        textAlign: "justify",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
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
