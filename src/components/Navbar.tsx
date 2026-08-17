import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import AIAssistant from "./AIAssistant";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import "./styles/Navbar.css";

gsap.registerPlugin(
  ScrollSmoother,
  ScrollTrigger
);

export let smoother: ScrollSmoother;


/* =====================================================
   TAWK.TO API TYPE
   ONLY FOR LIVE CHAT BUTTON
===================================================== */

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      minimize?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;

      onLoad?: () => void;
      onChatMinimized?: () => void;
      onChatEnded?: () => void;
    };
  }
}


/* =====================================================
   NAVBAR
===================================================== */

const Navbar = () => {

  useEffect(() => {

    /* ==========================================
       SCROLL SMOOTHER
    ========================================== */

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",

      smooth: 1.7,
      speed: 1.7,

      effects: true,

      autoResize: true,

      ignoreMobileResize: true,
    });


    smoother.scrollTop(0);

    smoother.paused(true);


    /* ==========================================
       TAWK.TO
       HIDE FLOATING BUTTON
    ========================================== */

    const hideTawkWidget = () => {

      if (
        window.Tawk_API &&
        window.Tawk_API.hideWidget
      ) {

        window.Tawk_API.hideWidget();

      }

    };


    /*
     * Tawk loads asynchronously.
     * Wait until Tawk is ready.
     */

    const tawkLoadTimer =
      window.setInterval(() => {

        if (
          window.Tawk_API &&
          window.Tawk_API.hideWidget
        ) {

          hideTawkWidget();

          /*
           * Hide the default
           * floating Tawk button.
           */

          window.clearInterval(
            tawkLoadTimer
          );

        }

      }, 500);


    /*
     * When Tawk finishes loading
     */

    if (window.Tawk_API) {

      window.Tawk_API.onLoad =
        hideTawkWidget;


      /*
       * If visitor minimizes the
       * Tawk chat, hide the floating
       * button again.
       */

      window.Tawk_API.onChatMinimized =
        hideTawkWidget;


      /*
       * If chat ends, hide the
       * floating widget again.
       */

      window.Tawk_API.onChatEnded =
        hideTawkWidget;

    }


    /* ==========================================
       NAVBAR SECTION LINKS
    ========================================== */

    const links =
      document.querySelectorAll(
        ".header ul a[data-href]"
      );


    const handleClick = (e: Event) => {

      /*
       * Desktop:
       * GSAP ScrollSmoother handles navigation.
       *
       * Mobile:
       * Normal anchor behavior is preserved.
       */

      if (window.innerWidth <= 1024) {

        return;

      }


      e.preventDefault();


      const element =
        e.currentTarget as HTMLAnchorElement;


      const section =
        element.getAttribute(
          "data-href"
        );


      if (
        section &&
        smoother
      ) {

        smoother.scrollTo(
          section,
          true,
          "top top"
        );

      }

    };


    links.forEach((link) => {

      link.addEventListener(
        "click",
        handleClick
      );

    });


    /* ==========================================
       RESIZE
    ========================================== */

    const handleResize = () => {

      ScrollSmoother.refresh(true);

    };


    window.addEventListener(
      "resize",
      handleResize
    );


    /* ==========================================
       CLEANUP
    ========================================== */

    return () => {

      window.clearInterval(
        tawkLoadTimer
      );


      links.forEach((link) => {

        link.removeEventListener(
          "click",
          handleClick
        );

      });


      window.removeEventListener(
        "resize",
        handleResize
      );


      if (smoother) {

        smoother.kill();

      }

    };

  }, []);


  /* =====================================================
     OPEN TAWK.TO LIVE CHAT
     ONLY THIS IS NEW FUNCTIONALITY
===================================================== */

  const openLiveChat = () => {

    /*
     * Tawk is already loaded
     */

    if (
      window.Tawk_API &&
      window.Tawk_API.maximize
    ) {

      /*
       * Show Tawk first
       */

      if (
        window.Tawk_API.showWidget
      ) {

        window.Tawk_API.showWidget();

      }


      /*
       * Open Tawk chat
       */

      window.Tawk_API.maximize();


      return;

    }


    /*
     * If Tawk is still loading,
     * try again after a short delay.
     */

    window.setTimeout(() => {

      if (
        window.Tawk_API &&
        window.Tawk_API.maximize
      ) {

        if (
          window.Tawk_API.showWidget
        ) {

          window.Tawk_API.showWidget();

        }


        window.Tawk_API.maximize();

      }

    }, 1000);

  };


  /* =====================================================
     RETURN
===================================================== */

  return (
    <>

      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <header className="header">


        {/* ==============================================
            LEFT — WELCOME
        ============================================== */}

        <a
          href="/#"
          className="navbar-title"
          data-cursor="disable"
        >
          Assalamualaykum
        </a>


        {/* ==============================================
            CENTER — NAVIGATION
        ============================================== */}

        <ul className="navbar-menu">


          {/* ============================================
              ABOUT
          ============================================ */}

          <li>
            <a
              data-href="#about"
              href="#about"
            >
              <HoverLinks text="ABOUT" />
            </a>
          </li>


          {/* ============================================
              WORK
          ============================================ */}

          <li>
            <a
              data-href="#work"
              href="#work"
            >
              <HoverLinks text="WORK" />
            </a>
          </li>


          {/* ============================================
              MY AWARDS
          ============================================ */}

          <li>
            <a
              data-href="#achievements"
              href="#achievements"
            >
              <HoverLinks text="MY AWARDS" />
            </a>
          </li>


          {/* ============================================
              PROFILE
          ============================================ */}

          <li>
            <a
              data-href="#extra-data"
              href="#extra-data"
            >
              <HoverLinks text="PROFILE" />
            </a>
          </li>


          {/* ============================================
              SHAHIN'S ASSISTANT
              ⚠️ DO NOT CHANGE
          ============================================ */}

          <li className="shahin-assistant-nav-item">

            <AIAssistant />

          </li>


          {/* ============================================
              CONTACT
          ============================================ */}

          <li>
            <a
              data-href="#contact"
              href="#contact"
            >
              <HoverLinks text="CONTACT" />
            </a>
          </li>


          {/* ============================================
              TAWK.TO LIVE CHAT
              NEW
          ============================================ */}

          <li className="live-chat-nav-item">

            <button
              type="button"
              className="live-chat-nav-button"
              onClick={openLiveChat}
              data-cursor="disable"
              aria-label="Open Live Chat"
            >

              <span
                className="live-chat-dot"
                aria-hidden="true"
              />

              <span className="live-chat-text">
                LIVE CHAT
              </span>

            </button>

          </li>


        </ul>


        {/* ==============================================
            RIGHT — EMAIL
        ============================================== */}

        <a
          href="mailto:sherif@benhumaidgroup.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sherif@benhumaidgroup.com
        </a>

      </header>


      {/* =================================================
          LANDING DECORATION
      ================================================= */}

      <div
        className="landing-circle1"
        aria-hidden="true"
      />


      <div
        className="landing-circle2"
        aria-hidden="true"
      />


      {/* =================================================
          NAVBAR FADE
      ================================================= */}

      <div
        className="nav-fade"
        aria-hidden="true"
      />

    </>
  );
};


export default Navbar;