import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import config from '../config';

const Banner = () => {
  const [notes, setNotes] = useState([]);
  const getAllNotes = async () => {
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/v1/notes`);
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const backgroundImageStyle = (imageUrl) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2, // Send the background to back
  });

  const blurStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    filter: 'blur(8px)',
    zIndex: -1, // Ensure blur is below text content
  };

  const textContentStyle = {
    position: 'relative',
    zIndex: 1, // Ensure text is above the blur and overlay
    color: 'white',
  };

  const anchorStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div>
      <div className="banner header-text">
        <div className="owl-banner owl-carousel">
          <Carousel>
            {notes?.slice(0,5).map((note, index) => (
              <Carousel.Item key={index}>
                <div className="banner-item-01" style={{ position: 'relative', height: '400px' }}>
                  <div style={backgroundImageStyle(note?.imageUrl)} />
                  <div style={blurStyle} />
                  <div style={textContentStyle} className="text-content">
                    <h4>{note?.domain?.name}</h4>
                    <h2>{note?.name}</h2>
                    <button className="btn btn-danger mt-5">
                      <a style={anchorStyle} target="_blank" href={note?.noteUrl} rel="noopener noreferrer">
                        Download
                      </a>
                    </button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
