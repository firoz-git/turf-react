import React from 'react'

function HomeAbout() {
    return (
        <div className="about">
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
        </div>
    )
}

export default HomeAbout