import React from "react";

import "./Topbar.css";

function Topbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light nav-container container-fluid">
        <a class="navbar-brand bold text-white logo ml-5" href="#">
          Ragunath <span class="m">M</span>
        </a>

        <button
          class="navbar-toggler hi"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i
              class="fa fa-bars fa-1x"
              aria-hidden="true"
              style={{ color: "#00bfff" }}
            ></i>
          </span>
        </button>

        <div
          class="collapse navbar-collapse header"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li
              class="nav-item active "
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#home" class="nav-link text-white">
                HOME
              </a>
            </li>
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#about-me" class="nav-link text-white">
                ABOUT
              </a>
            </li>
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#skills" class="nav-link text-white">
                SKILLS
              </a>
            </li>
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#qualification" class="nav-link text-white">
                QUALIFICATION
              </a>
            </li>
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#project" class="nav-link text-white">
                PORTFOLIO
              </a>
            </li>
            <li
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a href="#contact" class="nav-link text-white">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
