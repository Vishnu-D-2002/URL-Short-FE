import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userInst from '../../services/user';

function SignIn() {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginForm);

        const res=userInst.signIn(loginForm);

        sessionStorage.setItem('loggedInUser', JSON.stringify(res.data));

        setLoginForm({
            email: '',
            password: ''
        });

        navigate('/');
    }

  return (
      <div>
        <form onSubmit={handleLogin}>
        <h1>Login</h1>

          <div>
              <input 
                  type='email'
                  placeholder='Enter your Email'
                  value={loginForm.email}
                  onChange={e=>setLoginForm({...loginForm,email:e.target.value})}
              />
          </div>

          <div>
              <input 
                  type='password'
                  placeholder='Enter your Password'
                  value={loginForm.password}
                  onChange={e=>setLoginForm({...loginForm,password:e.target.value})}
              />
          </div>

          <div>
              <button type='submit'>LOGIN</button>
          </div>

          <h2>Not Registered ? <Link to='/register'>REGISTER</Link></h2>
         </form>
      </div>
  )
}

export default SignIn