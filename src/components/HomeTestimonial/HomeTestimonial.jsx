import React from "react";
import OwlCarousel from "react-owl-carousel";

function HomeTestimonial() {
  return (
    <div className="testimonials">
      <div className="testimonials-h">
        <div className="testimonials-content">
          <div className="container">
            <OwlCarousel
              className="owl-main owl-carousel owl-theme"
              items={1}
              loop
              autoplay={true}
              autoplayTimeout={3000} // 3 seconds
              autoplayHoverPause={true}
            >
              <div className="item ">
                <div className="img-testimonials">
                  <img src="images/Home-1/about-testimonials-img.png" alt="#" />
                </div>
                <p className="testimonials-p">
                  <span>“</span>​‌ This is the only place to stay in Catalina! I
                  have stayed in the cheaper hotels and they were fine, but this
                  is just the icing on the cake! After spending the day bike
                  riding and hiking to come back and enjoy a glass of wine while
                  looking out your <span>​‌​‌”</span> ocean view window and then
                  to top it all off...
                </p>
                <h5 className="sky-h5">Abhi</h5>
                <p className="testimonials-p1">From cochin</p>
              </div>
              <div className="item">
                <div className="img-testimonials">
                  <img src="images/Home-1/about-testimonials-img.png" alt="#" />
                </div>
                <p className="testimonials-p">
                  <span>“</span>​‌ Thisis the only place to stay in Catalina! I
                  have stayed in the cheaper hotels and they were fine, but this
                  is just the icing onthe cake! After spending the day bike
                  riding and hiking to come back and enjoy a glass of wine while
                  looking out your <span>​‌​‌”</span> ocean view window and then
                  to top it all off...
                </p>
                <h5 className="sky-h5">Abhi</h5>
                <p className="testimonials-p1">From cochin</p>
              </div>
              <div className="item">
                <div className="img-testimonials">
                  <img src="images/Home-1/about-testimonials-img.png" alt="#" />
                </div>
                <p className="testimonials-p">
                  <span>“</span>​‌ This is the only place to stay in Catalina! I
                  have stayed in the cheaper hotels and they were fine, but this
                  is just the icing on the cake! After spending the day bike
                  riding and hiking to come back and enjoy a glass of wine while
                  looking out your <span>​‌​‌”</span> ocean view window and then
                  to top it all off...
                </p>
                <h5 className="sky-h5">Abhi</h5>
                <p className="testimonials-p1">From cochin</p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonial;
