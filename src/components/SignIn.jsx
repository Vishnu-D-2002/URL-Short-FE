import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userInst from '../../services/user';

function SignIn() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = await userInst.signIn(loginForm, setMsg);

        setLoginForm({
            email: '',
            password: ''
        });

        if (!user) {
            sessionStorage.removeItem('loggedInUser');
        
            setMsg('Entered a Wrong Email or Password');
        } else {
        
            navigate('/createURL');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div>
                    <input
                        type='email'
                        placeholder='Enter your Email'
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    />
                </div>

                <div>
                    <input
                        type='password'
                        placeholder='Enter your Password'
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    />
                </div>

                <div>
                    <button type='submit'>LOGIN</button>
                    <Link to='/emailSend'>Reset Password</Link>
                </div>
                {
                    <h3>{msg}</h3>
                }

                <h2>
                    New User ? <Link to='/register'>REGISTER</Link>
                </h2>
            </form>
        </div>
    );
}

export default SignIn;
