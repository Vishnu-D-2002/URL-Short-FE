import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { protectInstance } from '../../services/instance';
import '../App.css';

function Dashboard() {
  const [totals, setTotals] = useState({ totalToday: 0, totalThisMonth: 0 });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getURLCounts = async () => {
    try {
      const res = await protectInstance.get('/URLCounts/total');
      setTotals(res.data);
    } catch (error) {
      console.error('Error fetching URL counts:', error);
      setError('Error fetching URL counts');
    }
  };

  useEffect(() => {
    getURLCounts();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div>
      <form>
        <NavBar />
        <h1>URL Statistics</h1>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <div>
            <h2>Total URLs created today: {totals.totalToday}</h2>
            <h2>Total URLs created this month: {totals.totalThisMonth}</h2>
          </div>
        )}
      </form>
      <br />
      <br />
      <div>
        <button class="logout-container" onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Dashboard;
