import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from "@fortawesome/free-solid-svg-icons";
function Footer(){
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-text">© Developed by Rubén Oubiña - 2025</div>
                <div className="links">
                    <a title='Link to Linkedin' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"><FontAwesomeIcon icon={faBell} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;