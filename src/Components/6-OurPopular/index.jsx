import React from 'react'
import StyleOurPopular from './ourPopular.module.css'
import Slider from "react-slick";

// Import Code For Images </>
import OPImg1 from '../../images/course-01.jpg'
import OPImg2 from '../../images/course-02.jpg'
import OPImg3 from '../../images/course-03.jpg'
import OPImg4 from '../../images/course-04.jpg'

// Import Code For Icon </>
import { FaStar } from "react-icons/fa";

const OurPopularData = [
    {
        id: 1,
        img: OPImg1,
        title: 'Morbi tincidunt elit vitae justo rhoncus',
        price: 160,
    },
    {
        id: 2,
        img: OPImg2,
        title: 'Curabitur molestie dignissim purus vel',
        price: 180,
    },
    {
        id: 3,
        img: OPImg3,
        title: 'Nulla at ipsum a mauris egestas tempor',
        price: 140,
    },
    {
        id: 4,
        img: OPImg4,
        title: 'Aenean molestie quis libero gravida',
        price: 120,
    },
    {
        id: 5,
        img: OPImg1,
        title: 'Lorem ipsum dolor sit amet adipiscing elit',
        price: 250,
    },
    {
        id: 6,
        img: OPImg2,
        title: 'TemplateMo is the best website for Free CSS',
        price: 270,
    },
    {
        id: 7,
        img: OPImg3,
        title: 'Web Design Templates at your finger tips',
        price: 340,
    },
    {
        id: 8,
        img: OPImg4,
        title: 'Please visit our website again',
        price: 360,
    },
    {
        id: 9,
        img: OPImg1,
        title: 'Responsive HTML Templates for you',
        price: 400,
    },
    {
        id: 10,
        img: OPImg2,
        title: 'Download Free CSS Layouts for your business',
        price: 430,
    },
    {
        id: 11,
        img: OPImg3,
        title: 'Morbi in libero blandit lectus cursus',
        price: 480,
    },
    {
        id: 12,
        img: OPImg4,
        title: 'Curabitur molestie dignissim purus',
        price: 560,
    },
]

function OurPopular() {
    var settings = {
        infinite: true,
        slidesToShow: 4,
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
        <div id='OurPopular' className={StyleOurPopular.OurPopular}>
            <div className={StyleOurPopular.OurPopularContianer}>
                <h4>
                    Our Popular Courses
                </h4>

                {/* Code For Carousel = = = = </> Begin */}
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            OurPopularData.map((item) => {
                                return (
                                    <div>
                                        <div className={StyleOurPopular.OurPopularCarousel}>
                                            <img src={item.img} />
                                            <div className={StyleOurPopular.OurPopularCarouselDiv}>
                                                {item.title}
                                            </div>
                                            <div className={StyleOurPopular.OurPopularCarouselStarPrice}>
                                                <div>
                                                    <span>
                                                        <FaStar />
                                                    </span>
                                                    <span>
                                                        <FaStar />
                                                    </span>
                                                    <span>
                                                        <FaStar />
                                                    </span>
                                                    <span>
                                                        <FaStar />
                                                    </span>
                                                    <span>
                                                        <FaStar />
                                                    </span>
                                                </div>
                                                <div>
                                                    ${item.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
                {/* Code For Carousel = = = = </> End */}
            </div>
        </div>
    )
}

export default OurPopular;