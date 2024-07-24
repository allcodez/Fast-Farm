import React from 'react'

import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
export default function HomeProduct() {

    const navigat =useNavigate()

    const Products=(img,pname,pcat,price,oprice)=>{
       if(sessionStorage.getItem("token")){
        const userid=sessionStorage.getItem("userid")
        console.log(userid)
        const pdata={
            "userid":userid,
            "image":img,
            "product_name":pname,
            "product_category":pcat,
            "price":price,
            "or_price":oprice,
        }
        axios({
            method:"post",
            url:"http://localhost:3001/addproduct",
            data:pdata,
        }).then((res)=>{
            alert(res.data)
        })
        console.log(pdata)
       }
       else{
        alert("please login")
       }
    }
    return (
        <>
            <div className="container">
                <section className="featured-products-section">
                    <h2 className="section-title text-center d-flex align-items-center">Featured Products
                    </h2>

                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className="product-default left-details">
                                <figure>
                                    <a href="demo7-product.html">
                                        <img src="/assets/images/demoes/demo7/products/product-1.jpg" alt="product" width="300" height="300" />
                                        <img src="/assets/images/demoes/demo7/products/product-1-2.jpg" alt="product" width="300" height="300" />
                                    </a>
                                    <div className="label-group">
                                        <span className="product-label label-hot">HOT</span>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="category-list">
                                        <a href="demo7-shop.html" className="product-category">Fashion</a>,
                                        <a href="demo7-shop.html" className="product-category">Glasses</a>
                                    </div>
                                    <h3 className="product-title"> <a href="demo7-product.html">Black Glasses</a> </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: "0%" }}></span>
                                            {/* <!-- End .ratings --> */}
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        {/* <!-- End .product-ratings --> */}
                                    </div>
                                    {/* <!-- End .product-container --> */}
                                    <div className="price-box">
                                        <span className="product-price">$99.00 – $109.00</span>
                                    </div>
                                    {/* <!-- End .price-box --> */}
                                    <div className="product-action">
                                        <Link onClick={()=>Products(
                                            "/assets/images/demoes/demo7/products/product-1.jpg",
                                            "Black Glasses",
                                            "Glasses",
                                            "99.00",
                                            "109.00",
                                        )} className="btn-icon btn-add-cart"><i
                                            className="icon-shopping-cart"></i><span>ADD TO CART</span></Link>
                                        <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                            className="icon-heart"></i></a>
                                        {/* <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i
                                            className="fas fa-external-link-alt"></i></a> */}
                                    </div>
                                </div>
                                {/* <!-- End .product-details --> */}
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="product-default left-details">
                                <figure>
                                    <a href="demo7-product.html">
                                        <img src="/assets/images/demoes/demo7/products/product-2.jpg" alt="product" width="300" height="300" />
                                        <img src="/assets/images/demoes/demo7/products/product-2-2.jpg" alt="product" width="300" height="300" />
                                    </a>
                                    <div className="label-group">
                                        <span className="product-label label-hot">HOT</span>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="category-list">
                                        <a href="demo7-shop.html" className="product-category">clothing</a>,
                                        <a href="demo7-shop.html" className="product-category">shoes</a>
                                    </div>
                                    <h3 className="product-title"> <a href="demo7-product.html">Jeans Pants</a> </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: "0%" }}></span>
                                            {/* <!-- End .ratings --> */}
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        {/* <!-- End .product-ratings --> */}
                                    </div>
                                    {/* <!-- End .product-container --> */}
                                    <div className="price-box">
                                        <span className="product-price">$50.00 – $70.00</span>
                                    </div>
                                    {/* <!-- End .price-box --> */}
                                    <div className="product-action">
                                        <Link onClick={()=>Products(
                                            "/assets/images/demoes/demo7/products/product-2.jpg",
                                            "Jeans Pants",
                                            "clothing",
                                            "50.00",
                                            "70.00",
                                        )} className="btn-icon btn-add-cart"><i
                                            className="icon-shopping-cart"></i><span>ADD TO CART</span></Link>
                                        <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                            className="icon-heart"></i></a>
                                        {/* <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i
                                            className="fas fa-external-link-alt"></i></a> */}
                                    </div>
                                </div>
                                {/* <!-- End .product-details --> */}
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="product-default left-details">
                                <figure>
                                    <a href="demo7-product.html">
                                        <img src="/assets/images/demoes/demo7/products/product-4.jpg" alt="product" width="300" height="300" />
                                        <img src="/assets/images/demoes/demo7/products/product-4-2.jpg" alt="product" width="300" height="300" />
                                    </a>
                                    <div className="label-group">
                                        <span className="product-label label-hot">HOT</span>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="category-list">
                                        <a href="demo7-shop.html" className="product-category">clothing</a>,
                                        <a href="demo7-shop.html" className="product-category">shoes</a>
                                    </div>
                                    <h3 className="product-title"> <a href="demo7-product.html">Black Glasses</a> </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: "0%" }}></span>
                                            {/* <!-- End .ratings --> */}
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        {/* <!-- End .product-ratings --> */}
                                    </div>
                                    {/* <!-- End .product-container --> */}
                                    <div className="price-box">
                                        <span className="product-price">$129.00 – $109.00</span>
                                    </div>
                                    {/* <!-- End .price-box --> */}
                                    <div className="product-action">
                                        <Link onClick={()=>Products(
                                            "/assets/images/demoes/demo7/products/product-4.jpg",
                                            "Jeans Pants",
                                            "clothing",
                                            "129.00",
                                            "109.00",
                                        )} className="btn-icon btn-add-cart"><i
                                            className="icon-shopping-cart"></i><span>ADD TO CART</span></Link>
                                        <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                            className="icon-heart"></i></a>
                                        {/* <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i
                                            className="fas fa-external-link-alt"></i></a> */}
                                    </div>
                                </div>
                                {/* <!-- End .product-details --> */}
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="product-default left-details">
                                <figure>
                                    <a href="demo7-product.html">
                                        <img src="/assets/images/demoes/demo7/products/product-6.jpg" alt="product" width="300" height="300" />
                                        <img src="/assets/images/demoes/demo7/products/product-6-2.jpg" alt="product" width="300" height="300" />
                                    </a>
                                    <div className="label-group">
                                        <span className="product-label label-hot">HOT</span>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="category-list">
                                        <a href="demo7-shop.html" className="product-category">clothing</a>,
                                        <a href="demo7-shop.html" className="product-category">shoes</a>
                                    </div>
                                    <h3 className="product-title"> <a href="demo7-product.html">Black Glasses</a> </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: "0%" }}></span>
                                            {/* <!-- End .ratings --> */}
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        {/* <!-- End .product-ratings --> */}
                                    </div>
                                    {/* <!-- End .product-container --> */}
                                    <div className="price-box">
                                        <span className="product-price">$200.00 – $120.00</span>
                                    </div>
                                    {/* <!-- End .price-box --> */}
                                    <div className="product-action">
                                        <Link onClick={()=>Products(
                                            "/assets/images/demoes/demo7/products/product-6.jpg",
                                            "Jeans Pants",
                                            "clothing",
                                            "200.00",
                                            "120.00",
                                        )} className="btn-icon btn-add-cart"><i
                                            className="icon-shopping-cart"></i><span>ADD TO CART</span></Link>
                                        <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i
                                            className="icon-heart"></i></a>
                                        {/* <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i
                                            className="fas fa-external-link-alt"></i></a> */}
                                    </div>
                                </div>
                                {/* <!-- End .product-details --> */}
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
