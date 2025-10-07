import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"; // ✅ Import from react-bootstrap
import YearsLogo from "../assets/YearsLogo.png";
import Books from "../assets/Books.png";
import Family from "../assets/Family.png";
import Presentation from "../assets/Presentation.png"; // ✅ Missing import

const About = () => {
  return (
    <div className="contact-page">
      <header className="contact-header text-center">
        <h1 className="header-title">About Us</h1>
      </header>
       {/* ----------------------WHY CHOOSE US-------------------------------------------- */}
       <section className="why-choose-section">
            <Container className="py-5">
              <Row className="gx-5">
                {/* Left Image Column */}
               
      <Col md={3} className="d-flex flex-column align-items-center gap-4 mb-4 mb-md-0">
        <Image
          src={Books}
          alt="Books with graduation cap"
          // className="rounded"
           className="rounded animated-img"
          fluid
         
        />
        <Image
          src={Presentation}
          alt="Business meeting"
          // className="rounded"
           className="rounded animated-img"
          fluid
         
        />
      </Col>
      
      {/* Middle Image */}
      <Col md={3} className="d-flex justify-content-center mb-4 mb-md-0">
        <Image
          src={Family}
          alt="Family at airport"
          className="rounded animated-img h-100 w-100 object-fit-cover "
          fluid
      
        />
      </Col>
      
      
      
      
                {/* Text Column */}
                <Col md={6}>
                  <p className="text-dark fw-bold fs-4 mb-2" style={{ letterSpacing: "0.5px", textTransform: "uppercase" }}>
        Why Choose Us
      </p>
      
                <h2 className="fw-bold mb-4 animated-heading">
        One-Stop Destination for <br /> All Abroad Needs
      </h2>
      
      
                  <p className="text-muted">
                    {/* At XCEL GLOBAL SERVICES, we believe your dreams of going abroad should be exciting—not overwhelming. That’s why we’ve built a comprehensive platform for your journey—study, work, migrate, or travel. */}
                    Xcel Global Services stands out for its trusted expertise in overseas education,
                    immigration,and training.with certified counselors and licensed migration agents,we offer personalized guidance tailored to your academic or migration goals.our end-to-end support ensures a smooth journey -from application to visa-delivered with complete transparency and care.with a strong track record of success and satisfied clients across Australia and India,we are the reliable partner you can count on.
                  </p>
                  <p className="text-muted">
                    Here’s why thousands trust us to turn their global aspirations into reality:
                  </p>
                  
                  <Row className="align-items-center mt-4" align="left">
        {/* Left Column - List */}
        <Col md={8}>
          <ul className="list-unstyled mb-0">
            {[
              "End-to-End Abroad Solutions",
              "Trusted Experts, Proven Results",
              "Personalized Approach",
              "Strong Global Network",
              "Transparent Process",
              "Multilingual & Multicultural Support",
              "Fast, Reliable, and Stress-Free",
            ].map((item, idx) => (
              <li className="d-flex align-items-start gap-2 text-muted mb-2" key={idx}>
                <span className="text-success mt-1">
                  <i className="fas fa-check-circle"></i>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Col>
      
        {/* Right Column - Badge Image */}
        <Col
          md={4}
          className="d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0"
        >
          <Image
            src={YearsLogo}
            alt="15 years badge"
            width={200}
            height={200}
          />
          {/* <p className="fw-bold mt-2 text-center text-md-start">
            EMPOWERING <br /> ABROAD DREAMS
          </p> */}
        </Col>
      </Row>
      
                </Col>
              </Row>
            </Container>
          </section>
    </div>
  );
};

export default About;
