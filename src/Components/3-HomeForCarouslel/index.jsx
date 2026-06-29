import React from "react";
import StyleHomeForCarousel from './homeForCarousel.module.css'
import Slider from "react-slick";

// Import Code For Images </>
import SHFCImg1 from '../../images/service-icon-01.png'
import SHFCImg2 from '../../images/service-icon-02.png'
import SHFCImg3 from '../../images/service-icon-03.png'

function PauseOnHover() {
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };
    return (
        <div className={StyleHomeForCarousel.HomeForCarouselContainer}>
            <div className="slider-container">
                <Slider className={StyleHomeForCarousel.HomeForCarouselSlider} {...settings}>
                    <div>
                        <div className={StyleHomeForCarousel.HFCSItems}>
                            <img src={SHFCImg1} />
                            <h5>Best Eduction</h5>
                            <p>
                                Suspendisse tempor mauris a sem elementum bibendum.
                                Praesent facilisis massa non vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={StyleHomeForCarousel.HFCSItems}>
                            <img src={SHFCImg2} />
                            <h5>Best Teacher</h5>
                            <p>
                                Suspendisse tempor mauris a sem elementum bibendum.
                                Praesent facilisis massa non vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={StyleHomeForCarousel.HFCSItems}>
                            <img src={SHFCImg3} />
                            <h5>Best Studets</h5>
                            <p>
                                Suspendisse tempor mauris a sem elementum bibendum.
                                Praesent facilisis massa non vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={StyleHomeForCarousel.HFCSItems}>
                            <img src={SHFCImg1} />
                            <h5>Online Meeting</h5>
                            <p>
                                Suspendisse tempor mauris a sem elementum bibendum.
                                Praesent facilisis massa non vestibulum.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={StyleHomeForCarousel.HFCSItems}>
                            <img src={SHFCImg2} />
                            <h5>Best Networking</h5>
                            <p>
                                Suspendisse tempor mauris a sem elementum bibendum.
                                Praesent facilisis massa non vestibulum.
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default PauseOnHover;
