import React from 'react'
import { useAuth } from '../Context/auth'
import Banner from '../Components/Banner';
import Latest from '../Components/Latest';
import AdminDashboard from './AdminPages/AdminDashboard';
import UserDashboard from './UserPages/UserDashboard';

const Dashboard = () => {
    const { auth, updateAuth } = useAuth();
    console.log(auth);
    if (auth?.user?.role == "admin") {
        return (
            <div>
                <div className="page-heading products-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>Admin dashboard</h4>
                                    <h2>let's learn</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminDashboard/>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="page-heading products-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>User dashboard</h4>
                                    <h2>let's learn</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UserDashboard />
            </div>
        )
    }

}

export default Dashboard