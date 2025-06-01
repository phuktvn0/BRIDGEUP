import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

import './footer.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/play.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">BRIDGEUP</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                        <Link to="/">Liên hệ</Link>
                        <Link to="/">Đăng ký nhận tin</Link>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            <FaGoogle />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
