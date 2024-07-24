import React from 'react'

export default function Footer() {
  return (
    <footer className="footer bg-dark position-relative">
    <div className="footer-middle">
        <div className="container position-static">
            <div className="row">
                <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                    <div className="widget">
                        <h4 className="widget-title">About Us</h4>
                        <a href="demo7.html" className='logo'>
                            <h1>Fast Farm</h1>
                        </a>
                        <p className="m-b-4 ls-0"></p>
                        <div className="social-icons">
                            <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></a>
                            <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></a>
                            <a href="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin"></a>
                        </div>
                        {/* <!-- End .social-icons --> */}
                    </div>
                    {/* <!-- End .widget --> */}
                </div>
                {/* <!-- End .col-lg-3 --> */}

                <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                    <div className="widget mb-2">
                        <h4 className="widget-title pb-1">Customer Service</h4>

                        {/* <ul className="links">
                            <li><a href="#">Help & FAQs</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">Shipping & Delivery</a></li>
                            <li><a href="#">Orders History</a></li>
                            <li><a href="#">Advanced Search</a></li>
                            <li><a href="dashboard.html">My Account</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="demo7-about.html">About Us</a></li>
                            <li><a href="#">Corporate Sales</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul> */}
                    </div>
                    {/* <!-- End .widget --> */}
                </div>
                {/* <!-- End .col-lg-3 --> */}

                <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                    <div className="widget widget-post">
                        <h4 className="widget-title pb-1">Latest News</h4>

                        {/* <ul className="links">
                            <li><a href="#">Top Jeans Collection<br /><span className="font1">JULY 23,
                                        2021</span></a></li>
                            <li><a href="#">Post Format Standard<br /><span className="font1">FEBRUARY 26,
                                        2020</span></a></li>
                            <li><a href="#">Post Format Video<br /><span className="font1">FEBRUARY 26,
                                        2019</span></a></li>
                        </ul> */}
                    </div>
                    {/* <!-- End .widget --> */}
                </div>
                {/* <!-- End .col-lg-3 --> */}

                <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                    <div className="widget widget-newsletter">
                        <h4 className="widget-title">Subscribe newsletter</h4>
                        <p className="mb-2 ls-0">Get all the latest information on events, sales and offers. Sign up for newsletter:
                        </p>
                        <form action="#" className="mb-0">
                            <input type="email" className="for  m-control" placeholder="Email address" required />

                            <input type="submit" className="btn btn-primary ls-10 shadow-none" value="Subscribe" />
                        </form>
                    </div>
                    {/* <!-- End .widget --> */}
                </div>
                {/* <!-- End .col-lg-3 --> */}
            </div>
            {/* <!-- End .row --> */}
        </div>
        {/* <!-- End .container --> */}
    </div>
    {/* <!-- End .footer-middle --> */}

    <div className="container">
        <div className="footer-bottom d-sm-flex align-items-center">
            <div className="footer-left">
                <span className="footer-copyright">© Fast Farm eCommerce. 2024. All Rights Reserved</span>
            </div>

            {/* <div className="footer-right ml-auto mt-1 mt-sm-0">
                <div className="payment-icons mr-0">
                    <span className="payment-icon visa" style={{backgroundImage:"url(assets/images/payments/payment-visa.svg)"}}></span>
                    <span className="payment-icon paypal" style={{backgroundImage:"url(assets/images/payments/payment-paypal.svg)"}}></span>
                    <span className="payment-icon stripe" style={{backgroundImage:"url(assets/images/payments/payment-stripe.png)"}}></span>
                    <span className="payment-icon verisign" style={{backgroundImage:"url(assets/images/payments/payment-verisign.svg)"}}></span>
                </div>
            </div> */}
        </div>
    </div>
    {/* <!-- End .footer-bottom --> */}
</footer>
  )
}
