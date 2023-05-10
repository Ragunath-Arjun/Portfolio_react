import React from "react";

import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div class="project-container container-fluid" id="project">
        <div class="row">
          <div class=" project-head col-12">
            <h3>My Projects</h3>
          </div>
        </div>
        <hr />
        <br />
        <div class="row pc1">
          <div class="col-lg-4 col-12 col-md-6 col-xl-3 pc1">
            <div class="pricing-container">
              <a
                href="https://ragu-react-tic-tac-toe.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="projects"
                  src={require("../image/tic_tac_toe.PNG")}
                  alt="Tic-Tac-Toe"
                />
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-12 col-md-6 col-xl-3 pc2">
            <div class="pricing-container">
              <a
                href="https://kitchen-recipe-management.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="projects"
                  src={require("../image/Kitchen_recipe_management.PNG")}
                  alt="Kitchen Recipe Management"
                />
              </a>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 col-xl-3 pc3">
            <div class="pricing-container">
              <a
                href="https://lucky-praline-522615.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="projects3"
                  src={require("../image/anime_api.PNG")}
                  alt="Anime"
                />
              </a>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4 col-xl-3 pc3">
            <div class="pricing-container">
              <a
                href="https://fastidious-licorice-97ecb1.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="projects"
                  src={require("../image/Cart.PNG")}
                  alt="Add to Cart"
                />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Portfolio;
