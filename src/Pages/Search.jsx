import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../config';

const Search = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [values, setValues] = useState([])
    const [key, setKey] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const { data } = await axios.get(`${config.apiUrl}/api/v1/notes/search-note/${key}`)
            console.log(data.notes);

            setValues(data.notes)
            navigate('/search');
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const noteStyle = (imageUrl) => ({
        backgroundImage: `url(${imageUrl})`,
    });

    const anchorStyle = () => ({
        color: 'white',
        textDecoration: 'none',
    });

    const imageStyle = () => ({
        height: '200px',
        width: '370px'
    })
    return (
        <div>
            <div className="page-heading products-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>User dashboard</h4>
                                <h2>Search A Note</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container m-5 mb-10'>
                <form className='d-flex flex-column flex-md-row align-items-center my-4' role='search' onSubmit={handleSubmit}>
                    <div className='input-group mb-3 mb-md-0 me-md-2 w-100'>
                        <input
                            className='form-control'
                            type='search'
                            placeholder='Search Here ...'
                            aria-label='Search'
                            value={values.keyword}
                            onChange={(e) => setKey(e.target.value)}
                        />
                        <button className='btn btn-outline-success' type='submit'>
                            {loading ? "Searching ..." : "Search"}
                        </button>
                    </div>
                </form>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="filters-content">
                            <div className="row grid">
                                {values?.map((note, index) => (
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
                </div>
            </div>
        </div>
    )
}

export default Search