import React,{useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios';
export default function Header() {
const{Logout}=useContext(AuthContext)
const [usercart,setUsercart]=useState(0)
useEffect(()=>{
    if(!sessionStorage.getItem("token")){
        setUsercart(0)
     }
     else{
        const usertoken=sessionStorage.getItem("userid")
        axios.get(`http://localhost:3001/cartdata/${usertoken}`).then((res)=>{
            setUsercart(res.data.length)
        })
     }
})
  return (
    <>
    <div className="top-notice text-white">
    <div className="container text-center">
        <h5 className="d-inline-block mb-0">Get Up to <b>40% OFF</b> New-Season Styles</h5>
        <Link to="demo7-shop.html" className="category">MEN</Link>
        <Link to="demo7-shop.html" className="category ml-2 mr-3">WOMEN</Link>
        <small>* Limited time only.</small>
        <button title="Close (Esc)" type="button" className="mfp-close">×</button>
    </div>
    {/* <!-- End .container --> */}
</div>
    <header className="header">
            <div className="header-top text-uppercase">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown mr-3 pr-1">
                            <Link to="#" className="pl-0">IND</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#">IND</Link></li>
                                    <li><Link to="#">USA</Link></li>
                                </ul>
                            </div>
                            {/* <!-- End .header-menu --> */}
                        </div>
                        {/* <!-- End .header-dropown --> */}

                        <div className="header-dropdown mr-auto">
                            <Link to="#" className="pl-0"><i className="flag-in flag"></i>IND</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#"><i className="flag-in flag mr-2"></i>IND</Link>
                                    </li>
                                    <li><Link to="#"><i className="flag-us flag mr-2"></i>USA</Link></li>
                                </ul>
                            </div>
                            {/* <!-- End .header-menu --> */}
                        </div>
                        {/* <!-- End .header-dropown --> */}
                    </div>
                    {/* <!-- End .header-left --> */}

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                        <div className="header-dropdown dropdown-expanded mr-3">
                            <div className="header-menu">
                                <ul>
                                    {/* <li><Link to="dashboard.html">My Account</Link></li> */}
                                    <li><Link to="/about/">About Us</Link></li>
                                    <li><Link to="blog.html">Blog</Link></li>
                                    <li><Link to="wishlist.html">My Wishlist</Link></li>
                                    <li><Link to="/cart/">Cart</Link></li>
                                    {/* <li><Link to="#" className="login-link">Log In</Link></li> */}
                                </ul>
                            </div>
                            {/* <!-- End .header-menu --> */}
                        </div>
                        {/* <!-- End .header-dropown --> */}

                        <span className="separator d-none d-lg-inline-block"></span>

                        <div className="social-icons">
                            <Link to="#" className="social-icon social-facebook icon-facebook" target="_blank"></Link>
                            <Link to="#" className="social-icon social-twitter icon-twitter" target="_blank"></Link>
                            <Link to="#" className="social-icon social-instagram icon-instagram mr-1" target="_blank"></Link>
                        </div>
                        {/* <!-- End .social-icons --> */}
                    </div>
                    {/* <!-- End .header-right --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .header-top --> */}

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" type="button">
                            <i className="fas fa-bars"></i>
                        </button>

                        <Link to="demo7.html" className="logo w-100">
                            <img src="assets/images/logo-black.png" alt="Porto Logo" />
                        </Link>

                        <nav className="main-nav w-100">
                            <ul className="menu">
                                <li className="">
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                <Link to="/shop/" >My-shop</Link>
                                </li>
                               
                                <li>
                                    <Link to="/about/">About Us</Link>
                                </li>
                                {sessionStorage.getItem("token") ?
                                <>
                                <li><Link onClick={Logout}>Logout</Link></li>
                                <li><Link to="/register/">myaccount</Link></li>
                                </>
                                :
                                <>
                                <li><Link to="/user-login/">Login</Link></li>
                                <li><Link to="/register/">Register</Link></li>
                                </>
                                }
                            </ul>
                        </nav>

                        <div className="header-search header-search-popup header-search-category d-none d-lg-block ml-xl-5">
                            <Link to="#" className="search-toggle" role="button"><i className="icon-magnifier"></i></Link>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <input type="search" className="form-control bg-white" name="q" id="q" placeholder="I'm searching for..." required="" />
                                    <div className="select-custom bg-white">
                                        <select id="cat" name="cat">
                                            <option value="">All Categories</option>
                                            <option value="4">Fashion</option>
                                            <option value="12">- Women</option>
                                            <option value="13">- Men</option>
                                            <option value="66">- Jewellery</option>
                                            <option value="67">- Kids Fashion</option>
                                            <option value="5">Electronics</option>
                                            <option value="21">- Smart TVs</option>
                                            <option value="22">- Cameras</option>
                                            <option value="63">- Games</option>
                                            <option value="7">Home &amp; Garden</option>
                                            <option value="11">Motors</option>
                                            <option value="31">- Cars and Trucks</option>
                                            <option value="32">- Motorcycles &amp; Powersports</option>
                                            <option value="33">- Parts &amp; Accessories</option>
                                            <option value="34">- Boats</option>
                                            <option value="57">- Auto Tools &amp; Supplies</option>
                                        </select>
                                    </div>
                                    {/* <!-- End .select-custom --> */}
                                    <button className="btn bg-white icon-search-3" type="submit"></button>
                                </div>
                                {/* <!-- End .header-search-wrapper --> */}
                            </form>
                        </div>
                    </div>
                    {/* <!-- End .header-left --> */}

                    <div className="header-right">
                        <div className="header-contact d-none d-lg-flex pl-4 pr-4">
                            <img alt="phone" src="assets/images/phone.png" width="30" height="30" className="pb-1" />
                            <h6><span>Call us now</span><Link to="tel:#" className="text-dark font1">+123 5678 890</Link></h6>
                        </div>

                        <Link to="login.html" className="header-icon header-icon-user d-lg-none d-block" title="login"><i
                                className="icon-user-2"></i></Link>

                        <Link to="wishlist.html" className="header-icon d-lg-none d-block" title="wishlist"><i
                                className="icon-wishlist-2"></i></Link>

                        <span className="separator d-lg-inline-block d-none"></span>

                        <div className="dropdown cart-dropdown">
                            <Link to="#" title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count badge-circle">{usercart}</span>
                            </Link>

                            <div className="cart-overlay"></div>

                            <div className="dropdown-menu mobile-cart">
                                <Link to="#" title="Close (Esc)" className="btn-close">×</Link>

                                <div className="dropdownmenu-wrapper custom-scrollbar">
                                    <div className="dropdown-cart-header">Shopping Cart</div>
                                    {/* <!-- End .dropdown-cart-header --> */}

                                    <div className="dropdown-cart-products">
                                        
                                        {/* <!-- End .product --> */}

                                        
                                        {/* <!-- End .product --> */}
                                        {sessionStorage.getItem("token")?
                                        <>
                                         <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <Link to="product.html">Circled Ultimate 3D Speaker</Link>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span> × $35.00
                                                </span>
                                            </div>
                                            {/* <!-- End .product-details --> */}

                                            <figure className="product-image-container">
                                                <Link to="product.html" className="product-image">
                                                    <img src="assets/images/products/product-3.jpg" alt="product" width="80" height="80" />
                                                </Link>
                                                <Link to="#" className="btn-remove" title="Remove Product"><span>×</span></Link>
                                            </figure>
                                        </div>
                                        <div className="dropdown-cart-total">
                                        <span>SUBTOTAL:</span>

                                        <span className="cart-total-price float-right">$134.00</span>
                                    </div>
                                        </>:
                                        <>
                                         <p>Your cart is </p>
                                        </>}
                                       
                                        {/* <!-- End .product --> */}
                                    </div>
                                    {/* <!-- End .cart-product --> */}

                                  
                                    {/* <!-- End .dropdown-cart-total --> */}

                                    <div className="dropdown-cart-action">
                                        <Link to="cart.html" className="btn btn-gray btn-block view-cart">View
                                            Cart</Link>
                                        <Link to="checkout.html" className="btn btn-dark btn-block">Checkout</Link>
                                    </div>
                                    {/* <!-- End .dropdown-cart-total --> */}
                                </div>
                                {/* <!-- End .dropdownmenu-wrapper --> */}
                            </div>
                            {/* <!-- End .dropdown-menu --> */}
                        </div>
                        {/* <!-- End .dropdown --> */}
                    </div>
                    {/* <!-- End .header-right --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .header-middle --> */}
    </header>
    </>
  )
}
