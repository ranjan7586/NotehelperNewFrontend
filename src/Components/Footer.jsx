import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className='mt-5'>
                <div className="container-fluid bg-dark text-white py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 mb-4">
                                <h5 className="text-uppercase">Quick Links</h5>
                                <ul className="list-unstyled mt-3">
                                    <li>
                                        <Link to="/feedback" className="text-white text-decoration-none">
                                            Feedback
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/disclaimer" className="text-white text-decoration-none">
                                            Disclaimer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy" className="text-white text-decoration-none">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/address" className="text-white text-decoration-none">
                                            Address
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h5 className="text-uppercase mb-3">About Us</h5>
                                <p>
                                    Here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use.
                                </p>
                                <ul className="list-unstyled mt-5">
                                    <li>
                                        <a href="mailto:ranjanjana012@gmail.com" className="text-white text-decoration-none">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <span className="ms-2">ranjanjana012@gmail.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-4">
                                <h5 className="text-uppercase">Subscribe</h5>
                                <form className='mt-3'>
                                    <div className="form-group mb-3">
                                        <textarea
                                            className="form-control"
                                            placeholder="Your Email"
                                            rows="3"
                                            id="comment"
                                            name="Your Email"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        <i className="fa fa-telegram" aria-hidden="true"></i> Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundColor:"#000"}}>
                    <div className='p-3'>
                        <p className='text-light'>Copyright © 2024 Notehelper Group</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer