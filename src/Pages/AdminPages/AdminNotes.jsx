import React, { useEffect, useState } from 'react'
import AdminView from '../../Components/AdminView'
import axios from 'axios';
import config from '../../config';
import AdminMenu from '../../Components/AdminMenu';
import Select from 'react-select';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import Dashboard from '../Dashboard';



const AdminNotes = () => {
    const [notes, setNotes] = useState({});
    const [domains, setDomains] = useState([]);
    const [domain, setDomain] = useState();
    const { auth, updateAuth } = useAuth();

    const getAllNotes = async () => {
        const { data } = await axios.get(`${config.apiUrl}/api/v1/notes`);
        setNotes(data.notes);
    }
    const getAllDomains = async () => {
        const { data } = await axios.get(`${config.apiUrl}/api/v1/domains`);
        setDomains(data?.domains);
    }

    useEffect(() => {
        getAllNotes();
        getAllDomains();
    }, []);
    useEffect(() => {
        console.log(Object.values(domains))
    }, [domains]);
    const noteStyle = (imageUrl) => ({
        backgroundImage: `url(${imageUrl})`,
    });

    const anchorStyle = () => ({
        color: 'white',
        textDecoration: 'none',
    });
    const notesArray = Object.values(notes); // Convert the object to an array
    const domainArray = Object.values(domains);
    const firstSixNotes = notesArray.slice(0, 6);
    const imageStyle = () => ({
        height: '200px',
        width: '370px'
    });
    const selectOptions = domains.map((c) => ({
        value: c._id,
        label: c.name,
    }));
    const handleDomainSelect = (selectedOption) => {
        setDomain(selectedOption);
        console.log(selectedOption.value);
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
            <div>
                <div className="products">
                    <div className="container w-50">
                        <div>
                            <Select
                                options={selectOptions}
                                placeholder='Select a Domain'
                                isSearchable
                                value={domain}
                                onChange={handleDomainSelect}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className='col-md-12'>
                                <AdminMenu />
                            </div>
                            <div className="col-md-12">
                                <div className="filters-content">
                                    <div className="row grid">
                                        {firstSixNotes?.map((note, index) => (
                                            <div key={index} className="col-lg-4 col-md-4 all des">
                                                <div className="product-item">
                                                    <a href="#"><img style={imageStyle()} src={note?.imageUrl} /></a>
                                                    <div className="down-content">
                                                        <a href="#">
                                                            <h4>{note?.title}</h4>
                                                        </a>
                                                        <h6 className='mb-3'>{note?.name}</h6>
                                                        <p>{note?.domain?.name}</p>
                                                        <ul className="stars">
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                        </ul>
                                                        <span>
                                                            <button className="btn btn-success mt-5 px-5">
                                                                <Link style={anchorStyle()} to={`/admin/update-note/${note?._id}`}>
                                                                    Edit
                                                                </Link>
                                                            </button>
                                                            {/* <button className="btn btn-danger mt-5">
                                                                <a style={anchorStyle()} target="_blank" href={note?.noteUrl} rel="noopener noreferrer">
                                                                    Download
                                                                </a>
                                                            </button> */}
                                                        </span>
                                                        {/* <span className='left-edit-span'></span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <ul className="pages">
                                    <li><a href="#">1</a></li>
                                    <li className="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminNotes