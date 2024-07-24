import React from 'react'

export default function About() {
  return (
    <>
      		<main className="main about">
			<div className="page-header page-header-bg text-left"
				style={{backgroundImage: "url('assets/images/page-header-bg.jpg')"}}>
				<div className="container text-center">
					<h1><span>ABOUT US</span>
						OUR COMPANY</h1>
					<a href="contact.html" className="btn btn-dark">Contact</a>
				</div>
			</div>

			<nav aria-label="breadcrumb" className="breadcrumb-nav">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="demo4.html"><i className="icon-home"></i></a></li>
						<li className="breadcrumb-item active" aria-current="page">About Us</li>
					</ol>
				</div>
			</nav>

			<div className="about-section">
				<div className="container">
					<h2 className="subtitle">OUR STORY</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.</p>

					<p className="lead">“ Many desktop publishing packages and web page editors now use Lorem Ipsum as their
						default model search for evolved over sometimes by accident, sometimes on purpose ”</p>
				</div>
			</div>

			<div className="features-section bg-gray">
				<div className="container">
					<h2 className="subtitle">WHY CHOOSE US</h2>
					<div className="row">
						<div className="col-lg-4">
							<div className="feature-box bg-white">
								<i className="icon-shipped"></i>

								<div className="feature-box-content p-0">
									<h3>Free Shipping</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industr.</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="feature-box bg-white">
								<i className="icon-us-dollar"></i>

								<div className="feature-box-content p-0">
									<h3>100% Money Back Guarantee</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industr.</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="feature-box bg-white">
								<i className="icon-online-support"></i>

								<div className="feature-box-content p-0">
									<h3>Online Support 24/7</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industr.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="counters-section bg-gray">
				<div className="container">
					<div className="row">
						<div className="col-6 col-md-4 count-container">
							<div className="count-wrapper">
								<span className="count-to" data-from="0" data-to="200" data-speed="2000"
									data-refresh-interval="50">200</span>+
							</div>
							<h4 className="count-title">MILLION CUSTOMERS</h4>
						</div>

						<div className="col-6 col-md-4 count-container">
							<div className="count-wrapper">
								<span className="count-to" data-from="0" data-to="1800" data-speed="2000"
									data-refresh-interval="50">1800</span>+
							</div>
							<h4 className="count-title">TEAM MEMBERS</h4>
						</div>

						<div className="col-6 col-md-4 count-container">
							<div className="count-wrapper line-height-1">
								<span className="count-to" data-from="0" data-to="24" data-speed="2000"
									data-refresh-interval="50">24</span><span>HR</span>
							</div>
							<h4 className="count-title">SUPPORT AVAILABLE</h4>
						</div>

						<div className="col-6 col-md-4 count-container">
							<div className="count-wrapper">
								<span className="count-to" data-from="0" data-to="265" data-speed="2000"
									data-refresh-interval="50">265</span>+
							</div>
							<h4 className="count-title">SUPPORT AVAILABLE</h4>
						</div>

						<div className="col-6 col-md-4 count-container">
							<div className="count-wrapper line-height-1">
								<span className="count-to" data-from="0" data-to="99" data-speed="2000"
									data-refresh-interval="50">99</span><span>%</span>
							</div>
							<h4 className="count-title">SUPPORT AVAILABLE</h4>
						</div>
					</div>
				</div>
			</div>
		</main>
    </>
  )
}
