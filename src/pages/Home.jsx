import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from '../section/Slider';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Turfs from '../components/Turfs/Turfs';
import HomeAbout from '../components/HomeAbout/HomeAbout';
import HomeTestimonial from '../components/HomeTestimonial/HomeTestimonial';
import HomeEvents from '../components/HomeEvents/HomeEvents';
import HomeGallery from '../components/HomeGallery/HomeGallery';
import Calendar from '../components/Calender/Calender';


function Home({ SlotData, fetchSlots }) {

    console.log(SlotData, 'iam home slots')

    return (
        <div>
            <Header />
            <Slider slots={SlotData} fetchSlots={fetchSlots} />
            <Turfs />

            <HomeAbout />

            {/* <HomeKeys/> */}

            <HomeTestimonial />

            <HomeEvents />

            {/* <section className="news">
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
            </section> */}

            <HomeGallery />

            <Footer />

            <a href="index.html#" title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>
        </div>
    )
}

export default Home