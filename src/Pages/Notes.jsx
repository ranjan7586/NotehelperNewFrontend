import axios from 'axios';
import React, { useEffect, useState } from 'react'
import config from '../config';

const Notes = () => {
    const [notes, setNotes] = useState({});
    const [domains, setDomains] = useState({});
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
    })
    return (
        <div>
            <div>
                {/* Page Content */}
                <div className="page-heading products-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>All notes</h4>
                                    <h2>let's learn</h2>
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
                                        {domainArray?.map((note, index) => (
                                            <li className="" data-filter="*">{note?.name}</li>
                                        ))}
                                    </ul>
                                </div>
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
                                                        <span><button className="btn btn-danger mt-5">
                                                            <a style={anchorStyle()} target="_blank" href={note?.noteUrl} rel="noopener noreferrer">
                                                                Download
                                                            </a>
                                                        </button></span>
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

export default Notes