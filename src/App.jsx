import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignIn from './components/signIn'
import SignUp from './components/SignUp'


function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ <SignIn /> } />
            <Route path='/register' element={ <SignUp /> } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App