import { useFormik } from "formik";
import React from "react";

function Contact() {
  const myFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Please enter your name";
      }
      if (!values.email) {
        errors.email = "Please enter your email";
      }
      if (!values.subject) {
        errors.email = "Please enter your subject";
      }
      if (!values.message) {
        errors.email = "Please enter your message";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            <form class="contact-input-form" onSubmit={myFormik.handleSubmit}>
              <div class="input-text-container">
                <input
                  type="text"
                  class="name-input col-12 form-control"
                  name="name"
                  placeholder="Name"
                  value={myFormik.values.name}
                  onChange={myFormik.handleChange}
                />
                <span>{myFormik.errors.name}</span>
              </div>
              <div class="input-text-container">
                <input
                  type="email"
                  class="email-input col-12 mt-3 form-control"
                  name="email"
                  placeholder="Email"
                  value={myFormik.values.email}
                  fdprocessedid="9paex"
                  onChange={myFormik.handleChange}
                />
              </div>
              <div class="input-text-container">
                <input
                  type="text"
                  class="subject-input col-12 mt-3 form-control"
                  name="subject"
                  placeholder="Subject"
                  value={myFormik.values.subject}
                  fdprocessedid="9pcen"
                  onChange={myFormik.handleChange}
                />
              </div>
              <div class="input-text-container">
                <textarea
                  name="message"
                  class="col-12 message-input mt-3 form-control"
                  placeholder="Message"
                  value={myFormik.values.message}
                  onChange={myFormik.handleChange}
                ></textarea>
              </div>
              <div class="input-text-container">
                <input type="submit" class="btn-primary mt-3 form-control" value="Send Message">Send Message</input>
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
