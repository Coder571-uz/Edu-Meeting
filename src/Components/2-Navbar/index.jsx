import React, { useState, useEffect } from "react";
import StyleNavbar from "./navbar.module.css";
import NavbarUp from "../1-NavbarUp/index";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    // Navbar Scroll Xolati Uchun Fuction </>
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navbar da Navigate Ishlashi Uchun Fuction </>
    const HandleHome = () => {
        navigate('/');
    }
    const HandleMeetings = () => {
        navigate('/Meetings');
    }

    const HandleOnlineTeaching = () => {
        navigate('/OnlineTeaching');
    }

    return (
        <>
            <NavbarUp />
            <nav className={`${StyleNavbar.Navbar}
             ${isScrolled ? StyleNavbar.NavbarScrolled : ""}`}>
                <div className={StyleNavbar.NavbarContainer}>
                    <a href="http://localhost:5173/"
                        className={`${StyleNavbar.NavbarEduMeeting}
                         ${isScrolled ? StyleNavbar.NavbarEduMeetingScrolled : ""}`
                        }>
                        Edu Meeting
                    </a>
                    <div className={`${StyleNavbar.NavbarPages}
                     ${isScrolled ? StyleNavbar.NavbarPagesScroll : ""}`}>
                        <div onClick={HandleHome}>
                            <a href="#">
                                Home
                            </a>
                        </div>
                        <div onClick={HandleMeetings}>
                            Meetings
                        </div>
                        <div onClick={HandleHome}>
                            <a href="#ApplyNow">
                                Apply Now
                            </a>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle className={`${StyleNavbar.NavbarPagesPages} ${isScrolled ? StyleNavbar.NavbarPagesPagesScroll : ""}`}
                                variant="none" >
                                Pages
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={StyleNavbar.NavbarPagesPagesItems}>
                                <Dropdown.Item onClick={HandleMeetings}
                                    className={StyleNavbar.NPPagesItemsText}>
                                    Upcoming Meetings
                                </Dropdown.Item>
                                <Dropdown.Item onClick={HandleOnlineTeaching}
                                    className={StyleNavbar.NPPagesItemsText}>
                                    Meeting Details
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div onClick={HandleHome}>
                            <a href="#OurPopular">
                                Courses
                            </a>
                        </div>
                        <div onClick={HandleHome}>
                            <a href="#ContactUs">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
