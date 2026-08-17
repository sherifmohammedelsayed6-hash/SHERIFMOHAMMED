import "./styles/ExtraData.css";

const ExtraData = () => {
  return (
    <section
      className="extra-data-section"
      id="extra-data"
    >
      <div className="extra-data-container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="extra-data-heading">

          <span className="extra-small-title">
            PERSONAL PROFILE
          </span>

          <h2>
            My <span>Profile</span>
          </h2>

          <p>
            Education, professional background, personal information
            and business experience.
          </p>

        </div>


        {/* ==========================================
            EDUCATION + BIO DATA
        ========================================== */}

        <div className="profile-grid">


          {/* ========================================
              EDUCATION
          ======================================== */}

          <div className="profile-card education-card">

            <div className="card-heading">

              <span className="card-number">
                01
              </span>

              <div>
                <h3>Education</h3>

                <p>
                  Academic Background
                </p>
              </div>

            </div>


            <div className="education-list">


              {/* EDUCATION 01 */}

              <div className="education-item">

                <span className="education-dot"></span>

                <div className="education-content">

                  <span className="education-level">
                    PLAYGROUP — CLASS 05
                  </span>

                  <h4>
                    Sunrise Academy
                  </h4>

                  <p>
                    Primary Education
                  </p>

                  <small>
                    Feni, Bangladesh
                  </small>

                </div>

              </div>


              {/* EDUCATION 02 */}

              <div className="education-item">

                <span className="education-dot"></span>

                <div className="education-content">

                  <span className="education-level">
                    CLASS 06 — CLASS 10
                  </span>

                  <h4>
                    Dhalia High School
                  </h4>

                  <p>
                    Secondary Education
                  </p>

                  <small>
                    Feni, Bangladesh
                  </small>

                </div>

              </div>


              {/* EDUCATION 03 */}

              <div className="education-item">

                <span className="education-dot"></span>

                <div className="education-content">

                  <span className="education-level">
                    H.S.C
                  </span>

                  <h4>
                    Sonagazi Government College
                  </h4>

                  <p>
                    Higher Secondary Certificate
                  </p>

                  <small>
                    Feni, Bangladesh
                  </small>

                </div>

              </div>


              {/* EDUCATION 04 */}

              <div className="education-item">

                <span className="education-dot"></span>

                <div className="education-content">

                  <span className="education-level">
                    B.B.A
                  </span>

                  <h4>
                    Feni University
                  </h4>

                  <p>
                    Bachelor of Business Administration
                  </p>

                  <small>
                    Feni, Bangladesh
                  </small>

                </div>

              </div>

            </div>

          </div>



          {/* ========================================
              BIO DATA
          ======================================== */}

          <div className="profile-card biodata-card">

            <div className="card-heading">

              <span className="card-number">
                02
              </span>

              <div>
                <h3>Bio Data</h3>

                <p>
                  Personal Information
                </p>
              </div>

            </div>


            <div className="biodata-list">


              <div className="bio-row">
                <span>Full Name</span>
                <strong>
                  SHERIF MOHAMMED EL SAYED
                </strong>
              </div>


              <div className="bio-row">
                <span>Father's Name</span>
                <strong>
                  ********
                </strong>
              </div>


              <div className="bio-row">
                <span>Mother's Name</span>
                <strong>
                  ********
                </strong>
              </div>


              <div className="bio-row">
                <span>Wife</span>
                <strong>
                  ***************
                </strong>
              </div>


              <div className="bio-row">
                <span>Daughter</span>
                <strong>
                  ************
                </strong>
              </div>


              <div className="bio-row">
                <span>Date of Birth</span>
                <strong>
                  07 March 1984
                </strong>
              </div>


              <div className="bio-row">
                <span>Marital Status</span>
                <strong>
                  Married
                </strong>
              </div>


              <div className="bio-row">
                <span>Gender</span>
                <strong>
                  Male
                </strong>
              </div>


              <div className="bio-row">
                <span>Home</span>
                <strong>
                  Ibrahim Peshker Bari
                </strong>
              </div>


              <div className="bio-row">
                <span>Address</span>
                <strong>
                  Dhalia Bazar, Feni - 3900,
                  Bangladesh
                </strong>
              </div>

            </div>

          </div>

        </div>



        {/* ==========================================
            BOARD EXAMINATIONS
        ========================================== */}

        <div className="profile-card board-card">

          <div className="card-heading">

            <span className="card-number">
              03
            </span>

            <div>
              <h3>Board Examinations</h3>

              <p>
                Academic Certifications
              </p>
            </div>

          </div>


          <div className="board-grid">


            {/* PSC */}

            <div className="board-item">

              <span>
                01
              </span>

              <h4>
                P.S.C
              </h4>

              <p>
                Primary School Certificate
              </p>

              <small>
                Feni, Bangladesh
              </small>

            </div>


            {/* JSC */}

            <div className="board-item">

              <span>
                02
              </span>

              <h4>
                J.S.C
              </h4>

              <p>
                Junior School Certificate
              </p>

              <small>
                Feni, Bangladesh
              </small>

            </div>


            {/* SSC */}

            <div className="board-item">

              <span>
                03
              </span>

              <h4>
                S.S.C
              </h4>

              <p>
                Secondary School Certificate
              </p>

              <small>
                Feni, Bangladesh
              </small>

            </div>


            {/* HSC */}

            <div className="board-item">

              <span>
                04
              </span>

              <h4>
                H.S.C
              </h4>

              <p>
                Higher Secondary Certificate
              </p>

              <small>
                Feni, Bangladesh
              </small>

            </div>

          </div>

        </div>



        {/* ==========================================
            BUSINESS EXPERIENCE
        ========================================== */}

        <div className="profile-card business-card">

          <div className="card-heading">

            <span className="card-number">
              04
            </span>

            <div>
              <h3>Business Experience</h3>

              <p>
                Entrepreneurship &amp; Business Background
              </p>
            </div>

          </div>


          <div className="business-grid">


            {/* BUSINESS 01 */}

            <div className="business-item">

              <div className="business-icon">
                01
              </div>

              <div>

                <span>
                  OWNER / ENTREPRENEUR
                </span>

                <h4>
                  Fenian Fashion
                </h4>

                <p>
                  Independent retail business in Bangladesh,
                  focused on fashion, products and customer service.
                </p>

              </div>

            </div>


            {/* BUSINESS 02 */}

            <div className="business-item">

              <div className="business-icon">
                02
              </div>

              <div>

                <span>
                  OWNER / ENTREPRENEUR
                </span>

                <h4>
                  Nexoria BD
                </h4>

                <p>
                  Independent business venture in Bangladesh
                  focused on modern products and digital business
                  opportunities.
                </p>

              </div>

            </div>

          </div>

        </div>



        {/* ==========================================
            PROFESSIONAL SUMMARY
        ========================================== */}

        <div className="profile-card summary-card">

          <div className="card-heading">

            <span className="card-number">
              05
            </span>

            <div>
              <h3>Professional Summary</h3>

              <p>
                Career &amp; Professional Identity
              </p>
            </div>

          </div>


          <div className="summary-content">

            <p>
              Sales Executive, E-Commerce Specialist and Air Gun
              Technician with extensive experience at Arabian Hunter
              from 2018 to present.
            </p>

            <p>
              Experienced in sales, customer service, online store
              management, product management, inventory, order
              processing, e-commerce operations, air gun maintenance
              and technical troubleshooting.
            </p>

          </div>

        </div>



        {/* ==========================================
            FOOTER
        ========================================== */}

        <div className="profile-footer">

          <span>
            SHERIF MOHAMMED EL SAYED
          </span>

          <p>
            PERSONAL PROFILE • FENI, BANGLADESH
          </p>

        </div>

      </div>

    </section>
  );
};

export default ExtraData;