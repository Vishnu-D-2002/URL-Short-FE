import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { instance, protectInstance } from '../../services/instance';

function URLcreate() {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const getProfile = async() => {
        try {
            const user = await protectInstance.get('/');
            console.log('Authenticated Profile :', user);
        } catch (error) {
            console.error('Not Authenticated User :', error);
            navigate('/');
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    const addUrl = async (e) => {
       
        e.preventDefault();
        const longURL = url;

    try {
        const response = await protectInstance.post('/url', { longURL });
       
        console.log('Short URL Created Successfully', response.data);
       
        setShortUrl(response.data.shortURL);
        setUrl('');
        
    } catch (error) {

        console.error('Error in creating Short URL', error);

    }
    };

    const handleRedirect = async () => {
        await instance.get(`${shortUrl}`)
        console.log('Redirect successfull');
    }

    const navigate = useNavigate();

    const handleLogout = (e) => {
        sessionStorage.removeItem('loggedInUser');
        navigate('/');
    };
        

  return (
      <div>
      
          <form onSubmit={addUrl}>
            <NavBar />

            <h1>Enter the URL to convert it to Short URL </h1> 
            <label>Long URL :</label>
            <input
            type='text'
            placeholder='Enter a long URL...'
            value={url}
            onChange={e=>setUrl(e.target.value)}
              />&nbsp;&nbsp;&nbsp;
            <button type='submit'>Convert</button><br /><br />
              {
                  shortUrl && (
                      <div>
                          SHORT URL : <a
                              href={`https://url-short-be-7ukh.onrender.com${shortUrl}`}
                              target='_blank'
                              onClick={handleRedirect}
                          >{`https://url-short-be-7ukh.onrender.com${shortUrl}`}</a>
                      </div>
                  )
              }
            <br />

          </form><br />
          <div>
                <button onClick={handleLogout}>LOGOUT</button>
          </div>
      </div>
  )
}

export default URLcreate