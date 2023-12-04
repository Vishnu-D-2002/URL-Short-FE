import React from 'react'
import { instance } from '../../services/instance';
import { useNavigate } from 'react-router-dom';

function Activated() {

  const navigate = useNavigate();

  const handleActivation = async (e) => {
    
    try {
      e.preventDefault();

      const activationToken = await window.location.pathname.slice(-7);

      const activated = await instance.get(`/activate/${activationToken}`);

      if (activated.data.message==='Account Activated Succeessfully') {
        console.log('Account Activated Successfull');
        navigate('/');
      } else {
        console.log('Error in Account Activation')
      }

    } catch (error) {
      console.error('Error while during Activation', error);
    }
  }
  return (
    <div>
    
      <form onSubmit={handleActivation}>
          <button type='submit'>Activate Account</button>
      </form>

    </div>
  )
}

export default Activated