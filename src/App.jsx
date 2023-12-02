import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignIn from './components/signIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ <SignIn /> } />
            <Route path='/register' element={<SignUp />} />
            <Route path='/dashboard' element={ <Dashboard /> } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App