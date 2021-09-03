import React from 'react'
import { Link } from 'react-router-dom'
import URL from './../../../utils/helpers/URL';
/**
 * mobile nav
 * 
 *  
 */
export default function Sidebar() {
    return (
        <>
            <nav className="sidebar">
                <button className="toggle-sidebar toggle-sidebar--close">
                    <span />
                    <span />
                </button>
                <div className="mobile-nav">

                    <ul className="nav menu mod-list">
                        <li className="item-101 default current active"><Link to={URL.HOME}>Home</Link></li>
                        <li className="item-126"><Link to={URL.ABOUT}>About company</Link></li>
                        <li className="item-141 deeper parent"><a href="/en/products" className="sub-sub-menu">Products</a>
                            <ul className="nav-child unstyled small">
                                <li className="item-160 deeper parent"><a href="#">Indoor sewage system (PP)</a>
                                    <ul className="nav-child unstyled small">
                                        <li className="item-161"><a href="/en/produkty/kanalizacja-wewnetrzna-pp/htplus">HTplus</a>
                                        </li>
                                        <li className="item-162"><a href="/en/produkty/kanalizacja-wewnetrzna-pp/ultra-db">Ultra
                                            dB</a></li>
                                        <li className="item-164"><a href="/en/products/indoor-sewage-systems/skolan-db">Skolan
                                            safe</a></li>
                                    </ul>
                                </li>
                                <li className="item-163 deeper parent"><a href="#">Outdoor sewage system</a>
                                    <ul className="nav-child unstyled small">
                                        <li className="item-167"><a href="/en/produkty/kanalizacja-zewnetrzna/kg">KG</a></li>
                                        <li className="item-165"><a href="/en/produkty/kanalizacja-zewnetrzna/magnacor">Magnacor</a>
                                        </li>
                                        <li className="item-166"><a href="/en/produkty/kanalizacja-zewnetrzna/kg-2000">KG 2000</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item-168"><a href="/en/products/inspection-chamber-systems">Inspection chamber
                                    systems</a></li>
                                <li className="item-169"><a href="/en/products/water-piping-systems">Water piping systems</a></li>
                                <li className="item-170"><a href="/en/products/drainage">Drainage</a></li>
                            </ul>
                        </li>
                        <li className="item-128 deeper parent"><a href="/en/download" className="hash-menu">Download</a>
                            <ul className="nav-child unstyled small">
                                <li className="item-155"><a href="/en/download#cenniki">Prices</a></li>
                                <li className="item-156"><a href="/en/download#katalogi">Catalogs</a></li>
                                <li className="item-157"><a href="/en/download#filmy">Video tutorials</a></li>
                                <li className="item-173"><a href="/materialy#ulotki">Flyer</a></li>
                                <li className="item-174"><a href="/materialy#katalogowe">Catalog cards</a></li>
                                <li className="item-158"><a href="/en/download#dokumenty">Documents</a></li>
                            </ul>
                        </li>
                        <li className="item-129"><a href="/en/news">News</a></li>
                        <li className="item-131"><a href="/en/contact">Contact</a></li>
                    </ul>
                    <div className="search mod_search124">
                        <form action="/en/" method="post" className="form-inline" role="search">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 32 32">
                                <title>search</title>
                                <path fill="#fff" d="M30.978 29.147l-7.616-7.921c1.958-2.328 3.031-5.257 3.031-8.306-0-7.124-5.796-12.92-12.92-12.92s-12.92 5.796-12.92 12.92 5.796 12.92 12.92 12.92c2.674 0 5.223-0.807 7.402-2.338l7.674 7.981c0.321 0.333 0.752 0.517 1.214 0.517 0.438 0 0.853-0.167 1.168-0.47 0.67-0.644 0.691-1.713 0.047-2.383zM13.473 3.37c5.266 0 9.55 4.284 9.55 9.55s-4.284 9.55-9.55 9.55-9.55-4.284-9.55-9.55 4.284-9.55 9.55-9.55z">
                                </path>
                            </svg> <input name="searchword" id="mod-search-searchword124" maxLength={200} className="inputbox search-query input-medium" type="search" size={15} placeholder="Search ..." />
                            <input type="hidden" name="task" defaultValue="search" />
                            <input type="hidden" name="option" defaultValue="com_search" />
                            <input type="hidden" name="Itemid" defaultValue={101} />
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
