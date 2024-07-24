import React, { useState } from "react";
import "./HomeGallery.css"; // Ensure to import your CSS file
import Lightbox from "./LightBox/LightBox";

function HomeGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Turf & Ground");

  const images = [
    "images/Home-2/gallery-1.jpg",
    "images/Home-2/gallery-2.jpg",
    "images/Home-2/gallery-1-1.jpg",
    "images/Home-2/gallery-2-2.jpg",
    "images/Home-2/gallery-3-3.jpg",
    "images/Home-2/gallery-4-4.jpg",
    "images/Home-2/gallery-5-5.jpg",
    "images/Home-2/gallery-6-6.jpg",
    "images/Home-2/gallery-7-7.jpg",
    "images/Home-2/gallery-8-8.jpg",
    "images/Home-2/gallery-9-9.jpg",
    "images/Home-2/gallery-10-10.jpg",
    "images/Home-2/gallery-11-11.jpg",
    "images/Home-2/gallery-12-12.jpg",
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Utility function to chunk array into subarrays
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const turfAndGroundImages = images.slice(2); // Images for Turf & Ground
  const tournamentImages = images.slice(0, 2); // Images for Tournament

  // Split images array into chunks of 4
  const turfAndGroundChunks = chunkArray(turfAndGroundImages, 4);
  const tournamentChunks = chunkArray(tournamentImages, 4);

  return (
    <div className="gallery-our">
      <div className="container-fluid">
        <div className="gallery">
          <h2 className="title-gallery">Our Gallery</h2>
          <div className="outline"></div>
          <ul className="nav nav-tabs text-uppercase">
            <li className={activeTab === "Turf & Ground" ? "active" : ""}>
              <a
                data-toggle="tab"
                href="#Hotel"
                onClick={() => setActiveTab("Turf & Ground")}
              >
                Turf & Ground
              </a>
            </li>
            <li className={activeTab === "Tournament" ? "active" : ""}>
              <a
                data-toggle="tab"
                href="#menu1"
                onClick={() => setActiveTab("Tournament")}
              >
                Tournament
              </a>
            </li>
          </ul>
          <br />
          <div className="tab-content">
            {activeTab === "Turf & Ground" && (
              <div id="Hotel" className="tab-pane fade in active">
                <div className="product">
                  {turfAndGroundChunks.map((chunk, rowIndex) => (
                    <div className="row" key={rowIndex}>
                      {chunk.map((image, index) => (
                        <div
                          className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6"
                          key={index}
                        >
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
                                <a
                                  className="lightbox"
                                  onClick={
                                    () => openLightbox(index + 2) // Adjust index for lightbox
                                  }
                                >
                                  <i className="ion-ios-plus-empty"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "Tournament" && (
              <div id="menu1" className="tab-pane fade in active">
                <div className="product">
                  {tournamentChunks.map((chunk, rowIndex) => (
                    <div className="row" key={rowIndex}>
                      {chunk.map((image, index) => (
                        <div
                          className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6"
                          key={index}
                        >
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
                                <a
                                  className="lightbox"
                                  onClick={() => openLightbox(index)}
                                >
                                  <i className="ion-ios-plus-empty"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* <div className="text-center">
            <button type="button" className="btn btn-default btn-our">
              VIEW MORE
            </button>
          </div> */}
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
