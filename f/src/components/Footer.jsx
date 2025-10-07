// import React from "react";
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import USAF from "../assets/USAF.png"
import AustraliaF from "../assets/AustraliaF.png"
import UKF from "../assets/UKF.png"
import GermanyF from "../assets/GermanyF.png"
import CanadaF from "../assets/CanadaF.png"
import SriLankaL from "../assets/SriLankaL.png"
import India from "../assets/India.png"
import IndonesiaL from "../assets/IndonesiaL.png"
import AustraliaL from "../assets/AustraliaL.png"
import Nepal from "../assets/Nepal.png"
import Ship from "../assets/Ship.png"
import Charminar from "../assets/Charminar.png"


function Footer() {
   const shipRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stop observing after it's visible once
        }
      },
      { threshold: 0.3 } // 30% of the image should be visible
    );

    if (shipRef.current) {
      observer.observe(shipRef.current);
          }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="custom-footer">
      <div className="full-width-container">
        <Row className="footer-top border-bottom pb-4 mb-4 gx-4 gy-4">
          <Col xs={12} md={6} className="footer-location">
            {/* <Image
              src={Ship}
              alt="Australia"
              width="120"
              height="80"
              className="footer-img"
            /> */}
             <Image
      src={Ship}
      alt="Australia"
      width="100"
      height="100"
      ref={shipRef}
      className={`footer-img ${isVisible ? "animate-in" : ""}`}
    />
            <div>
              {/* <h5>Australia</h5> */}
               <h5 className="location-heading">Australia</h5>
              <p><FaPhone className="icon" /> <a class="a-c-link" href="tel:1800959619">1800 959 619</a></p>
              <p><FaEnvelope className="icon" /><a class="a-c-link" href="mailto:migration@xcelgs.com">migration@xcelgs.com</a></p>
            </div>
          </Col>
          <Col xs={12} md={6} className="footer-location">
            {/* <Image
              src={Charminar}
              alt="India"
              width="80"
              height="120"
              className="footer-img"
              
            /> */}
             <Image
      src={Charminar}
      alt="India"
      width="80"
      height="100"
      ref={shipRef}
      className={`footer-img ${isVisible ? "animate-in" : ""}`}
    />
            <div>
              {/* <h5>India</h5> */}
               <h5 className="location-heading">India</h5>
              <p><FaPhone className="icon" /><a class="a-c-link" href="tel:919343369999">+91 93433 69999</a></p>
              <p><FaEnvelope className="icon" /><a class="a-c-link" href="mailto:kukatpally@xcelgs.com">kukatpally@xcelgs.com</a></p>
            </div>
          </Col>
        </Row>

        <Row className="footer-links text-white gx-4 gy-4">
          <Col xs={12} sm={6} md={2}>
            <h6>Study In Abroad</h6>
            <ul>
              {/* <li>🇺🇸 USA</li> */}
              <li>
                <a class="a-c-link" href="/services/education">
  <img
    src={USAF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  USA
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/education">
 <img
    src={UKF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  UK
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/education">
 <img
    src={AustraliaF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Australia
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/education">
 <img
    src={CanadaF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Canada
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/education">
 <img
    src={GermanyF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Germany
  </a>
</li>

            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <h6>Immigration</h6>
            {/* <ul>
              <li>🇺🇸 USA</li>
              <li>🇬🇧 UK</li>
              <li>🇦🇺 Australia</li>
              <li>🇨🇦 Canada</li>
              <li>🇩🇪 Germany</li>
            </ul> */}
            <ul>
              {/* <li>🇺🇸 USA</li> */}
              <li>
                <a class="a-c-link" href="/services/immigration">
  <img
    src={USAF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  USA
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/immigration">
 <img
    src={UKF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  UK
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/immigration">
 <img
    src={AustraliaF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Australia
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/immigration">
 <img
    src={IndonesiaL}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Canada
  </a>
</li>
<li>
  <a class="a-c-link" href="/services/immigration">
 <img
    src={GermanyF}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Germany
  </a>
</li>

            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <h6>Visa</h6>
            <ul>
              <li><a class="a-c-link" href="/services/education/student-visa">✓ Student Visa</a></li>
              <li><a class="a-c-link" href="/services/immigration/pr-visa">✓ PR Visa</a></li>
              <li><a class="a-c-link" href="/services/immigration/visit-visa">✓ Visitor Visa</a></li>
              <li><a class="a-c-link" href="/services/immigration/pr-visa">✓ Dependent Visa</a></li>
              <li><a class="a-c-link" href="/services/immigration/pr-visa">✓ Work Visa</a></li>
              <li><a class="a-c-link" href="/services/immigration/business-visa">✓ Business Visa</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h6>Important Links</h6>
            <ul className="important-links">
              <li><a class="a-c-link" href="/terms-and-conditions">› Terms and Conditions</a></li>
              <li><a class="a-c-link" href="/refund-policy">› Refund Policy</a></li>
              <li><a class="a-c-link" href="/privacy-policy">› Privacy Policy</a></li>
              <li><a class="a-c-link" href="/contact">› Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6>Location</h6>
            <ul>
              <li>📍 Headoffice at Melbourne,<br /> Australia</li>
              {/* <li>🇦🇺 Australia</li> */}
              <li>
 <img
    src={AustraliaL}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Australia
</li>
              {/* <li>🇮🇳 India</li> */}
              <li>
 <img
    src={India}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  India
</li>
              {/* <li>🇮🇩 Indonesia</li> */}
              <li>
 <img
    src={IndonesiaL}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Indonesia
</li>
              {/* <li>🇱🇰 Sri Lanka</li> */}
              <li>
 <img
    src={SriLankaL}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  SriLanka
</li>
              {/* <li>🇳🇵 Nepal</li> */}
              <li>
 <img
    src={Nepal}
    alt="USA Flag"
    style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
  />
  Nepal
</li>
            </ul>
          </Col>
        </Row>

        <div className="text-center mt-4 small copyright">
          © {new Date().getFullYear()} Xcelgs | All Rights Reserved
        </div>

        <div className="social-icons mt-3 text-center">
          <a href="https://www.facebook.com/xgsaus" target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/xcel_global_australia/" target="_blank"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/xcel-global-australia/" target="_blank"><FaLinkedinIn /></a>
          {/* <a href="https://twitter.com" target="_blank"><FaXTwitter /></a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
