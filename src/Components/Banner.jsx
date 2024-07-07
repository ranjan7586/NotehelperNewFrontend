import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import config from '../config';
const Banner = () => {
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
    
    const anchorStyle=()=>({
        color: 'white',
        textDecoration: 'none',
    });
    // console.log(notes[2]?.imageUrl)
    return (
        <div>
            <div className="banner header-text">
                <div className="owl-banner owl-carousel">
                    <Carousel>
                        <Carousel.Item>
                            <div style={noteStyle(notes[0]?.imageUrl)} className="banner-item-01">
                                <div className="text-content">
                                    <h4>{notes[0]?.name}</h4>
                                    <h2>{notes[0]?.description}</h2>
                                    <button className='btn btn-danger mt-5'><a style={anchorStyle()} target='_blank' href={notes[0]?.noteUrl}>Download</a></button>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={noteStyle(notes[1]?.imageUrl)} className="banner-item-01">
                                <div className="text-content">
                                    <h4>{notes[1]?.name}</h4>
                                    <h2>{notes[1]?.description}</h2>
                                    <button className='btn btn-danger mt-5'><a style={anchorStyle()} target='_blank' href={notes[1]?.noteUrl}>Download</a></button>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={noteStyle(notes[2]?.imageUrl)} className="banner-item-01">
                                <div className="text-content">
                                    <h4>{notes[2]?.name}</h4>
                                    <h2>{notes[2]?.description}</h2>
                                    <button className='btn btn-danger mt-5'><a style={anchorStyle()} target='_blank' href={notes[2]?.noteUrl}>Download</a></button>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default Banner