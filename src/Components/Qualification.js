import React from "react";

import "./Qualification.css";

function Qualification() {
  return (
    <>
      <div class="Qualification-container container-fluid" id="qualification">
        <div class="row">
          <div class="qualifications-head col-12">
            <h3>Qualification</h3>
            <hr />
          </div>
        </div>
        <div class="qualification-col">
          <div class="bca col-12">
            <div class="q1">
              <div>
                <h4>BCA</h4>
              </div>
              <div>
                <h5>2015-2018 | BCA- VIT University</h5>
              </div>
              <div>
                <h5>CGPA : 8.7</h5>
              </div>
            </div>
          </div>
          <br />

          <div class="bca col-12">
            <div class="q2">
              <div>
                <h4>HSC</h4>
              </div>
              <div>
                <h5>2013-2014 | National Higher Secondary School</h5>
              </div>
              <div>
                <h5>Percentage : 76</h5>
              </div>
            </div>
          </div>
          <br />

          <div class="bca col-12">
            <div class="q3">
              <div>
                <h4>SSLC</h4>
              </div>
              <div>
                <h5>2011-2012 | National Higher Secondary School</h5>
              </div>
              <div>
                <h5>Percentage : 87</h5>
              </div>
            </div>
          </div>
          <br />

          <div class="btn-down">
            <a
              href={require("../image/Ragunath_resume_2023.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              <button class="btn-res mb-3">
                Resume
                <span></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualification;
