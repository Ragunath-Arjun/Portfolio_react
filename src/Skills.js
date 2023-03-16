import React from "react";

function Skills() {
  return (
    <>
      <div class="skills-container container-fluid" id="skills">
        <div class="row">
          <div class="skills-head col-12">
            <h3>My Skills</h3>
            <hr />
          </div>
        </div>
        <div class="row skills-row">
          <div class="col-lg-4 col-md-6 p-4">
            <div class="progress-title">
              <h4>HTML</h4>
            </div>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <br />
            <div>
              <h4>CSS</h4>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
            <br />
            <div>
              <h4>JavaScript</h4>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
            <br />
            <div>
              <h4>Bootstrap</h4>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "77%" }}
                >
                  77%
                </div>
              </div>
            </div>
            <br />
            <div>
              <h4>React</h4>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <br />
            <div>
              <h4>Node</h4>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "65%" }}
                >
                  65%
                </div>
              </div>
            </div>
            <br />
            <div>
              <h4>MongoDB</h4>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
