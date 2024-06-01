import React, { useEffect } from 'react'
import './Reserve.css'
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
// import Button from '@mui/material/Button'
import { styled } from '@mui/system'; // Import styled utility from @mui/system
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import DateClick from '../components/DateClick';
import Slider from '../section/Slider';
import Booking from '../section/Booking';
import Header from '../components/Header/Header';





function Reserve(props) {
  const { SlotData } = props
  // const DynamicColorButton = styled(Button)(({ color }) => ({
  //   color: color || 'red', // Default to orange if color prop is not provided
  // }));
  // const slots = {
  //   morning: ['9:00 AM-10:00 AM', '10:00 AM', '11:00 AM'],
  //   afternoon: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'],
  //   evening: ['4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  // };

  // const renderSlots = (timeOfDay) => {
  //   return slots[timeOfDay].map((slot, index) => (
  //     <Grid item key={index}>
  //       <Button variant="outlined" color="primary">
  //         {slot}
  //       </Button>
  //     </Grid>
  //   ));
  // };
  // useEffect(async () => {
  //   await fetchSlots();
  // }, []); 

  return (
    <div>
      <Header/>
      <section className="banner-tems text-center">
        <div className="container">
          <div className="banner-content">
            <h2>RESERVATION</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </section>
      <Booking slots={SlotData} />
      <footer className="footer-sky">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                <div className="icon-email">
                  <a title="Email"><img src="images/Home-1/footer-top-icon-l.png"
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
                  <a title="Twitter"><i className="fa fa-twitter"
                    aria-hidden="true"></i></a>
                  <a title="Facebook"><i className="fa fa-facebook-square"
                    aria-hidden="true"></i></a>
                  <a title="Tripadvisor"><i className="fa fa-tripadvisor"
                    aria-hidden="true"></i></a>
                  <a title="Isnstagram"><i className="fa fa-instagram"
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
                    <li><a title="">Privacy Policy</a></li>
                    <li><a title="">Help</a></li>
                    <li><a title="">Affiliate</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                <div className="list-content ">
                  <ul>
                    <li><a title="">Our Location</a></li>
                    <li><a title="">Career</a></li>
                    <li><a href="about.html" title="">About Us</a></li>
                    <li><a href="contact.html" title="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                <div className="list-content ">
                  <ul>
                    <li><a title="">FAQS</a></li>
                    <li><a title="">News</a></li>
                    <li><a href="gallery_1.html" title="">Photo & Video</a></li>
                    <li><a href="restaurant_1.html" title="">Restaurant</a></li>
                    <li><a title="">Gift Card</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                Copyright © 2017 by <a title="">EngoTheme.</a> SkyLine Hotel Theme
                crafted with love
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                <div className="payments text-right">
                  <ul>
                    <li>
                      <a title="Paypal"><img src="images/Home-1/Paypal.png"
                        alt="Paypal" /></a>
                    </li>
                    <li>
                      <a title="Visa"><img src="images/Home-1/Visa.png"
                        alt="Visa" /></a>
                    </li>
                    <li>
                      <a title="Master"><img
                        src="images/Home-1/Master-card.png" alt="Master" /></a>
                    </li>
                    <li>
                      <a title="Discover"><img src="images/Home-1/Discover.png"
                        alt="Discover" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>

    </div>
  )
}

export default Reserve