import React from 'react'
import Body from './../../layouts/body/Body';
import HomeHero from './../../layouts/home/HomeHero';
import HomeAbout from './../../layouts/home/HomeAbout';
import HomeOffer from './../../layouts/home/HomeOffer';


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
            {/* top end */}
            {/* <HomeOffer /> */}

        </Body>
    )
}
