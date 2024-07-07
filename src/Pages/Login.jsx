import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../Context/auth';
import config from '../config';


const Login = () => {
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false); // Add a loading state
    const [user, setUser] = useState({
        email: "", password: ""
    });
    let name, value;
    const handleInputs = (e) => {

        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    console.log(user);
    // form submission
    const getData = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { email, password } = user;

        const res = await fetch(`${config.apiUrl}/api/v1/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        const dataStatus = await res.status;

        if (dataStatus === 400 || !data) {
            toast.error(data.message);
            console.log(data.message);
            setLoading(false)
        }
        else if (dataStatus === 401 || !data) {
            toast.error(data.message);
            console.log(data.message)
            setLoading(false)
        }
        else {
            toast.success("Login Successful");
            console.log(data.message)
            setAuth({ ...auth, user: data.user, token: data.token })
            localStorage.setItem('auth', JSON.stringify(data));
            navigate("/notes");
            setLoading(false)
            // history.push("/login");
        }
    }
        return (
            <div>
                <div>
                    <div className="page-heading about-heading header-text">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-content">
                                        <h4>Login</h4>
                                        <h2>Sign in to your account</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="send-message">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mx-auto">
                                    <div className="section-heading">
                                        <h2 className='text-center'>Sign In</h2>
                                    </div>
                                </div>
                                <div className="col-md-8 mx-auto">
                                    <div className="contact-form">
                                        <form id="contact" action method="post" onSubmit={getData}>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <fieldset>
                                                        <input name="email" type="email" className="form-control" value={user.email} onChange={handleInputs} id="email" placeholder="E-Mail Address"
                                                            required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <fieldset>
                                                        <input required type="password" className="form-control" value={user.password} onChange={handleInputs} placeholder="Enter Your Password" name="password" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit" className="filled-button">Login</button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default Login