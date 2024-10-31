import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className=" font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, i am <span className="font-semibold"> Brian Mwangi</span>👋
      <br />A Software Engineer from Kenya 🇰🇪
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with Many companies and acquired ALot of Skills"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Lead Multiple projects to success over the Years.curious about the impact?"
      link="/projects"
      btnText="visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Versitile with different Programming Languages"
      link="/contact"
      btnText="Lets Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
