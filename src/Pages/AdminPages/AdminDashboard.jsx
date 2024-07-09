import React from 'react'
import { useAuth } from '../../Context/auth'
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
    const [auth, setAuth] = useAuth();

    return (
        <div>
            <div className="page-heading products-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>Welcome {auth?.user?.name}</h4>
                                <h2>Admin Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filters">
                                <ul>
                                    <li data-filter=".des"><NavLink to="" >Profile</NavLink></li>
                                    <li data-filter=".dev"><NavLink to="" >Upload Note</NavLink></li>
                                    <li data-filter=".gra"><NavLink to="" >Notes</NavLink></li>
                                    <li data-filter=".gra"><NavLink to="" >Manage Users</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard