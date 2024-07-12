import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios'; import AdminView from '../../Components/AdminView'
import Select from 'react-select';
import config from '../../config';
import { useAuth } from '../../Context/auth';
import Dashboard from '../Dashboard';

const AdminUpdate = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [loading, setLoading] = useState(false)
    const [domains, setDomains] = useState([]);
    const [domain, setDomain] = useState(null);
    const [image, setImage] = useState('');
    const [thenote, setTheNote] = useState('');
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [noteUrl, setNoteUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState("")
    const [confirmed, setConfirmed] = useState(false);
    const { auth, updateAuth } = useAuth();
    if (auth?.user?.role != "admin") {
        navigate('/dashboard');
    }

    //get single note
    const getSingleNote = async () => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/notes/get-a-note/${params.slug}`);
            setName(data.note.name)
            setId(data.note._id)
            setAuthor(data.note.author)
            setImageUrl(data.note.imageUrl)
            setNoteUrl(data.note.noteUrl)
            setDescription(data.note.description)
            setDomain(data.note.domain._id)
        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }
    useEffect((
    ) => {
        getSingleNote();
        //eslint-disable-next-line
    },
        [])

    // Get all domains
    const getAllDomains = async () => {
        try {
            const { data } = await axios.get(`${config.apiUrl}/api/v1/domains`);
            if (data?.success) {
                setDomains(data?.domains);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong in getting Domains');
        }
    };

    useEffect(() => {
        getAllDomains();
    }, []);

    // Get the domain object for the selected domain ID
    const selectedDomain = domains.find((d) => d._id === domain);
    const selectOptions = domains.map((c) => ({
        value: c._id,
        label: c.name,
    }));
    //create note
    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const noteValues = new FormData();
            noteValues.append("name", name);
            noteValues.append("domain", domain);
            noteValues.append("author", author);
            noteValues.append("description", description);
            image && noteValues.append("image", image);
            thenote && noteValues.append("thenote", thenote);
            const { data } = await axios.post(`${config.apiUrl}/api/v1/notes/${id}`, noteValues, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (data?.success) {
                toast.success(`${name} is Updated Successfully`);
                navigate('/admin/notes')
                // getAllDomains();
            }
            else if (data?.status == 501) {
                toast.error(data.message)
            }
            else {
                toast.error("error")
            }

        } catch (error) {
            console.log(error.response.data.message)

            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);

        }
    }

    const handlePreviewNote = async (noteId) => {
        try {
            const response = await axios.get(`${config.apiUrl}/api/v1/notes/note/${noteId}`, {
                responseType: 'blob',
            });

            // Create a new Blob object from the response data
            const file = new Blob([response.data], { type: 'application/pdf' });

            // Create a temporary URL for the Blob object
            const url = URL.createObjectURL(file);

            // Open the URL in a new tab to preview the note
            window.open(url, '_blank');

        } catch (error) {
            console.log(error);
        }
    };

    //delete prompt

    const handleDeletePrompt = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                setConfirmed(true); // User confirmed the action
            } else {
                setConfirmed(false); // User canceled the action
            }
        });
    };

    //delete a note
    const handleDelete = async () => {
        try {
            // Show the delete prompt and wait for the user's choice
            const prompt = await handleDeletePrompt();

            if (confirmed) {
                const { data } = await axios.delete(`${config.apiUrl}/api/v1/notes/${id}`);
                toast.success(data.message);
                navigate('/admin/notes');
            } else {
                // User canceled the delete action
                // You can add any desired handling here, e.g., show a message or do nothing
                return
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };

    return (

        <div>
            <AdminView />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 mt-4 mb-5'>
                    </div>
                    <div className='col-md-9'>
                        <div className='w-75 text-center mx-auto'>
                            <h1>Update Note</h1>
                            <div className='m-1 p-3'>
                                <div>
                                    <Select
                                        options={selectOptions}
                                        placeholder='Select a Domain'
                                        isSearchable
                                        onChange={(selectedOption) => {
                                            setDomain(selectedOption.value);
                                        }}
                                        value={selectedDomain ? { value: selectedDomain._id, label: selectedDomain.name } : null}
                                    // Set the selected domain from the state here
                                    />
                                </div>
                                <div className='mb-3 mt-5'>
                                    <label className='btn btn-outline-primary col-md-12'>
                                        {image ? image.name : "Upload Image"}
                                        <input type='file' name='name' accept='image/*' onChange={(e) => setImage(e.target.files[0])} hidden />
                                    </label>
                                </div>
                                <div className='m-4'>
                                    {image ? (
                                        <div className='text-center'>
                                            <h2>Preview</h2>
                                            <img src={URL.createObjectURL(image)} alt='Note Image' style={{ maxHeight: '200px', maxWidth: '200px' }} // Set maximum height and width
                                                className='img img-responsive' />
                                        </div>
                                    ) : (
                                        <div className='text-center'>
                                            <h2>Preview</h2>
                                            <img src={imageUrl} alt='Note Image' style={{ maxHeight: '200px', maxWidth: '200px' }} // Set maximum height and width
                                                className='img img-responsive' />
                                        </div>
                                    )}
                                </div>
                                <div className='mb-3 mt-5'>
                                    <label className='btn btn-outline-primary col-md-12'>
                                        {thenote ? thenote.name : "Upload Note"}
                                        <input type='file' name='thenote' accept='.pdf' onChange={(e) => setTheNote(e.target.files[0])} hidden />
                                    </label>
                                </div>
                                <div className='m-4'>
                                    {thenote ? (
                                        <div className='text-center'>
                                            <h2>Note Preview</h2>
                                            <a href={URL.createObjectURL(thenote)} target='_blank' rel='noopener noreferrer'>View Note</a>
                                        </div>
                                    ) : (
                                        <div className='text-center'>
                                            <h2>Note Preview</h2>
                                            <a href={noteUrl} target='_blank' rel='noopener noreferrer'>View Note</a>
                                        </div>
                                    )}
                                </div>
                                <div className='mb-3'>
                                    <input type='text' value={name} placeholder='Enter the name' className='form-control border border-primary' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <textarea type='textarea' value={author} placeholder='Enter author/source name' className='form-control border border-primary' onChange={(e) => setAuthor(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <textarea type='textarea' value={description} placeholder='Give little description' className='form-control border border-primary' onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className='mb-4 mt-4 text-center'>
                                    <button className='btn btn-primary' onClick={handleUpdate}>                {loading ? 'Updating...' : 'Update Note'}
                                    </button>
                                </div>
                                <div className='mb-4 mt-4 text-center'>
                                    <button className='btn btn-danger' onClick={handleDelete}>Delete Note</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUpdate