import HomeProduct from '../components/HomeProduct'
import JustArived from '../components/JustArived'
import Category from '../components/Category'
import { useEffect, useState } from 'react'
export default function Home() {
    return (
        <>
            <main className="main">
                <div className="home-top-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-2">
                                <div className="home-banner banner banner1 banner-md-vw banner-sm-vw d-flex align-items-center">
                                    {/* <figure className="w-100"> */}
                                        <img  src="/assets/images/demoes/demo7/banners/banner-1.jpg" style={{ backgroundColor: "#4a4a4a" }} alt="banner" />
                                    {/* </figure> */}
                                    <div className="banner-layer">
                                        <h4 className=" text-white mb-0">Find the Boundaries</h4>
                                        <h2 className="text-white mb-0">Flash Sale</h2>
                                        <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                                        <h5 className="text-white text-uppercase ls-n-20 align-text-bottom">
                                            Starting At <b className="coupon-sale-text bg-secondary text-white d-inline-block">$<em
                                                className="align-text-top">199</em>99</b></h5>
                                        <a href="demo7-shop.html" className="btn bg-white btn-md ls-10">Shop Now!</a>
                                    </div>
                                    {/* <!-- End .banner-layer --> */}
                                </div>
                                {/* <!-- End .home-slide --> */}
                            </div>

                            <div className="col-lg-3 col-sm-6 mb-2">
                                <div className="row h-100">
                                    <div className="col-lg-12 mb-2">
                                        <div className="banner banner2 banner-hover-shadow d-flex align-items-center">
                                            {/* <figure className="w-100"> */}
                                                <img src="/assets/images/demoes/demo7/banners/banner-2.jpg" style={{ backgroundColor: "#ccc" }} alt="banner" />
                                            {/* </figure> */}
                                            <div className="banner-layer">
                                                <h3 className="m-b-2">Porto Watches</h3>
                                                <h4 className="m-b-2 text-secondary"><sup className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                                                <a href="demo7-shop.html" className="btn btn-dark text-uppercase ls-10">Shop
                                                    Now</a>
                                                <img src="/assets/images/demoes/demo7/banners/brand-sm.png" style={{ backgroundCcolor: "#eee", width: "48", height: "15" }} alt="brand" />
                                            </div>
                                        </div>
                                        {/* <!-- End .banner --> */}
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="banner banner3 text-uppercase banner-hover-shadow d-flex align-items-center">
                                            {/* <figure className="w-100"> */}
                                                <img src="/assets/images/demoes/demo7/banners/banner-3.jpg" alt="banner" />
                                            {/* </figure> */}

                                            <h6 className="banner-label left-label">50<small><sup>%</sup><sub>OFF</sub></small>
                                            </h6>
                                            <h6 className="banner-label right-label">70<small><sup>%</sup><sub>OFF</sub></small>
                                            </h6>
                                            <h6 className="banner-label bottom-label mb-0">
                                                30<small><sup>%</sup><sub>OFF</sub></small>
                                            </h6>

                                            <div className="banner-layer banner-layer-middle text-center">
                                                <h3 className="m-b-1 ls-10">DEAL PROMOS</h3>
                                                <h4 className="ls-0 text-body">STARTING AT $99</h4>
                                                <a href="demo7-shop.html" className="btn btn-dark btn-black ls-10">SHOP NOW</a>
                                            </div>
                                        </div>
                                        {/* <!-- End .banner --> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 mb-2">
                                <div className="banner banner4 text-uppercase banner-hover-shadow d-flex align-items-center">
                                    {/* <figure className="w-100"> */}
                                        <img src="/assets/images/demoes/demo7/banners/banner-4.jpg" style={{ backgroundColor: "#555" }} alt="banner" />
                                    {/* </figure> */}

                                    <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                        <div className="coupon-sale-content">
                                            <h3 className="text-white font1">Leather Jackets</h3>
                                            <h5 className="coupon-sale-text text-white ls-0 p-0"><i className="ls-0 font1">UP
                                                TO</i><b className="text-white bg-secondary">$100</b><sub>OFF</sub></h5>
                                            <a href="demo7-shop.html" className="btn bg-white btn-lg ls-10 d-block d-lg-inline-block  text-dark">Get
                                                Yours!</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- End .col-lg-5 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                </div>

                {/* .............part-2.............. */}
                <HomeProduct />
                {/* ..............part-2----------end */}
                 <Category />
                {/* ............................ */}
                <JustArived />
                {/* ............................. */}
                <div className="container">
                    <div className="blog-section row">
                        <div className="col-lg-6">
                            <h2 className="section-title text-center  border-0 d-flex align-items-center">LATEST NEWS
                            </h2>

                            <article className="post d-sm-flex align-items-center mb-2 mb-lg-0">
                                <div className="post-media">
                                    <a href="single.html">
                                        <img src="/assets/images/demoes/demo7/products/product-3-2.jpg" width="280" height="209" alt="Post" /> 
                                    </a>
                                    <div className="post-date">
                                        <span className="day">29</span>
                                        <span className="month">Jun</span>
                                    </div>
                                    {/* <!-- End .post-date --> */}
                                </div>
                                {/* <!-- End .post-media --> */}

                                <div className="post-body">
                                    <h2 className="post-title">
                                        <a href="single.html">Top Jeans Collection</a>
                                    </h2>

                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...</p>
                                    </div>
                                    {/* <!-- End .post-content --> */}

                                    <div className="post-meta">
                                        <i className="far fa-comments"></i>
                                        <a href="#" title="Comment on Top Jeans Collection">0 COMMENTS</a>
                                    </div>
                                </div>
                                {/* <!-- End .post-body --> */}
                            </article>
                        </div>
                        {/* <!-- End .col-lg-6 --> */}

                        <div className="col-lg-6">
                            <h2 className="section-title text-center  border-0  d-flex align-items-center">LATEST REVIEWS
                            </h2>

                            <div className="testimonials-slider mt-1">
                                <div className="testimonial">
                                    <div className="testimonial-owner">
                                        {/* <figure> */}
                                            <img src="assets/images/demoes/demo7/clients/client1.png" alt="client" />
                                        {/* </figure> */}

                                        <div>
                                            <h4 className="testimonial-title font1">john Smith</h4>
                                            <span className="font1 ls-n-10">CEO & Founder</span>
                                        </div>
                                    </div>
                                    {/* <!-- End .testimonial-owner --> */}

                                    <blockquote>
                                        <p>Hello, I want to thank you for creating a great template and for the excellent and quick support and help that you have been providing to me as I begin to work with it.</p>
                                    </blockquote>
                                </div>
                                {/* <!-- End .testimonial --> */}
                            </div>
                            {/* <!-- End .testimonials-slider --> */}
                        </div>
                        {/* <!-- End .col-lg-6 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                </div>
                {/* .............. */}
            </main>
        </>
    )
}
