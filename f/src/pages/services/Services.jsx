import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";  // <-- add this

import parse from "html-react-parser";

import Educ from "../../assets/Educ.png";
import Imm from "../../assets/Imm.png";
import TRA4 from "../../assets/TRA4.png";

const iconMap = {
  Educ,
  Imm,
  TRA4,
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return (
    <div>
      {/* <h1>Services</h1>
      <hr /> */}
      <header className="contact-header text-center">
        <h1 className="header-title">Services</h1>
        {/* <div className="header-subtitle">One Step Away From Expert Assistance</div> */}
      </header>
      <section className="xgs-section">
        <Container>
          <Row className="g-4 mb-5">
            {services.map((card, idx) => (
              <Col key={idx} xs={12} sm={6} lg={4}>
                <Card className="xgs-card custom-card text-center h-100">
                  <Card.Body className="d-flex flex-column justify-content-between p-3">
                    <div>
                      <div className="icon-image mb-2">
                        <Image
                          src={iconMap[card.icon]}
                          alt={card.title}
                          width={48}
                          height={48}
                        />
                      </div>
                      <Card.Title className="xgs-title mb-2">
                        {card.title}
                      </Card.Title>

                      {/* Render description correctly */}
                      <div className="xgs-text clamp-3 text-start text-justify" style={{ fontWeight: 100 }}>
                        {/* {parse(card.description)} */}
                        {card.description.length > 250
                          ? parse(card.description.substring(0, 250) + "...")
                          : parse(card.description)}
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <Link
                        to={card.link}
                        className="btn btn-outline-success read-more mt-3"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="ms-2"
                          width="12"
                          height="12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14m-6-6l6 6-6 6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
