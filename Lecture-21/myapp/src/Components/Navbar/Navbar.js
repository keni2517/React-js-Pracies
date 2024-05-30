import React from 'react'
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (

            // <nav>
            //     <div className="navbar">
            //         <i className='bx bx-menu'></i>
            //         <div className="logo"><a href="#">HTML</a></div>
            //         <div className="nav-links">
            //             <div className="sidebar-logo">
            //                 <span className="logo-name">HTML</span>
            //                 <i className='bx bx-x' ></i>
            //             </div>
            //             <ul className="links">
            //                 <li><a href="/home">HOME</a></li>
            //                 <li>
            //                     <a href="/html-css">HTML & CSS</a>
            //                     <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            //                     <ul className="htmlCss-sub-menu sub-menu">
            //                         <li><a href="/web-design">Web Design</a></li>
            //                         <li><a href="/login-form">Login Forms</a></li>
            //                         <li><a href="/card-design">Card Design</a></li>
            //                         <li className="more">
            //                             <span><a href="/more">More</a>
            //                             </span>
            //                         </li>
            //                     </ul>
            //                 </li>
            //                 <li>
            //                     <a href="/javascript">JAVASCRIPT</a>
            //                     <i className='bx bxs-chevron-down js-arrow arrow '></i>
            //                     <ul className="js-sub-menu sub-menu">
            //                         <li><a href="/dynamic-clock">Dynamic Clock</a></li>
            //                         <li><a href="/form-validation">Form Validation</a></li>
            //                         <li><a href="/card-slider">Card Slider</a></li>
            //                         <li><a href="/complete-website">Complete Website</a></li>
            //                     </ul>
            //                 </li>
            //                 <li><a href="/about-us">ABOUT US</a></li>
            //                 <li><a href="/contact-us">CONTACT US</a></li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
            <nav>
                <div className="navbar">
                    <i className='bx bx-menu'></i>
                    <div className="logo"><a href="#">HTML</a></div>
                    <div className="nav-links">
                        <div className="sidebar-logo">
                            <span className="logo-name">HTML</span>
                            <i className='bx bx-x' ></i>
                        </div>
                        <ul className="links">
                            <li><Link to="/">HOME</Link></li>
                            <li>
                                <Link to="/html-css">HTML & CSS</Link>
                                <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                <ul className="htmlCss-sub-menu sub-menu">
                                    <li><a href="/web-design">Web Design</a></li>
                                    <li><a href="/login-form">Login Forms</a></li>
                                    <li><a href="/card-design">Card Design</a></li>
                                    <li className="more">
                                        <span><a href="/more">More</a>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/javascript">JAVASCRIPT</a>
                                <i className='bx bxs-chevron-down js-arrow arrow '></i>
                                <ul className="js-sub-menu sub-menu">
                                    <li><a href="/dynamic-clock">Dynamic Clock</a></li>
                                    <li><a href="/form-validation">Form Validation</a></li>
                                    <li><a href="/card-slider">Card Slider</a></li>
                                    <li><a href="/complete-website">Complete Website</a></li>
                                </ul>
                            </li>
                            <li><a href="/error">Error</a></li>
                            <li><a href="/contact-us">CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar