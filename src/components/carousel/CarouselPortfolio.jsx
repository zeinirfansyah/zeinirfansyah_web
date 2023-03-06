import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "../../data";
import x from "../../assets/images/x.jpg";

function CarouselPortfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.projects.map((project) => (
        <Carousel.Item>
          <img className="d-block w-100 carouselPortoImg" src={x} />
          <Carousel.Caption>
            <h6>{project.name_projects}</h6>
            <p>{project.description_projects}</p>
            <a
              href={project.url_projects}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-1"
            >
              Lihat Project
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselPortfolio;
