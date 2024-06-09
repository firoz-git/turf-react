import React, { useState } from 'react';
import Lightbox from './LightBox/LightBox';

function HomeGallery() {
    console.log('hello')
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(lightboxOpen, 'iam light box status')
    const images = [
        'images/Home-2/gallery-1-1.jpg',
        'images/Home-2/gallery-2-2.jpg',
        'images/Home-2/gallery-3-3.jpg',
        'images/Home-2/gallery-4-4.jpg',

    ];

    const openLightbox = (index) => {
        console.log(index, 'iam index')
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="gallery-our">
            <div className="container-fluid">
                <div className="gallery">
                    <h2 className="title-gallery">Our Gallery</h2>
                    <div className="outline"></div>
                    <ul className="nav nav-tabs text-uppercase">
                        <li className="active"><a data-toggle="tab" href="#Hotel">Hotel & Ground</a></li>
                        <li><a data-toggle="tab" href="#menu1">Room/Suite</a></li>
                        <li><a data-toggle="tab" href="#menu2">Bathroom</a></li>
                        <li><a data-toggle="tab" href="#menu3">Dining</a></li>
                    </ul>
                    <br />
                    <div className="tab-content">
                        <div id="Hotel" className="tab-pane fade in active">
                            <div className="product">
                                <div className="row">
                                    {images.map((image, index) => (
                                        <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6" key={index}>
                                            <div className="wrap-box">
                                                <div className="box-img">
                                                    <img
                                                        src={image}
                                                        className="img-responsive"
                                                        alt="Product"
                                                        title="images products"

                                                    />
                                                </div>
                                                <div className="gallery-box-main" title="">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox" onClick={() => openLightbox(index)}>
                                                            <i className="ion-ios-plus-empty" ></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="wrap-box" style={{ marginTop: 10 }}>
                                                <div className="box-img">
                                                    <img
                                                        src={image}
                                                        className="img-responsive"
                                                        alt="Product"
                                                        title="images products"

                                                    />
                                                </div>
                                                <div className="gallery-box-main" title="">
                                                    <div className="gallery-icon">
                                                        <a className="lightbox" onClick={() => openLightbox(index)}>
                                                            <i className="ion-ios-plus-empty" ></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Add other tab contents here */}
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-default btn-our">VIEW MORE</button>
                    </div>
                </div>
            </div>

            {lightboxOpen && (
                <Lightbox
                    images={images}
                    currentIndex={currentIndex}
                    onClose={() => setLightboxOpen(false)}
                    setCurrentIndex={setCurrentIndex}
                />
            )}
        </div>
    );
}

export default HomeGallery;
