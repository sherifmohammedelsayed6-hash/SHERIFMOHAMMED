import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  MdArrowOutward,
  MdCopyright,
  MdEmail,
  MdPhone,
} from "react-icons/md";

import "./styles/Contact.css";

const Contact = () => {
  return (
    <div
      className="contact-section section-container"
      id="contact"
    >
      <div className="contact-container">

        {/* ==========================================
            TITLE
        ========================================== */}

        <h3>Contact</h3>


        <div className="contact-flex">


          {/* ========================================
              EMAIL & PHONE
          ======================================== */}

          <div className="contact-box">

            <h4>
              <MdEmail /> Email
            </h4>

            <p>
              <a
                href="mailto:sherif@benhumaidgroup.com"
                data-cursor="disable"
              >
                sherif@benhumaidgroup.com
              </a>
            </p>


            <h4>
              <MdPhone /> Phone
            </h4>

            <p>
              <a
                href="tel:+966541381228"
                data-cursor="disable"
              >
                +966541381228
              </a>
            </p>

          </div>


          {/* ========================================
              SOCIAL
          ======================================== */}

          <div className="contact-box">

            <h4>Social</h4>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/alauddin-sahin/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span>
                <FaLinkedinIn />
                LinkedIn
              </span>

              <MdArrowOutward />
            </a>


            {/* FACEBOOK */}

            <a
              href="https://www.facebook.com/ala.uddin.shahin.567013"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span>
                <FaFacebookF />
                Facebook
              </span>

              <MdArrowOutward />
            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/alauddinsahin1212"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span>
                <FaInstagram />
                Instagram
              </span>

              <MdArrowOutward />
            </a>


            {/* WHATSAPP */}

            <a
              href="https://wa.me/966541381228"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span>
                <FaWhatsapp />
                WhatsApp
              </span>

              <MdArrowOutward />
            </a>

          </div>


          {/* ========================================
              FOOTER
          ======================================== */}

          <div className="contact-box">

            <h2>
              Designed and Developed
              <br />
              by <span>ALA UDDIN SHAHIN</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
