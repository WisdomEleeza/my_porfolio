// Call To Action
import React from "react";
import CV from "../../assets/wisdom_cv_II.pdf";

const CTA = () => {
  return (
    // btn class is from the general index.css
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
