import React from "react";
import data from "../data";

const Certifications = () => {
  return (
    <div className="Certifications mt-3">
      <div className="row mb-3">
        <div className="col-md-12">
          <h2 className="section-title">Certifications</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {data.certificates.map((certification) => (
            <div className="card bg-dark my-2">
              <div className="card-body">
                <h6 className="card-title">
                  {certification.title_certificates}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {certification.source_certificates}
                </h6>
                <h6 className="card-subtitle mb-3 text-muted">
                  {certification.date_certificates}
                </h6>
                <a
                  href={certification.link_certificates}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-1"
                >
                  Lihat Kredensial
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
