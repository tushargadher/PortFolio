import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import BGImg from "../Media/BGcontact.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contect() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  //email send function
  const handleSubmit = (e) => {
    e.preventDefault();

    const service_id = "service_u0a8q6k";
    const temple_id = "template_k9hi5tm";
    const public_key = "c_ew3wsouD8kCq95n";
    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      to_name: "Tushar Gadher",
      message: emailData.message,
    };

    emailjs
      .send(service_id, temple_id, templateParams, public_key)
      .then((data) => {
        toast.success("Thank you, Your Message Successfully Sent!");
        // console.log(`Email send successful`, data);
        setEmailData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Oh snap! Can't Send Message");
        // console.log("Error while sending Email", error);
      });
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="head">Contact As</div>
      <div className="contectform" data-aos="fade-up">
        <img src={BGImg} alt="contactus" id="contactBG" />
        <div className="side-head">
          <p className="side-p">GET IN TOUCH</p>
          <p className="side-p" id="question">
            Have a project ? We would love to help.
          </p>
          <p className="side-p">
            <a href="mailto:tushargadher123@gmail.com" id="mail">
              tushargadher123@gmail.com
            </a>
          </p>
        </div>

        <div className="left-head">
          <form id="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={(e) => handleChange(e)}
              value={emailData.name}
              required
            ></input>

            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={emailData.email}
              required
            ></input>

            <textarea
              placeholder="Message"
              rows="8"
              id="textarea"
              name="message"
              onChange={(e) => handleChange(e)}
              value={emailData.message}
              required
            ></textarea>
            <input type="submit" value="SEND" id="sendbtn" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Contect;
