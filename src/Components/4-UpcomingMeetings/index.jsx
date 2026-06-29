import React from 'react';
import StyleUpcomingMeetings from './upcomingMeetings.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// Import Code For Images </>
import UMImgOne from '../../images/meeting-01.jpg'
import UMImgTwo from '../../images/meeting-02.jpg'
import UMImgThree from '../../images/meeting-03.jpg'
import UMImgFour from '../../images/meeting-04.jpg'

const UMData = [
    {
        id: 1,
        price: '22.00',
        img: UMImgOne,
        month: 'nov',
        day: 10,
        title: 'New Lecturers Meeting',
        disc: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
    {
        id: 2,
        price: '36.00',
        img: UMImgTwo,
        month: 'nov',
        day: 24,
        title: 'Online Teaching Techniques',
        disc: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
    {
        id: 3,
        price: '14.00',
        img: UMImgThree,
        month: 'nov',
        day: 26,
        title: 'Higher Education Conference',
        disc: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
    {
        id: 4,
        price: '48.00',
        img: UMImgFour,
        month: 'nov',
        day: 30,
        title: 'Student Training Meetup',
        disc: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
]

function UpcomingMeetings() {
    const navigate = useNavigate();

    // Function Code for Navigate </>
    const HandleMeetings = () => {
        navigate('/Meetings');
    }

    const HandleOnlineTeaching = () => {
        navigate('/OnlineTeaching');
    }

    return (
        <div className={StyleUpcomingMeetings.UpcomingMeetings}>
            <div className={StyleUpcomingMeetings.UpcomingMeetingsContainer}>
                <div className={StyleUpcomingMeetings.UpcomingMeetingsText}>
                    <h4>
                        Upcoming Meetings
                    </h4>
                </div>
                <div className={StyleUpcomingMeetings.UpcomingMeetingsCatgories}>
                    <div className={StyleUpcomingMeetings.UMCItemsOne}>
                        <h5>Meeting Catgories</h5>
                        <div>Sed tempus enim leo</div>
                        <div>Aenean molestie quis</div>
                        <div>Cras et metus vestibulum</div>
                        <div>Nam et condimentum</div>
                        <div>Phasellus nec sapien</div>
                        <div className={StyleUpcomingMeetings.UMCItemsOneButton}>
                            <Button
                                onClick={HandleMeetings}
                                sx={{
                                    width: '100%',
                                    height: '43px',
                                    background: 'rgb(161, 44, 47)',
                                    color: '#fff',
                                    fontSize: '13px',
                                    borderRadius: '50px',
                                }}>
                                All Upcoming Meetings
                            </Button>
                        </div>
                    </div>
                    <div className={StyleUpcomingMeetings.UMCItemsTwo}>
                        {
                            UMData.map((e) => {
                                return (
                                    <div key={e.id} className={StyleUpcomingMeetings.UMCItemsTwoDiv}>
                                        <div className={StyleUpcomingMeetings.UMCItemsTwoDivPrice}>
                                            ${e.price}
                                        </div>
                                        <img src={e.img} onClick={HandleOnlineTeaching} />
                                        <div className={StyleUpcomingMeetings.ItemsTwoDivTexts}>
                                            <div className={StyleUpcomingMeetings.ItemsTwoDate}>
                                                <div>
                                                    {e.month}
                                                </div>
                                                <div>
                                                    {e.day}
                                                </div>
                                            </div>
                                            <div className={StyleUpcomingMeetings.ItemsTwoParagraph}>
                                                <h5>
                                                    {e.title}
                                                </h5>
                                                <p>
                                                    {e.disc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingMeetings;