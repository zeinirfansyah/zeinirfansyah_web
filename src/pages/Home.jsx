import React from "react";
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Educations from "../components/Educations";
import Certifications from "../components/Certifications";

const Home = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <hr />
        <div className="row">
          <div className="col-12 col-md-6">
            <Experiences />
            <Educations />
          </div>
          <div className="col-12 col-md-6">
            <Certifications />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
