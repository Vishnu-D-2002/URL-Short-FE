import React from 'react'
import { instance } from '../../services/instance';
import { useNavigate } from 'react-router-dom';
import '../App.css';

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
        <h1>Please Click the Activate Account Button Below to Activate Your Inactive Account</h1>
        <button type='submit'>Activate Account</button>
        <h2>If you Don't want to Activate Account Please Denied this step</h2>
      </form>

    </div>
  )
}

export default Activated