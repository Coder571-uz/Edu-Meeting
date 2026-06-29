import React from 'react'
import StyleContactUs from './contactUs.module.css';
import { Button } from '@mui/material';

function ContactUs() {
    return (
        <div id='ContactUs' className={StyleContactUs.ContactUs}>
            <div className={StyleContactUs.ContactUsContainer}>
                <div className={StyleContactUs.ContactUsItemFirst}>
                    <h5>
                        Let's get in touch
                    </h5>
                    <div>
                        <input type="text" placeholder='YOURNAME...*' />
                        <input type="text" placeholder='YOUR EMAIL...' />
                        <input type="text" placeholder='SUBJECT...*' />
                    </div>
                    <textarea placeholder='YOUR MESSAGE...'></textarea>
                    <Button
                        sx={{
                            padding: '10px 30px',
                            background: 'rgb(161, 44, 47)',
                            borderRadius: '20px',
                            color: '#fff',
                            fontSize: '13px',

                        }}>
                        Send Message Now
                    </Button>
                </div>
                <div className={StyleContactUs.ContactUsItemSecond}>
                    <div>
                        <h5>
                            Phone Number
                        </h5>
                        <h4>
                            010-020-0340
                        </h4>
                    </div>
                    <div>
                        <h5>
                            Email Address
                        </h5>
                        <h4>
                            info@meeting.edu
                        </h4>
                    </div>
                    <div>
                        <h5>
                            Street Address
                        </h5>
                        <h4>
                            Rio de Janeiro - RJ, <br /> 22795-008, Brazil
                        </h4>
                    </div>
                    <h5>
                        Website URL
                    </h5>
                    <h4>
                        www.meeting.edu
                    </h4>
                </div>
            </div>
            <div className={StyleContactUs.ContactUsCopyRight}>
                <p>
                    Copyright © 2025 Edu Meeting Co., Ltd. All Rights Reserved.
                    <br />
                    Coder: <a href="https://t.me/webCoder571">Coder_571</a>
                </p>
            </div>
        </div>
    )
}

export default ContactUs;