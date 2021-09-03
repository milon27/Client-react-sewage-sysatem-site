import React from 'react'
import { Link } from 'react-router-dom'
import URL from './../../../utils/helpers/URL';
import HomeTileBox from './HomeTileBox';

export default function HomeHero() {
    return (
        <>

            <div className="home" style={{ background: `url("../images/bg-home.jpg")` }}>
                <div className="home__inner">
                    <div className="container-fluid container-fluid--padding">
                        <div className="row">
                            <div className="col-12 col-md-4 col-xl-5">
                                <div className="banner">
                                    <div className="banner__text">
                                        <h2 className="banner__heading">New generation <br />
                                            <span>
                                                sewage system </span>
                                        </h2>
                                        <p className="banner__paragraph">Magnaplast is a part of a German
                                            holding company dealing with plastics processing and is a leader
                                            in the production of sewage systems.</p>


                                        <Link className="btn btn-secondary" to={URL.ABOUT}>
                                            Meet Us <img className="d-inline" src="./images/arrow-right-light.svg" alt="" />
                                        </Link>
                                        <Link className="btn btn-no-bg" to={URL.ABOUT}>Write To Us</Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-xl-7">
                                <div className="tiles__wrapper">

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                    <HomeTileBox empty={true} />
                                    <HomeTileBox empty={true} />

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                    <HomeTileBox empty={true} />

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />
                                    <HomeTileBox title="Storage" sub_title="Indoor sewage system" url={URL.ABOUT} forground_img="https://magnaplast.pl/images/kafelki/ultra-db-sh.png" background_img="https://magnaplast.pl/images/kafelki/ulttra-db.jpg" empty={false} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__arrow" />
            </div>

        </>
    )
}
