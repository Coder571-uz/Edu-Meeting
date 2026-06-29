import React from 'react'
import StyleNavbarUp from './navbarUp.module.css'

// Import Code For Icons </>
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function NavbarUp() {
  return (
    <div className={StyleNavbarUp.NavbarUp}>
      <div className={StyleNavbarUp.NavbarUpContainer}>
        <div>
          This is an educational <span>HTML CSS</span> template by TemplateMo website.
        </div>
        <div className={StyleNavbarUp.StyleNavbarUpIcon}>
          <FaFacebookF className={StyleNavbarUp.StyleNavbarUpIconIN} />
          <FaTwitter className={StyleNavbarUp.StyleNavbarUpIconIN} />
          <FaBehance className={StyleNavbarUp.StyleNavbarUpIconIN} />
          <FaLinkedinIn className={StyleNavbarUp.StyleNavbarUpIconIN} />
        </div>
      </div>
    </div>
  )
}

export default NavbarUp;