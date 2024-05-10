import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Slide from '../components/Slide';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from '../section/Slider';

function Home() {



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
            <Slider />
            {/* <section className="section-slider height-v"> */}

           


                {/* <div id="index12" className="owl-carousel  owl-theme"> */}
                    {/* <div className="item">
                        <img alt="Third slide" src="images/Home-1/Slider-v1.jpg" className="img-responsive" />
                        <div className="carousel-caption">
                            <h1>Welcome to Skyline</h1>
                            <p><span className="line-t"></span>Hotels & Resorts <span className="line-b"></span></p>
                        </div>
                    </div> */}
                    {/* <div className="item">
                        <img alt="Third slide" src="images/Home-2/Slider-v2.jpg" className="img-responsive" />
                        <div className="container">
                            <div className="carousel-caption ">
                                <h1 className="v2">Enjoy a Luxury Experience</h1>
                                <p className="p-v2"><span className="line-t"></span>Hotels & Resorts <span className="line-b"></span></p>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="check-avail">
                    <div className="container">
                        <div className="arrival date-title ">
                            <label>Arrival Date </label>
                            <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                                <input className="form-control" type="text" />
                                <span className="input-group-addon"><img src="images/Home-1/date-icon.png" alt="#" /></span>
                            </div>
                        </div>
                        <div className="departure date-title ">
                            <label>Departure Date </label>
                            <div id="datepickeri" className="input-group date" data-date-format="dd-mm-yyyy">
                                <input className="form-control" type="text" />
                                <span className="input-group-addon"><img src="images/Home-1/date-icon.png" alt="#" /></span>
                            </div>
                        </div>
                        <div className="adults date-title ">
                            <label>Adults</label>
                            <form>
                                <div className=" carousel-search">
                                    <div className="btn-group">
                                        <a className="btn dropdown-toggle " data-toggle="dropdown" href="index.html#">2</a>
                                        <ul className="dropdown-menu">
                                            <li><a>1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="children date-title ">
                            <label>Children</label>
                            <form>
                                <div className=" carousel-search">
                                    <div className="btn-group">
                                        <a className="btn dropdown-toggle " data-toggle="dropdown" href="index.html#">2</a>
                                        <ul className="dropdown-menu">
                                            <li><a>1</a></li>
                                            <li><a>2</a></li>
                                            <li><a>3</a></li>
                                            <li><a>4</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="find_btn date-title">
                            <div className="text-find">
                                Check
                                <br />Availability
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </section> */}

            <section className="rooms rooms-v2 rooms-v3">
                <div className="container">
                    <h2 className="title-room">Our Rooms</h2>
                    <div className="outline"></div>
                    <p className="rooms-p">When you host a party or family reunion, the special celebrations let you streng then bonds with</p>
                    <div className="wrap-rooms">
                        <div id="events" className="owl-carousel owl-theme">
                            <div className="item ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <div className="img-item">
                                            <img src="images/Home-3/our-1.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
                                        </div>
                                        <div className="rooms-content">
                                            <h4 className="sky-h4">Luxury Room</h4>
                                            <p className="price">$320 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Vestib ulum id ligula porta felis euis.</p>
                                        <div className="bottom-room">
                                            <ul>
                                                <li><img src="images/Home-2/v2-icon.png" className="img-responsive" alt="Image" />4 Persons</li>
                                                <li><img src="images/Home-2/v2-icon-1.png" className="img-responsive" alt="Image" />35m2 / 376ft2</li>
                                                <li><img src="images/Home-2/v2-icon-2.png" className="img-responsive" alt="Image" />Sea Balcony</li>
                                                <li><img src="images/Home-2/v2-icon-3.png" className="img-responsive" alt="Image" />Kingsize / Twin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <div className="img-item">
                                            <img src="images/Home-3/our-4.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
                                        </div>
                                        <div className="rooms-content">
                                            <h4 className="sky-h4">Double Room</h4>
                                            <p className="price">$320 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Vestib ulum id ligula porta felis euis.</p>
                                        <div className="bottom-room">
                                            <ul>
                                                <li><img src="images/Home-2/v2-icon.png" className="img-responsive" alt="Image" />4 Persons</li>
                                                <li><img src="images/Home-2/v2-icon-1.png" className="img-responsive" alt="Image" />35m2 / 376ft2</li>
                                                <li><img src="images/Home-2/v2-icon-2.png" className="img-responsive" alt="Image" />Sea Balcony</li>
                                                <li><img src="images/Home-2/v2-icon-3.png" className="img-responsive" alt="Image" />Kingsize / Twin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <div className="img-item">
                                            <img src="images/Home-3/our-2.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
                                        </div>
                                        <div className="rooms-content">
                                            <h4 className="sky-h4">Deluxe Room</h4>
                                            <p className="price">$320 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Vestib ulum id ligula porta felis euis.</p>
                                        <div className="bottom-room">
                                            <ul>
                                                <li><img src="images/Home-2/v2-icon.png" className="img-responsive" alt="Image" />4 Persons</li>
                                                <li><img src="images/Home-2/v2-icon-1.png" className="img-responsive" alt="Image" />35m2 / 376ft2</li>
                                                <li><img src="images/Home-2/v2-icon-2.png" className="img-responsive" alt="Image" />Sea Balcony</li>
                                                <li><img src="images/Home-2/v2-icon-3.png" className="img-responsive" alt="Image" />Kingsize / Twin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <div className="img-item">
                                            <img src="images/Home-3/our-5.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
                                        </div>
                                        <div className="rooms-content">
                                            <h4 className="sky-h4">Single Room</h4>
                                            <p className="price">$320 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Vestib ulum id ligula porta felis euis.</p>
                                        <div className="bottom-room">
                                            <ul>
                                                <li><img src="images/Home-2/v2-icon.png" className="img-responsive" alt="Image" />4 Persons</li>
                                                <li><img src="images/Home-2/v2-icon-1.png" className="img-responsive" alt="Image" />35m2 / 376ft2</li>
                                                <li><img src="images/Home-2/v2-icon-2.png" className="img-responsive" alt="Image" />Sea Balcony</li>
                                                <li><img src="images/Home-2/v2-icon-3.png" className="img-responsive" alt="Image" />Kingsize / Twin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <div className="img-item">
                                            <img src="images/Home-3/our-3.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
                                        </div>
                                        <div className="rooms-content">
                                            <h4 className="sky-h4">Family Room</h4>
                                            <p className="price">$320 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Vestib ulum id ligula porta felis euis.</p>
                                        <div className="bottom-room">
                                            <ul>
                                                <li><img src="images/Home-2/v2-icon.png" className="img-responsive" alt="Image" />4 Persons</li>
                                                <li><img src="images/Home-2/v2-icon-1.png" className="img-responsive" alt="Image" />35m2 / 376ft2</li>
                                                <li><img src="images/Home-2/v2-icon-2.png" className="img-responsive" alt="Image" />Sea Balcony</li>
                                                <li><img src="images/Home-2/v2-icon-3.png" className="img-responsive" alt="Image" />Kingsize / Twin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <div className="img-item">
                                            <img src="images/Home-3/our-6.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
                                        </div>
                                        <div className="rooms-content">
                                            <h4 className="sky-h4">Presidential Room</h4>
                                            <p className="price">$320 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Vestib ulum id ligula porta felis euis.</p>
                                        <div className="bottom-room">
                                            <ul>
                                                <li><img src="images/Home-2/v2-icon.png" className="img-responsive" alt="Image" />4 Persons</li>
                                                <li><img src="images/Home-2/v2-icon-1.png" className="img-responsive" alt="Image" />35m2 / 376ft2</li>
                                                <li><img src="images/Home-2/v2-icon-2.png" className="img-responsive" alt="Image" />Sea Balcony</li>
                                                <li><img src="images/Home-2/v2-icon-3.png" className="img-responsive" alt="Image" />Kingsize / Twin</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                            <div className="about-centent">
                                <h2 className="about-title">About Us</h2>
                                <div className="line"></div>
                                <p className="about-p">Contrary to popular belief, Lorem isn’t simply random text. It has roots in a
                                    of classNameical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading
                                    hotels with gracious island hospitality, thoughtful amenities and distinctive</p>
                                <p className="about-p1">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...
                                </p>
                                <a href="index.html#" className="read-more">READ MORE </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-7 col-lg-7 ">
                            <div className="about-img">
                                <div className="img-1">
                                    <img src="images/Home-1/about-3.jpg" className="img-responsive" alt="Image" />
                                    <div className="img-2">
                                        <img src="images/Home-1/about-1.jpg" className="img-responsive" alt="Image" />
                                    </div>
                                    <div className="img-3">
                                        <img src="images/Home-1/about-2.jpg" className="img-responsive" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="best">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-1.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">Master Bedrooms</h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-2.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">Sea View Balcony</h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-3.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">Pool & Spa</h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-4.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">Wifi Coverage</h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-5.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">AwESOME pACKAGES</h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-6.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">cLEANING eVERDAY</h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-7.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">bUTFFET Breakfast</h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <div className="wrap-best">
                                <div className="icon-best">
                                    <img src="images/Home-1/about-icon-8.png" className="img-responsive" alt="Image" />
                                </div>
                                <h6 className="sky-h6">Airport Taxi</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials-h">
                    <div className="testimonials-content">
                        <div className="container">
                            <div id="testimonials" className="owl-carousel owl-theme">
                                <div className="item ">
                                    <div className="img-testimonials"><img src="images/Home-1/about-testimonials-img.png" alt="#" />
                                    </div>
                                    <p className="testimonials-p"><span>“</span>​‌ This is the only place to stay in Catalina! I
                                        have stayed in the cheaper hotels and they were fine, but this is just the icing on the
                                        cake! After spending the day bike riding and hiking to come back and enjoy a glass of
                                        wine while looking out your <span>​‌​‌”</span> ocean view window and then to top it all
                                        off...</p>
                                    <h5 className="sky-h5">JULIA ROSE</h5>
                                    <p className="testimonials-p1">From Los Angeles, California</p>
                                </div>
                                <div className="item">
                                    <div className="img-testimonials"><img src="images/Home-1/about-testimonials-img.png" alt="#" />
                                    </div>
                                    <p className="testimonials-p"><span>“</span>​‌ Thisis the only place to stay in Catalina! I have
                                        stayed in the cheaper hotels and they were fine, but this is just the icing onthe cake!
                                        After spending the day bike riding and hiking to come back and enjoy a glass of wine
                                        while looking out your <span>​‌​‌”</span> ocean view window and then to top it all
                                        off...</p>
                                    <h5 className="sky-h5">JULIA ROSE</h5>
                                    <p className="testimonials-p1">From Los Angeles, California</p>
                                </div>
                                <div className="item">
                                    <div className="img-testimonials"><img src="images/Home-1/about-testimonials-img.png" alt="#" />
                                    </div>
                                    <p className="testimonials-p"><span>“</span>​‌ This is the only place to stay in Catalina! I
                                        have stayed in the cheaper hotels and they were fine, but this is just the icing on the
                                        cake! After spending the day bike riding and hiking to come back and enjoy a glass of
                                        wine while looking out your <span>​‌​‌”</span> ocean view window and then to top it all
                                        off...</p>
                                    <h5 className="sky-h5">JULIA ROSE</h5>
                                    <p className="testimonials-p1">From Los Angeles, California</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="events">
                <div className="container">
                    <h2 className="events-title">Our Events</h2>
                    <div className="line"></div>
                    <div id="events-v2" className="owl-carousel owl-theme">
                        <div className="item ">
                            <div className="events-item">
                                <div className="events-img"><img src="images/Home-1/Our-Events-1.jpg" className="img-responsive"
                                    alt="Image" /></div>
                                <div className="events-content">
                                    <a href="index.html#" title="">
                                        <p className="sky-p">EVENTS</p>
                                        <h3 className="sky-h3">Wedding Day</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="events-item">
                                <div className="events-img"><img src="images/Home-1/Our-Events-2.jpg" className="img-responsive"
                                    alt="Image" /></div>
                                <div className="events-content">
                                    <a href="index.html#" title="">
                                        <p className="sky-p">EVENTS</p>
                                        <h3 className="sky-h3">Golf Cup 2017</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="events-item">
                                <div className="events-img"><img src="images/Home-1/Our-Events-3.jpg" className="img-responsive"
                                    alt="Image" /></div>
                                <div className="events-content">
                                    <a href="index.html#" title="">
                                        <p className="sky-p">EVENTS</p>
                                        <h3 className="sky-h3"> Beach Sports</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="news">
                <div className="container">
                    <h2 className="new-title">News</h2>
                    <div className="line"></div>
                    <div className="row">
                        <div className="news-content">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="substance">
                                    <div className="date">
                                        <div className="day">25</div>
                                        <div className="year"> AUGUST
                                            <br />2017
                                        </div>
                                    </div>
                                    <div className="text">
                                        <a href="index.html#">Update menu food in Skyline Hotel</a>
                                    </div>
                                    <a href="index.html#" className="read-more">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="substance">
                                    <div className="date">
                                        <div className="day">22</div>
                                        <div className="year"> AUGUST
                                            <br />2017
                                        </div>
                                    </div>
                                    <div className="text">
                                        <a href="index.html#">Las Maquinas on Tragamonedas</a>
                                    </div>
                                    <a href="index.html#" className="read-more">Read More </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="substance">
                                    <div className="date">
                                        <div className="day">06</div>
                                        <div className="year"> AUGUST
                                            <br />2017
                                        </div>
                                    </div>
                                    <div className="text">
                                        <a href="index.html#">Mother Earth Hosts Our Travels</a>
                                    </div>
                                    <a href="index.html#" className="read-more">Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery-our">
                <div className="container-fluid">
                    <div className="gallery">
                        <h2 className="title-gallery">Our Gallery</h2>
                        <div className="outline"></div>
                        <ul className="nav nav-tabs text-uppercase">
                            <li className="active"><a data-toggle="tab" href="index.html#Hotel">Hotel & Ground</a></li>
                            <li><a data-toggle="tab" href="index.html#menu1">Room/Suite </a></li>
                            <li><a data-toggle="tab" href="index.html#menu2">Bathroom</a></li>
                            <li><a data-toggle="tab" href="index.html#menu3">Dining</a></li>
                        </ul>
                        <br />
                        <div className="tab-content">
                            <div id="Hotel" className="tab-pane fade in active">
                                <div className="product ">
                                    <div className="row">
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-1.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main " title>
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-1-1.jpg"
                                                            data-littlelightbox-group="gallery" title="Luxury Room view all"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-2.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="HIHI"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-3.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-3-3.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-4.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-4-4.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-5.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-5-5.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-6.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-6-6.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-7.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-7-7.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-8.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-8-8.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu1" className="tab-pane fade">
                                <div className="product ">
                                    <div className="row">
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-6.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-7.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-3-3.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-8.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-4-4.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" className="tab-pane fade">
                                <div className="product ">
                                    <div className="row">
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-7.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-8.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-6-6.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu3" className="tab-pane fade">
                                <div className="product ">
                                    <div className="row">
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-3.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-4.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-5.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-6.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-7.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 ">
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img src="images/Home-1/gallery-8.jpg" className="img-responsive" alt="Product"
                                                        title="images products" />
                                                </div>
                                                <div className="gallery-box-main">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox " href="images/Home-1/gallery-2-2.jpg"
                                                            data-littlelightbox-group="gallery" title="Flying is life"><i
                                                                className="ion-ios-plus-empty" aria-hidden="true"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end-tab-content */}
                        <div className="text-center">
                            <button type="button" className="btn btn-default btn-our">VIEW MORE</button>
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
                                    <a href="index.html#" title="Email"><img src="images/Home-1/footer-top-icon-l.png"
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
                                    <a href="index.html#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="index.html#" title="Facebook"><i className="fa fa-facebook-square"
                                        aria-hidden="true"></i></a>
                                    <a href="index.html#" title="Tripadvisor"><i className="fa fa-tripadvisor"
                                        aria-hidden="true"></i></a>
                                    <a href="index.html#" title="Isnstagram"><i className="fa fa-instagram"
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
                                        <li><a href="index.html#" title="">Privacy Policy</a></li>
                                        <li><a href="index.html#" title="">Help</a></li>
                                        <li><a href="index.html#" title="">Affiliate</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                                <div className="list-content ">
                                    <ul>
                                        <li><a href="index.html#" title="">Our Location</a></li>
                                        <li><a href="index.html#" title="">Career</a></li>
                                        <li><a href="about.html" title="">About Us</a></li>
                                        <li><a href="contact.html" title="">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                                <div className="list-content ">
                                    <ul>
                                        <li><a href="index.html#" title="">FAQS</a></li>
                                        <li><a href="index.html#" title="">News</a></li>
                                        <li><a href="gallery_1.html" title="">Photo & Video</a></li>
                                        <li><a href="restaurant_1.html" title="">Restaurant</a></li>
                                        <li><a href="index.html#" title="">Gift Card</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                                Copyright © 2017 by <a href="index.html#" title="">EngoTheme.</a> SkyLine Hotel Theme crafted
                                with love
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                                <div className="payments text-right">
                                    <ul>
                                        <li>
                                            <a href="index.html#" title="Paypal"><img src="images/Home-1/Paypal.png"
                                                alt="Paypal" /></a>
                                        </li>
                                        <li>
                                            <a href="index.html#" title="Visa"><img src="images/Home-1/Visa.png" alt="Visa" /></a>
                                        </li>
                                        <li>
                                            <a href="index.html#" title="Master"><img src="images/Home-1/Master-card.png"
                                                alt="Master" /></a>
                                        </li>
                                        <li>
                                            <a href="index.html#" title="Discover"><img src="images/Home-1/Discover.png"
                                                alt="Discover" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="index.html#" title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>
        </div>
    )
}

export default Home