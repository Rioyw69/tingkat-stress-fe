import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="header-area ">
                <div className="header-top_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="short_contact_list">
                                    <ul>
                                        <li><a href="#"> <i className="fa fa-envelope"></i> rio.16188@student.unsika.ac.id</a></li>
                                        <li><a href="#"> <i className="fa fa-phone"></i>082310180903 </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <Link to="/">
                                       <strong>Diagnosa Tingkat Stress</strong>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/diagnose">Konsultasi</NavLink></li>
                                            <li><NavLink to="/information">Informasi</NavLink></li>
                                            <li><NavLink to="/advice">Saran</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Header