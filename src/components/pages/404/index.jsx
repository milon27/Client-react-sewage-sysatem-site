import React from 'react'
import Section from './../../layouts/body/Section';
import URL from './../../../utils/helpers/URL';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Section classNames={["d-flex", "align-items-center", "min-vh-100"]}>
            <h1 className="text-center">404-Page Not Found</h1>
            <Link to={URL.HOME}><h3 className="text-center text-primary">Go Home</h3></Link>
        </Section>
    )
}
