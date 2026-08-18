import { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/Work.css";

gsap.registerPlugin(ScrollTrigger);

const workData = [
  {
    number: "01",
    title: "Project One",
    category: "Web Development",
    description: "Modern web application built with high performance and interactive UI components.",
    image: "/images/work.webp",
    link: "https://example.com",
  },
  {
    number: "02",
    title: "Project Two",
    category: "UI/UX Design",
    description: "Seamless user interface designed for optimal user experience and aesthetic look.",
    image: "/images/placeholder.webp",
    link: "https://example.com",
  },
  {
    number: "03",
    title: "Project Three",
    category: "E-Commerce Platform",
    description: "Scalable online shopping solution integrated with secure payment systems.",
    image: "/images/work1.webp",
    link: "https://example.com",
  },
  {
    number: "04",
    title: "Project Four",
    category: "Full Stack App",
    description: "Robust back-end architecture coupled with a dynamic front-end dashboard.",
    image: "/images/placeholder.webp",
    link: "https://example.com",
  },
  {
    number: "05",
    title: "Project Five",
    category: "Mobile Application",
    description: "Cross-platform application built for high performance on both iOS and Android.",
    image: "/images/work.webp",
    link: "https://example.com",
  },
  {
    number: "06",
    title: "Project Six",
    category: "Portfolio & Brand",
    description: "Creative portfolio showcase featuring smooth animations and 3D interactions.",
    image: "/images/work1.webp",
    link: "https://example.com",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const flex = flexRef.current;

    if (!section || !flex) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return flex.scrollWidth - window.innerWidth;
      };

      gsap.to(flex, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + flex.scrollWidth,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex" ref={flexRef}>
          {workData.map((item) => (
            <div className="work-box" key={item.number}>
              <div className="work-title">
                <h3>{item.title}</h3>
                <div>{item.number}</div>
              </div>

              <div className="work-info">
                <h4>{item.category}</h4>
                <p>{item.description}</p>
              </div>

              <div className="work-image">
                <div className="work-image-in">
                  <img src={item.image} alt={item.title} />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                    aria-label={`View ${item.title}`}
                  >
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

