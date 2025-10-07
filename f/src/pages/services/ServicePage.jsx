// src/pages/Home.jsx (or ServicePage.jsx if renamed)
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import "./ServicePage.css";   // 👈 import CSS here

const ServicePage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  useEffect(() => {
    fetch("/data/service-categories.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setService(found);
      })
      .catch((err) => console.error("Error fetching card:", err));
  }, [slug]);

  if (!service) {
    return (
      <div className="text-center py-5">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="service-info-section">
      <header className="contact-header text-center">
          <h1 className="header-title">{capitalizeWords(service.title)}</h1>
        </header>
      <Container>
        {/* Page Heading */}
        {/* <Row className="mb-5">
          <Col>
            <h1 className="fw-bold text-center text-dark">
              {service.title}
            </h1>
          </Col>
        </Row> */}

        {/* Image left + Content right */}
        <Row className="align-items-start">
          <Col md={3} className="mb-4 mb-md-0 text-center">
            <Image
              src={service.img}
              alt={service.title}
              className="service-image shadow rounded"
              fluid
            />
          </Col>

          <Col md={9}>
            <div className="service-content text-justify">
              {parse(service.description)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicePage;
