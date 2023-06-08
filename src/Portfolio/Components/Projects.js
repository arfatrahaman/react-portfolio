import React from "react";

export const Projects = () => {
  return (
    <section id="project-page">
      <div className="section-title">
        <h3 className="headline">My Project</h3>
        <p className="deatil">
          Redesign some websites for my own practice, some are for challenging
          myself, and also some for local business.
        </p>
      </div>

      {/* Project Item 2 Start */}
      <div className="project-page-wrapper item-two">
        <div className="project-image">
          <img src="images/ecomm.png" alt="" />
        </div>

        <div className="project-content">
          <h4 className="project-title">ARH STORE</h4>
          <p>
            This is fully functional e commerce website. This website all
            functionaly build like Amazon.
          </p>
          <a
            target="_blank"
            href="https://arhstore.gianttheme.com"
            className="page-btn"
          >
            Visit Live
          </a>
        </div>
      </div>
      {/* Project Item 2 End  */}

      {/* Project Item 1 Start */}
      <div className="project-page-wrapper item-one">
        <div className="project-content">
          <h4 className="project-title">Weather App</h4>
          <p>This website for own practice. Create this website using react</p>
          <a
            target="_blank"
            href="https://weatherapp.gianttheme.com/"
            className="page-btn"
          >
            Visit Live
          </a>
        </div>
        <div className="project-image">
          <img src="images/weather.png" alt="" />
        </div>
      </div>
      {/* Project Item 1 End */}

      {/* Project Item 2 Start */}
      <div className="project-page-wrapper item-two">
        <div className="project-image">
          <img src="images/movie.png" alt="" />
        </div>

        <div className="project-content">
          <h4 className="project-title">Movie App</h4>
          <p>This website for own practice. Create this website using react</p>
          <a
            target="_blank"
            href="https://movieapp.gianttheme.com/"
            className="page-btn"
          >
            Visit Live
          </a>
        </div>
      </div>
      {/* Project Item 2 End  */}

      {/* Project Item 3 Start  */}
      <div className="project-page-wrapper item-three">
        <div className="project-content">
          <h4 className="project-title">E-Market</h4>
          <p>
            This is an e-commerce website. I made this website inspired by
            "Amazon Website". This Website Has Only 3 Page: 1. Home Page 2.
            Category Page 3. Single Item Detail Page. This 3 pages will show my
            skills.
          </p>
          <a
            target="_blank"
            href="http://emarket.gianttheme.com/"
            className="page-btn"
          >
            Visit Live
          </a>
        </div>
        <div className="project-image">
          <img src="images/project1.png" alt="" />
        </div>
      </div>
      {/* Project Item 3 End */}

      {/* Project Item 4 Start */}
      <div className="project-page-wrapper item-four">
        <div className="project-image">
          <img src="images/project2.png" alt="" />
        </div>

        <div className="project-content">
          <h4 className="project-title">Noor Exclusive</h4>
          <p>
            This is also an e-commerce website. I made this website for my local
            client. The client provided me Only 3 Page Figma file: 1. Home Page
            2. Category Page 3. Single Item Detail Page. One (Catagory/Single
            Item) Page can prove that I can make any website as you want.
          </p>
          <a
            target="_blank"
            href="https://noorexclusive.gianttheme.com/"
            className="page-btn"
          >
            Visit Live
          </a>
        </div>
      </div>
      {/* Project Item 4 End */}

      {/* Project Item 5 Start */}
      <div className="project-page-wrapper item-five">
        <div className="project-content">
          <h4 className="project-title">IECB (Consultation Website)</h4>
          <p>
            This is a consulting website. I made this website for my cousin. I
            hope you understand that I am not a designer which is why my design
            does not look good. I singly designed and developed this website.
          </p>
          <a
            target="_blank"
            href="https://iecb.gianttheme.com/wp/"
            className="page-btn"
          >
            Visit Live
          </a>
        </div>
        <div className="project-image">
          <img src="images/project3.png" alt="" />
        </div>
      </div>
      {/* Project Item 5 End */}

      {/* Project Item 6 Start */}
      <div className="project-page-wrapper item-six">
        <div className="project-image">
          <img src="images/project24.png" alt="" />
        </div>

        <div className="project-content">
          <h4 className="project-title">Giant Theme (Blog Website)</h4>
          <p>
            This is my personal blog website. On this website, I write blog
            about web hosting, WordPress theme, and many more.
          </p>
          <a
            target="_blank"
            href="https://gianttheme.com/"
            className="page-btn"
          >
            Visit Live
          </a>
        </div>
      </div>
      {/* Project Item 6 End */}
    </section>
  );
};
