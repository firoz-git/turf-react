import React, { useState } from 'react'
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, 'contacts'), formData);
      toast.success('Enquiry sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error sending message. Please try again.');
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
                      <p> We are here to assist you with all your turf booking needs. Whether you have questions, need support, or want to provide feedback, feel free to reach out to us through any of the following methods:</p>
                      <ul>
                        <li><i className=" fa ion-ios-location-outline"></i> 121 King Str, Melbourne Victoria</li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i> 1-548-854-8898</li>
                        <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="https://landing.engotheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="375f525b5b5877445c4e5b5e59525f5843525b1954585a">[email&#160;protected]</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-lg-offset-1">
                    <div className="contact-form">
                      <form onSubmit={handleSubmit}>
                        <div className="col-sm-6">
                          <input type="text"
                            className="field-text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required />
                        </div>
                        <div className="col-sm-6">
                          <input type="email"
                            className="field-text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required />
                        </div>
                        <div className="col-sm-12">
                          <input type="text"
                            className="field-text"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required />
                        </div>
                        <div className="col-sm-12">
                          <textarea cols="30"
                            rows="10"
                            name="message"
                            className="field-textarea"
                            placeholder="Write what do you want"
                            value={formData.message}
                            onChange={handleInputChange}
                            required></textarea>
                        </div>
                        <div className="col-sm-6">
                          <button type="submit" className="btn btn-room" disabled={isLoading}> {isLoading ? 'Sending...' : 'SEND'}</button>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6124.155496132579!2d144.95267262759506!3d-37.81807247133261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd58ef1f9%3A0x924c91f561a4fd11!2s121+King+St%2C+Melbourne+VIC+3000%2C+%C3%9Ac!5e0!3m2!1svi!2s!4v1510819444662" height="470" allowfullscreen></iframe>
      </div>

      <Footer />
      <a href="contact.html#" title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>

    </div>
  )
}

export default Contact