import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
    return (
        <div>
            <div className="products mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filters">
                                <ul>
                                    <li data-filter=".des"><NavLink to="/dashboard">Profile</NavLink></li>
                                    <li data-filter=".dev"><NavLink to="/admin/create-domain">Create Domain</NavLink></li>
                                    <li data-filter=".dev"><NavLink to="/admin/upload-note">Upload Note</NavLink></li>
                                    <li data-filter=".gra"><NavLink to="/admin/notes">Notes</NavLink></li>
                                    <li data-filter=".gra"><NavLink to="/admin/users">Manage Users</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminMenu