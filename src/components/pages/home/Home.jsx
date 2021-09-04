import React from 'react'
import Body from './../../layouts/body/Body';
import HomeHero from './../../layouts/home/HomeHero';
import HomeAbout from './../../layouts/home/HomeAbout';
import HomeTechProperty from './../../layouts/home/HomeTechProperty';
import HomeBenefit from '../../layouts/home/HomeBenefit';
import HomeApplication from '../../layouts/home/HomeApplication';
import HomeDataSheet from './../../layouts/home/HomeDataSheet';
import HomeCallToAction from '../../layouts/home/HomeCallToAction';



export default function Home() {
    return (
        <Body title="Home ">

            <section className="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">

                            <HomeHero />
                            <HomeAbout />

                        </div>
                    </div>
                </div>
            </section>

            <HomeBenefit />

            <HomeTechProperty />

            <HomeApplication />

            <HomeDataSheet />

            <HomeCallToAction />

        </Body>
    )
}
