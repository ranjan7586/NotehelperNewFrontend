import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <div className="page-heading about-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>about us</h4>
                                <h2>our Group</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-features about-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Our Background</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="images/feature-image.jpg" alt />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h4>Who we are &amp; What we do?</h4>
                                <p>Hello from GROUP B. We are dedicated MERN Stack devlopers of this project.<br></br>I am Ranjan Jana,along with other project memebers Sanjoy Manna,Sourav Mondal,Pratyay Samanta have given all their best efforts and knowledge to make this project efficienty.</p>
                                {/* <ul className="social-icons">
                                     <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                                     <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                      <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                                     <li><a href="#"><i className="fa-whatsapp fa-brands" /></a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-members">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Our Team Members</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="thumb-container">
                                    <img src="images/team_01.jpg" alt />
                                    <div className="hover-effect">
                                        <div className="hover-content">
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                                                <li><a href="#"><i className="fa-whatsapp fa-brands" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Kaustav Roy</h4>
                                    <span>Assistant Professor</span>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="thumb-container">
                                    <img src="images/team_02.jpg" alt />
                                    <div className="hover-effect">
                                        <div className="hover-content">
                                            <ul className="social-icons">
                                                 <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                                                 <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                                                 <li><a href="#"><i className="fa-whatsapp fa-brands" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Sourav Mondal</h4>
                                    <span>Student</span>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="thumb-container">
                                    <img src="images/team_03.jpg" alt />
                                    <div className="hover-effect">
                                        <div className="hover-content">
                                            <ul className="social-icons">
                                                 <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                                                 <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                                                 <li><a href="#"><i className="fa-whatsapp fa-brands" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Ranjan Jana</h4>
                                    <span>Student</span>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="thumb-container">
                                    <img src="images/team_04.jpg" alt />
                                    <div className="hover-effect">
                                        <div className="hover-content">
                                            <ul className="social-icons">
                                                 <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                                                 <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                                                 <li><a href="#"><i className="fa-whatsapp fa-brands" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="down-content">
                                <h4>Sanjoy Manna</h4>
                                <span>Student</span>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="thumb-container">
                                    <img src="images/team_05.jpg" alt />
                                    <div className="hover-effect">
                                        <div className="hover-content">
                                            <ul className="social-icons">
                                                 <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                                                 <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                                                 <li><a href="#"><i className="fa-whatsapp fa-brands" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Pratyay Samanta</h4>
                                    <span>Student</span>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="thumb-container">
                                    <img src="images/team_06.jpg" alt />
                                    <div className="hover-effect">
                                        <div className="hover-content">
                                            <ul className="social-icons">
                                                 <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
                                                 <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa-brands fa-linkedin" /></a></li>
                                                 <li><a href="#"><i className="fa-whatsapp fa-brands" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <h4>Brainware University</h4>
                                    <span>University</span>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="icon">
                                    <i className="fa fa-gear" />
                                </div>
                                <div className="down-content">
                                    <h4>Product Management</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                                    <a href="#" className="filled-button">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="icon">
                                    <i className="fa fa-gear" />
                                </div>
                                <div className="down-content">
                                    <h4>Customer Relations</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                                    <a href="#" className="filled-button">Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <div className="icon">
                                    <i className="fa fa-gear" />
                                </div>
                                <div className="down-content">
                                    <h4>Global Collection</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                                    <a href="#" className="filled-button">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="happy-clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Happy Partners</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            {/* <div className="owl-clients owl-carousel">
                                <div className="client-item">
                                    <img src="images/client-01.png" alt={1} />
                                </div>
                                <div className="client-item">
                                    <img src="images/client-01.png" alt={2} />
                                </div>
                                <div className="client-item">
                                    <img src="images/client-01.png" alt={3} />
                                </div>
                                <div className="client-item">
                                    <img src="images/client-01.png" alt={4} />
                                </div>
                                <div className="client-item">
                                    <img src="images/client-01.png" alt={5} />
                                </div>
                                <div className="client-item">
                                    <img src="images/client-01.png" alt={6} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutPage