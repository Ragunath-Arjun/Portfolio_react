import React from "react";

function Homepage() {
  return (
    <>
      <div class="homepage-container" id="home">
        <div>
          <div class="mainpage container-fluid">
            <section class="content-container row">
              <div class="col-12 img-center">
                <div class="row item" style={{transform: "none"}}>
                  <img
                    class="front-img"
                    src="C:\Users\Ragunath\Documents\Course\React\portfolio_react\image\3.JPG"
                  />
                  <br />
                </div>
              </div>
              <div class="col-12 text-center" style={{transform: "none"}}>
                <h1 class="name">I'm Ragunath</h1>
              </div>
              <div class="col-12 text-center" style={{transform: "none"}}>
                <h3 class="mern">Full Stack Developer | MERN</h3>
              </div>

              <div class="icons col-12 text-center" style={{transform: "none"}}>
                <a href="https://github.com/Ragunath-Arjun/" target="_blank">
                  <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
                  target="_blank"
                >
                  <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/ragunath_arjun/"
                  target="_blank"
                >
                  <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.facebook.com/ragunath.ragu.16/"
                  target="_blank"
                >
                  <i
                    class="fa fa-facebook-official fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
                  target="_blank"
                >
                  <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
