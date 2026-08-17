import { MdArrowOutward } from "react-icons/md";
import "./styles/Achievements.css";

const achievements = [
  {
    number: "01",
    year: "2023",
    title: "Best Seller Award",
    company: "Online Store",
    description:
      "Recognized as an outstanding online store best seller for excellent sales performance and customer satisfaction.",
    image: "/images/certificate2.webp",
  },
  {
    number: "02",
    year: "2019",
    title: "Saudi Falcon Exhibition",
    company: "Saudi Falcon Exhibition",
    description:
      "Participated in the Saudi Falcon Exhibition 2019 with valuable experience in sales, customer service and the falconry industry.",
    image: "/images/certificate2.webp",
  },
  {
    number: "03",
    year: "2019",
    title: "Best Seller Award",
    company: "Asswaiba Company",
    description:
      "Awarded Best Seller by Asswaiba Company during the Saudi Falcon Exhibition 2019.",
    image: "/images/certificate2.webp",
  },
  {
    number: "04",
    year: "2026",
    title: "Best Seller & Online Store Management",
    company: "Arabian Hunter",
    description:
      "Recognized for outstanding performance in online store management, sales and e-commerce operations.",
    image: "/images/certificate2.webp",
  },
  {
    number: "05",
    year: "2020",
    title: "Best Seller Award",
    company: "Arabian Hunter — Khamis Branch",
    description:
      "Recognized as a Best Seller at Arabian Hunter Khamis Branch for outstanding sales performance and customer service.",
    image: "/images/work.webp",
  },
  {
    number: "06",
    year: "2026",
    title: "Saudi Falcon Exhibition Achievement",
    company: "Arabian Hunter",
    description:
      "Recognition received at the 2026 Saudi Falcon Exhibition for dedication, contribution and outstanding sales performance.",
    image: "/images/placeholder.webp",
  },
];

const Achievements = () => {
  const openImage = (image: string) => {
    window.open(image, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="achievements-heading">
          <span>RECOGNITION &amp; AWARDS</span>

          <h2>
            My <strong>Achievements</strong>
          </h2>

          <p>
            A collection of professional achievements, awards and
            recognitions earned throughout my career.
          </p>
        </div>


        {/* ==========================================
            ACHIEVEMENT LIST
        ========================================== */}

        <div className="achievements-list">

          {achievements.map((achievement) => (
            <div
              className="achievement-card"
              key={achievement.number}
            >

              {/* NUMBER */}

              <div className="achievement-number">
                {achievement.number}
              </div>


              {/* CONTENT */}

              <div className="achievement-content">

                <span className="achievement-year">
                  {achievement.year}
                </span>

                <h3>
                  {achievement.title}
                </h3>

                <h4>
                  {achievement.company}
                </h4>

                <p>
                  {achievement.description}
                </p>

              </div>


              {/* ==================================
                  CERTIFICATE IMAGE
              ================================== */}

              <button
                type="button"
                className="achievement-image"
                onClick={() => openImage(achievement.image)}
                aria-label={`Open ${achievement.title} certificate`}
              >

                <img
                  src={achievement.image}
                  alt={achievement.title}
                  loading="lazy"
                  draggable="false"
                />

                <span className="achievement-view">
                  <MdArrowOutward />
                </span>

              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;
