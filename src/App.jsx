import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignIn from './components/signIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import CreateURL from './components/createURL'
import TotalURL from './components/TotalURL'
import ResetPassword from './components/ResetPassword'


function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ <SignIn /> } />
            <Route path='/register' element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/createURL' element={<CreateURL />} />
            <Route path='/totalURL' element={<TotalURL />} />
            <Route path='/resetPassword/:randomString' element={ <ResetPassword /> } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App