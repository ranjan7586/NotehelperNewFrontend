import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '../config';

const Contact = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const noteValues = new FormData();
            noteValues.append("name", name);
            noteValues.append("email", email);
            noteValues.append("phone", phone);
            noteValues.append("message", message);
            const { data } = await axios.post(`${config.apiUrl}/api/v1/users/contact`, noteValues);
            console.log(data)
            if (data?.success) {
                toast.success(`Thank you ${name}. Your Message was sent successfully`);
                navigate('/contact')
                // getAllDomains();
            }
            else if (data?.status == 401) {
                console.log(data.message);
                toast.error(data.message)
            }
            else {
                toast.error("error")
            }

        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message);
        }
    }
    return (
        <div>
            <div>
                {/* Page Content */}
                <div className="page-heading contact-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>contact us</h4>
                                    <h2>let’s get in touch</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="find-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Our Location on Maps</h2>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div id="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.898082133583!2d88.49727497437455!3d22.732029227110015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c04b6fe4559%3A0xa012120ab7f1da34!2sBrainware%20University!5e0!3m2!1sen!2sin!4v1720714133066!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="left-content">
                                    <h4>About our office</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
                                    <ul className="social-icons">
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#"><i className="fa fa-behance" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="send-message">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2 className='text-center'>Send us a Message</h2>
                                </div>
                            </div>
                            <div className="col-md-8 mx-auto">
                                <div className="contact-form">
                                    <form id="contact" action method="post">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <fieldset>
                                                    <input type="text" className="form-control" placeholder="Your Name" name="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <fieldset>
                                                    <input type="email" className="form-control" placeholder="Your Email" name="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <fieldset>
                                                    <input type="phone" className="form-control" placeholder="Your Phone" name="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <textarea className="form-control" placeholder="Massage" rows="5" id="comment" name="Massage" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="filled-button" onClick={handleCreate}>Send Message</button>
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

export default Contact