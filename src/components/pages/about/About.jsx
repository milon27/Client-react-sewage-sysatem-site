import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../../layouts/body/Section';
import URL from './../../../utils/helpers/URL';
import Body from './../../layouts/body/Body';
import SectionTop from './../../layouts/body/SectionTop';

export default function About() {
    return (
        <Body title="About Us">
            <SectionTop>
                <div className="mod_banertekstowy_97">
                    <div className="banner-sub   mod_banertekstowy_97" style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/images/tlo.jpg)', backgroundColor: '#ffffff', minHeight: 410 }}>
                        <div className="container">
                            <div className="banner-sub__mask-outer">
                                <div className="banner-sub__mask">
                                    <div className="banner-sub__extratext push-top-60"><p>A few words about us</p></div>
                                    <div className="banner-sub__heading"><h1>About company</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="after" />
                    </div>
                </div>
            </SectionTop>

            <Section>

                <Link to={URL.HOME}><h1 className="text-center">Go Home</h1></Link>
            </Section>
        </Body>
    )
}
