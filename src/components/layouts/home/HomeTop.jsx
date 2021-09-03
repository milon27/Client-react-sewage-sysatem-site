import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero'

export default function HomeTop() {
    return (
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
    )
}
