import React from 'react'

export default function Category() {
  return (
    <>
        <div className="categories-section bg-primary">
                    <div className="container">
                        <h2 className="section-title border-0 title-decorate text-center text-white d-flex align-items-center">
                            <span>BROWSE
                                OUR
                                CATEGORIES</span></h2>
                        <div className='row'>
                            <div className='col-l-3'>
                            <div className="banner banner-image">
                                <a href="demo7-product.html">
                                    <img src="/products/blackfrouit.webp" width="272" height="231" alt="banner" />
                                </a>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>Black Fruits</h3>
                                    <span>2 PRODUCTS </span>
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-3">
                            <div className="banner banner-image">
                                <a href="demo7-product.html">
                                    <img src="/products/Lettuce.webp" width="272" height="231" alt="banner" />
                                </a>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>Lettuce</h3>
                                    <span>2 PRODUCTS </span>
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-3">
                            <div className="banner banner-image">
                                <a href="demo7-product.html">
                                    <img src="/products/onion.webp" width="272" height="231" alt="banner" />
                                </a>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>Onion</h3>
                                    <span>2 PRODUCTS </span>
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-3">
                            <div className="banner banner-image">
                                <a href="demo7-shop.html">
                                    <img src="/products/pepper.webp" width="272" height="231" alt="banner" />
                                </a>
                                <div className="banner-layer banner-layer-middle">
                                    <h3>Pepper</h3>
                                    <span>2 PRODUCTS </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <!-- End .cat-carousel --> */}
                    </div>
                    {/* <!-- End .container --> */}
                </div>
    </>
  )
}
