import React, { useState } from 'react'
import { instance } from '../../services/instance';
import '../App.css';

function EmailSend() {

    const [email, setEmail] = useState('');

    const handleMailSend = async (e) => {
        try {

            e.preventDefault();

            const mail = await instance.post('/reset-password', { email });

            console.log('Password Reset Mail send successfully', mail);

            setEmail('');

        } catch (error) {

            console.error('Error in sending mail', error);

        }
    };

  return (
      <div>
            <form onSubmit={handleMailSend}>
                <h2>Enter your Email Id for that Email id the Link to reset the
                  Password will be Send</h2>
              <input 
                  type='email'
                  placeholder='Enter your Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
              />
              <button type='submit'>SUBMIT</button>
            </form>
      </div>
  )
}

export default EmailSend