import React from 'react'
import { Link } from 'react-router-dom'
import URL from './../../../utils/helpers/URL';


export default function FooterContent() {
    return (
        <>
            <footer className="footer" >
                <div className="footer__inner">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-5 col-xl-6">
                                <img className="footer__image" src="https://magnaplast.pl/images/xlogo.png.pagespeed.ic._DqDSRYo5Z.png" alt="Logo" />
                                <p className="footer__desc">
                                    Magnaplast is a part of a German holding company dealing with plastics processing and is a
                                    leader in the production of sewage systems. </p>
                            </div>

                            <div className="col-md-2 mb-5 mb-md-0">
                                <h3 className="footer__title">Links</h3>
                                <ul className="nav menu mod-list">
                                    <li>
                                        <Link to={URL.HOME}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={URL.ABOUT}>About company</Link>
                                    </li>
                                    <li>
                                        <Link to={URL.ABOUT}>System And Design</Link>
                                    </li>
                                    <li>
                                        <Link to={URL.ABOUT}>Products</Link>
                                    </li>
                                    <li>
                                        <Link to={URL.ABOUT}>News</Link>
                                    </li>
                                    <li>
                                        <Link to={URL.ABOUT}>Certification</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 mb-5 mb-md-0">
                                <h3 className="footer__title">Social media</h3>
                                <Link target="_blank" to={{ pathname: "https://facebook.com" }}>
                                    <i className="fab fa-facebook-square"></i>
                                </Link>
                            </div>
                            <div className="col-md-3 col-xl-2 mb-5 mb-md-0">
                                <h3 className="footer__title">Contact us</h3>
                                <ul className="footer__contact">
                                    <div className="mb-3">
                                        <li className="footer__contact-item">
                                            <Link className="footer__phone" target="_blank" to={{ pathname: "tel:+48683632700" }}>
                                                +48 68 363 27 00
                                            </Link>
                                        </li>
                                        <li className="footer__contact-item">
                                            <Link target="_blank" to={{ pathname: "mailto:magnaplast@magnaplast.pl" }}>
                                                magnaplast@magnaplast.pl
                                            </Link>
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
                                    <p>© sewage system react - 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
