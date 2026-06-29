import React from 'react'
import StyleHome from './home.module.css'

// Import Code For Video </>
import HomeVideo from '../../images/course-video.mp4'
import { Button } from '@mui/material';

// Import Code For Components </>
import HomeForCarousel from '../../Components/3-HomeForCarouslel/index';
import UpcomingMeetings from '../../Components/4-UpcomingMeetings/index';
import ApplyNow from '../../Components/5-ApplyNow/index';
import OurPopular from '../../Components/6-OurPopular/index';
import UniversityFacts from '../../Components/7-UniversityFacts/index';
import ContactUs from '../../Components/8-ContactUs/index';

function Home() {
    return (
        <>
            <video className={StyleHome.HomeBackground} autoPlay loop muted playsInline>
                <source src={HomeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={StyleHome.Home}>
                <div className={StyleHome.HomeContainer}>
                    <h6>
                        Hello Students
                    </h6>
                    <h2>
                        Welcome to Education
                    </h2>
                    <p>
                        This is an edu meeting HTML CSS template provided by <a href="https://templatemo.com/page/1">TemplateMo website</a>.
                        This is a Bootstrap v5.1.3 layout. The video background is taken
                        from Pexels website, a group of young people by <a href="https://www.pexels.com/@pressmaster/">Pressmaster</a>.
                    </p>
                    <a href="#">
                        <Button
                            sx={{
                                width: '152px',
                                height: '44px',
                                marginTop: '10px',
                                fontSize: '13px',
                                fontWeight: '600',
                                background: 'rgb(161, 44, 47)',
                                color: '#fff',
                                borderRadius: '50px',
                            }}>
                            Join Us Now!
                        </Button>
                    </a>
                </div>
            </div>
            <HomeForCarousel />
            <UpcomingMeetings />
            <ApplyNow />
            <OurPopular />
            <UniversityFacts />
            <ContactUs />
        </>
    )
}

export default Home;
