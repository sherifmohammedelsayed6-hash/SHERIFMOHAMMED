import type { ReactNode } from "react";
import {
  FaBriefcase,
  FaShoppingCart,
  FaTools,
  FaTrophy,
} from "react-icons/fa";

import "./styles/Career.css";

type CareerItem = {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  position:
    | "top"
    | "top-left"
    | "top-right"
    | "left"
    | "right"
    | "bottom-left"
    | "bottom-right"
    | "bottom";
};

const careerData: CareerItem[] = [
  /* =====================================================
     2018
  ===================================================== */
  {
    year: "2018",
    title: "Arabian Hunter",
    description:
      "Started my professional journey at Arabian Hunter with a focus on sales, customer service and product consultation.",
    icon: <FaBriefcase />,
    position: "top",
  },

  /* =====================================================
     2019
  ===================================================== */
  {
    year: "2019",
    title: "Arabian Hunter",
    description:
      "Expanded my sales experience through customer engagement, product presentation and exhibition activities.",
    icon: <FaTrophy />,
    position: "top-left",
  },

  /* =====================================================
     2020
  ===================================================== */
  {
    year: "2020",
    title: "Arabian Hunter",
    description:
      "Continued developing sales performance, customer support and product consultation skills.",
    icon: <FaShoppingCart />,
    position: "top-right",
  },

  /* =====================================================
     2021
  ===================================================== */
  {
    year: "2021",
    title: "Arabian Hunter",
    description:
      "Strengthened customer relationships and continued professional development in sales operations.",
    icon: <FaBriefcase />,
    position: "left",
  },

  /* =====================================================
     2022
  ===================================================== */
  {
    year: "2022",
    title: "Arabian Hunter",
    description:
      "Focused on customer service, sales performance and product knowledge.",
    icon: <FaShoppingCart />,
    position: "right",
  },

  /* =====================================================
     2023
  ===================================================== */
  {
    year: "2023",
    title: "Best Seller",
    description:
      "Recognized for strong sales performance and consistent customer-focused service.",
    icon: <FaTrophy />,
    position: "bottom-left",
  },

  /* =====================================================
     2024
  ===================================================== */
  {
    year: "2024",
    title: "Arabian Hunter",
    description:
      "Continued supporting sales, customer service and product operations with growing experience.",
    icon: <FaBriefcase />,
    position: "bottom-right",
  },

  /* =====================================================
     2025
  ===================================================== */
  {
    year: "2025",
    title: "Arabian Hunter",
    description:
      "Expanded responsibilities across online operations, product management and technical support.",
    icon: <FaTools />,
    position: "bottom",
  },
];


/* =====================================================
   CONNECTOR POSITIONS

   8 lines only:
   2018
   2019
   2020
   2021
   2022
   2023
   2024
   2025

   2026 PRESENT connector removed.
===================================================== */

const connectorLines = [
  {
    x2: 50,
    y2: 10,
  },

  {
    x2: 22,
    y2: 23,
  },

  {
    x2: 78,
    y2: 23,
  },

  {
    x2: 9,
    y2: 50,
  },

  {
    x2: 91,
    y2: 50,
  },

  {
    x2: 22,
    y2: 77,
  },

  {
    x2: 78,
    y2: 77,
  },

  {
    x2: 50,
    y2: 89,
  },
];


/* =====================================================
   CAREER COMPONENT
===================================================== */

const Career = () => {
  return (
    <section
      className="career-section"
      id="career"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="career-heading">

        <span className="career-eyebrow">
          MY PROFESSIONAL JOURNEY
        </span>

        <h2>
          Career <span>&</span> Experience
        </h2>

        <p>
          A visual timeline of my professional journey,
          experience and growth at Arabian Hunter.
        </p>

      </div>


      {/* =================================================
          LANDSCAPE TIMELINE
      ================================================= */}

      <div className="career-map">


        {/* =================================================
            CONNECTOR SVG
        ================================================= */}

        <svg
          className="career-connectors"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >

          {connectorLines.map((line, index) => (
            <line
              key={index}
              x1="50"
              y1="50"
              x2={line.x2}
              y2={line.y2}
              className="career-connector-line"
            />
          ))}

        </svg>


        {/* =================================================
            CENTER AVATAR
        ================================================= */}

        <div className="career-center">


          {/* CENTER RING */}

          <div className="career-center-ring">

            <div className="career-center-image">

              <img
                src="/images/avatar.png"
                alt="Ala Uddin Shahin"
              />

            </div>

          </div>


          {/* CENTER GLOW */}

          <div className="career-center-glow" />


          {/* CENTER DOT */}

          <div className="career-center-dot" />


          {/* CENTER TEXT */}

          <div className="career-center-label">

            <span>
              <strong> 2026 PRESENT</strong>
            </span>

            <strong>
              ARABIAN HUNTER
            </strong>

          </div>

        </div>


        {/* =================================================
            CAREER CARDS
        ================================================= */}

        {careerData.map((item, index) => (

          <article
            className={`career-card career-card-${item.position}`}
            key={`${item.year}-${index}`}
          >

            {/* CARD ICON */}

            <div className="career-card-icon">
              {item.icon}
            </div>


            {/* YEAR */}

            <span className="career-year">
              {item.year}
            </span>


            {/* TITLE */}

            <h3>
              {item.title}
            </h3>


            {/* SMALL LINE */}

            <div className="career-card-line" />


            {/* DESCRIPTION */}

            <p>
              {item.description}
            </p>


            {/* CARD NUMBER */}

            <span className="career-card-number">
              {String(index + 1).padStart(2, "0")}
            </span>

          </article>

        ))}

      </div>


      {/* =================================================
          BOTTOM INFO
      ================================================= */}

      <div className="career-bottom">

        <div className="career-bottom-line" />

        <span>
          <strong>
          SALES
          </strong>
        </span>

        <span>
          <strong>
          E-COMMERCE
          </strong>
        </span>

        <span>
          <strong>
         CUSTOMER SERVICE
          </strong>
        </span>

        <span>
          <strong>
          TECHNICAL OPERATIONS
          </strong>
        </span>

      </div>

    </section>
  );
};

export default Career;
