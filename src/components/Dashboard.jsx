import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function Dashboard() {

  const navigate = useNavigate();

    const handleLogout = (e) => {
        sessionStorage.removeItem('loggedInUser');
        navigate('/');
    };

  return (
    <div>
    
      <form >
        
        <NavBar />
        
      </form>

      <div>
          <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  )
}

export default Dashboard;