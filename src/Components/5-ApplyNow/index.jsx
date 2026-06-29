import React, { useState } from "react";
import StyleApplyNow from './applyNow.module.css'
import { Button } from '@mui/material'

// Import Code For Icons </>
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const ApplyNowData = [
    {
        title: "About Edu Meeting HTML Template",
        contentA: "If you want to get the latest collection of HTML CSS templates for your websites, you may visit Too CSS website. If you need a working contact form script, please visit our contact page for more info.",
    },
    {
        title: "HTML CSS Bootstrap Layout",
        contentA: "Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.",
        contentB: 'Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.',
    },
    {
        title: "Please tell your friends",
        contentA: "Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.",
        contentB: 'Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.',
    }
];

function ApplyNow() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="ApplyNow" className={StyleApplyNow.ApplyNow}>
            <div className={StyleApplyNow.ApplyNowContainer}>
                <div className={StyleApplyNow.ContainerItemFirst}>
                    <div>
                        <h3>
                            APPLY FOR BACHELOR DEGREE
                        </h3>
                        <p>
                            You are allowed to use this
                            edu meeting CSS template for
                            your school or university or
                            business. You can feel free
                            to modify or edit this layout.
                        </p>
                        <a href="#ContactUs">
                            <Button
                                sx={{
                                    width: '150px',
                                    height: '43px',
                                    borderRadius: '50px',
                                    background: 'rgb(161, 44, 47)',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                }}>
                                Join Us Now!
                            </Button>
                        </a>
                    </div>
                    <div>
                        <h3>
                            APPLY FOR BACHELOR DEGREE
                        </h3>
                        <p>
                            You are allowed to use this
                            edu meeting CSS template for
                            your school or university or
                            business. You can feel free
                            to modify or edit this layout.
                        </p>
                        <a href="#ContactUs">
                            <Button
                                sx={{
                                    width: '150px',
                                    height: '43px',
                                    borderRadius: '50px',
                                    background: 'rgb(245, 164, 37)',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                }}>
                                Join Us Now!
                            </Button>
                        </a>
                    </div>
                </div>

                <div className={StyleApplyNow.ContainerItemSecond}>
                    {ApplyNowData.map((item, index) => (
                        <div key={index + 1}>
                            <button className={`${openIndex === index ? StyleApplyNow.ContainerItemSecondButton : ""}`}
                                onClick={() => toggleItem(index)}>
                                <h5>
                                    {item.title}
                                </h5>
                                {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                            </button>
                            {
                                openIndex === index &&
                                <>
                                    <p>
                                        {item.contentA}
                                    </p>
                                    <p>
                                        {item.contentB}
                                    </p>
                                </>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ApplyNow