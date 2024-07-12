import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Latest from '../Components/Latest'
import About from '../Components/AboutHome'
import Contact from './Contact'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '../config';

const Home = () => {
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
      <Banner />
      <Latest />
      <div>
        <div className="send-message">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2 className='text-center'>Ask Your Query</h2>
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

export default Home