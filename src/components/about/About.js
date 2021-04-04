import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="level">
      <div className="level-left"></div>
      <div className="level-right">
        <div className="level-item">
          <StaticImage
            className="image"
            imgClassName="is-rounded"
            src="../../images/Profile-photo.jpg" 
            alt="Michael Romero"
            height={250}
            width={250}
          />
        </div>
      </div>
    </section>
  )
};

export default About;