import { useState } from 'react'
import axios from 'axios'
export default function Register() {

	const [formdata, setFormdata] = useState({
		username: "",
		email: "",
		phone: "",
		password: "",
		cpassword: "",
	})

	const OnchangeData = (e) => {
		setFormdata({
			...formdata,
			[e.target.name]: e.target.value
		})
	}

// ................send form data,,,,,,,,,,,,,,,,,,,

const Onhandleform=(e)=>{
    e.preventDefault();
	axios({
		method:"post",
        url:"http://localhost:3001/userdata",
        data:formdata,
	}).then((res)=>{
		alert(res.data)
	})
	// console.log(formdata)
}
// ..............................................


	return (
		<>
			<main class="main">
				<div class="page-header">
					<div class="container d-flex flex-column align-items-center">
						<nav aria-label="breadcrumb" class="breadcrumb-nav">
							<div class="container">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="demo4.html">Home</a></li>
									<li class="breadcrumb-item"><a href="category.html">Shop</a></li>
									<li class="breadcrumb-item active" aria-current="page">
										Register
									</li>
								</ol>
							</div>
						</nav>

						<h1>Register</h1>
					</div>
				</div>

				<div class="container login-container">
					<div class="row">
						<div class="col-lg-10 mx-auto">
							<div class="row">
								<div class="col-md-12 mt-5">
									<div class="heading mb-1">
										<h2 class="title">Register</h2>
									</div>

									<form onSubmit={Onhandleform} method="post">

										<label for="register-email">
											Name
											<span class="required">*</span>
										</label>
										<input type="text" class="form-input form-wide" id="register-name" required
											name="username"
											value={formdata.username}
											onChange={OnchangeData} />

										<label for="register-email">
											Email address
											<span class="required">*</span>
										</label>
										<input type="email" class="form-input form-wide" id="register-email" required
											name="email"
											value={formdata.email}
											onChange={OnchangeData} />

										<label for="register-email">
											Contact
											<span class="required">*</span>
										</label>
										<input type="text" class="form-input form-wide" id="register-contact" required
											name='phone'
											value={formdata.phone}
											onChange={OnchangeData} />

										<label for="register-password">
											Password
											<span class="required">*</span>
										</label>
										<input type="password" class="form-input form-wide" id="register-password"
											required
											name='password'
											value={formdata.password}
											onChange={OnchangeData} />

										<label for="register-cpassword">
											Confirm Password
											<span class="required">*</span>
										</label>
										<input type="password" class="form-input form-wide" id="register-cpassword"
											required
											name='cpassword'
											value={formdata.cpassword}
											onChange={OnchangeData} />

										<div class="form-footer mb-2">
											<button type="submit" class="btn btn-dark btn-md w-100 mr-0">
												Register
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
