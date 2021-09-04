import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../../layouts/body/Section';
import URL from './../../../utils/helpers/URL';


export default function About() {
    return (
        <Section classNames={["d-flex", "align-items-center", "min-vh-100"]}>
            <h1 className="text-center">About Page</h1>
            <Link to={URL.HOME}><h3 className="text-center text-primary">Go Home</h3></Link>
        </Section>
    )
}
