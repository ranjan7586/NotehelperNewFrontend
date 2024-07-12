import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import config from '../config'
const NoteDetails = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [note, setNote] = useState({})
    const [domain, setDomain] = useState({})
    const [relatednotes, setRelatednotes] = useState([])
    const getNote = async () => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/notes/get-a-note/${params.slug}`)
            setNote(data?.note)
            setDomain(data?.note?.domain)
            getSimilarNotes(data?.note._id, data?.note?.domain._id)
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        if (params?.slug) getNote()
    }, [params?.slug])
    const getSimilarNotes = async (pid, did) => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/notes/related-notes/${pid}/${did}`)
            console.log(data.notes)
            setRelatednotes(data?.notes);
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div>
            <div className="page-heading about-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>Registration</h4>
                                <h2>Create your account</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="note_img_details text-center">
                                <img
                                    style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    src={note?.imageUrl}
                                    alt={note?.title}
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1 className="text-center mb-4">Note Details</h1>
                            <div className="note_details">
                                <h3 className='border border-primary rounded p-3'><span className='text-danger'>Name</span> : <span className='text-success'>{note.name}</span></h3>
                                <h4 className='border border-secondary rounded p-2 mt-2'><span className='text-danger'>Domain/Category</span> : <span className='text-info'>{domain.name}</span></h4>
                                <h5 className='border border-secondary rounded p-2 mt-1'><span className='text-danger'>Author/Source</span> : <span className='text-primary'>{note.author}</span></h5>
                                <h5 className='border border-secondary rounded p-2 mt-1'><span className='text-danger'>Description</span> : <span className='text-secondary'>{note.description}</span></h5>
                            </div>
                            <div className="read_bt text-center mt-4">
                                <button className="btn btn-danger">
                                    <a
                                        href={note?.noteUrl}
                                        style={{ color: 'white', textDecoration: 'none' }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <h1 className="text-center mt-5">Similar Notes</h1>
                            <div className="row mt-4">
                                {relatednotes?.map((p) => (
                                    <div key={p._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                        <div className="card p-3 note-card h-100">
                                            <div className="note_img text-center">
                                                <img
                                                    style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                                    src={p?.imageUrl}
                                                    alt={note?.title}
                                                    className="img-fluid rounded"
                                                />
                                            </div>
                                            <h3 className="types_text mt-3 text-success">{p?.name}</h3>
                                            <p className="looking_text text-danger">{p.domain.name}</p>
                                            <div className="read_bt text-center mt-4">
                                                <button className="btn btn-danger">
                                                    <a
                                                        href={p?.noteUrl}
                                                        style={{ color: 'white', textDecoration: 'none' }}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Download
                                                    </a>
                                                </button>
                                            </div>
                                            <div className="read_bt text-center mt-2">
                                                <Link to={`/note-details/${p?._id}`} className="btn btn-primary">
                                                    Details
                                                </Link>
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

export default NoteDetails