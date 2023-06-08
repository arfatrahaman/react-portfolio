import React from "react";

export const About = () => {
  return (
    <section id="about-page">
      <div className="section-title">
        <h3 className="headline">About Me</h3>
        <p className="deatil">Some words about me and my career</p>
      </div>
      <div className="about-page-wrapper">
        <div className="about-page-left-section about-item-1">
          <div className="about-page-left-content">
            <div className="about-content">
              <h4>Who I Am ?</h4>
              <p>
                Hello, My Name Is Arfat Rahaman Hridoy, I Am From Bangladesh. In
                2015 I Was Admitted To CSE. When I Studied At CSE I Got
                Interested In Web Development, That Is How My Web Developer
                Journey Started.
                <br />
                Now I Work As a Freelancer. I Have 3 Year+ of Experience In
                Building Websites. Previously I Build Some Websites For Local
                Businesses. I Can Also Build Websites Using WordPress.
                <strong>I love to build website as my client want. </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="about-page-right-section about-item-1">
          <div className="about-page-right-content">
            <div className="my-skill-section">
              <h4 className="skill-headline">My Skills</h4>
              <div className="skill">
                <button className="skill-btn">JAVASCRIPT</button>
                <button className="skill-btn">React</button>
                <button className="skill-btn">BOOTSTRAP</button>
                <button className="skill-btn">WORDPRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
