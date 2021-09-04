import React from 'react'
import Section from './../body/Section';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomeCallToAction() {
    return (
        <Section classNames={["bg-img"]} style={{ background: 'url("images/rury.jpg")' }}>
            <Row>
                <div class="col-md-12 px-4 px-md-0 d-flex justify-content-md-center justify-content-lg-between flex-wrap flex-lg-nowrap">
                    <h2 class="cta__heading">Do you have a problem with choosing the right product? <b> Contact us! </b></h2>
                    <Link class="cta__btn btn btn-no-bg" to={{ pathname: "/" }}>
                        Write to us <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="26" height="7" viewBox="0 0 29.9 8"><path d="M26.213.146h-2.15l2.66 2.958H5.712V4.89h21.088l-2.373 3.028h2.018l3.323-3.997z" fill="#fff"></path></svg>
                    </Link>
                </div>
            </Row>
        </Section>
    )
}
