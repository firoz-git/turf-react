import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function Turfs() {
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
        { id: 1, src: 'images/turfs/turf-1.jpg', label: '5s One' },
        { id: 2, src: 'images/turfs/turf-2.jpg', label: '5s Two' },
        { id: 3, src: 'images/turfs/turf-3.jpg', label: '5s Three' },
        { id: 4, src: 'images/turfs/turf-4.jpg', label: '7s full' },
        { id: 5, src: 'images/turfs/turf-5.jpg', label: '9s Full' },
    ];
    return (
        <div className="rooms rooms-v2">
            <div className="container">
                <h2 className="title-room">Our Play Fields</h2>
                <div className="outline"></div>
                <p className="rooms-p">When you host a party or family reunion, the special celebrations let you streng then bonds with</p>
                <div className="wrap-rooms">
                    <OwlCarousel className="owl-main owl-carousel owl-theme" loop autoplay={true}
                        autoplayTimeout={3000} // 3 seconds
                        autoplayHoverPause={true}
                        responsive={responsive}>
                        {images.map((image, index) => (
                            <div className="item ">
                                <div className="wrap-box">
                                    <div className="box-img">
                                        <div className="img-item">
                                            <img src={image.src} className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
                                        </div>
                                        <div className="rooms-content">
                                            <h4 className="sky-h4">{image.label}</h4>
                                            <p className="price">₹ 500 / Per Hour</p>
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
                        ))
                        }
                        {/* <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-2.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div>
                        <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-3.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div>
                        <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-1.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div>
                        <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-2.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div>
                        <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-3.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div>
                        <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-1.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div>
                        <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-2.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div>
                        <div className="item ">
                            <div className="wrap-box">
                                <div className="box-img">
                                    <div className="img-item">
                                        <img src="images/Home-2/rooms-3.jpg" className="img-responsive" alt="Deluxe Room" title="Deluxe Room" />
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
                        </div> */}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Turfs