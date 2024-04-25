import React from 'react'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div>
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
                            <li><a href="/home">HOME</a></li>
                            <li>
                                <a href="/about">ABOUT</a>
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
                                <a href="/contact">CONTACT</a>
                                <i className='bx bxs-chevron-down js-arrow arrow '></i>
                                <ul className="js-sub-menu sub-menu">
                                    <li><a href="/dynamic-clock">Dynamic Clock</a></li>
                                    <li><a href="/form-validation">Form Validation</a></li>
                                    <li><a href="/card-slider">Card Slider</a></li>
                                    <li><a href="/complete-website">Complete Website</a></li>
                                </ul>
                            </li>
                            <li><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href='/login'>Login</a></button></li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar