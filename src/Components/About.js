import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div class="about-container container-fluid" id="about-me">
        <div class="about-head">
          <h3 class="abt">About Me</h3>
          <hr />
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="about-first">
              <img
                class="about-img"
                src={require("../image/02497.JPG")}
                alt="Ragunath"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-info mr-5">
              <p>
                I am <span class="namecolor">Ragunath M</span>. I am a simple,
                creative, enthusiastic and fun-loving person. I always like to
                create something on my own which is helpful for others.
                <br />
                <br />I have good hands-on experience in HTML5, CSS3,
                Javascript, React, Node, SQL, MongoDB and on.
              </p>
              <i class="fa fa-user fa-2x ml-1" aria-hidden="true"></i>
              <span class="font ml-2">Name : Ragunath M</span>
              <br />
              <i class="fa fa-birthday-cake fa-2x" aria-hidden="true"></i>
              <span class="font"> DOB : 13-10-1996</span>
              <br />
              <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <span class="font"> Email: ragunath219@gmail.com</span>
              <br />
              <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
              <span class="font"> Phone: +91 9629596025</span>
              <br />
              <i class="fa fa-language fa-2x" aria-hidden="true"></i>
              <span class="font"> Languages: Tamil,Telugu,English</span> <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
