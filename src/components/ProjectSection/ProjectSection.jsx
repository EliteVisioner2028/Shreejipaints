"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
      "Rudveda Life is a fully planned residential enclave set amidst serene natural surroundings, offering spacious layouts, modern amenities, and a peaceful lifestyle for families seeking refined living. Proudly supplied with premium paints by Shreeji Paints & Hardware, ensuring long-lasting beauty and durability.",
  },
  {
    name: "Iscon Habitat",
    imageUrl: Project4,
    description:
      "Iscon Habitat is a modern condominium complex in Gujarat featuring premium amenities and elegant living spaces. Paints for the project were supplied by Shreeji Paints & Hardware.",
  },
  {
    name: "Sahajanand Hostel",
    imageUrl: Project2,
    description:
      "Sahajanand Hostel offers secure, well-managed accommodations for students and professionals — with a focus on comfort, convenience, and community. The property features high-quality finishes, with paints supplied by Shreeji Paints & Hardware.",
  },
  {
    name: "Iscon Height",
    imageUrl: Project5,
    description:
      "Iscon Heights blends architectural finesse with everyday comfort, featuring refined residences and curated amenities. All paint materials were supplied by Shreeji Paints & Hardware, ensuring a lasting finish and quality aesthetic.",
  },
  {
    name: "Rudveda Apartments",
    imageUrl: Project3,
    description:
      "An urban apartment development by LR Realty, combining smart architecture with aesthetic finesse — Rudveda Apartments deliver practical, elegant homes designed for modern city living. Walls and exteriors finished using premium paints supplied by Shreeji Paints & Hardware.",
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
      "A rejuvenation project focused on creating a brighter, more inspiring learning environment. The entire school was repainted using durable and child-safe paint products supplied by Shreeji Paints & Hardware — adding color, life, and motivation to every classroom.",
  },
];

const MAX_DESCRIPTION_CHARS = 150; // Define max characters for truncated description

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const itemWidthRef = useRef(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [expandedProjectName, setExpandedProjectName] = useState(null); // State to track expanded project

  const calculateLayout = useCallback(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const firstChild = scrollRef.current.children[0];
      if (firstChild) {
        const style = window.getComputedStyle(firstChild);
        const marginLeft = Number.parseFloat(style.marginLeft);
        const marginRight = Number.parseFloat(style.marginRight);
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

  const toggleReadMore = (projectName) => {
    setExpandedProjectName((prevName) =>
      prevName === projectName ? null : projectName
    );
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-10 px-4 text-[#222]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8941369/pexels-photo-8941369.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto max-w-screen-xl z-10 text-center">
        <div className="flex justify-center mb-5">
          <Paintbrush size={48} color="#D35400" className="mb-2" />
        </div>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
          }}
          className="font-extrabold text-[#D35400] text-center mb-4 font-serif tracking-wide px-4"
        >
          "Paint Supplied, Perfection Applied"
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden scroll-smooth pb-4"
          >
            {projectsData.map((project, index) => {
              const isExpanded = expandedProjectName === project.name;
              const needsTruncation =
                project.description.length > MAX_DESCRIPTION_CHARS;
              const displayedDescription =
                needsTruncation && !isExpanded
                  ? project.description.substring(0, MAX_DESCRIPTION_CHARS) +
                    "..."
                  : project.description;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full px-3 ${
                    itemsPerPage === 1
                      ? "max-w-full"
                      : itemsPerPage === 2
                      ? "md:max-w-1/2"
                      : "lg:max-w-1/3"
                  }`}
                >
                  <div className="flex h-full flex-col rounded-xl border border-[#f0e0d0] bg-white shadow-lg">
                    <div className="w-full h-auto overflow-hidden">
                      <img
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-full object-contain block"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-start">
                      <h3 className="text-lg font-semibold mb-1.5 text-[#333]">
                        {project.name}
                      </h3>
                      <p className="text-sm text-[#666] leading-tight text-justify">
                        {displayedDescription}
                      </p>
                      {needsTruncation && (
                        <button
                          onClick={() => toggleReadMore(project.name)}
                          className="mt-2 text-sm text-[#E67E22] font-medium hover:text-[#D35400] focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:ring-opacity-50"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#E67E22] text-white p-3 rounded-full shadow-lg border-none cursor-pointer z-10 hover:bg-[#D35400] focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:ring-opacity-50"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#E67E22] text-white p-3 rounded-full shadow-lg border-none cursor-pointer z-10 hover:bg-[#D35400] focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:ring-opacity-50"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: projectsData.length - itemsPerPage + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ease-in-out border-none ${
                  currentIndex === index
                    ? "bg-[#E67E22] scale-125"
                    : "bg-[#ccc]"
                } focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:ring-opacity-50`}
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
