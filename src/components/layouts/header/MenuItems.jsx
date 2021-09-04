import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import URL from './../../../utils/helpers/URL';

export default function MenuItems() {
    return (
        <>
            <li >
                <NavLink to={URL.HOME} activeClassName="nav-active">
                    Home
                </NavLink>

            </li>

            <li >
                <NavLink to={URL.ABOUT} activeClassName="nav-active">
                    About Company
                </NavLink>
            </li>

            <li className="deeper parent">
                <NavLink to={URL.ABOUT} className="sub-sub-menu" activeClassName="nav-active ">
                    System And Design
                </NavLink>
                <ul class="nav-child unstyled small">
                    <li className="item-155"><Link to={URL.ABOUT} > Noise protection </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Noise - sources and types </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Sewage system design </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > High and low-rise buildings </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Roof drainage </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Storage </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Transport </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > System installation </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Clamping ring </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Fire protection </Link></li>
                </ul>

            </li>


            <li >
                <NavLink to={URL.ABOUT} activeClassName="nav-active">
                    Products
                </NavLink>
            </li>

            <li >
                <NavLink to={URL.ABOUT} activeClassName="nav-active">
                    News
                </NavLink>
            </li>
            <li className="deeper parent">
                <NavLink to={URL.ABOUT} activeClassName="nav-active">
                    Certification
                </NavLink>
                <ul class="nav-child unstyled small">
                    <li className="item-155"><Link to={URL.ABOUT} > Quality guarantee </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Index of standards </Link></li>
                    <li className="item-155"><Link to={URL.ABOUT} > Product catalogue </Link></li>
                </ul>
            </li>
        </>
    )
}
