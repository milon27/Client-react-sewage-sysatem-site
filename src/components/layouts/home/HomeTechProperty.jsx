import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../body/Section'

export default function HomeTechProperty() {
    return (
        <Section classNames={["bg-gray-3"]}>
            <Row>
                <Col>
                    <h2 className="heading text-center">TECHNICAL PROPERTIES</h2>
                </Col>
            </Row>
            <Row className=" text-justify d-flex align-items-center ">
                <Col md={6}>
                    <div className="img-text__img-container">
                        <img className="my-img rounded" src="/images/techp.png" alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <ul>
                        <li>Noise level of the system as low as 16 dB (with flow rate of 4 Vs)</li>
                        <li>Unique recipe: polypropylene (PP) + mineral additives</li>
                        <li>Stiffness class 2 SN8 kN/m2 (DN 110, DN 125, DN 160 and DN 200)
                            <ul>
                                <li>BD application area</li>
                            </ul>
                        </li>
                        <li>High mechanical resistance at temperatures as low as -20°C, which enables the installation in winter conditions </li>
                        <li>Tightness of socketjoints up to 4.5 bar (45m of water column);
                            suitable for drainage systems in buildings</li>
                        <li>Resistance to sewage with a temperature up to
                            95°C</li>
                        <li> Chemical resistance within the range of p<sup>H</sup> 2 - p<sup>H</sup> 12</li>
                    </ul>
                </Col>
            </Row>
        </Section>
    )
}
