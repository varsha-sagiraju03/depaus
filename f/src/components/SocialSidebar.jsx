
// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
// import "./SocialSidebar.css";

// const SocialSidebar = () => {
//   return (
//     <div className="social-sidebar">
//       <a href="https://facebook.com" className="icons facebook" target="_blank">
//         <FaFacebookF />
//         <span className="label">Facebook</span>
//       </a>
//       <a href="https://twitter.com" className="icons twitter" target="_blank">
//         <FaTwitter />
//         <span className="label">Twitter</span>
//       </a>
//       <a href="https://linkedin.com" className="icons linkedin" target="_blank">
//         <FaLinkedinIn />
//         <span className="label">LinkedIn</span>
//       </a>
//       <a
//         href="https://instagram.com"
//         className="icons instagram"
//         target="_blank"
//       >
//         <FaInstagram />
//         <span className="label">Instagram</span>
//       </a>
//     </div>
//   );
// };

// export default SocialSidebar;
// src/components/SocialSidebar.jsx
// src/components/SocialSidebar.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";  // ✅ New Twitter (X) icon
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./SocialSidebar.css";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      {/* <a
        href="https://facebook.com"
        className="icon facebook"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="fb-tooltip"
        data-tooltip-content="Facebook"
      >
        <FaFacebookF />
      </a>
      <Tooltip id="fb-tooltip" /> */}
      <a
        href="https://www.facebook.com/xgsaus"
        className="icons facebook"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="fb-tooltip"
        data-tooltip-content="Facebook"
      //   data-tooltip-variant="light"

      >
        <FaFacebookF />
      </a>
      {/* <Tooltip id="fb-tooltip className="custom-tooltip" /> */}
      <Tooltip id="fb-tooltip" className="custom-tooltip" />

      <a
        href="https://www.instagram.com/xcel_global_australia/"
        className="icons instagram"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="ig-tooltip"
        data-tooltip-content="Instagram"
        // data-tooltip-variant="light"
      >
        <FaInstagram />
      </a>
      {/* <Tooltip id="ig-tooltip" /> */}
      <Tooltip id="ig-tooltip" className="custom-tooltip" />

      <a
        href="https://www.linkedin.com/company/xcel-global-australia/"
        className="icons linkedin"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="li-tooltip"
        data-tooltip-content="LinkedIn"
        // data-tooltip-variant="light"
      >
        <FaLinkedinIn />
      </a>
      {/* <Tooltip id="li-tooltip" /> */}
      <Tooltip id="li-tooltip" className="custom-tooltip" />

      {/* <a
        href="https://twitter.com"
        className="icons twitter"
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="tw-tooltip"
        data-tooltip-content="Twitter"
        // data-tooltip-variant="light"
      >
        <FaXTwitter />
      </a>
      <Tooltip id="tw-tooltip" className="custom-tooltip" /> */}
      
    </div>
  );
};

export default SocialSidebar;
