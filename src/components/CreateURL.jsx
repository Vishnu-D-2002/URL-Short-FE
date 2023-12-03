import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { instance, protectInstance } from '../../services/instance';

function CreateURL() {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

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
              /><br /><br />
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
            <br /><br />
            <button type='submit'>Convert</button>

          </form><br />
          <div>
                <button onClick={handleLogout}>LOGOUT</button>
          </div>
      </div>
  )
}

export default CreateURL