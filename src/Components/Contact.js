import { useFormik } from "formik";
import React from "react";
import "./Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialMedia from "./SocialMedia";

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
      } else if (values.name.length < 4) {
        errors.name = "Name should be minimum 4 characters";
      } else if (values.name.length > 15) {
        errors.name = "Name should not exceed 15 characters";
      }
      if (!values.email) {
        errors.email = "Please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email";
      }
      if (!values.subject) {
        errors.subject = "Please enter your subject";
      } else if (values.subject.length < 4) {
        errors.subject = "Subject should be minimum 4 characters";
      } else if (values.subject.length > 15) {
        errors.subject = "Subject should not exceed 15 characters";
      }
      if (!values.message) {
        errors.message = "Please enter your message";
      } else if (values.message.length < 4) {
        errors.message = "Message should be minimum 4 characters";
      } else if (values.message.length > 50) {
        errors.message = "Message should not exceed 15 characters";
      }
      return errors;
    },
    onSubmit: (values) => {
      notify();
    },
  });

  //toastify message for success//
  const notify = () =>
    toast.success("Thank you for your response", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
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
                  class={`name-input form-control ${
                    myFormik.errors.name ? "is-invalid" : "is-valid"
                  }`}
                  name="name"
                  placeholder="Name"
                  value={myFormik.values.name}
                  onChange={myFormik.handleChange}
                />
                <span style={{ color: "red" }}>{myFormik.errors.name}</span>
              </div>
              <div class="input-text-container">
                <input
                  type="email"
                  class={`email-input mt-3 form-control ${
                    myFormik.errors.email ? "is-invalid" : "is-valid"
                  }`}
                  name="email"
                  placeholder="Email"
                  value={myFormik.values.email}
                  onChange={myFormik.handleChange}
                />
                <span style={{ color: "red" }}>{myFormik.errors.email}</span>
              </div>
              <div class="input-text-container">
                <input
                  type="text"
                  class={`subject-input mt-3 form-control ${
                    myFormik.errors.subject ? "is-invalid" : "is-valid"
                  }`}
                  name="subject"
                  placeholder="Subject"
                  value={myFormik.values.subject}
                  fdprocessedid="9pcen"
                  onChange={myFormik.handleChange}
                />
                <span style={{ color: "red" }}>{myFormik.errors.subject}</span>
              </div>
              <div class="input-text-container">
                <textarea
                  name="message"
                  className={`message-input mt-3 form-control ${
                    myFormik.errors.message ? "is-invalid" : "is-valid"
                  }`}
                  placeholder="Message"
                  value={myFormik.values.message}
                  onChange={myFormik.handleChange}
                ></textarea>
                <span style={{ color: "red" }}>{myFormik.errors.message}</span>
              </div>
              <div>
                <input
                  type="submit"
                  class="btn-primary mt-3 form-control sendmsg-btn"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-5">
            <h3 class="follow-us">Follow me on:</h3>
            <SocialMedia />
          </div>
        </div>

        <br />

        <div class="up">
          <a href="#home">
            <button class="up1">UP↑</button>
          </a>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Contact;
