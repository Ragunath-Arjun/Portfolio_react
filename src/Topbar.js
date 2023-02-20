import React from "react";

function Topbar() {
  return (
    <>
      <div class="container-fluid header">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xl-3 col-12 header1">
            <span>
              <h2 class="logo">
                Ragunath<span class="m"> M</span>
              </h2>
            </span>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xl-9 col-12 header2 mt-3 mb-2">
            <a href="#home">HOME</a>
            <a href="#about-me">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#qualification">QUALIFICATION</a>
            <a href="#project">PORTFOLIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
