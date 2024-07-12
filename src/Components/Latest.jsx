import axios from 'axios';
import config from '../config';
import React, { useEffect, useState } from 'react'
const Latest = () => {
    const [notes, setNotes] = useState({});
    const getAllNotes = async () => {
        const { data } = await axios.get(`${config.apiUrl}/api/v1/notes`);
        setNotes(data.notes);
    }
    useEffect(() => {
        getAllNotes();
    }, []);
    const noteStyle = (imageUrl) => ({
        backgroundImage: `url(${imageUrl})`,
    });

    const anchorStyle = () => ({
        color: 'white',
        textDecoration: 'none',
    });
    const notesArray = Object.values(notes); // Convert the object to an array
    const firstSixNotes = notesArray.slice(0, 6);
    const imageStyle = () => ({
        height: '200px',
        width: '370px'
    })
    return (
        <div>

            <div className="latest-products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Latest Products</h2>
                                <a href="products.html">view all products <i className="fa fa-angle-right" /></a>
                            </div>
                        </div>
                        {firstSixNotes.map((note, index) => (
                            <div className="col-md-4">
                                <div className="product-item">
                                    <a href="#"><img style={imageStyle()} src={note?.imageUrl} alt /></a>
                                    <div className="down-content">
                                        <a href="#"><h4>{note?.name}</h4></a>
                                        {/* <h6>$25.75</h6> */}
                                        <p>{note?.description}</p>
                                        <ul className="stars">
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                        </ul>
                                        <span><button className='btn btn-danger mt-5'><a style={anchorStyle()} target='_blank' href={note?.noteUrl}>Download</a></button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Latest