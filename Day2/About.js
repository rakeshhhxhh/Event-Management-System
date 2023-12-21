import React from "react";
import AboutBackground from "../Assets/about-background.png";




const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src="D:\Restaurant-Landing-Page-Tutorial-main\src\Assets\pexels-ruba-abdulaziz-5235081.jpg" alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Designing Moments to Remember
        </h1>
        <p className="primary-text">
        It implies that an event isn't merely a gathering; it's an opportunity to create something meaningful, something that people will carry with them long after the event has ended. It's about the planner's commitment to curating moments that stand out, resonate, and become part of the participants' cherished memories.
        </p>
        <p className="primary-text">
        It's about creating experiences that leave a lasting impact and become cherished memories for those involved.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
