import React from 'react'
import { Link } from 'react-router-dom'
import URL from './../../../utils/helpers/URL';

export default function About() {
    return (
        <div>
            about page....

            <Link to={URL.HOME}>go home</Link>
        </div>
    )
}
