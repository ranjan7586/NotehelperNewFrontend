import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <div>
            <div>
                <div className="products mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="filters">
                                    <ul>
                                        <li data-filter=".des"><NavLink to="/dashboard">Profile</NavLink></li>
                                        <li data-filter=".dev"><NavLink to="/user/upload-note">Upload Note</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMenu