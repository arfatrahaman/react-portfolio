import React from "react";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <section id="error-page">
      <h4>Ooooppppssss Nothing Found In This Link</h4>
      <Link to="/"> Back To Home</Link>
    </section>
  );
};
