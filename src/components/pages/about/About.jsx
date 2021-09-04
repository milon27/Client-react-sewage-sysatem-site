import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../../layouts/body/Section';
import URL from './../../../utils/helpers/URL';
import Body from './../../layouts/body/Body';

export default function About() {
    return (
        <Body title="About Us">
            <Section>
                about page....

                <Link to={URL.HOME}>go home</Link>
            </Section>
        </Body>
    )
}
