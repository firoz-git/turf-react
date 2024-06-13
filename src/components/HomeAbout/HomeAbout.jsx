import React from 'react'

function HomeAbout() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="wrap-about">
                        <div className="">
                            <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                <div className="about-centent">
                                    <h2 className="about-title">About Us</h2>
                                    <div className="line"></div>
                                    <p className="about-p">Welcome to cochinolympiad, your premier destination for booking turf facilities for sports and recreational activities. With a passion for providing exceptional experiences and top-notch amenities, we strive to make every visit memorable for our guests.</p>
                                    <p className="about-p1">Our journey began with a vision to create a space where sports enthusiasts could come together to enjoy their favorite activities in a vibrant and welcoming environment. Over the years, we have evolved into a trusted destination for individuals, teams, and families looking to elevate their sporting experiences...
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
                </div>
            </div>
        </div>
    )
}

export default HomeAbout