import React from "react";

function Contact() {
  let sendMessage = () => {
    alert("Thank you for providing your response!");
  };
  return (
    <>
      <div class="contact-container container-fluid" id="contact">
        <div class="row">
          <div class="contact-head col-12">
            <h3>Contact</h3>
          </div>
        </div>
        <hr />
        <div class="row pt-3 contact-me-container">
          <div class="col-lg-6 contact-input-container ml-5">
            <form class="contact-input-form">
              <div class="input-text-container">
                <input
                  type="text"
                  class="name-input col-12 form-control"
                  name="name"
                  placeholder="Name"
                  value=""
                  onChange="handlechange"
                />
              </div>
              <div class="input-text-container">
                <input
                  type="email"
                  class="email-input col-12 mt-3 form-control"
                  name="email"
                  placeholder="Email"
                  value=""
                  fdprocessedid="9paex"
                  onChange={""}
                />
              </div>
              <div class="input-text-container">
                <input
                  type="text"
                  class="subject-input col-12 mt-3 form-control"
                  name="subject"
                  placeholder="Subject"
                  value=""
                  fdprocessedid="9pcen"
                  onChange={""}
                />
              </div>
              <div class="input-text-container">
                <textarea
                  name="message"
                  class="col-12 message-input mt-3 form-control"
                  placeholder="Message"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                ></textarea>
              </div>
              <div class="input-text-container">
                <button
                  type="submit"
                  class="btn-primary mt-3 form-control"
                  value="Send Message"
                  onClick={() => {
                    sendMessage();
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="row contact-div mt-5">
          <div class="icons-below col-12 text-center">
            <a
              href="https://github.com/Ragunath-Arjun/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/ragunath_arjun/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/ragunath.ragu.16/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <br />

        <div class="up">
          <a href="#home">
            <button class="up1">UP</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
