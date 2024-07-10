import { useAuth } from '../../Context/auth'
import Table from 'react-bootstrap/Table';
import { Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config';
import AdminMenu from '../../Components/AdminMenu';

const AdminDashboard = () => {
    const { auth, updateAuth } = useAuth();
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setName(auth?.user?.name || '');
        setEmail(auth?.user?.email || '');
        setShow(true);
    };

    const handleUpdate = async () => {
        console.log(`Name: ${name}, Email: ${email}`);
        try {
            const response = await axios.put(`${config.apiUrl}/api/v1/profile`, { name, email });
            const updatedUser = response?.data?.updatedUser;
            updateAuth(updatedUser, auth.token);
            handleClose();
        } catch (e) {
            console.log(e);
        }
    };

    const getUserDetails = async () => {
        try {
            if (auth) {
                const result = await axios.get(`${config.apiUrl}/api/v1/get-user/${auth?.user?._id}`);
                const userData = result?.data?.data;
                setUser(userData);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, [auth]);

    return (
        <div>
            {/* <div className="page-heading products-heading header-text">
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
            </div> */}
         <AdminMenu/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Table striped bordered hover>
                            <thead>
                                <tr className='text-center'>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <td>{auth?.user?.name}</td>
                                    <td>{auth?.user?.email}</td>
                                    <td>
                                        <button className='btn btn-success' onClick={handleShow}>Update Details</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'><Link style={{ color: "#fff" }} to="">Change Password</Link></button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminDashboard;
