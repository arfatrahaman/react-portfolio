import React from "react";
import { BrowserRouter, Routes, Route, swithch } from "react-router-dom";
import "./index.css";

import { Home } from "../src/Portfolio/Components/Home";
import { FixedSideBar } from "./Portfolio/Components/FixedSideBar";
import { About } from "./Portfolio/Components/About";
import { Contact } from "./Portfolio/Components/Contact";
import { Service } from "./Portfolio/Components/Service";
import { Projects } from "./Portfolio/Components/Projects";
import { Error } from "./Portfolio/Components/Error";

function App() {
  return (
    <section id="my-portfolio">
      <div className="container">
        <div className="my-portfolio-wrapper">
          <BrowserRouter>
            <FixedSideBar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
            <Routes>
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Routes>
              <Route path="/service" element={<Service />} />
            </Routes>
            <Routes>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </section>
  );
}

export default App;
