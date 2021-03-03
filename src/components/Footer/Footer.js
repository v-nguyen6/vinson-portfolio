import React from 'react';
import logo from '../../images/logo.png'

function Footer() {
    return (
        <div className="footer">
            <p className="footer-name">&copy; Vinson Nguyen | Vancouver</p>

            <a href="#header" className="footer-logo">
                <img src={logo} alt="Logo"/>
            </a>

            <div className="social-media-links">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Github</a>
            </div>
        </div>
    )
}

export default Footer