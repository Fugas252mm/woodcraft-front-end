import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <nav className="social">
                    <ul className="social__icons">
                        <a href="https://www.facebook.com/WoodCraft.vv" target="_blank">
                            <i className="fa-brands fa-facebook fb-pl"></i>
                        </a>
                        <a href="https://www.instagram.com/woodcraft.ukr/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </ul>
                </nav>
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li>
                            <a href="/" className="footer__nav-list-item">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__nav-list-item">
                                News
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__nav-list-item">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__bottom">
                    <p className="footer__bottom-text">WoodCraft &copy;2022</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;