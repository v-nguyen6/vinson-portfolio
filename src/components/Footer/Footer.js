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
                <a href="https://twitter.com/vinsondesigns">Twitter</a>
                <a href="https://www.linkedin.com/in/vinson-nguyen/">LinkedIn</a>
                <a href="https://github.com/v-nguyen6">Github</a>
            </div>
        </div>
    )
}

export default Footer