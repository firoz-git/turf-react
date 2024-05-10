import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <header className="header-sky">
        <div className="menu-header">
          <nav className="navbar navbar-fixed-top">
            <div className="container">
              <div className="navbar-header ">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar "></span>
                  <span className="icon-bar "></span>
                  <span className="icon-bar "></span>
                </button>
                <a className="navbar-brand" href="file:///E:/Xampp/htdocs/skyline/index.html" title="Skyline"><img
                  src="images/Home-1/sky-logo-header.png" alt="#" /></a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to='/' ><a title="Home">Home</a></Link>
                  </li>
                  <li className="dropdown ">
                    <Link to='/reservation' ><a href="reservation_1.html" >RESERVATION</a></Link>
                  </li>
                  <li><Link to='/about'><a href="about.html" title="About">About</a></Link></li>
                  <li><Link to='/contact'><a href="contact.html" title="Contact">Contact</a></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="banner-tems text-center">
        <div className="container">
          <div className="banner-content">
            <h2>Contact us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </section>
      <section className="section-contact">
        <div className="container">
          <div className="contact">
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <div className="text">
                  <h2>Contact</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                  <ul>
                    <li><i className=" fa ion-ios-location-outline"></i> 121 King Str, Melbourne Victoria</li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i> 1-548-854-8898</li>
                    <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="https://landing.engotheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="375f525b5b5877445c4e5b5e59525f5843525b1954585a">[email&#160;protected]</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-lg-offset-1">
                <div className="contact-form">
                  <form action="https://landing.engotheme.com/html/skyline/demo/send_mail_contact.php" method="post">
                    <div className="row">
                      <div className="col-sm-6">
                        <input type="text" className="field-text" name="name" placeholder="Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="field-text" name="email" placeholder="Email" />
                      </div>
                      <div className="col-sm-12">
                        <input type="text" className="field-text" name="subject" placeholder="Subject" />
                      </div>
                      <div className="col-sm-12">
                        <textarea cols="30" rows="10" name="message" className="field-textarea" placeholder="Write what do you want"></textarea>
                      </div>
                      <div className="col-sm-6">
                        <button type="submit" className="btn btn-room">SEND</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6124.155496132579!2d144.95267262759506!3d-37.81807247133261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd58ef1f9%3A0x924c91f561a4fd11!2s121+King+St%2C+Melbourne+VIC+3000%2C+%C3%9Ac!5e0!3m2!1svi!2s!4v1510819444662" height="470" allowfullscreen></iframe>
      </div>
      <footer className="footer-sky">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                <div className="icon-email">
                  <a href="contact.html#" title="Email"><img src="images/Home-1/footer-top-icon-l.png" alt="Email" className="img-responsive" /></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-5">
                <div className="textbox">
                  <form className="form-inline">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Your email address" aria-label="Search for..." />
                        <button className="btn btn-secondary" type="button">
                          <i className="ion-android-send"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 text-right">
                <div className="footer-icon-l">
                  <a href="contact.html#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="contact.html#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                  <a href="contact.html#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                  <a href="contact.html#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="container">
            <div className="row padding-footer-mid">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="footer-logo text-center list-content">
                  <a href="index.html" title="Skyline"><img src="images/Home-1/sky-logo-footer.png" alt="Image" /></a>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1  ">
                <div className="list-content">
                  <ul>
                    <li><a href="attractions.html" title="">Site Map</a></li>
                    <li><a href="tems_condition_1.html" title="">Term & Conditions</a></li>
                    <li><a href="contact.html#" title="">Privacy Policy</a></li>
                    <li><a href="contact.html#" title="">Help</a></li>
                    <li><a href="contact.html#" title="">Affiliate</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                <div className="list-content ">
                  <ul>
                    <li><a href="contact.html#" title="">Our Location</a></li>
                    <li><a href="contact.html#" title="">Career</a></li>
                    <li><a href="about.html" title="">About Us</a></li>
                    <li><a href="contact.html" title="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                <div className="list-content ">
                  <ul>
                    <li><a href="contact.html#" title="">FAQS</a></li>
                    <li><a href="contact.html#" title="">News</a></li>
                    <li><a href="gallery_1.html" title="">Photo & Video</a></li>
                    <li><a href="restaurant_1.html" title="">Restaurant</a></li>
                    <li><a href="contact.html#" title="">Gift Card</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                Copyright © 2017 by <a href="contact.html#" title="">EngoTheme.</a> SkyLine Hotel Theme crafted with love
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                <div className="payments text-right">
                  <ul>
                    <li>
                      <a href="contact.html#" title="Paypal"><img src="images/Home-1/Paypal.png" alt="Paypal" /></a>
                    </li>
                    <li>
                      <a href="contact.html#" title="Visa"><img src="images/Home-1/Visa.png" alt="Visa" /></a>
                    </li>
                    <li>
                      <a href="contact.html#" title="Master"><img src="images/Home-1/Master-card.png" alt="Master" /></a>
                    </li>
                    <li>
                      <a href="contact.html#" title="Discover"><img src="images/Home-1/Discover.png" alt="Discover" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="contact.html#" title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>

    </div>
  )
}

export default Contact