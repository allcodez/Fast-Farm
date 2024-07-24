import { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
    const { UserLogin } = useContext(AuthContext);
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const OnchangeData = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const Onhandleform = (e) => {
        e.preventDefault();
        setError("");
        UserLogin(formdata);
    };

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
                                        Login
                                    </li>
                                </ol>
                            </div>
                        </nav>

                        <h1>Login</h1>
                    </div>
                </div>

                <div className="container login-container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <div className="heading mb-1">
                                        <h2 className="title">Login</h2>
                                    </div>

                                    {error && <div className="alert alert-danger">{error}</div>}

                                    <form onSubmit={Onhandleform}>
                                        <label htmlFor="login-email">
                                            Username or email address
                                            <span className="required">*</span>
                                        </label>
                                        <input 
                                            type="email" 
                                            className="form-input form-wide" 
                                            id="login-email" 
                                            required 
                                            name="email"
                                            value={formdata.email}
                                            onChange={OnchangeData}
                                        />

                                        <label htmlFor="login-password">
                                            Password
                                            <span className="required">*</span>
                                        </label>
                                        <input 
                                            type="password" 
                                            className="form-input form-wide" 
                                            id="login-password" 
                                            required 
                                            name='password'
                                            value={formdata.password}
                                            onChange={OnchangeData}
                                        />

                                        <div className="form-footer">
                                            <div className="custom-control custom-checkbox mb-0">
                                                <input type="checkbox" className="custom-control-input" id="remember-me" />
                                                <label className="custom-control-label mb-0" htmlFor="remember-me">Remember me</label>
                                            </div>

                                            <a href="forgot-password.html" className="forget-password text-dark form-footer-right">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <button type="submit" className="btn btn-dark btn-md w-100">
                                            LOGIN
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}