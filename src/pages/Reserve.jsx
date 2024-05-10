import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'; // Import styled utility from @mui/system
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import DateClick from '../components/DateClick';



function Reserve() {
  const DynamicColorButton = styled(Button)(({ color }) => ({
    color: color || 'red', // Default to orange if color prop is not provided
  }));

  // const classes = useStyles();
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
            <h2>RESERVATION</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </section>
      <section className="section-reservation-page">
        <div className="container">
          <div className="reservation-page">
            <section className="section-slider  text-center section-slider-v3">
              <div className="container">
                <OwlCarousel className="owl-main owl-carousel owl-theme" items={8} responsive={{
                  0: {
                    items: 4
                  },
                  600: {
                    items: 6
                  },
                  1000: {
                    items: 8
                  }
                }}><DateClick/>
                </OwlCarousel>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">FIRST TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <DynamicColorButton variant="outlined" style={{ marginRight: 10, marginTop: 10 }}>05:00 am <br />06:00 am</DynamicColorButton>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }}>07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }} >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }} >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" s>05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">SECOND TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">THIRD TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button></Button>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <footer className="footer-sky">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                <div className="icon-email">
                  <a href="reservation_1.html#" title="Email"><img src="images/Home-1/footer-top-icon-l.png"
                    alt="Email" className="img-responsive" /></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-5">
                <div className="textbox">
                  <form className="form-inline">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Your email address"
                          aria-label="Search for..." />
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
                  <a href="reservation_1.html#" title="Twitter"><i className="fa fa-twitter"
                    aria-hidden="true"></i></a>
                  <a href="reservation_1.html#" title="Facebook"><i className="fa fa-facebook-square"
                    aria-hidden="true"></i></a>
                  <a href="reservation_1.html#" title="Tripadvisor"><i className="fa fa-tripadvisor"
                    aria-hidden="true"></i></a>
                  <a href="reservation_1.html#" title="Isnstagram"><i className="fa fa-instagram"
                    aria-hidden="true"></i></a>
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
                  <a href="index.html" title="Skyline"><img src="images/Home-1/sky-logo-footer.png"
                    alt="Image" /></a>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1  ">
                <div className="list-content">
                  <ul>
                    <li><a href="attractions.html" title="">Site Map</a></li>
                    <li><a href="tems_condition_1.html" title="">Term & Conditions</a></li>
                    <li><a href="reservation_1.html#" title="">Privacy Policy</a></li>
                    <li><a href="reservation_1.html#" title="">Help</a></li>
                    <li><a href="reservation_1.html#" title="">Affiliate</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                <div className="list-content ">
                  <ul>
                    <li><a href="reservation_1.html#" title="">Our Location</a></li>
                    <li><a href="reservation_1.html#" title="">Career</a></li>
                    <li><a href="about.html" title="">About Us</a></li>
                    <li><a href="contact.html" title="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                <div className="list-content ">
                  <ul>
                    <li><a href="reservation_1.html#" title="">FAQS</a></li>
                    <li><a href="reservation_1.html#" title="">News</a></li>
                    <li><a href="gallery_1.html" title="">Photo & Video</a></li>
                    <li><a href="restaurant_1.html" title="">Restaurant</a></li>
                    <li><a href="reservation_1.html#" title="">Gift Card</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                Copyright © 2017 by <a href="reservation_1.html#" title="">EngoTheme.</a> SkyLine Hotel Theme
                crafted with love
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                <div className="payments text-right">
                  <ul>
                    <li>
                      <a href="reservation_1.html#" title="Paypal"><img src="images/Home-1/Paypal.png"
                        alt="Paypal" /></a>
                    </li>
                    <li>
                      <a href="reservation_1.html#" title="Visa"><img src="images/Home-1/Visa.png"
                        alt="Visa" /></a>
                    </li>
                    <li>
                      <a href="reservation_1.html#" title="Master"><img
                        src="images/Home-1/Master-card.png" alt="Master" /></a>
                    </li>
                    <li>
                      <a href="reservation_1.html#" title="Discover"><img src="images/Home-1/Discover.png"
                        alt="Discover" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="reservation_1.html#" title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>

    </div>
  )
}

export default Reserve