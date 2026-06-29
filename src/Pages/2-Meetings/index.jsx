import React from 'react';
import StyleMeetings from './meetings.module.css';
import { useNavigate } from 'react-router-dom';

// Import Code For Images </>
import UMImgOne from '../../images/meeting-01.jpg';
import UMImgTwo from '../../images/meeting-02.jpg';
import UMImgThree from '../../images/meeting-03.jpg';
import UMImgFour from '../../images/meeting-04.jpg';
import { Button } from '@mui/material';

const MeetingsData = [
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
]


function Meetings() {
    const navigate = useNavigate();

    const HandleOnlineTeaching = () => {
        navigate('/OnlineTeaching');
    }

    return (
        <>
            <div className={StyleMeetings.UpcomingMeetings}>
                <h6>
                    Here are our upcoming meetings
                </h6>
                <h1>
                    Upcoming Meetings
                </h1>
            </div>

            <div className={StyleMeetings.MeetingsItems}>
                <div className={StyleMeetings.MIContainerButton}>
                    <Button
                        sx={{
                            padding: '10px 30px',
                            background: 'rgb(161, 44, 47)',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: '#fff',
                        }}>
                        All meetings
                    </Button>
                    <Button
                        sx={{
                            padding: '10px 30px',
                            background: '#fff',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: 'rgb(161, 44, 47)',
                            transition: '0.5s',
                            '&:hover': {
                                background: 'rgb(161, 44, 47)',
                                color: '#fff',
                            },
                        }}>
                        Soon
                    </Button>
                    <Button
                        sx={{
                            padding: '10px 30px',
                            background: '#fff',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: 'rgb(161, 44, 47)',
                            transition: '0.5s',
                            '&:hover': {
                                background: 'rgb(161, 44, 47)',
                                color: '#fff',
                            },
                        }}>
                        Important
                    </Button>
                    <Button
                        sx={{
                            padding: '10px 30px',
                            background: '#fff',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: 'rgb(161, 44, 47)',
                            transition: '0.5s',
                            '&:hover': {
                                background: 'rgb(161, 44, 47)',
                                color: '#fff',
                            },
                        }}>
                        Attractive
                    </Button>
                </div>

                <div className={StyleMeetings.MIContainerGrid}>
                    {
                        MeetingsData.map((e) => {
                            return (
                                <div className={StyleMeetings.MIContainerGridItem}>
                                    <img onClick={HandleOnlineTeaching} src={e.img} />
                                    <div className={StyleMeetings.MICGItemDiv}>
                                        <div className={StyleMeetings.MICGItemMonthDay}>
                                            {e.month}
                                            <br />
                                            <h4>
                                                {e.day}
                                            </h4>
                                        </div>
                                        <div className={StyleMeetings.MICGItemTitleDisc}>
                                            <h5>
                                                {e.title}
                                            </h5>
                                            <p>
                                                {e.disc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={StyleMeetings.MICGItemPrice}>
                                        ${e.price}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={StyleMeetings.StyleMeetingsCopyRight}>
                    <p>
                        Copyright © 2025 Edu Meeting Co., Ltd. All Rights Reserved.
                        <br />
                        Coder: <a href="https://t.me/webCoder571">Coder_571</a>
                    </p>
                </div>
            </div >
        </>
    )
}

export default Meetings