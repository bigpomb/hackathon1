import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Find a doctor with one click away
          </h1>
          <p className="primary-text">
            We believe that finding the right doctor shouldn't be a chore
          </p>
          <button className="secondary-button">
            Sign Up <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
