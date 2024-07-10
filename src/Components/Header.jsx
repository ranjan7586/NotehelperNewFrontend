import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/auth';
import { toast } from 'react-toastify';

const Header = () => {
    const { auth, updateAuth } = useAuth();
    const handleLogout=()=>{
        updateAuth(null,null);
        localStorage.removeItem('auth');
        toast.success("Logout Successfully");
     }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><h2><em>Notehelper</em></h2></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/notes">Notes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/search">Search</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                                {!auth.user ? (<>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/registration">Registration</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Log in</NavLink>
                                    </li>
                                </>) : (<>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" onClick={handleLogout} to="/login">Log out</NavLink>
                                    </li>
                                </>)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header