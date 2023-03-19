import React from "react";
import { FaUser, FaUserMd, FaGlobe } from "react-icons/fa";


const Work = () => {
  const workInfoData = [
    {
      title: <FaUser />,
      text: "Get registered quickly and easily as a newcomer",
    },
    {
      title: <FaUserMd />,
      text: "Connect to a family doctor or clinic",
    },
    {
      title: <FaGlobe />,
      text: "Access our awesome community",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 className="feature-logo">{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
