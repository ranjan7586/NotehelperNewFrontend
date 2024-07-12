import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import config from '../config';
import { Checkbox } from 'antd';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [domains, setDomains] = useState([]);
    const [page, setPage] = useState(1);
    const [checked, setChecked] = useState([]);
    const [filternotes, setFilterNotes] = useState(0);
    const [pages, setPages] = useState(1);
    const limit = 6; // Define limit of notes per page
    const [count, setCount] = useState(0); // Total number of notes

    // Fetch notes from the API
    const getAllNotes = async () => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/notes?page=${page}&limit=${limit}`);
            setNotes(data.notes);
            setPages(Math.ceil(data.count / limit)); // Calculate total pages
            setCount(data.count);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    // Fetch domains from the API
    const getAllDomains = async () => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/domains`);
            setDomains(data?.domains);
        } catch (error) {
            console.error('Error fetching domains:', error);
        }
    };

    // Navigate to previous page
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    // Navigate to next page
    const handleNextPage = () => {
        if (page < pages) {
            setPage(page + 1);
        }
    };

    // Load notes and domains on component mount or page change
    useEffect(() => {
        getAllNotes();
        getAllDomains();
    }, [page]); // Reload notes when page changes

    const filterNotes = async () => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/notes/note-filter-domain/${checked}`)
            setNotes(data?.notes)
            setPages(Math.ceil(data?.count / limit)); // Calculate total pages
            setCount(data?.count);
        } catch (error) {
            console.log(error)
        }
    }
    const handleFilter = (value, id) => {
        let all = [...checked]
        if (value) {
            all.push(id);
            setFilterNotes(1);
        } else {
            all = all.filter((c) => c !== id)
            setFilterNotes(0);
            setPage(1)
        }
        setChecked(all);
    }
    useEffect(() => {
        if (checked.length) filterNotes();
    }, [checked]);
    useEffect(() => {
        if (!checked.length) getAllNotes();
    }, [checked.length]);
    // Render notes and pagination UI
    return (
        <div>
            {/* Page Content */}
            <div className="page-heading products-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>All notes</h4>
                                <h2>Let's Learn</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filters">
                                <ul>
                                    <li className="active" data-filter="*">All Domains</li>
                                    {domains?.map((c) => (
                                        <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                                            {c.name}
                                        </Checkbox>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="filters-content">
                                <div className="row grid">
                                    {notes.map((note, index) => (
                                        <div key={index} className="col-lg-4 col-md-4 all des">
                                            <div className="product-item">
                                                <a href="#">
                                                    <img style={{ height: '200px', width: '370px' }} src={note?.imageUrl} alt={note?.title} />
                                                </a>
                                                <div className="down-content">
                                                    <a href="#">
                                                        <h4>{note?.title}</h4>
                                                    </a>
                                                    <h6 className='mb-3'>{note?.name}</h6>
                                                    <p>{note?.domain?.name}</p>
                                                    <ul className="stars">
                                                        <li>
                                                            <button className="btn btn-danger mt-5">
                                                                <a href={note?.noteUrl} style={{ color: 'white', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                                                    Download
                                                                </a>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <span>
                                                        <button className="btn btn-success mt-5">
                                                            <Link to={`/note-details/${note?._id}`} style={{ color: "#fff" }}>
                                                                Details
                                                            </Link>

                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <ul className="pages">
                                {Array.from({ length: pages }, (_, index) => (
                                    <li key={index} className={index + 1 === page ? 'active' : ''}>
                                        <button onClick={() => setPage(index + 1)}>{index + 1}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notes;
