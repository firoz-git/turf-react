import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import Slide from "../components/Slide"
import img1 from '../img/Slider-v1.jpg'
import img2 from '../img/Slider-v2.jpg'

function Slider() {
    return (

        <div className="section-slider height-v">
            <OwlCarousel className="owl-main owl-carousel owl-theme" items={1} loop>
                <Slide img={img1} title="Enjoy a Luxury Experience" loop />
                <Slide img={img2} title="Welcome to Skyline " loop />
                {/* <Slide img={img3} title="Think Big Do Creative Grow Business " content={content1}/>
            <Slide img={img4} title="Think Big Do Creative Grow Business " content={content1}/> */}
            </OwlCarousel>
            <div className="check-avail">
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
            </div>
        </div>
    );
}

export default Slider
