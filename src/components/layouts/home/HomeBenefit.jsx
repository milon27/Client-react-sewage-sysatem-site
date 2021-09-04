import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../body/Section'
export default function HomeBenefit() {
    return (
        <Section>
            <Row>
                <Col>
                    <h2 className="heading text-center">Benefits of the system</h2>
                </Col>
            </Row>

            <Row className=" text-justify">
                <Col md={6}>
                    <ul>
                        <li>High degree of sound insulation due to the double-layered structure of the mineral-enhanced
                            PP pipe wall, noise level as low as 16 dB, proved positive by the tests in the Fraunhofer
                            Institute,  Stuttgart,  acc.  to  DIN 4109-10, 3rd  class  of  sound  insulation  for  civil  structures
                            intended for people to stay in permanently,</li>
                        <li>resistance to aggressive sewage within the range from 2 to 12 pH, which ensures long-term
                            and failure-free use of the system,</li>
                        <li>high  thermal  resistance  to  the  sewage  temperature  as  high  as  90°C  when  the  flow  is
                            permanent and up to 95°C when the flow is short-term,</li>
                        <li>high mechanical resistance at temperatures as low as -20°C, which enables the installation
                            in winter conditions,</li>
                        <li>easy and efficient installation of the system thanks to the innovative centimetre scale overprint
                            on  the pipes;  possibility  of  cutting  the  pipes  into  sections  of  any length  and  very  simple
                            methods for connecting them without any special tools, thanks to factory-installed lip seals
                            and rich assortment of fittings,</li>
                        <li>superior effluent flow parameters thanks to the perfectly smooth inner surface of each pipe,
                            preventing deposits from forming,</li>
                        <li>very high resistance of the pipes to compression and impact as well as the possibility of
                            mounting indoors and in the soil, under a structure or in the concrete, thanks to minimum ring
                            stiffness of 4 kN/m2 (BD application scope), </li>
                        <li>100% recovery of raw materials used for production thanks to the recyclability of the pipes
                            and fittings included in the Ultra dB system, </li>
                        <li>steam condensation and release of fumes into the building are prevented (the sewage system
                            consisting of Ultra dB pipes and fittings is gas- and water-tight in working conditions), </li>

                    </ul>
                </Col>
                <Col md={6}>
                    <ul>

                        <li>the amount of waste is reduced to a minimum because the pipes are produced in sections of
                            various lengths,</li>
                        <li>the pipes with a relatively large wall thickness ensure high mechanical resistance and less
                            deformation of an even heavily loaded sewage system as compared to traditional sewage
                            systems currently available on the market,</li>
                        <li>with a wide range of fittings, the indoor sewage system can be used equally appropriately and
                            widely in new buildings and sewage system upgrades,</li>
                        <li>B2 flammability rating according to DIN 4102,</li>
                        <li>easy transport and storage thanks to low weight,</li>
                        <li>resistance to stray currents, </li>
                        <li>the system can be used for roof drainage in buildings in which the system height does not
                            exceed 45 m; tightness of connections up to 4.5 bar, thanks to special triple lip seals - applies
                            to DN110, DN125 and DN160,</li>
                        <li>
                            full dimensional compatibility with the existing systems, with the following
                            dimensions maintained:
                            <ul>
                                <li>  nominal diameter DN 40 50 70 100 125 150 200 (mm)</li>
                                <li>  outer diameter DZ 40 50 75 110 125 160 200 (mm)</li>
                            </ul>
                        </li>
                        <li>each pipe layer meets the applicable requirements:
                            <ul>
                                <li>internal layer (white) ensures resistance to high temperatures up to +90ºC,
                                    +95ºC for a short-term flow, high chemical resistance and reduction of noise
                                    level;</li>
                                <li>external layer (blue, smooth surface) ensures resistance to external stress, impacts and
                                    atmospheric conditions.</li>
                            </ul>
                        </li></ul>
                </Col>
            </Row>
        </Section>
    )
}
