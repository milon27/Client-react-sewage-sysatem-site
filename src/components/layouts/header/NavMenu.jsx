import React from 'react'
import { Link } from 'react-router-dom'
import URL from './../../../utils/helpers/URL';
import MenuItems from './MenuItems';


export default function NavMenu() {

    const toggleSidebar = () => {
        document.querySelector(".sidebar").classList.toggle("sidebar--active")
    }

    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row justify-content-between">

                        <Link className="logo__link" to={URL.HOME}>
                            <img className="logo__img" src="https://magnaplast.pl/images/xlogo.png.pagespeed.ic._DqDSRYo5Z.png" alt="logo" />
                        </Link>

                        <button onClick={() => {
                            toggleSidebar()
                        }} className="toggle-sidebar">
                            <span />
                            <span />
                            <span />
                        </button>

                        <div className="main-menu">
                            <ul className="nav menu main-menu__list mod-list">

                                <MenuItems />
                            </ul>
                        </div>

                        {/* end of desktop menu */}
                        <div className="search mod_search112">
                            <div className="form-inline">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 32 32">
                                    <title>search</title>
                                    <path fill="#fff" d="M30.978 29.147l-7.616-7.921c1.958-2.328 3.031-5.257 3.031-8.306-0-7.124-5.796-12.92-12.92-12.92s-12.92 5.796-12.92 12.92 5.796 12.92 12.92 12.92c2.674 0 5.223-0.807 7.402-2.338l7.674 7.981c0.321 0.333 0.752 0.517 1.214 0.517 0.438 0 0.853-0.167 1.168-0.47 0.67-0.644 0.691-1.713 0.047-2.383zM13.473 3.37c5.266 0 9.55 4.284 9.55 9.55s-4.284 9.55-9.55 9.55-9.55-4.284-9.55-9.55 4.284-9.55 9.55-9.55z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

        </>
    )
}
