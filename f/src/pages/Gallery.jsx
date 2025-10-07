// src/pages/Home.jsx
import React, { useEffect,useRef , useState } from "react";

import { Container, Row, Col, Button, Card, Image ,Carousel,Modal,Form} from "react-bootstrap";
import "./Home.css";
import Imm from "../assets/Imm.png"
import HeroBanner from "../assets/HeroBanner.svg";
import Countries from "../assets/Countries.png";
import XgsBanner3 from "../assets/XgsBanner3.png";
import XgsBanner4 from "../assets/XgsBanner4.png";
import GradImg from "../assets/GradImg.png";
import Books from "../assets/Books.png";
import Presentation from "../assets/Presentation.png";
import Family from "../assets/Family.png";
import YearsLogo from "../assets/YearsLogo.png";
import Uk from "../assets/UK.png";
import USA from "../assets/USA.png";
import Australia from "../assets/Australia.png";
import Canada from "../assets/Canada.png";
import Germany from "../assets/Germany.png";
import { useInView } from "react-intersection-observer"; 
import XgsLogo1 from "../assets/XgsLogo1.png";
import CountSideImg from "../assets/CountSideImg.png";
import TRA4 from "../assets/TRA4.png";
import Educ from "../assets/Educ.png";
import HASINDU from "../assets/HASINDU.png";
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";
import IELTS from "../assets/IELTS.png";
import Pearson from "../assets/Pearson.png";
import GRE from "../assets/GRE.png";
import Arrow from "../assets/Arrow.png";

import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TestimonalImg from "../assets/TestimonalImg.png"


