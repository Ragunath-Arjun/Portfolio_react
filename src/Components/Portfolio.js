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
        <div class="row pc1">
          <div class="accordion col-lg-12" id="accordionExample">
            <div class="item">
              <div class="item-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed project-heading"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Kitchen Recipe Management <i class="fa fa-angle-down"></i>
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                class="collapse show row"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="t-p col-lg-6">
                  <img
                    class="projects"
                    src={require("../image/Kitchen_recipe_management.PNG")}
                    alt="Kitchen Recipe Management"
                  />
                </div>
                <div class="t-p col-lg-6">
                  <div className="project-details">
                    GitHub Frontend:{" "}
                    <a
                      href="https://github.com/Ragunath-Arjun/kitchen-recipe-management-frontend"
                      target="_blank"
                    >
                      https://github.com/Ragunath-Arjun/kitchen-recipe-management-frontend
                    </a>
                  </div>
                  <div className="project-details">
                    GitHub Backend:
                    <a
                      href="https://github.com/Ragunath-Arjun/kitchen-recipe-management-backend"
                      target="_blank"
                    >
                      https://github.com/Ragunath-Arjun/kitchen-recipe-management-backend
                    </a>
                  </div>
                  <div className="project-details">
                    Deploy link:
                    <a
                      href="https://main.d35aks564gvfy.amplifyapp.com/"
                      target="_blank"
                    >
                      https://main.d35aks564gvfy.amplifyapp.com/
                    </a>
                  </div>
                  <hr></hr>
                  <div className="project-details">
                    <span className="credentials">Demo Credentials:</span>
                    <br />
                    <span>Username : ragunath219@gmail.com</span>
                    <br />
                    <span>Password : 87654321</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="item-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed project-heading"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Todo List <i class="fa fa-angle-down"></i>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse row"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="t-p col-lg-6">
                  <img
                    class="projects"
                    src={require("../image/Todolist.PNG")}
                    alt="Kitchen Recipe Management"
                  />
                </div>
                <div class="t-p col-lg-6">
                  <div className="project-details">
                    GitHub Frontend:{" "}
                    <a
                      href="https://github.com/Ragunath-Arjun/Todo_list_Frontend"
                      target="_blank"
                    >
                      https://github.com/Ragunath-Arjun/Todo_list_Frontend
                    </a>
                  </div>
                  <div className="project-details">
                    GitHub Backend:
                    <a
                      href="https://github.com/Ragunath-Arjun/Todo_list_backend"
                      target="_blank"
                    >
                      https://github.com/Ragunath-Arjun/Todo_list_backend
                    </a>
                  </div>
                  <div className="project-details">
                    Deploy link:
                    <a
                      href="https://main.d1awnwxte694hn.amplifyapp.com/"
                      target="_blank"
                    >
                      https://main.d1awnwxte694hn.amplifyapp.com/
                    </a>
                  </div>
                  <hr></hr>
                  <div className="project-details">
                    <span className="credentials">Demo Credentials:</span>
                    <br />
                    <span>Username : ragunath219@gmail.com</span>
                    <br />
                    <span>Password : 87654321</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed project-heading"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Money Manager
                    <i class="fa fa-angle-down"></i>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse row"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="t-p col-lg-6">
                  <img
                    class="projects"
                    src={require("../image/Money manager.PNG")}
                    alt="Money Manager"
                  />
                </div>
                <div class="t-p col-lg-6">
                  <div className="project-details">
                    GitHub Frontend:{" "}
                    <a
                      href="https://github.com/Ragunath-Arjun/money_manager_frontend"
                      target="_blank"
                    >
                      https://github.com/Ragunath-Arjun/money_manager_frontend
                    </a>
                  </div>
                  <div className="project-details">
                    GitHub Backend:
                    <a
                      href="https://github.com/Ragunath-Arjun/Money_manager_backend"
                      target="_blank"
                    >
                      https://github.com/Ragunath-Arjun/Money_manager_backend
                    </a>
                  </div>
                  <div className="project-details">
                    Deploy link:
                    <a
                      href="https://main.d3kf799ia37hsb.amplifyapp.com/"
                      target="_blank"
                    >
                      https://main.d3kf799ia37hsb.amplifyapp.com/
                    </a>
                  </div>
                  <hr></hr>
                  <div className="project-details">
                    <span className="credentials">Demo Credentials:</span>
                    <br />
                    <span>Username : ragunath219@gmail.com</span>
                    <br />
                    <span>Password : 87654321</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header" id="headingFour">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed project-heading"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Group Chat
                    <i class="fa fa-angle-down"></i>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="t-p">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row pc1">
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
              <details>
                <summary className="text-primary">Deployed link</summary>
                <p>https://main.d1awnwxte694hn.amplifyapp.com/</p>
              </details>
              <details>
                <summary className="text-primary">Credentials</summary>
                <p>https://main.d1awnwxte694hn.amplifyapp.com/</p>
              </details>
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
        </div> */}
      </div>
    </>
  );
}

export default Portfolio;
