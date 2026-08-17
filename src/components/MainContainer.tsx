import {
  lazy,
  PropsWithChildren,
  Suspense,
  useEffect,
  useState,
} from "react";

import About from "./About";
import Achievements from "./Achievements";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import ExtraData from "./ExtraData";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({
  children,
}: PropsWithChildren) => {

  /* =====================================================
     DESKTOP / MOBILE VIEW
  ===================================================== */

  const [isDesktopView, setIsDesktopView] =
    useState<boolean>(
      window.innerWidth > 1024
    );


  /* =====================================================
     WINDOW RESIZE
  ===================================================== */

  useEffect(() => {

    const resizeHandler = () => {

      setSplitText();

      setIsDesktopView(
        window.innerWidth > 1024
      );

    };

    resizeHandler();

    window.addEventListener(
      "resize",
      resizeHandler
    );

    return () => {

      window.removeEventListener(
        "resize",
        resizeHandler
      );

    };

  }, []);


  /* =====================================================
     MAIN
  ===================================================== */

  return (
    <div className="container-main">

      {/* =================================================
          CUSTOM CURSOR
      ================================================= */}

      <Cursor />


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          SOCIAL ICONS + CV
      ================================================= */}

      <SocialIcons />


      {/* =================================================
          DESKTOP CHARACTER / MAIN CONTENT
      ================================================= */}

      {isDesktopView && children}


      {/* =================================================
          SMOOTH SCROLL
      ================================================= */}

      <div id="smooth-wrapper">

        <div id="smooth-content">

          <div className="container-main">


            {/* =================================================
                LANDING
            ================================================= */}

            <Landing>

              {!isDesktopView && children}

            </Landing>


            {/* =================================================
                ABOUT
            ================================================= */}

            <About />


            {/* =================================================
                WHAT I DO
            ================================================= */}

            <WhatIDo />


            {/* =================================================
                CAREER
            ================================================= */}

            <Career />


            {/* =================================================
                MY WORK
            ================================================= */}

            <Work />


            {/* =================================================
                ACHIEVEMENTS
            ================================================= */}

            <Achievements />


            {/* =================================================
                MY TECH STACK
            ================================================= */}

            {isDesktopView && (
              <Suspense
                fallback={
                  <div>
                    Loading....
                  </div>
                }
              >
                <TechStack />
              </Suspense>
            )}


            {/* =================================================
                EXTRA DATA
            ================================================= */}

            <ExtraData />


            {/* =================================================
                CONTACT
            ================================================= */}

            <Contact />


          </div>

        </div>

      </div>

    </div>
  );
};

export default MainContainer;