import { FaCalendarAlt, FaUser, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import RN1 from "../assets/RN1.png";
import RN2 from "../assets/RN2.png";
import RN3 from "../assets/RN3.png";

import RBLOGS from "../assets/RBLOGS.png"
import worldImage from "../assets/worldImage.png"
import BannerImage from "../assets/BannerImage.png"





const teamMembers = [
  {
    name: "Pooja Rawal",
    role: "Relationship Associate - Admissions",
    region: "(Aus & Sri Lanka)",
    img: "https://web.archive.org/web/20241205055412im_/https://www.xcelgs.com.au/assets/images/team/1.jpg",
  },
  {
    name: "Jasmine Saluja",
    role: "Relationship Associate - Admissions",
    region: "(Aus & Sri Lanka)",
    img: "https://web.archive.org/web/20241205055412im_/https://www.xcelgs.com.au/assets/images/team/4.jpg",
  },
  {
    name: "Deepthi",
    role: "Relationship Associate - Admissions",
    region: "(Aus & Sri Lanka)",
    img: "https://web.archive.org/web/20241205055412im_/https://www.xcelgs.com.au/assets/images/team/6.jpg",
  },
   {
    name: "Prativa Rawal",
    role: "Relationship Associate - Admissions",
    region: "(Aus & Sri Lanka)",
    img: "https://web.archive.org/web/20241014191106im_/https://www.xcelgs.com.au/assets/images/team/7.jpg",
  },
   {
    name: "Sanketh",
    role: "Relationship Associate - Admissions",
    region: "(Aus & Sri Lanka)",
    img: "https://web.archive.org/web/20241205055412im_/https://www.xcelgs.com.au/assets/images/team/5.jpg",
  },
   {
    name: "Hasindu",
    role: "Relationship Associate - Admissions",
    region: "(Aus & Sri Lanka)",
    img: HASINDU,
  },
  //  {
  //   name: "Pooja Rawal",
  //   role: "Relationship Associate - Admissions",
  //   region: "(Aus & Sri Lanka)",
  //   img: "https://web.archive.org/web/20241205055412im_/https://www.xcelgs.com.au/assets/images/team/1.jpg",
  // },
  //  {
  //   name: "Pooja Rawal",
  //   role: "Relationship Associate - Admissions",
  //   region: "(Aus & Sri Lanka)",
  //   img: "https://web.archive.org/web/20241205055412im_/https://www.xcelgs.com.au/assets/images/team/1.jpg",
  // },
];
// -------------------------------------------

const banners = [
  {
    src: XgsBanner4,
    alt: "Banner 1",
  },
  // {
  //   src: Countries,
  //   alt: "Banner 2",
  // },
  {
    src: XgsBanner3,
    alt: "Banner 3",
  },
  // {
  //   src: Countries,
  //   alt: "Banner 4",
  // },

]


const Home = () => {







  // -----------------------------------------

const cardData = [
  {
    title: "Education",
    icon: Educ,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac consectetur elit...",
  },
  {
    title: "Immigration",
    icon: Imm,
    description:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac consectetur elit...",
  },
  {
    title: "Training",
    icon: TRA4,
  
    description:
      "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac consectetur elit...",
         className:"training-logo",
  },
];
// -------------FLAGS BOX----------------------------------------------
const destinations = [
  {
    name: "USA",
    img: USA,
    flag: "https://flagcdn.com/us.svg",
  },
 {
    name: "UK",
    img: Uk, // ✅ matches the imported variable
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    name: "AUSTRALIA",
    img: Australia,
    flag: "https://flagcdn.com/au.svg",
  },
  {
    name: "CANADA",
    img: Canada,
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    name: "GERMANY",
    img: Germany,
    flag: "https://flagcdn.com/de.svg",
  },
   {
    name: "Ireland",
    img: "https://thumbs.dreamstime.com/b/ireland-visa-passport-usa-immigration-citizens-focusing-word-travel-national-identification-close-up-d-rendering-multi-204151489.jpg",
    flag: "https://cdn.britannica.com/33/1733-131-C0C3C1CF/FLAG-Ireland.jpg?w=200&h=200&c=crop",
  },
   {
    name: "Indonesia",
    img: "https://globalindiannetwork.com/wp-content/uploads/indonesian-business-visa-for-indian.webp",
    flag: "https://static.vecteezy.com/system/resources/previews/015/272/227/non_2x/indonesia-3d-rounded-flag-with-transparent-background-free-png.png",
  },
];
 

// ---------------------------------------------------------------

const visaCards = [
  {
    title: "PR Visa",
    img: "https://storage.googleapis.com/a1aa/image/f9e09e7a-858c-4849-dd13-60f5050235de.jpg",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu,Et purus duis sollicitudin dignissim habitant...",
  },
  {
    title: "Student Visa",
    img: "https://storage.googleapis.com/a1aa/image/4cf427e8-2cce-4eb8-06e0-f1b6a92fa20f.jpg",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu,Et purus duis sollicitudin dignissim habitant...",
  },
  {
    title: "Visit Visa",
    img: "https://storage.googleapis.com/a1aa/image/c4adaf1b-fa79-4ed3-5cde-feea270f0090.jpg",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu,Et purus duis sollicitudin dignissim habitant...",
  },
  {
    title: "Business Visa",
    img: "https://storage.googleapis.com/a1aa/image/e919ccc2-015a-4e8a-cb4a-09ad6988d73c.jpg",
    description:
      "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
  },
];
// -------------countup-----------------------------
  const [displayed, setDisplayed] = useState({
    years: 0,
    visa: 0,
    success: 0,
  });

  const actual = {
    years: 15,
    visa: 1000,
    success: 96,
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    let count = 0;
    const interval = setInterval(() => {
      count++;

      if (count >= 10) {
        clearInterval(interval);
        setDisplayed(actual);
      } else {
        setDisplayed({
          years: Math.floor(Math.random() * 50) + 1,
          visa: Math.floor(Math.random() * 1200) + 100,
          success: Math.floor(Math.random() * 100),
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [inView]); 



const logos = [
  {
    alt: 'QEAC',
    src: 'https://xcelgs.com/assets/img/test/1.png',
    className:"accreditation-logo" ,
  },
  {
    alt: 'ETS',
    src: 'https://xcelgs.com/assets/img/test/2.png',
    className:"accreditation-logo" ,
  },
  {
    alt: 'MARA',
    src: 'https://xcelgs.com/assets/img/test/3.png',
    className:"accreditation-logo" ,
  },
  {
    alt: 'IELTS',
    src: 'https://xcelgs.com/assets/img/test/4.png',
    className:"accreditation-logo" ,
  },
  {
    alt: 'PTE Academic',
    src: 'https://xcelgs.com/assets/img/test/5.png',
    className:"accreditation-logo" ,
  },
];

const trainings = [
  {
    title: 'IELTS Coaching',
    desc: 'There are many variati of passages of engineer many variati of passages ...',
    img: IELTS,
  },
  {
    title: 'PTE Coaching',
    desc: 'There are many variati of passages of engineer many variati of passages ...',
    img: Pearson
  },
  {
    title: 'GRE Coaching',
    desc: 'There are many variati of passages of engineer many variati of passages ...',
    img: GRE,
  },
];

  useEffect(() => {
  const cards = document.querySelectorAll(".team-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach((card) => observer.observe(card));
}, []);
// -------------------------------------------

 const [visibleMembers, setVisibleMembers] = useState(teamMembers.slice(0, 3));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleMembers(teamMembers);
    }, 1000);

    return () => clearTimeout(timeout);
  },[]);
  
// -----------------------------RECENT NEWS-------------------------------

const newsData = [
  {
    date: "May 28, 2025",
    img: RN1,
    title: "Strengthening ImmiAccount security through Multi-factor Authentication (MFA)",
    subtitle: "Multi-factor authentication is coming to ImmiAccount",
    highlight: "18 June"
  },
  {
    date: "May 23, 2025",
    img: RN2,
    title: "Strengthening ImmiAccount security through Multi-factor Authentication (MFA)",
    subtitle: "Multi-factor authentication is coming to ImmiAccount",
    highlight: "18 June"
  },
  {
    date: "May 19, 2025",
    img: RN3,
    title: "Strengthening ImmiAccount security through Multi-factor Authentication (MFA)",
    subtitle: "Multi-factor authentication is coming to ImmiAccount",
    highlight: "18 June"
  },
  {
    date: "May 19, 2025",
    img: RN3,
    title: "Strengthening ImmiAccount security through Multi-factor Authentication (MFA)",
    subtitle: "Multi-factor authentication is coming to ImmiAccount",
    highlight: "18 June"
  },
  {
    date: "May 19, 2025",
    img: RN3,
    title: "Strengthening ImmiAccount security through Multi-factor Authentication (MFA)",
    subtitle: "Multi-factor authentication is coming to ImmiAccount",
    highlight: "18 June"
  },
   
];
// ---------------------------------------------

const blogs = [
  {
    date: "May 27, 2025",
    author: "admin",
    title: "Guide to Become Permanent Resident in Australia in 2025",
    description:
      "Are you dreaming of settling in Australia? Have you thought about applying permanent residency (PR)? If not, then let us walk you ...",
    image:
      RBLOGS,
  },
  {
    date: "May 20, 2025",
    author: "admin",
    title: "Top Universities in Australia Offering PR Courses",
    description:
      "Here’s a list of top universities in Australia that offer courses aligned with PR. These courses can help you increase your PR chances...",
    image:
      RBLOGS,
  },
  {
    date: "May 13, 2025",
    author: "admin",
    title: "Skilled Occupation List for Australia PR 2025",
    description:
      "Australia has an updated Skilled Occupation List for 2025. Know what job roles are in demand and how they affect your PR eligibility...",
    image:
      RBLOGS,
  },
  {
    date: "May 20, 2025",
    author: "admin",
    title: "Top Universities in Australia Offering PR Courses",
    description:
      "Here’s a list of top universities in Australia that offer courses aligned with PR. These courses can help you increase your PR chances...",
    image:
      RBLOGS,
  },
  {
    date: "May 20, 2025",
    author: "admin",
    title: "Top Universities in Australia Offering PR Courses",
    description:
      "Here’s a list of top universities in Australia that offer courses aligned with PR. These courses can help you increase your PR chances...",
    image:
      RBLOGS,
  },
];

// -----------------worldimage---------------------------
const imageRef = useRef(null);
const [isImageInView, setIsImageInView] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsImageInView(true);
      }
    },
    {
      threshold: 0.1,
    }
  );

  if (imageRef.current) {
    observer.observe(imageRef.current);
  }

  return () => {
    if (imageRef.current) {
      observer.unobserve(imageRef.current);
    }
  };
}, []);

