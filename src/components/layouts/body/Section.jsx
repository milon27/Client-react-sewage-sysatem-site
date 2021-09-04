import React from 'react'
import { Container } from 'react-bootstrap'

export default function Section({ classNames, children, style }) {
    return (
        <section style={style} className={"pt-5 pb-5 " + classNames?.join(" ").toString()}>
            <Container>
                {children}
            </Container>
        </section>
    )
}
