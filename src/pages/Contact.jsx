import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { db } from "../firebase/config";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, "contacts"), formData);
      toast.success("Enquiry sent successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error sending message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <section className="banner-tems text-center">
        <div className="container">
          <div className="banner-content">
            <h2>Contact us</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing</p> */}
          </div>
        </div>
      </section>
      <section className="section-contact">
        <div className="container">
          <div className="contact">
            <div className="row">
              <div className="wrap-about">
                <div className="about-item">
                  <div className="col-md-6 col-lg-5">
                    <div className="text">
                      <h2>Contact</h2>
                      <p>
                        {" "}
                        We are here to assist you with all your turf booking
                        needs. Whether you have questions, need support, or want
                        to provide feedback, feel free to reach out to us
                        through any of the following methods:
                      </p>
                      <ul>
                        <li style={{ display: "flex" }}>
                          <i className=" fa ion-ios-location-outline"></i>
                          Cochin Olympiad Indoor Turf, Tharishu Road end, Near
                          Assisi Vidyaniketan School, Njarakkal, Ernakulam,
                          Pin-682505,
                        </li>
                        <li>
                          <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                          <a
                            href="tel:+91
                          85890 40488"
                          >
                            +91 85890 40488
                          </a>
                        </li>
                        <li>
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                          <a href="mailto:info@cochinolympaid.com">
                            info@cochinolympaid.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-lg-offset-1">
                    <div className="contact-form">
                      <form onSubmit={handleSubmit}>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="field-text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="email"
                            className="field-text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="field-text"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            cols="30"
                            rows="10"
                            name="message"
                            className="field-textarea"
                            placeholder="Write what do you want"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>
                        <div className="col-sm-6">
                          <button
                            type="submit"
                            className="btn btn-room"
                            disabled={isLoading}
                          >
                            {" "}
                            {isLoading ? "Sending..." : "SEND"}
                          </button>
                        </div>
                      </form>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7938174428878!2d76.21425037424743!3d10.033866090073271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0813d7bc434ec5%3A0xda7f3726c3904375!2sCochin%20olympiad%20indoor%20turf!5e0!3m2!1sen!2sin!4v1721830613984!5m2!1sen!2sin"
          height="470"
          allowfullscreen
        ></iframe>
      </div>

      <Footer />
      <a href="contact.html#" title="sroll" className="scrollToTop">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
}

export default Contact;
