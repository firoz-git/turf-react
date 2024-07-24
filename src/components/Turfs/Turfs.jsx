import React from "react";
import OwlCarousel from "react-owl-carousel";

function Turfs() {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };
  const images = [
    {
      id: 1,
      src: "images/turfs/turf-1.jpg",
      label: "5s One",
      desc: "Our three 5-side turfs are perfect for fast-paced, high-energy matches that keep players on their toes. These turfs offer an ideal setting for small group play, allowing for quick passes and close teamwork. Happy Gaming",
      person: 5,
    },
    {
      id: 2,
      src: "images/turfs/turf-2.jpg",
      label: "5s Two",
      desc: "Our three 5-a-side turfs are perfect for fast-paced, high-energy matches that keep players on their toes. These turfs offer an ideal setting for small group play, allowing for quick passes and close teamwork. Happy Gaming",
      person: 5,
    },
    {
      id: 3,
      src: "images/turfs/turf-3.jpg",
      label: "5s Three",
      desc: "Our three 5-a-side turfs are perfect for fast-paced, high-energy matches that keep players on their toes. These turfs offer an ideal setting for small group play, allowing for quick passes and close teamwork. Happy Gaming",
      person: 5,
    },
    {
      id: 4,
      src: "images/turfs/turf-4.jpg",
      label: "7s full",
      desc: "Our 7-a-side turf strikes a balance between space and intensity, providing ample room for strategic plays while still maintaining a dynamic game flow. It's perfect for teams looking to practice their skills in a slightly larger arena.",
      person: 7,
    },
    {
      id: 5,
      src: "images/turfs/turf-5.jpg",
      label: "9s Full",
      desc: "Our expansive 9-a-side turf is designed for those who crave the full-field experience. With plenty of space to execute long passes and elaborate strategies, this turf is ideal for larger teams and more competitive matches.",
      person: 9,
    },
  ];
  return (
    <div className="rooms rooms-v2">
      <div className="container">
        <h2 className="title-room">Our Play Fields</h2>
        <div className="outline"></div>
        <p className="rooms-p">
          Hosting a match or event at our turf playground offers the perfect
          opportunity to connect and bond with friends and family through the
          joy of play.
        </p>
        <div className="wrap-rooms">
          <OwlCarousel
            className="owl-main owl-carousel owl-theme"
            loop
            autoplay={true}
            autoplayTimeout={3000} // 3 seconds
            autoplayHoverPause={true}
            responsive={responsive}
          >
            {images.map((image, index) => (
              <div className="item ">
                <div className="wrap-box">
                  <div className="box-img">
                    <div className="img-item">
                      <img
                        src={image.src}
                        className="img-responsive"
                        alt="Deluxe Room"
                        title="Deluxe Room"
                      />
                    </div>
                    <div className="rooms-content">
                      <h4 className="sky-h4">{image.label}</h4>
                      <p className="price">₹ 500 / Per Hour</p>
                    </div>
                  </div>
                  <div className="content">
                    <p style={{ textAlign: "center" }}>{image.desc}</p>
                    <div className="bottom-room">
                      <ul>
                        <li>
                          <img
                            src="images/Home-2/v2-icon.png"
                            className="img-responsive"
                            alt="Image"
                          />
                          {image.person} Persons
                        </li>
                        <li>
                          <img
                            src="images/Home-2/v2-icon-1.png"
                            className="img-responsive"
                            alt="Image"
                          />
                          35m2 / 376ft2
                        </li>
                        <li>
                          <img
                            src="images/Home-2/v2-icon-2.png"
                            className="img-responsive"
                            alt="Image"
                          />
                          Night View
                        </li>
                        <li>
                          <img
                            src="images/Home-2/v2-icon-3.png"
                            className="img-responsive"
                            alt="Image"
                          />
                          Feather Floor
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
  );
}

export default Turfs;
