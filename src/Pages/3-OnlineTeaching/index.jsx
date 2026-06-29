import React from 'react';
import StyleOnlineTeaching from './onlineTeaching.module.css';
import { useNavigate } from 'react-router-dom';

// Import Code For Images </>
import OTImg from '../../images/meeting-01.jpg'
import { Button } from '@mui/material';

function OnlineTeaching() {
    const navigate = useNavigate();

    const HandleBack = () => {
        navigate(-1);
    }
    return (
        <div className={StyleOnlineTeaching.OnlineTeaching}>
            <div className={StyleOnlineTeaching.OTContainerFirst}>
                <h6>
                    Get all details
                </h6>
                <h1>
                    Online Teaching and Learning Tools
                </h1>
            </div>

            <div className={StyleOnlineTeaching.OTContainerSecond}>
                <div className={StyleOnlineTeaching.OTContainerSecondItem}>
                    <a href="http://localhost:5173/OnlineTeaching">
                        <img src={OTImg} />
                    </a>
                    <div className={StyleOnlineTeaching.OTContainerSecondItemDIV}>
                        <a href="http://localhost:5173/OnlineTeaching">
                            <h4>
                                Online Teaching and Learning Tools
                            </h4>
                        </a>
                        <div className={StyleOnlineTeaching.OTCSecondItemDIVRecreio}>
                            Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-008, Brazil
                        </div>
                        <p className={StyleOnlineTeaching.OTCSecondItemDIVtext}>
                            This is an edu meeting HTML CSS template provided by TemplateMo
                            website. This is a Bootstrap v5.1.3 layout. If you need more
                            free website templates like this one, please visit our website
                            TemplateMo. Please tell your friends about our website. Thank
                            you. If you want to get the latest collection of HTML CSS
                            templates for your websites, you may visit Too CSS website.
                            If you need a working contact form script, please visit our
                            contact page for more info.
                            <br />
                            <br />
                            You are allowed to use this edu meeting CSS template for your
                            school or university or business. You can feel free to modify
                            or edit this layout. You are not allowed to redistribute the
                            template ZIP file on any other template website. Please
                            contact us for more information.
                        </p>
                        <div className={StyleOnlineTeaching.OTCSecondItemDIVGrid}>
                            <div>
                                <h5>
                                    Hours
                                </h5>
                                <p>
                                    Monday - Friday: 07:00 AM - 13:00 PM
                                    <br />
                                    Saturday- Sunday: 09:00 AM - 15:00 PM
                                </p>
                            </div>
                            <div>
                                <h5> Location</h5>
                                <p>
                                    Recreio dos Bandeirantes,
                                    <br />
                                    Rio de Janeiro - RJ, 22795-008, Brazil
                                </p>
                            </div>
                            <div>
                                <h5>
                                    Book Now
                                </h5>
                                <p>
                                    010-020-0340
                                    <br />
                                    090-080-0760
                                </p>
                            </div>
                        </div>
                        <div className={StyleOnlineTeaching.OTContainerSecondShare}>
                            <h5>
                                Share:
                            </h5>
                            <a href="#">
                                Facebook,
                            </a>
                            <a href="#">
                                Twitter,
                            </a>
                            <a href="#">
                                Linkedin,
                            </a>
                            <a href="#">
                                Behance
                            </a>
                        </div>
                    </div>
                </div>
                <div className={StyleOnlineTeaching.OTContainerSecondButton}>
                    <Button
                        onClick={HandleBack}
                        sx={{
                            padding: '10px 60px',
                            borderRadius: '20px',
                            margin: '30px 0px 0px 0px',
                            background: 'rgb(161, 44, 47)',
                            fontSize: '13px',
                            fontWeight: '500',
                            color: '#fff',
                        }}>
                        Back To Meetings List
                    </Button>
                </div>
                <div className={StyleOnlineTeaching.OTCopyRight}>
                    <p>
                        Copyright © 2025 Edu Meeting Co., Ltd. All Rights Reserved.
                        <br />
                        Coder: <a href="https://t.me/webCoder571">Coder_571</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OnlineTeaching;