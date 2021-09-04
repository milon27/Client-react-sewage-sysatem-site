import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import Section from './../body/Section';

export default function HomeDataSheet() {
    return (
        <Section classNames={[""]}>
            <Row>
                <Col>
                    <h2 className="heading text-center">PRODUCT DATA SHEET</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Material </td>
                                <td>PP-M polypropylene with mineral fillers (pipes and fittings) </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Diameters of pipes and fittings</td>
                                <td>DN 40, DN50, DN75, DN110, DN125, DN160, DN200  mm According to PN-EN 1451-1:2018</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Wall thickness </td>
                                <td>Dn40 e=1,0; Dn50 e=2,0 mm; DN75 e=2,3mm; DN110 e=3,4  mm; DN125 e=3,9  mm;
                                    DN160 e=4,9 mm; DN200 e=5,9 mm</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Application area </td>
                                <td>The "BD" application area according to PN-EN 1451-1:2008, i.e. in the systems inside buildings and outside buildings, fixed onto the walls, or in the underground systems buried in the ground or embedded in concrete within the building structure.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Other applications </td>
                                <td>- Draining of roof areas in buildings with
                                    rainwater drainage systems up to 45 m
                                    in height.<br />- Technical Opinion issued by the
                                    Department of Material Engineering of
                                    the Central Mining Institute.
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Acoustic characteristics (tests
                                    carried out in the Fraunhofer
                                    Institute, Stuttgart) </td>
                                <td>- Standard steel clamping rings with an
                                    elastomer insert
                                    11 dB (0.5 l/s); 14 dB (1 l/s); 16 dB (2
                                    l/s); 20 dB (4l/s) <br />- Special BISMAT 1000 clamping rings  ≤10 dB (0.5 l/s); ≤10 dB ( 1 l/s); 13 dB
                                    (2 l/s); 16 dB (4l/s)
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Colour </td>
                                <td>- Pipes internal layer: white,external layer: blue  <br />- Fittings   blue
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Density </td>
                                <td>
                                    1.4 g/cm <sup>3</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Linear expansion coefficient </td>
                                <td>
                                    99.5×10-6 mm/mmoC
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Ring stiffness </td>
                                <td>
                                    SN ≥ 4KN/m<sub>2</sub>, series S16
                                </td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Type of connection </td>
                                <td>
                                    Push-in spigot-and-socket pipe joints. Sockets with a factory-installed elastomer seal. DN110, DN125, DN160 and DN200 mm  pipes and fittings with factory-installed triple lip seals that improve acoustic absorption and reliability of connections
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Fire resistance class </td>
                                <td>
                                    B2 - according to DIN 4102
                                </td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Chemical resistance </td>
                                <td>
                                    Conveyance and drainage of sewage with pH value ranging from 2 to 12
                                </td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Halogen content</td>
                                <td>
                                    Without halogens (Cl, F, Br, J)
                                </td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Maximum sewage temperature</td>
                                <td>
                                    90°C - permanent flow; 95°C - temporary flow
                                </td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Minimum installation temperature</td>
                                <td>
                                    Below - 20°C
                                </td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Special fittings</td>
                                <td>
                                    Steel clamping rings additionally protect pipes and fittings from withdrawing from socket
                                </td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Documents </td>
                                <td>
                                    National Technical Assessment ITB-KOT-2017/0167, 2nd edition, National
                                    Declaration of Performance KDWU No. 067/3 and KDW 062/3, Hygienic Conformity Certificate issued by the National Institute of Public Health, test report DFW/116/2018
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </Section>
    )
}
