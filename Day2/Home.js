import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
  return (
   
    <div className="home-container">
      <Navbar />
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="head-section">
            EVENT MANAGEMENT
          </h1>
          <h1 className="primary-heading">
            Your Favourite Memories Delivered Fresh & Engaged
          </h1>
          <p className="primary-text">
          "Collecting memories" is all about consciously cherishing and keeping moments or experiences that hold significance to us. It involves being present and aware in moments that we find special, noteworthy, or meaningful, and intentionally preserving them in some form so that we can revisit and reflect upon them in the future.
          </p>
          <button className="secondary-button"><Link to='/MediaCard'>
            Bookings
         </Link> </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