// --------------recent news scroll-----------------------------
const scrollRef = useRef(null);

const scrollLeft = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }
};

const scrollRight = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }
};
// -------------recentblogs--------------------------
const blogScrollRef = useRef(null);
const blogScrollLeft = () => {
  if (blogScrollRef.current) {
    blogScrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }
};

const blogScrollRight = () => {
  if (blogScrollRef.current) {
    blogScrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }
};
// --------------------------------------------


const topDestScrollRef = useRef(null);

const handleScrollLeft = () => {
  if (topDestScrollRef.current) {
    topDestScrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }
};

const handleScrollRight = () => {
  if (topDestScrollRef.current) {
    topDestScrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }
};


useEffect(() => {
  const scrollContainer = topDestScrollRef.current;

  const scrollAmount = 300; // adjust as needed
  const scrollInterval = 2000; // 2 seconds

  const interval = setInterval(() => {
    if (scrollContainer) {
      // If we've reached the end, reset to start
      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  }, scrollInterval);

  return () => clearInterval(interval); // Clean up on unmount
}, []);



// -----------TESTIMONALS--------------------------
// top of your component file
const testimonials = [
  
  {
    image: TestimonalImg,
    author: "John Doe",
    subtitle: "Canada Work Visa",
    text: `Xcel Global had been amazing in helping me finally get my PR.
                  Pooja was incredibly supportive, and genuinely dedicated to
                  helping us. Her communication was excellent, and her
                  professionalism gave us so much confidence throughout the
                  process. We’re extremely happy with the service and highly
                  recommend Xcel Global for their services!`,
  },
  {
    image: "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740",
    author: "Jooly",
    subtitle: "UK Student Visa",
    text: `"Thanks to Xcel Global, I got my UK Student Visa hassle-free! Their step-by-step assistance with the SOP, financial proof, and interview prep made all the difference. I’m now studying at my dream university!"`,
  },
  {
    image: "https://www.shutterstock.com/image-photo/portrait-confident-young-indian-teenager-260nw-2157123233.jpg",
    author: "Mutale Makungu",
    subtitle: "Australia PR Visa",
    text: `"Getting my Australia PR was a life-changing experience, and Xcel Global made it seamless. Their expert guidance through the skill assessment, EOI submission, and visa documentation gave me the confidence and clarity I needed. Now I’m building a new life Down Under!"`,
  },
];
const [current, setCurrent] = useState(0);

const handleNext = () => {
  setCurrent((prev) => (prev + 1) % testimonials.length);
};

const handlePrev = () => {
  setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};

const currentTestimonial = testimonials[current];

// --------------------------------------
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);
// ----------------ourteam------------------
// useEffect(() => {
//   const scrollContainer = document.getElementById("team-scroll");

