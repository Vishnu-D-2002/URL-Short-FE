import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import TotalURL from './components/TotalURL'
import ResetPassword from './components/ResetPassword'
import URLcreate from './components/URLcreate'
import EmailSend from './components/EmailSend'
import Activated from './components/Activated'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ <SignIn /> } />
            <Route path='/register' element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/createURL' element={<URLcreate />} />
            <Route path='/totalURL' element={<TotalURL />} />
            <Route path='/emailSend' element={ <EmailSend /> } />
            <Route path='/resetPassword/:randomString' element={<ResetPassword />} />
            <Route path='/activate/:activationToken' element={<Activated />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App