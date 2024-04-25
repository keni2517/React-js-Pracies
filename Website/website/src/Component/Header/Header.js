import React from 'react'
import '../Header/style.css'
import logo from '../Assets/logo.png'
import uk from '../Assets/uk.png'
import '../Header/container.css'

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-top bg-space">
                    <div className="container">
                        <div className="grid grid-cols-1">
                            <div className="col-span-1">
                                <div className="header-welcome-text">
                                    <span>Welcome to our international shop! Enjoy free shipping on orders $100 up.</span>
                                    <a href="/shop" className="ml-2 inline-flex items-center">Shop Now <i class="fa-solid fa-arrow-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="logo-area mt-30 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div class="col-xl-2 col-lg-3">
                                <div class="logo">
                                    <a href="/">
                                        <img src={logo} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="header-meta-info justify-content-between d-flex align-items-center">
                                    <div className="header-search-bar">
                                        <form action="#">
                                            <div className="search-info p-relative">
                                                <button className="header-search-icon">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                                <input placeholder="Search products..." type="text" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-meta header-brand d-flex align-items-center">
                                        <div className="header-meta__lang">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src={uk} alt="flag" />English<span><i class="fa-solid fa-angle-down"></i></span>
                                                    </a>
                                                    <ul className="header-meta__lang-submenu">
                                                        <li><a href="#">Arabic</a>
                                                        </li>
                                                        <li><a href="#">Spanish</a>
                                                        </li>
                                                        <li><a href="#">Mandarin</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-meta__value mr-15">
                                            <select>
                                                <option>USD</option>
                                                <option>YEAN</option>
                                                <option>EURO</option>
                                            </select>
                                        </div>
                                        <div className="header-meta__social d-flex align-items-center ml-25">
                                            <button className="header-cart p-relative tp-cart-toggle mr-4"><i className="fa-solid fa-cart-shopping ml-7"></i><span className="tp-product-count">0</span>
                                            </button>
                                            <a href="/sign-in">
                                                <i className="fa-regular fa-user mr-4"></i>
                                            </a>
                                            <a className="header-cart p-relative tp-cart-toggle" href="/wishlist">
                                                <i className="fa-regular fa-heart"></i>
                                                <span className="tp-product-count">0</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="main-menu-area mt-20 d-none d-xl-block">
                    <div className="p-relative for-megamenu">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-3">
                                    <div className="cat-menu__category p-relative">
                                        <a className="tp-cat-toggle" role="button">
                                            <i className="fa-solid fa-bars"></i>
                                            Categories
                                        </a>
                                        <div className="category-menu category-menu-off">
                                            <ul className="cat-menu__list">
                                                <li>
                                                    <a href="/shop">
                                                        <i className="fa-regular fa-user mr-4"></i>
                                                        Candles
                                                    </a>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="/shop">
                                                        <i className="fa-solid fa-umbrella mr-4"></i>
                                                        Handmade
                                                    </a>
                                                </li>
                                                <li><a href="/shop">
                                                    <i className="fa-solid fa-gift mr-4"></i> Gift Sets</a>
                                                </li>
                                                <li>
                                                    <a href="/shop">
                                                        <i className="fa-regular fa-face-smile mr-4"></i> Plastic Gifts</a>
                                                </li>
                                                <li>
                                                    <a href="/shop">
                                                        <i className="fa-solid fa-globe mr-4"></i> Handy Cream</a>
                                                </li>
                                                <li>
                                                    <a href="/shop"><i className="fa-solid fa-crown mr-4"></i>Cosmetics</a>
                                                </li>
                                                <li>
                                                    <a href="/shop"><i className="fa-solid fa-gift mr-4"></i>
                                                        Silk Accessories</a>
                                                </li>
                                            </ul>
                                            <div className="daily-offer">
                                                <ul>
                                                    <li>
                                                        <a href="/shop">Value of the Day</a>
                                                    </li>
                                                    <li><a href="/shop">Top 100 Offers</a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop">New Arrivals</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown"><a href="/">Home<i className="fa-solid fa-angle-down ml-1"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="/">Wooden Home</a></li>
                                                        <li><a href="/index-2">Fashion Home</a></li>
                                                        <li><a href="/index-3">Furniture Home</a></li>
                                                        <li><a href="/index-4">Cosmetics Home</a></li>
                                                        <li><a href="/index-5">Food Grocery</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown"><a href="/shop">Shop<i className="fa-solid fa-angle-down ml-1"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="/shop">Shop</a></li>
                                                        <li><a href="/shop-2">Shop 2</a></li>
                                                        <li><a href="/shop-details">Shop Details </a></li>
                                                        <li><a href="/shop-details-2">Shop Details 2</a></li>
                                                        <li><a href="/shop-location">Shop Location</a></li>
                                                        <li><a href="/cart">Cart</a></li>
                                                        <li><a href="/sign-in">Sign In</a></li>
                                                        <li><a href="/checkout">Checkout</a></li>
                                                        <li><a href="/wishlist">Wishlist</a></li>
                                                        <li><a href="/track">Product Track</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown has-megamenu"><a href="/about">Pages<i className="fa-solid fa-angle-down ml-1"></i></a>
                                                    <ul className="submenu mega-menu">
                                                        <li><a className="mega-menu-title">Page layout</a>
                                                            <ul>
                                                                <li><a href="/shop">Shop filters v1</a></li>
                                                                <li><a href="/shop-2">Shop filters v2</a></li>
                                                                <li><a href="/shop-details">Shop sidebar</a></li>
                                                                <li><a href="/shop-details-2">Shop Right sidebar</a></li>
                                                                <li><a href="/shop-location">Shop List view</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a className="mega-menu-title">Page layout</a>
                                                            <ul>
                                                                <li><a href="/about">About</a></li>
                                                                <li><a href="/cart">Cart</a></li>
                                                                <li><a href="/checkout">Checkout</a></li>
                                                                <li><a href="/sign-in">Sign In</a></li>
                                                                <li><a href="/sign-in">Log In</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a className="mega-menu-title">Page type</a>
                                                            <ul>
                                                                <li><a href="/track">Product Track</a></li>
                                                                <li><a href="/wishlist">Wishlist</a></li>
                                                                <li><a href="/not-found">404 / Error</a></li>
                                                                <li><a href="/coming-soon">Coming Soon</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown"><a href="/blog">Blog<i className="fa-solid fa-angle-down ml-1"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="/blog">Blog</a></li>
                                                        <li><a href="/blog-details">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/contact">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 flex">
                                    <div className="menu-contact">
                                        <ul>
                                            <li>
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon"><i class="fa-solid fa-phone"></i></div>
                                                    <div className="menu-contact__info"><a href="/tel:0123456">908. 408. 501. 89</a></div>
                                                </div>
                                            </li>
                                            <li className='flex'> 
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon"><i class="fa-solid fa-location-dot"></i></div>
                                                    <div className="menu-contact__info"><a href="/shop-location">Find Store</a></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header