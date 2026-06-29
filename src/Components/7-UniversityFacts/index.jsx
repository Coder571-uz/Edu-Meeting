import React from 'react';
import StyleUniversityFacts from './universityFacts.module.css';

// Import Code For Images </>
import UFImg from '../../images/video-item-bg.jpg';

// Import Code For Icons </>
import { IoPlayCircleOutline } from "react-icons/io5";

function UniversityFacts() {
    return (
        <div className={StyleUniversityFacts.UniversityFacts}>
            <div className={StyleUniversityFacts.UniversityFactsContainer}>
                <div className={StyleUniversityFacts.UFCItemFirst}>
                    <h1>
                        A Few Facts About Our <br /> University
                    </h1>
                    <div className={StyleUniversityFacts.UFCItemFirstGrid}>
                        <div>
                            <div>
                                <h1>
                                    94%
                                </h1>
                                <h5>
                                    Succesed Students
                                </h5>
                            </div>
                            <div>
                                <h1>
                                    126
                                </h1>
                                <h5>
                                    Current Teachers
                                </h5>
                            </div>
                        </div>
                        <div className={StyleUniversityFacts.UFCItemFirstGridDiv}>
                            <div>
                                <h1>
                                    2345
                                </h1>
                                <h5>
                                    New Students
                                </h5>
                            </div>

                            <div>
                                <h1>
                                    32
                                </h1>
                                <h5>
                                    Awards
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={StyleUniversityFacts.UFCItemSecond}>
                    <a href="https://www.youtube.com/watch?v=HndV87XpkWg">
                        <img src={UFImg} />
                        <span>
                            <IoPlayCircleOutline />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UniversityFacts;
