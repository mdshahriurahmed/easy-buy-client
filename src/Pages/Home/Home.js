import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//import images for slider
import slide1 from "../../Media/s1.jpg"
import slide2 from "../../Media/s2.jpg"
import slide3 from "../../Media/s3.jpg"

//images for advertisment
import advertise1 from "../../Media/im4.jpg"
import advertise3 from "../../Media/im3.jpg"
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import icons from fontawesome
import { faShieldHalved, faRepeat, faLifeRing, faTruckFast } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <div>
            <div className="banner">
                <div className="mainslide">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide>

                            <div className="slider-main">
                                <div className="imagediv"><img src={slide1} alt="" /></div>
                                <div className="overlaydiv ">
                                    <div className="slider-content">
                                        <h1>Up to 50% off for {year} collections</h1>
                                        <p>Hurry up to grab your favourite items!</p>
                                        <div>
                                            <button className="buttonstyle">View items on sale</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="slider-main">
                                <div className="imagediv"><img src={slide2} alt="" /></div>
                                <div className="overlaydiv slider-content">
                                    <h1>Exclusive shoes collection</h1>
                                    <p>Hurry up to grab your favourite items!</p>
                                    <div>
                                        <button className="buttonstyle">Discover category</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-main">
                                <div className="imagediv"><img src={slide3} alt="" /></div>
                                <div className="overlaydiv slider-content">
                                    <h1>New minimalistic shoes collection</h1>
                                    <p>Hurry up to grab your favourite items!</p>
                                    <div>
                                        <button className="buttonstyle">Shop new collection</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="advertise-div">
                    <div className="banner-sidediv">
                        <img src={advertise1} alt="" />
                        <div className="overlaydiv add-div">
                            <h1>New shoes collection</h1>
                            <p>Innovative forms & materials</p>
                            <div>
                                <button className="buttonstyle">Shop now</button>
                            </div>
                        </div>
                    </div>
                    <div className="banner-sidediv">
                        <img src={advertise3} alt="" />
                        <div className="overlaydiv add-div">
                            <h1>Up to 75% OFF</h1>
                            <p>For playing and regular use</p>
                            <div>
                                <button className="buttonstyle">Shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features d-flex justify-content-center align-items-center">
                <div className=" site-max-width">
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <div className="d-flex align-items-center">
                                <h1 className="icon">  <FontAwesomeIcon icon={faShieldHalved}> </FontAwesomeIcon></h1>
                                <h1 className="text">Secure payments</h1>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="d-flex align-items-center">
                                <h1 className="icon">  <FontAwesomeIcon icon={faRepeat}> </FontAwesomeIcon></h1>
                                <h1 className="text">30 days return period</h1>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="d-flex align-items-center">
                                <h1 className="icon">  <FontAwesomeIcon icon={faLifeRing}> </FontAwesomeIcon></h1>
                                <h1 className="text">24/7 customer support</h1>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="d-flex align-items-center">
                                <h1 className="icon">  <FontAwesomeIcon icon={faTruckFast}> </FontAwesomeIcon></h1>
                                <h1 className="text">
                                    Flexible shipping</h1>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default Home;