//   const scrollStep = 1; // pixels per tick
//   const scrollInterval = 20; // ms between ticks

//   const autoScroll = setInterval(() => {
//     if (scrollContainer) {
//       // Scroll right
//       scrollContainer.scrollLeft += scrollStep;

//       // Reset to start when reaching the end
//       if (
//         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
//         scrollContainer.scrollWidth
//       ) {
//         scrollContainer.scrollLeft = 0;
//       }
//     }
//   }, scrollInterval);

//   return () => clearInterval(autoScroll); // cleanup on unmount
// }, []);
useEffect(() => {
  const scrollContainer = document.getElementById("team-scroll");

  const scrollStep = 2; // pixels per tick
  const scrollInterval = 10; // ms between ticks

  const autoScroll = setInterval(() => {
    if (scrollContainer) {
      scrollContainer.scrollLeft += scrollStep;

      // Reset without flicker once halfway (i.e. end of first batch)
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    }
  }, scrollInterval);

  return () => clearInterval(autoScroll);
}, []);
// ----------------------------------------------------------
//  const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => setShow(false);
const [show, setShow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // You can also send the form data here via axios or fetch
  };



 

// ----------------------------------------
  return (
    
    <>
    {/* ----------------------------------------------------- */}
     {/* <a href="#contact" className="consult-btn" title="Get Free Consultation">
      💬 Free Consultation
    </a> */}
        {/* <div className="consultation-button-container">
      <Button variant="primary" className="consultation-button">
       
        Free Consultation
      </Button>
    </div> */}
     <div className="consult-btn-container">
        <Link to="/contact">
    <Button className="consult-btns" variant="primary">
    Free Consultation
  </Button>
  </Link>
  </div>
    {/* ------------------------------------------ */}
  <div className="scroll-container">
      {/* <p className="scroll-text">🚀Breaking News: Australia Work and Holiday visa (Subclass 462) ballot opened 2025–2026: 
Registration date: 24-June-2025 to 15-July-2025 🌍</p> */}
<p className="scroll-text">
  🚀Breaking News: <span className="highlight-blue">Australia Work and Holiday visa (Subclass 462) ballot opened 2025-2026:
  Registration date: 24-June-2025 to 15-July-2025 </span>🌍
</p>
    </div>


    {/* ------------------------------------------------ */}
 {/* <section className="responsive-image-section">
      <Container fluid className="p-0">
        <img src={BannerImage} alt="Responsive Banner" className="responsive-img" />
      </Container>
    </section>    */}
   
 <section className="home-carousel-section">
      <Container fluid className="p-0">
        <Carousel fade interval={3000} controls={false} indicators>
          {banners.map((banner, index) => (
            <Carousel.Item key={index}>
              <img className="banner-img" src={banner.src} alt={banner.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>

 {/* ----------------------------SERVICES---------------------------- */}
 <section className="xgs-section">
        
      <Container>
        <Row className="g-4 mb-5">
          {cardData.map((card, idx) => (
  <Col key={idx} xs={12} sm={4} lg={4}>
    <Card className="xgs-card custom-card text-center">
      <Card.Body className="d-flex flex-column justify-content-between p-3">
        <div>
          <div className="icon-image mb-2">
            <Image src={card.icon} alt={card.title} width={48} height={48} />
          </div>
          <Card.Title className="xgs-title mb-2">{card.title}</Card.Title>
          <Card.Text className="xgs-text clamp-3" align="left">{card.description}</Card.Text>
        </div>

        <div className="d-flex justify-content-end">
          <Button variant="outline-success" className="read-more mt-3">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
))}
        </Row>
        </Container>
   </section>


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
              At XCEL GLOBAL SERVICES, we believe your dreams of going abroad should be exciting—not overwhelming. That’s why we’ve built a comprehensive platform for your journey—study, work, migrate, or travel.
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
  {/* ----------------------FLAGS BOX------------------------------- */}
  <div className="top-dest-wrapper">
      <div className="header-section d-flex flex-column flex-md-row align-items-center justify-content-between px-3 px-sm-5 py-4">
        <h1 className="text-white fw-bold mb-3 mb-md-0">Top Destinations</h1>
        <div className="d-flex gap-3">
         
          <Button variant="outline-light" className="circle-btn" onClick={handleScrollLeft}>
  <i className="fas fa-arrow-left"></i>
</Button>
<Button className="circle-btn green-btn" onClick={handleScrollRight}>
  <i className="fas fa-arrow-right"></i>
</Button>

        </div>
      </div>

      <div className="destinations-section px-3 px-sm-5 py-5">
        
        <Row ref={topDestScrollRef} 
        className="justify-content-center g-4 flex-nowrap overflow-auto no-scrollbar" 
        style={{ scrollBehavior: "smooth" }}>

          {destinations.map((dest, index) => (
            <Col key={index} xs={6} sm={4} md={2} className="text-center" style={{ width: "280px" }}>
              <div className="position-relative destination-card shadow">
                <Image src={dest.img} alt={dest.name} className="img-fluid rounded-3 w-100 h-100" />
        

                <Image src={dest.flag} alt={`${dest.name} flag`} className="flag-img" />
     




              </div>
              <p className="mt-3 fs-5 fw-medium text-white">{dest.name}</p>
            </Col>
          ))}
        </Row>
      </div>
      

    </div>


{/* 
------------------------------VISA CATEGORY--------------------------- */}
<div className="visa-section py-5">
      <Container>
        {/* <h2 className="text-center fw-bold text-navy mb-5">Visa Category</h2> */}
        <h2 className="text-center fw-bold animated-heading mb-5">Visa Category</h2>

        <Row className="gy-4 justify-content-center">
          {visaCards.map((visa, idx) => (
            <Col key={idx} xs={12} sm={10} md={7} lg={5} >

              <div className="d-flex justify-content-center">
                <Card className="visa-card p-4 border rounded">
                  <div className="d-flex flex-column flex-md-row align-items-center">
                    <Image
                      src={visa.img}
                      alt={visa.title}
                      className="animated-img me-md-4 mb-4 mb-md-0"
                      width={200}
                      height={200}
                      rounded
                    />
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h5 className="fw-bold text-dark mb-2">{visa.title}</h5>
                        <p className="text-muted small mb-3">{visa.description}</p>
                      </div>
                     
                      <Button
  variant="outline-success"
  size="sm"
  className="align-self-end read-more-btn custom-btn"
>
  Read More <i className="fas fa-arrow-right ms-2"></i>
</Button>

                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
{/* --------------YOUR JOURNEY STARTS WITH US------------------------------- */}

   <main className="xgs-section py-0 my-0">
  <Container>
    
    <Row className="align-items-start gx-md-5 gy-0">
    
      <Col
  xs={12}
  md={4}
  className="d-flex flex-column align-items-center align-items-md-start pt-0 mt-0"
>
 
  {/* <Image src={XgsLogo1} alt="XGS Logo" className="logo-img" fluid /> */}
  <Image src={CountSideImg} alt="Globe Travel"  className="rounded-img" fluid />

</Col>




      
      <Col xs={12} md={8}>
        <h2 className="section-heading">Your journey starts with us!</h2>

        <p className="section-text">
          Xcel Global Services with offices in KPHB, Begumpet, Hyderabad and Warangal,
          Telangana India.
        </p>
        <p className="section-text">
          We specialise in helping students achieve their dreams of studying abroad by
          offering expert guidance on university selection, admission procedures and visa
          assistance.
          We specialise in helping students achieve their dreams of studying abroad by
          offering expert guidance on university selection, admission procedures and visa
          assistance.

        </p>
        <p className="section-text">
          For those seeking migration solutions, Xcel Global Services also ranks among
          the best migration consultants.
           For those seeking migration solutions, Xcel Global Services also ranks among
          the best migration consultants.
        </p>

       
        <div className="stats-container" ref={ref}>
          <div className="stat-box pink">
            <span className="stat-number">{displayed.years}</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-box yellow">
            <span className="stat-number">{displayed.visa.toLocaleString()}</span>
            <span className="stat-label">VISA Approved</span>
          </div>
          
          <div className="stat-box red">
            <span className="stat-number">{displayed.success}%</span>
            <span className="stat-label">Admission Success</span>
          </div>
        </div>

        <br />
        <div className="text-center mt-4">
  <Button className="consult-btn" variant="primary">
    Get Free Consultation
  </Button>
</div>

      </Col>
    </Row>
  </Container>
</main>

{/* -----------------------ACCREDIATIONS------------------------------------ */}
 <div className="accreditations-wrapper">
      <Container className="text-center pt-5">
        <h2 className="section-title mb-5">ACCREDITATIONS</h2>
        <Row className="justify-content-center align-items-center flex-wrap gap-4">
          {logos.map((logo, index) => (
            <Col key={index} xs={6} sm={4} md="auto">
              <Image src={logo.src} alt={logo.alt} className="logo-img" />
            </Col>
          ))}
        </Row>
      </Container>



    <Container className="mt-5 mb-5">
      <h3 className="training-heading mb-4">Online & Offline Training</h3>
      <Row className="justify-content-center">
        {trainings.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="training-card shadow-lg">
                <Card.Img variant="top" src={item.img} className="card-img" />
                <Card.Body className="d-flex justify-content-between align-items-start">
                  <div>
                    <Card.Title className="card-title">{item.title}</Card.Title>
                    <Card.Text className="card-text1">{item.desc}</Card.Text>
                  </div>
                 
                  <Button variant="white" className="arrow-btn" aria-label={`Go to ${item.title}`}>
  <img src={Arrow} alt="Go" style={{ width: "40px", height: "40px" }} />
</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>

    </div>

{/* ---------------------------------------------------------- */}



 <section className="team-section">
  <Container>
    <h2 className="team-heading">Our Team</h2>
<div className="team-scroll-wrapper" id="team-scroll">
  {[...visibleMembers,...visibleMembers,...visibleMembers, ...visibleMembers].map((member, idx) => (
    <div key={idx} className="team-card" style={{ animationDelay: `${(idx % visibleMembers.length) * 0.2}s` }}>
      <div className="image-wrapper">
        <img src={member.img} alt={member.name} className="team-img" />
      </div>
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">
        {member.role}
        <br />
        {member.region}
      </p>
    </div>
  ))}
</div>
</Container>
</section>

    

{/* -------------TESTIMONAL SECTION------------------------------- */}

{/* <section className="testimonial-section">
      <Container>
        <Row className="justify-content-center align-items-center g-4">
          <Col md={5}>
            <img
              src={TestimonalImg}
              alt="Mutale Makungu"
              className="testimonial-img"
            />
          </Col>
          <Col md={7}>
            <div className="testimonial-content">
              <h2 className="testimonial-heading">Testimonial</h2>
              <p className="testimonial-author">By Mutale Makungu</p>
              <p className="testimonial-subtitle">Australia PR Visa</p>
              <div className="testimonial-quote">
                <FaQuoteLeft className="quote-icon" />
                <p>
                  Xcel Global had been amazing in helping me finally get my PR.
                  Pooja was incredibly supportive, and genuinely dedicated to
                  helping us. Her communication was excellent, and her
                  professionalism gave us so much confidence throughout the
                  process. We’re extremely happy with the service and highly
                  recommend Xcel Global for their services!
                </p>
              </div>
              <div className="testimonial-nav">
                <Button className="nav-btn" aria-label="Previous testimonial">
                  <FiChevronLeft />
                </Button>
                <Button className="nav-btn" aria-label="Next testimonial">
                  <FiChevronRight />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>



       
    </section> */}

<section className="testimonial-section">
  <Container>
    <Row className="justify-content-center align-items-center g-4">
      <Col md={5}>
        <img
          src={currentTestimonial.image}
          alt={currentTestimonial.author}
          className="testimonial-img"
        />
      </Col>
      <Col md={7}>
        <div className="testimonial-content">
          {/* <h2 className="testimonial-heading">Review
            <span>
                 <img
  src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740"  // Replace with your actual image path or import
  alt="Reviewer"
  className="review-circle-img"
/>
            </span>
          </h2> */}
          <h2 className="testimonial-heading">
  Review
  <span className="inline-image">
    <img
      src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740"
      alt="Reviewer"
      className="review-circle-img"
    />
  </span>
</h2>

    
          <p className="testimonial-author">By {currentTestimonial.author}</p>
          <p className="testimonial-subtitle">{currentTestimonial.subtitle}</p>
          <div className="testimonial-quote">
            <FaQuoteLeft className="quote-icon" />
            <p>{currentTestimonial.text}</p>
          </div>
          <div className="testimonial-nav">
            <Button className="nav-btn" onClick={handlePrev}>
              <FiChevronLeft />
            </Button>
            <Button className="nav-btn" onClick={handleNext}>
              <FiChevronRight />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>



{/* -------------------recent news------------------------------------------- */}
<section className="recent-news-section">
      <Container>
        <h2 className="section-title">Recent News</h2>

<div className="scroll-container" ref={scrollRef}>
  <Row className="gy-4 flex-nowrap scroll-row">

        {/* <Row className="gy-4 justify-content-center"> */}


          {newsData.map((news, idx) => (
            <Col key={idx} xs={12} md={6} lg={4}>
              <article className="news-card">
                <div className="news-header">
                  <h3 className="news-subtitle">
                    {news.subtitle} <br />
                    <span className="highlight">{news.highlight}</span>
                  </h3>
                  <img src={news.img} alt="news" className="news-image" />
                  <div className="highlight-bar"></div>
                </div>
                <div className="news-body">
                  <div className="news-meta">
                    <span><FaCalendarAlt /> {news.date}</span>
                    <span><FaUser /> By admin</span>
                  </div>
                  <h4 className="news-title">{news.title}</h4>
                  <p className="news-desc">
                    The Department of Home Affairs is enhancing user security by introducing Multi-factor Authentication (MFA) for ImmiAccount…
                  </p>
                  <div className="read-more">
                    <Button variant="outline-success" className="read-more-btn">
                      Read More <FaArrowRight className="ms-1" />
                    </Button>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
        </div>
        
        <div className="news-navigation text-center mt-4">
  <Button className="nav-btn prev me-2" onClick={scrollLeft}><FaArrowLeft /></Button>
  <Button className="nav-btn next" onClick={scrollRight}><FaArrowRight /></Button>
</div>

      </Container>
    </section>
{/* -----------------RECENT BLOGS--------------------------------------- */}

 <section className="blog-section">
      <Container>
        <h2 className="blog-title">Recent Blogs</h2>
<div className="blog-scroll-container" ref={blogScrollRef}>
  <Row className="g-4 flex-nowrap scroll-row">
        {/* <Row className="g-4"> */}
          {blogs.map((blog, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="blog-card h-100">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  alt={blog.title}
                  className="blog-img"
                />
                <Card.Body className="blog-card-body">
                  <div className="blog-meta">
                    <span>
                      <i className="fas fa-calendar-alt" /> {blog.date}
                    </span>
                    <span>
                      <i className="fas fa-user" /> {blog.author}
                    </span>
                  </div>
                  <Card.Title className="blog-card-title">
                    {blog.title}
                  </Card.Title>
                  <Card.Text className="blog-desc">{blog.description}</Card.Text>
                  <Button variant="outline-success" className="read-more-btn">
                    Read More <i className="fas fa-arrow-right" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
       
        <div className="blog-navigation text-center mt-4">
  <button className="nav-btn left me-2" onClick={blogScrollLeft} aria-label="Previous">
    <i className="fas fa-arrow-left"></i>
  </button>
  <button className="nav-btn right" onClick={blogScrollRight} aria-label="Next">
    <i className="fas fa-arrow-right"></i>
  </button>
</div>
 
      </Container>
    </section>
{/* ----------------------worldimage-------------------------------------- */}

 {/* <div className="text-center my-5">
      <h2
        ref={headingRef}
        className={`global-heading ${isVisible ? "animate" : ""}`}
      >
        Our Global Presence
      </h2>
    </div>

     <Container fluid className="p-0 m-0">
      <Image
        src={worldImage}
        alt="Responsive Image"
        fluid
       
          className={`full-width-image ${isImageInView ? "animate-up" : ""}`}
      />
    </Container> */}
    <div className="text-center my-5">
         <h2
           ref={headingRef}
           className={`global-heading ${isVisible ? "animate" : ""}`}
         >
           Our Global Presence
         </h2>
       </div>
   
        <Container fluid className="p-0 m-0">
         <Image
           src={worldImage}
           alt="Responsive Image"
           fluid
           // className="full-width-image"
             // className={`full-width-image ${inView ? "animate-up" : ""}`}
             className={`full-width-image ${isImageInView ? "animate-up" : ""}`}
         />
       </Container>
   
{/* ---------------------------------------------------------- */}


     <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="text-white w-100 text-center">
          {formSubmitted ? "🎉 Thank You!" : "✨ Get in Touch"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!formSubmitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
<Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your mobile number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="formLookingFor">
              <Form.Label>Looking For</Form.Label>
              <Form.Select defaultValue="" required>
                <option value="" disabled>Select an option</option>
                <option>PR Visa</option>
                <option>Visit Visa</option>
                <option>Student Visa</option>
                <option>Business Visa</option>
              </Form.Select>
            </Form.Group>

             <Form.Group className="mb-3" controlId="intrestedCountry">
              <Form.Label>Intrested Country</Form.Label>
              <Form.Select defaultValue="" required>
                <option value="" disabled>Select an option</option>
                <option>USA</option>
                <option>UK</option>
                <option>Australia</option>
                <option>Canada</option>
              </Form.Select>
            </Form.Group>


            <Form.Group className="mb-4" controlId="formComment">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter any additional information..."
              />
            </Form.Group>

            <Button type="submit" className="w-100 attractive-btn">
              🚀 Submit Now
            </Button>
          </Form>
        ) : (
          <div className="thank-you-message text-center">
            <div className="thank-icon">💖</div>
            <h4>We received your details!</h4>
            <p>Our team will contact you shortly.</p>
          </div>
        )}
      </Modal.Body>
    </Modal>







{/* ------------------------------------------------------- */}
</>

  );
};

export default Home;
