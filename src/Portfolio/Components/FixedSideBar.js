import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaStream } from "react-icons/fa";
import {
  FcHome,
  FcBusinessman,
  FcServices,
  FcFile,
  FcBusinessContact,
} from "react-icons/fc";

export const FixedSideBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    if (!navOpen) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };
  return (
    <div className="my-portfolio-left-side">
      <div className="left-side-content">
        <nav id="navigation">
          <div className="navigation-wrapper">
            <div className="my-logo">
              <h2 className="logo">ARH</h2>
              <FaStream className="toggle-btn" onClick={toggleNav} />
            </div>
            <div className="my-image">
              <img src="/images/my.png" alt="" className="image" />
            </div>
            <div className="my-nav-lists">
              <ul className={navOpen ? "nav-links show-nav" : "nav-links"}>
                <Link to="/" className="nav-link">
                  <FcHome className="nav-icon" /> Home
                </Link>
                <Link to="/about" className="nav-link">
                  <FcBusinessman className="nav-icon" /> About
                </Link>
                <Link to="/projects" className="nav-link">
                  <FcFile className="nav-icon" /> Project
                </Link>
                <Link to="/service" className="nav-link">
                  <FcServices className="nav-icon" /> Service
                </Link>
                <Link to="/contact" className="nav-link">
                  <FcBusinessContact className="nav-icon" /> Contact Me
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
