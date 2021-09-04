import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import URL from './../../../utils/helpers/URL';
/**
 * mobile nav
 */
export default function Sidebar() {
    const sidebar = useRef(null)

    const toggleSidebar = () => {
        sidebar.current.classList.toggle("sidebar--active")
    }

    return (
        <>
            <nav className="sidebar " ref={sidebar}>
                <button onClick={() => {
                    toggleSidebar()
                }} className="toggle-sidebar toggle-sidebar--close">
                    <span />
                    <span />
                </button>

                <div className="mobile-nav">
                    <ul className="nav menu mod-list">
                        <li >
                            <NavLink exact to={URL.HOME} activeClassName="nav-active">
                                Home
                            </NavLink>

                        </li>

                        <li >
                            <NavLink exact to={URL.ABOUT} activeClassName="nav-active">
                                About Company
                            </NavLink>
                        </li>

                        <li >
                            <NavLink exact to={URL.ABOUT} activeClassName="nav-active">
                                System And Design
                            </NavLink>
                        </li>

                        <li >
                            <NavLink exact to={URL.ABOUT} activeClassName="nav-active">
                                Products
                            </NavLink>
                        </li>

                        <li >
                            <NavLink exact to={URL.ABOUT} activeClassName="nav-active">
                                News
                            </NavLink>
                        </li>
                        <li >
                            <NavLink exact to={URL.ABOUT} activeClassName="nav-active">
                                Certification
                            </NavLink>
                        </li>
                    </ul>
                    <div className="search mod_search124">
                        <div className="form-inline mt-3">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 32 32">
                                <title>search</title>
                                <path fill="#fff" d="M30.978 29.147l-7.616-7.921c1.958-2.328 3.031-5.257 3.031-8.306-0-7.124-5.796-12.92-12.92-12.92s-12.92 5.796-12.92 12.92 5.796 12.92 12.92 12.92c2.674 0 5.223-0.807 7.402-2.338l7.674 7.981c0.321 0.333 0.752 0.517 1.214 0.517 0.438 0 0.853-0.167 1.168-0.47 0.67-0.644 0.691-1.713 0.047-2.383zM13.473 3.37c5.266 0 9.55 4.284 9.55 9.55s-4.284 9.55-9.55 9.55-9.55-4.284-9.55-9.55 4.284-9.55 9.55-9.55z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
