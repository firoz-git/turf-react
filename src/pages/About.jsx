import React from 'react'
import { Link } from 'react-router-dom'


function About() {
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
                        <h2>About Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </section>
            <section className="section-about">
                <div className="container">
                    <div className="row">
                        <div className="wrap-about">
                            <div className="about-item">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right">
                                <div className="img">
                                        <img src="images/About/about.jpg" alt="#" className="img-responsive" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-left">
                                    <div className="text">
                                        <h2 className="heading">ABOUT US</h2>
                                        <div className="desc">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                            <br />
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-item about-right">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  no-padding-left col-lg-push-6 col-md-push-6 ">
                                    <div className="img">
                                        <img src="images/About/about-1.jpg" alt="#" className="img-responsive" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right col-lg-pull-6 col-md-pull-6">
                                    <div className="text">
                                        <h2 className="heading">WHY GUEST CHOOSE  SKYLINE HOTEL?</h2>
                                        <div className="desc">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                                                <br />desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-statistics ">
                <div className="container">
                    <div className="statistics">
                        <h2 className="heading text-center">Hotel statistics</h2>
                        <div className="statistics_content">
                            <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item">
                                        <span className="count">768</span>
                                        <span>Guest Stay</span>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item">
                                        <span className="count">632</span>
                                        <span>BOOK ROOM</span>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item">
                                        <span className="count">1024</span>
                                        <span>MEMBER STAY</span>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item no-border">
                                        <span className="count">256</span>
                                        <span>MEALS SERVED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-team">
                <div className="container">
                    <div className="team">
                        <h2 className="heading text-center">Team Member</h2>
                        <p className="sub-heading text-center">Lorem Ipsum is simply dummy text of the printing</p>
                        <div className="team_content">
                            <div className="row">
                                <div className="col-xs-6 col-md-3">
                                    <div className="team_item text-center">
                                        <div className="img">
                                            <a href="about.html#"><img src="images/About/about-3.png" alt="#" /></a>
                                        </div>
                                        <div className="text">
                                            <h2>JESSICA ALBA</h2>
                                            <span>Manager lotus Hotel</span>
                                            <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                            <div className="team-share">
                                                <a href="about.html#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="team_item text-center">
                                        <div className="img">
                                            <a href="about.html#"><img src="images/About/about-4.png" alt="#" /></a>
                                        </div>
                                        <div className="text">
                                            <h2>Robet WILIAM</h2>
                                            <span>Founder Hotel</span>
                                            <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                            <div className="team-share">
                                                <a href="about.html#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="team_item text-center">
                                        <div className="img">
                                            <a href="about.html#"><img src="images/About/about-5.png" alt="#" /></a>
                                        </div>
                                        <div className="text">
                                            <h2>Adam</h2>
                                            <span>Lorem lipsum</span>
                                            <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                            <div className="team-share">
                                                <a href="about.html#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-3">
                                    <div className="team_item text-center">
                                        <div className="img">
                                            <a href="about.html#"><img src="images/About/about-6.png" alt="#" /></a>
                                        </div>
                                        <div className="text">
                                            <h2>David Gari</h2>
                                            <span>Lorem lipsum</span>
                                            <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                            <div className="team-share">
                                                <a href="about.html#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                                <a href="about.html#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
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
                                    <a href="about.html#" title="Email"><img src="images/Home-1/footer-top-icon-l.png" alt="Email" className="img-responsive" /></a>
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
                                    <a href="about.html#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="about.html#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                    <a href="about.html#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a>
                                    <a href="about.html#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
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
                                        <li><a href="about.html#" title="">Privacy Policy</a></li>
                                        <li><a href="about.html#" title="">Help</a></li>
                                        <li><a href="about.html#" title="">Affiliate</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                                <div className="list-content ">
                                    <ul>
                                        <li><a href="about.html#" title="">Our Location</a></li>
                                        <li><a href="about.html#" title="">Career</a></li>
                                        <li><a href="about.html" title="">About Us</a></li>
                                        <li><a href="contact.html" title="">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                                <div className="list-content ">
                                    <ul>
                                        <li><a href="about.html#" title="">FAQS</a></li>
                                        <li><a href="about.html#" title="">News</a></li>
                                        <li><a href="gallery_1.html" title="">Photo & Video</a></li>
                                        <li><a href="restaurant_1.html" title="">Restaurant</a></li>
                                        <li><a href="about.html#" title="">Gift Card</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                                Copyright © 2017 by <a href="about.html#" title="">EngoTheme.</a> SkyLine Hotel Theme crafted with love
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                                <div className="payments text-right">
                                    <ul>
                                        <li>
                                            <a href="about.html#" title="Paypal"><img src="images/Home-1/Paypal.png" alt="Paypal" /></a>
                                        </li>
                                        <li>
                                            <a href="about.html#" title="Visa"><img src="images/Home-1/Visa.png" alt="Visa" /></a>
                                        </li>
                                        <li>
                                            <a href="about.html#" title="Master"><img src="images/Home-1/Master-card.png" alt="Master" /></a>
                                        </li>
                                        <li>
                                            <a href="about.html#" title="Discover"><img src="images/Home-1/Discover.png" alt="Discover" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="about.html#" title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>

        </div>
    )
}

export default About