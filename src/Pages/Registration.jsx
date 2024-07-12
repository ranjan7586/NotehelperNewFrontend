import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import config from '../config';

const Registration = () => {
    const [loading, setLoading] = useState(false); // Add a loading state
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: "", answer: ""
    });
    let name, value;
    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    // form submission
    const postData = async (e) => {
        e.preventDefault();
        setLoading(true)

        const { name, email, password, cpassword, answer } = user;

        const res = await fetch(`${config.apiUrl}/api/v1/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword, answer
            })
        });
        const data = await res.json();
        const dataStatus = await res.status;
        // console.log(data);

        if (dataStatus === 422 || !data) {
            setLoading(false)
            toast.error(data.message, {
                autoClose: 2000, onClose: () => {
                    navigate("/login");
                }
            });
            // window.alert(data.message)
        }
        else if (dataStatus === 421 || !data) {
            toast.error(data.message);
            setLoading(false)
        }
        else {
            await toast.success(data.message);
            navigate("/login");
            setLoading(false)
            // history.push("/login");
        }
    }
    return (
        <div>
            <div className="page-heading about-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>Registration</h4>
                                <h2>Create your account</h2>
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
                                <h2 className='text-center'>Sign Up</h2>
                            </div>
                        </div>
                        <div className="col-md-8 mx-auto">
                            <div className="contact-form">
                                <form id="contact" action method="post" onSubmit={postData}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" className="form-control" value={user.name} onChange={handleInputs} id="name" placeholder="Full Name" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" className="form-control" value={user.email} onChange={handleInputs} id="email" placeholder="E-Mail Address"
                                                    required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input required type="password" className="form-control" value={user.password} onChange={handleInputs} placeholder="Enter Your Password" name="password" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input required type="password" className="form-control" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Your Password" name="cpassword" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input required type="text" className="form-control" value={user.answer} onChange={handleInputs} placeholder="What's Your Favourite Teacher's Name ?" name="answer" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input required type="checkbox" name="" id="" className='terms' /><span className='span2'>I agree to the terms & conditions</span>
                                            </fieldset>
                                        </div>

                                        <div className="col-lg-12 text-center">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">Register</button>
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
    )
}

export default Registration