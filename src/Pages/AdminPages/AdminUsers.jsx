import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import AdminMenu from '../../Components/AdminMenu';
import AdminView from '../../Components/AdminView';
import config from '../../config';
import { useAuth } from '../../Context/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [userid, setUserId] = useState('');
    const [role, setRole] = useState('');
    const { auth, updateAuth } = useAuth();

    const getUsers = async () => {
        // console.log(axios.defaults.headers['common']);
        try {
            if (auth) {
                console.log(axios.defaults.headers.common['Authorization']);
                
                const { data } = await axios.get(`${config.apiUrl}/api/v1/admin/get-users`);
                console.log(data)
                if (data?.success) {
                    setUsers(data.users)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (auth.token && axios.defaults.headers.common['Authorization']) {
            console.log(auth);
            console.log(axios.defaults.headers.common['Authorization']);
            getUsers();
            // console.log(auth);
        }
    }, []);

    const handleRole = async (user) => {
        setUserId(user._id);
        // Use the state callback function to ensure updated state is used
        setRole((prevRole) => (user.role === "user" ? "admin" : "user"));
        handleUpdateRole();
    };

    // ... your existing code ...

    const handleUpdateRole = async () => {
        try {
            const { data } = await axios.put(
                `api/v1/admin/user-profile-role/${userid}`,
                { role: role }, // Use the updated role from state
                { new: true }
            );
            if (data?.success && data.status === 201) {
                toast.success("User role updated successfully");
                // After successful update, refresh the users list to show the updated roles
                getUsers();
            } else {
                toast.error("User role update unsuccessful");
            }
        } catch (error) {
            console.log(error);
        }
    };
    if(auth?.user?.role!="admin"){
        return(
            <>
                <Dashboard/>
            </>
        )
    }
    return (
        <div>
            <AdminView />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'><div className='card w-40 mt-5 p-3'>
                        <h1>User Control</h1>
                        <div className='container'>
                            <div className='table-responsive'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {users?.map((c, key) => (
                                            <>
                                                <tr key={key}>
                                                    <td >{c.name}</td>
                                                    <td >{c.email}</td>
                                                    <td >{c._id}</td>
                                                    {(c.role === "user") ? (
                                                        <td><button className='btn btn-danger ms-2' onClick={() => { handleRole(c) }}>Make Admin</button></td>
                                                    ) : (

                                                        <td><button className='btn btn-danger ms-2' onClick={() => { handleRole(c) }}>Make User</button></td>
                                                    )}
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUsers