import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


function About() {
    return (
        <div>
            <Header />
            <section className="banner-tems text-center">
                <div className="container">
                    <div className="banner-content">
                        <h2>About Us</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing</p> */}
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
                                            <p>Welcome to Cochinolympiad., where passion for sports meets premier facilities. Nestled in Kochi, our state-of-the-art turf facilities cater to athletes of all levels, from recreational enthusiasts to professional teams. With a commitment to excellence and customer satisfaction, we provide top-notch amenities and a welcoming environment for everyone who steps onto our turf.</p>
                                            <br />
                                            <p>Our mission is to create a hub where athletes can thrive, coaches can inspire, and families can cheer on their loved ones. With flexible booking options, competitive pricing, and a focus on cleanliness and safety, we aim to be your go-to destination for all things turf-related. </p>
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
                                        <h2 className="heading">WHY PLAYERS CHOOSE COCHINOLYMPAID ?</h2>
                                        <div className="desc">
                                            <p>Players choose CochinOlympaid for a multitude of reasons that set us apart as a premier destination for sports and recreation. At CochinOlympaid, we prioritize excellence in every aspect of our facilities and services, ensuring an unparalleled experience for athletes of all ages and skill levels.
                                                <br />Players choose CochinOlympaid not just for our facilities, but for the complete experience we offer. Whether you're training for a championship or enjoying a casual game with friends, CochinOlympaid is the ultimate destination for sports enthusiasts seeking excellence, community, and memorable experiences.</p>
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
                        <h2 className="heading text-center">Turf statistics</h2>
                        <div className="statistics_content">
                            <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item">
                                        <span className="count">5</span>
                                        <span>Turf Area</span>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item">
                                        <span className="count">32</span>
                                        <span>Employees</span>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item">
                                        <span className="count">1024</span>
                                        <span>Happy Customers</span>
                                    </div>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
                                    <div className="item no-border">
                                        <span className="count">56</span>
                                        <span>Maches Completed</span>
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
                        {/* <p className="sub-heading text-center">Lorem Ipsum is simply dummy text of the printing</p> */}
                        <div className="team_content">
                            <div className="row">
                                <div className="wrap-about">
                                    <div className="about-item">
                                        <div className="col-xs-6 col-md-3">
                                            <div className="team_item text-center">
                                                <div className="img">
                                                    <a href="about.html#"><img src="images/About/about-3.png" alt="#" /></a>
                                                </div>
                                                <div className="text">
                                                    <h2>JESSICA ALBA</h2>
                                                    <span>Manager lotus </span>
                                                    {/* <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p> */}
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
                                                    <span>Founder </span>
                                                    {/* <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p> */}
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
                                                    <span>Lorem </span>
                                                    {/* <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p> */}
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
                                                    <span>Lorem </span>
                                                    {/* <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p> */}
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
                    </div>
                </div>
            </section>
            <Footer/>
            <a href="about.html#" title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>

        </div>
    )
}

export default About