import React from 'react'
import OwlCarousel from 'react-owl-carousel'


function HomeEvents() {
    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    };
    const images = [
        { id: 1, src: 'images/Home-1/Our-Events-1.jpg', label: 'Foot Ball' },
        { id: 2, src: 'images/Home-1/Our-Events-2.jpg', label: 'Golf Cup' },
        { id: 3, src: 'images/Home-1/Our-Events-3.jpg', label: 'Cricket' },
    ];
    return (
        <div className="events">
            <div className="container">
                <h2 className="events-title">Our Events</h2>
                <div className="line"></div>
                <OwlCarousel className="owl-main owl-carousel owl-theme" loop autoplay={true}
                    autoplayTimeout={3000} // 3 seconds
                    autoplayHoverPause={true}
                    responsive={responsive}>
                    {images.map((image, index) => (
                        <div className="item" style={{ marginRight: 20 }}>
                            <div className="events-item">
                                <div className="events-img"><img src={image.src} className="img-responsive"
                                    alt="Image" /></div>
                                <div className="events-content">
                                    <a href="index.html#" title="">
                                        <p className="sky-p">EVENTS</p>
                                        <h3 className="sky-h3">{image.label}</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="item" style={{ marginRight: 20 }}>
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
                    <div className="item" style={{ marginRight: 20 }}>
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
                    </div> */}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default HomeEvents