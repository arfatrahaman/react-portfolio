import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section id="home-page">
      <div className="home-page-content">
        <h6 className="home-page-title">I Am Arfat Rahaman Hridoy</h6>
        <h2 className="home-page-headline">A Front End Developer</h2>
        <div className="page-to-go">
          <Link to="/projects" className="page-btn">
            My Projects
          </Link>
          <Link to="/about" className="page-btn">
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
};
