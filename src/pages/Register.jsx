import { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [formdata, setFormdata] = useState({
        fullName: "",
        email: "",
        address: "",
        password: "",
        cpassword: "",
    })

    const [error, setError] = useState("")

    const OnchangeData = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const Onhandleform = (e) => {
        e.preventDefault();
        setError("");  // Clear any previous errors

        // Check password length and match
        if (formdata.password.length < 8 || formdata.cpassword.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }
        if (formdata.password !== formdata.cpassword) {
            setError("Passwords do not match");
            return;
        }

        // If validation passes, send form data
        axios({
            method: "post",
            url: "https://farm2door-6h4h.onrender.com/api/user/register",
            data: formdata,
        }).then((res) => {
            alert(res.data)
			console.log(res.data)
        }).catch((err) => {
            setError("Registration failed. Please try again.");
            console.error(err);
        })
    }

    return (
        <>
            <main className="main">
                <div className="page-header">
                    <div className="container d-flex flex-column align-items-center">
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="demo4.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="category.html">Shop</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Register
                                    </li>
                                </ol>
                            </div>
                        </nav>

                        <h1>Register</h1>
                    </div>
                </div>

                <div className="container login-container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <div className="heading mb-1">
                                        <h2 className="title">Register</h2>
                                    </div>

                                    {error && <div className="alert alert-danger">{error}</div>}

                                    <form onSubmit={Onhandleform}>
                                        <label htmlFor="register-name">
                                            Full Name
                                            <span className="required">*</span>
                                        </label>
                                        <input type="text" className="form-input form-wide" id="register-name" required
                                            name="fullName"
                                            value={formdata.fullName}
                                            onChange={OnchangeData} />

                                        <label htmlFor="register-email">
                                            Email address
                                            <span className="required">*</span>
                                        </label>
                                        <input type="email" className="form-input form-wide" id="register-email" required
                                            name="email"
                                            value={formdata.email}
                                            onChange={OnchangeData} />

                                        <label htmlFor="register-address">
                                            Address
                                            <span className="required">*</span>
                                        </label>
                                        <input type="text" className="form-input form-wide" id="register-address" required
                                            name='address'
                                            value={formdata.address}
                                            onChange={OnchangeData} />

                                        <label htmlFor="register-password">
                                            Password
                                            <span className="required">*</span>
                                        </label>
                                        <input type="password" className="form-input form-wide" id="register-password"
                                            required
                                            name='password'
                                            value={formdata.password}
                                            onChange={OnchangeData} />

                                        <label htmlFor="register-cpassword">
                                            Confirm Password
                                            <span className="required">*</span>
                                        </label>
                                        <input type="password" className="form-input form-wide" id="register-cpassword"
                                            required
                                            name='cpassword'
                                            value={formdata.cpassword}
                                            onChange={OnchangeData} />

                                        <div className="form-footer mb-2">
                                            <button type="submit" className="btn btn-dark btn-md w-100 mr-0">
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