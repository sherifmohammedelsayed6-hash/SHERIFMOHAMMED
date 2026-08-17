import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";

import { TbNotes } from "react-icons/tb";

import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-fixed-group">

      {/* ================================
          SOCIAL ICONS
      ================================= */}

      <div className="social-icons">

        {/* GITHUB */}
        <a
          href="https://github.com/onlinestore111arabianhunter"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>


        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/alauddin-sahin/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>


        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/ala.uddin.shahin.567013"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>


        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/alauddinsahin1212"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>


        {/* WHATSAPP */}
        <a
          href="https://wa.me/966541381228"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

      </div>


      {/* ================================
          VIEW CV
      ================================= */}

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
        aria-label="View CV"
      >

        <span className="resume-text">
          VIEW CV
        </span>

        <span className="resume-icon">
          <TbNotes />
        </span>

      </a>

    </div>
  );
};

export default SocialIcons;