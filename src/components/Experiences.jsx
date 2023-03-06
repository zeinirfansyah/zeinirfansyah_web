import React from "react";
import data from "../data";

const Experiences = () => {
  return (
    <section className="experiences">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12">
            <h3 className="section-title">Experiences</h3>
          </div>
        </div>
        <div className="row">
          {data.experiences.map((experience) => (
            <div className="card bg-dark my-1">
              <div className="card-body">
                <h6 className="card-title">{experience.title_experiences}</h6>
                <p className="card-subtitle mb-2 text-muted">
                  {experience.company_experiences}
                </p>
                <p className="card-text d-none d-lg-block">
                  {experience.description_experiences}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    {experience.date_experiences}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
