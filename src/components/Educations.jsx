import React from "react";
import data from "../data";

const Educations = () => {
  return (
    <div className="container">
      <section className="educations mt-3">
        <div className="row mb-3">
          <div className="col-md-12">
            <h2 className="section-title">Educations</h2>
          </div>
        </div>
        <div className="row">
          {data.educations.map((education) => (
            <div className="card bg-dark my-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <h5 className="card-title">{education.title_educations}</h5>
                  </div>
                  <div className="col ">
                    <small className="text-muted d-none d-lg-flex justify-content-start justify-content-lg-end mb-2 mb-lg-0">
                      {education.gpa_educations}
                    </small>
                  </div>
                </div>
                <h6 className="card-subtitle mb-2">
                  {education.subtitle_educations}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {education.date_educations}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Educations;
