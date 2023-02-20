import React from "react";

function Contact() {
  // let sendMessage = () => {
  //   alert("Thank you for providing your response!");
  // };
  return (
    <>
      <div class="contact-container container-fluid" id="contact">
        <div class="row">
          <div class="contact-head col-12">
            <h3>Contact</h3>
          </div>
        </div>
        <hr />
        <br />
        {/* <div class="row pt-3 contact-me-container">
          <div class="col-lg-6 contact-input-container ml-4">
            <form class="contact-input-form" method="post">
              <div class="input-text-container">
                <h1 className="contact-head col-12">
                  <h3>KEEP IN TOUCH</h3>
                </h1>
                <input
                  type="text"
                  class="name-input col-12 form-control"
                  name="name"
                  placeholder="Name"
                  value=""
                  onChange={""}
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
              <button
                type="submit"
                class="btn-primary mt-3 form-control"
                value="Send Message"
                onClick={() => {
                  sendMessage();
                }}
              >
                {" "}
                Send Message
              </button>
            </form>
            <div
              style={{
                position: "fixed",
                zindex: "9999",
                inset: "16px",
                pointerevents: "none",
              }}
            ></div>
          </div>
          {/* <div class="col-lg-6 ">
              <div class="row p-2">
                <div class="col-12">
                  <div class="contact-card-container">
                    <div class="contact-icon-container">
                      <div class="contact-card-top">
                        <div class="contact-dash col-1"></div>
                        <div class="contact-icon col-2">
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            data-testid="LocationOnIcon"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                          </svg>
                        </div>
                        <div class="contact-topic col-9">LOCATION</div>
                      </div>
                      <div class="contact-card-bottom">
                        <div class="contact-info">Gudiyatham, Vellore</div>
                        <div class="contact-info">Tamil Nadu</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-12">
                  <div class="contact-card-container">
                    <div class="contact-icon-container">
                      <div class="contact-card-top">
                        <div class="contact-dash col-1"></div>
                        <div class="contact-icon col-2">
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            data-testid="EmailIcon"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                          </svg>
                        </div>
                        <div class="contact-topic col-9">EMAIL</div>
                      </div>
                      <div class="contact-card-bottom">
                        <div class="contact-info">
                          karthi.m.official@gmail.com
                        </div>
                        <div class="contact-info">karthiraja268@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-12">
                  <div class="contact-card-container">
                    <div class="contact-icon-container">
                      <div class="contact-card-top">
                        <div class="contact-dash col-1"></div>
                        <div class="contact-icon col-2">
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            data-testid="CallIcon"
                          >
                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                          </svg>
                        </div>
                        <div class="contact-topic col-9">PHONE</div>
                      </div>
                      <div class="contact-card-bottom">
                        <div class="contact-info">+91 7305805670</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        {/* </div> */}

        <div class="row contact-div ">
          <div class="icons ">
            <a href="https://github.com/Ragunath-Arjun/" target="_blank" rel='noreferrer'>
              <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
              target="_blank" rel='noreferrer'
            >
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/ragunath_arjun/" target="_blank" rel='noreferrer'>
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/ragunath.ragu.16/"
              target="_blank" rel='noreferrer'
            >
              <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
              target="_blank" rel='noreferrer'
            >
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <br />

        <div class="up">
          <a href="#home">
            <button class="up1">UP!</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
