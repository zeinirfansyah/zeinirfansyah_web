import React from "react";
import discord1 from "../assets/images/discord1.svg";
import github1 from "../assets/images/github1.svg";
import linkedin1 from "../assets/images/linkedin1.svg";
import instagram1 from "../assets/images/instagram1.svg";
import foto1 from "../assets/images/foto1.jpg";
import foto2 from "../assets/images/foto2.jpg";
import foto3 from "../assets/images/foto3.jpg";
import reactimg from "../assets/images/reactjs-img.svg";
import javascriptimg from "../assets/images/js-img.svg";
import nodejsimg from "../assets/images/nodejs-img.svg";
import expressjsimg from "../assets/images/expressjs-img.svg";
import phpimg from "../assets/images/php-img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-lg-6">
          <span className="img-line1"></span>
          <div className="hero__img">
            <img className="foto foto1" src={foto1} alt="" />
            <img className="foto foto2" src={foto2} alt="" />
            <img className="foto foto3" src={foto3} alt="" />
          </div>
          <span className="img-line2"></span>
          <div className="hero__socmed mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-start">
            <a href="" target="_blank" rel="noreferrer">
              <img className="logo-socmed" src={discord1} />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="logo-socmed" src={github1} />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="logo-socmed" src={linkedin1} />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="logo-socmed" src={instagram1} />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero__text text-center text-lg-start">
            <div className="role-text mb-2 mb-lg-3">
              Software
              <span className="role"> Engineer</span>
              <span className="role-line"></span>
            </div>
            <h1>Hi, I am Zein Irfansyah</h1>
            <p>
              I am a final year student at Informatic Departement of Universitas
              Teknologi Yogyakarta with 3.83 GPA and also a software engineer.
              My passions lies in frontend and backend web development, realism
              sketch art, and music. Nice to meet you!
            </p>
          </div>
          <div className="hero__techstack">
            <div className="row techstack__item mt-5 mb-2">
              <div className="col text-center text-lg-start">
                <h4>Tech Stack</h4>
              </div>
            </div>
            <div className="row techstack__item">
              <div className="col d-flex justify-content-center justify-content-lg-start">
                <a href="" target="_blank" rel="noreferrer">
                  <img className="logo-techstack" src={reactimg} />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img className="logo-techstack" src={javascriptimg} />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img className="logo-techstack" src={expressjsimg} />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img className="logo-techstack" src={nodejsimg} />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img className="logo-techstack" src={phpimg} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;