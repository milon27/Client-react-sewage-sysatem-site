import React from 'react'
import { Link } from 'react-router-dom'
import URL from './../../../utils/helpers/URL';


export default function FooterContent() {
    return (
        <>
            <footer className="footer" itemScope itemType="http://schema.org/WPFooter">
                <div className="footer__inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-xl-6">
                                <img className="footer__image" src="/images/xlogo.png.pagespeed.ic._DqDSRYo5Z.png" alt="Logo" />
                                <p className="footer__desc">
                                    Magnaplast is a part of a German holding company dealing with plastics processing and is a
                                    leader in the production of sewage systems. </p>
                            </div>
                            <div className="col-md-2 mb-5 mb-md-0">
                                <h3 className="footer__title">Links</h3>
                                <ul className="nav menu mod-list">
                                    <li className="item-101 default current active">
                                        <Link to={URL.HOME}>Home</Link>
                                    </li>
                                    <li className="item-126">
                                        <Link to={URL.ABOUT}>About company</Link>
                                    </li>
                                    <li className="item-141 parent"><a href="/en/products" className="sub-sub-menu">Products</a></li>
                                    <li className="item-128 parent"><a href="/en/download" className="hash-menu">Download</a></li>
                                    <li className="item-129"><a href="/en/news">News</a></li>
                                    <li className="item-131"><a href="/en/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 mb-5 mb-md-0">
                                <h3 className="footer__title">Social media</h3>
                                <a className="footer__fb" href="https://www.facebook.com/MagnaplastPL/">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                                        <title>facebook-app-logo-1</title>
                                        <path fill="#2940a5" d="M30.232 0.001h-28.466c-0.975 0-1.766 0.79-1.766 1.766v28.466c0 0.976 0.791 1.767 1.766 1.767h15.325v-12.392h-4.17v-4.83h4.17v-3.562c0-4.132 2.523-6.384 6.21-6.384 1.768 0 3.284 0.132 3.726 0.19v4.319l-2.558 0.001c-2.005 0-2.392 0.953-2.392 2.351v3.083h4.783l-0.625 4.829h-4.158v12.392h8.154c0.976 0 1.768-0.792 1.768-1.766v-28.467c-0.001-0.975-0.791-1.765-1.767-1.765z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div className="col-md-3 col-xl-2 mb-5 mb-md-0">
                                <h3 className="footer__title">Contact us</h3>
                                <ul className="footer__contact">
                                    <div className="mb-3">
                                        <li className="footer__contact-item">
                                            <a className="footer__phone" href="tel:+48683632700">+48 68 363 27 00</a>
                                        </li>
                                        <li className="footer__contact-item">
                                            <a href="mailto:magnaplast@magnaplast.pl">magnaplast@magnaplast.pl</a>
                                        </li>
                                    </div>
                                    <li className="footer__contact-item">
                                        <b>Magnaplast Sp. z o.o. </b>
                                    </li>
                                    <li className="footer__contact-item">
                                        Sieniawa Żarska 69
                                    </li>
                                    <li className="footer__contact-item">
                                        68-213 Lipinki Łużyckie
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between">
                                    <p>© Magnaplast Sp.z. o. o. - 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
