import React from 'react'
import { useAuth } from '../Context/auth'
import Banner from '../Components/Banner';
import Latest from '../Components/Latest';

const Dashboard = () => {
    const [auth, setAuth] = useAuth();
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
                <Banner />
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
                <Latest />
            </div>
        )
    }

}

export default Dashboard