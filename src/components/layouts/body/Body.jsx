import React from 'react'
import Footer from '../footer/Footer'
import HeadTag from '../header/HeadTag'
import NavMenu from './../header/NavMenu'
import Sidebar from './Sidebar'

export default function Body({ title, children }) {
    return (
        <>
            <HeadTag title={title} />
            <div id="system-message-container">
            </div>

            <NavMenu />
            <Sidebar />
            <main>
                {children}
            </main>
            <Footer />

        </>
    )
}
