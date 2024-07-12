import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Modal } from 'antd';
import AdminMenu from '../../Components/AdminMenu';
import AdminView from '../../Components/AdminView';
import DomainForm from '../../Components/DomainForm';
import config from '../../config';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import Dashboard from '../Dashboard';

const AdminDomain = () => {
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(null)
    const [updatedName, setUpdatedName] = useState("")
    const [domains, setDomains] = useState([])
    const [name, setName] = useState('');
    const { auth, updateAuth } = useAuth();
    const navigate = useNavigate();
    if(auth?.user?.role!="admin"){
        navigate('/dashboard');
    }
  
    //handle Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${config.apiUrl}/api/v1/create-domain`, { name })
            if (data?.success) {
                toast.success(`${name} is Created`);
                getAllDomains();
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong in input form")

        }
    }
    //get all cat
    const getAllDomains = async () => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/domains`);
            if (data?.success) {
                setDomains(data?.domains);
            }
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong in getting Domains")
        };
    };

    useEffect(() => { getAllDomains() }, [])
    //update Domain
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`${config.apiUrl}/api/v1//update-domain/${selected._id}`, { name: updatedName })
            if (data.success) {
                toast.success(`${updatedName} is Updated Successfully`)
                setSelected(null)
                setUpdatedName("")
                setVisible(false)
                getAllDomains()
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong in Updating the Domains")
        }
    }

    //delete Domain
    const handleDelete = async (deleteid) => {
        try {
            const { data } = await axios.delete(`${config.apiUrl}/api/v1/delete-domain/${deleteid}`)
            if (data.success) {
                toast.success(`${data.message}`)
                getAllDomains()
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong in Deleting the Domains")
        }
    };
  

    return (
        <div>
            <AdminView />

            <div className='container-fluid m-3 p-3' >
                <div className='row'>
                    <div className='col-md-12'>
                        <AdminMenu />
                    </div>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <h1>Manage Domains</h1>
                            <div className='p-3'>
                                <DomainForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                            </div>
                            <div className='container text-center'>
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Actions</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {domains?.map((c) => (
                                            <>
                                                <tr>
                                                    <td key={c._id}>{c.name}</td>
                                                    <td><button className='btn btn-primary ms-2' onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c) }}>Edit</button></td>
                                                    <td><button className='btn btn-danger ms-2' onClick={() => { handleDelete(c._id) }}>Delete</button></td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* <h1>Admin Email : {auth?.user?.email}</h1> */}
                        </div>
                        <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
                            <DomainForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
                        </Modal>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminDomain