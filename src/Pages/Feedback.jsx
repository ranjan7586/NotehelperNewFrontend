import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '../config';

const Feedback = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const noteValues = new FormData();
            noteValues.append("name", name);
            noteValues.append("email", email);
            noteValues.append("message", message);
            const { data } = await axios.post(`${config.apiUrl}/api/v1/users/feedback`, noteValues);
            console.log(data)
            if (data?.success) {
                toast.success(`Thank you ${name}. Your feedback was sent successfully`);
                navigate('/feedback')
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
            <div className="page-heading products-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>User dashboard</h4>
                                <h2>Feedback</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow p-4">
                            <h3 className="text-center mb-4 text-success">Give Your Feedback</h3>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Your Name"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        required
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Your Email"
                                        name="email"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        placeholder="Write Your Feedback Please ..."
                                        name="message"
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button onClick={handleCreate} type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback