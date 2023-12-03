import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { protectInstance } from '../../services/instance';

function TotalURL() {
  const [URLs, setURLs] = useState([]);
  const navigate = useNavigate();

    const allURLs = async () => {
        try {
            const res = await protectInstance.get('/AllURL');
      
            console.log('API Response:', res);

            if (res.data && Array.isArray(res.data.URLs)) {
                setURLs(res.data.URLs);
            } else {
                console.error('Invalid response format. Expected an array.');
            }
        } catch (error) {
            console.error('Error fetching URLs:', error);
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


    return (
        <div>
            <form>
                <NavBar />
                <h1>Total URLs Created</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Long URL</th>
                            <th>Short URL</th>
                            <th>Created At</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form><br /><br />
            <div>
                <button onClick={handleLogout}>LOGOUT</button>
            </div>
        </div>
    );
}

export default TotalURL;
