// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";

const ServiceCategory = ({ type }) => {
  const [serviceCategory, setServiceCategory] = useState(null);

  function capitalizeWords(str) {
    return str?.replace(/\b\w/g, (char) => char.toUpperCase()) || "";
  }

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((card) => card.type === type);
        setServiceCategory(found);
      })
      .catch((err) => console.error("Error fetching card:", err));
  }, [type]);

  // Don't render until data is loaded
  if (!serviceCategory) return null;

  return (
    <div className="service-info-section">
      <header className="contact-header text-center ">
        <h1 className="header-title">
          {capitalizeWords(serviceCategory.title)}
        </h1>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="service-content text-justify">
              {parse(serviceCategory.description)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceCategory;




// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
// import { FaArrowRight } from "react-icons/fa";
// import parse from "html-react-parser";
// import { Link } from "react-router-dom";

// const ServiceCategory = ({ type }) => {
//   const [serviceCategories, setServiceCategories] = useState([]);

//   function capitalizeWords(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
//   }

//   useEffect(() => {
//     fetch("/data/service-categories.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const filtered = data.filter((card) => card.type === type);
//         setServiceCategories(filtered);
//       })
//       .catch((err) => console.error("Error fetching cards:", err));
//   }, [type]);

//   return (
//     <div className="visa-section py-5">
//       <Container>
//         {/* <h2 className="text-center fw-bold animated-heading mb-5">
//           {capitalizeWords(type)}
//         </h2> */}
//         <header className="contact-header text-center">
//           <h1 className="header-title">{capitalizeWords(type)}</h1>
//         </header>

//         <Row className="gy-4 justify-content-center">
//           {serviceCategories.map((visa, idx) => (
//             <Col key={idx} xs={12} sm={10} md={7} lg={5}>
//               <div className="d-flex justify-content-center">
//                 <Card className="visa-card p-4 border rounded h-100">
//                   <div className="d-flex flex-column flex-md-row align-items-center">
//                     <Image
//                       src={visa.img}
//                       alt={visa.title}
//                       className="animated-img me-md-4 mb-4 mb-md-0"
//                       width={200}
//                       height={200}
//                       rounded // ✅ works fine in React-Bootstrap
//                     />
//                     <div className="d-flex flex-column justify-content-between h-100">
//                       <div>
//                         <h5 className="fw-bold text-dark mb-2">{visa.title}</h5>
//                         <p className="text-muted small mb-3 text-justify">
//                           {/* {parse(visa.short_description)} */}
//                           {visa.description.length > 300
//                               ? parse(visa.description.substring(0, 300) + "...")
//                               : parse(visa.description)}
//                         </p>
//                       </div>

//                       <Link
//                         to={`/services/${visa.type}/${visa.slug}`}
//                         className="btn btn-outline-success read-more mt-3"
//                       >
//                         Read More
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           className="ms-2"
//                           width="12"
//                           height="12"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 12h14m-6-6l6 6-6 6"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ServiceCategory;
