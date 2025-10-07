import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ServiceLayout.css";

const ServiceLayout = ({ 
  title, 
  image, 
  imageAlt, 
  children 
}) => {
  // Set page title using native document.title
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="service-layout">
      <header className="service-header text-center">
        <h1 className="service-title">{title}</h1>
      </header>
      
      <Container>
        <Row className="align-items-start">
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <Image
              src={image}
              alt={imageAlt}
              className="service-image shadow rounded"
              fluid
            />
          </Col>

          <Col md={8}>
            <div className="service-content">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceLayout;