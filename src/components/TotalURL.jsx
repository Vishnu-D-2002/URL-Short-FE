import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { protectInstance } from '../../services/instance';
import '../App.css';

function TotalURL() {
    const [URLs, setURLs] = useState([]);
    const [msg, setMsg] = useState('');

  const navigate = useNavigate();

    const allURLs = async () => {
        try {
            const res = await protectInstance.get('/AllURL');
      
            console.log('API Response:', res);

            if (res.data && Array.isArray(res.data.URLs)) {
                setURLs(res.data.URLs);
                setMsg(res.data.message);
            } else {
                console.error('Invalid response format. Expected an array.');
            }
        } catch (error) {
            
            console.error('Error fetching URLs:', error.message);
            if (error.message === ' Request failed with status code 404') {
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        }
    };

    useEffect(() => {
        allURLs();
    }, []);

    const handleLogout = (e) => {
        sessionStorage.removeItem('loggedInUser');
        navigate('/');
    };

    
    const handleRedirect = async () => {
        await instance.get(`${shortUrl}`)
        console.log('Redirect successfull');
    }

    const deleteURL = async (urlId) => {
        try {
            await protectInstance.delete(urlId);
            console.log('URL Deleted successfully');
            allURLs();
        } catch (error) {
            console.error('Error deleting URL:', error);
        }
    };

    const preventDefault = (e) => {
        e.preventDefault();
    };

    return (
        <div>

            <form onSubmit={preventDefault}>
                <NavBar />
                
                <h1>Total URLs Created</h1>
                {
                    msg === 'All URLs fetched successfully' ?
                        (
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Long URL</th>
                                            <th>Short URL</th>
                                            <th>Created At</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {URLs.map((url) => (
                                            <tr key={url._id}>
                                                <td>{url.longURL}</td>
                                                <td>
                                                    <a
                                                        href={`https://url-short-be-7ukh.onrender.com${url.shortURL}`}
                                                        target='_blank'
                                                        onClick={handleRedirect}
                                                    >{`https://url-short-be-7ukh.onrender.com${url.shortURL}`}</a>
                                                </td>
                                                <td>{url.createdAt.slice(0, 10)}</td>
                                                <td><button onClick={() => deleteURL(url.shortURL)}>Delete</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (<h2>There are no URLs created by you</h2>)
                }
            </form><br /><br />
            <div>
                <button className="logout-container" onClick={handleLogout}>LOGOUT</button>
            </div>
        </div>
    );
}

export default TotalURL;
