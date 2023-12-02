import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userInst from '../../services/user';
import { useDispatch } from 'react-redux';

function SignIn() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        
        e.preventDefault();

    try {
        const user = userInst.signIn(loginForm);
        navigate('/dashboard');

        setLoginForm({
            email: '',
            password: ''
        });

        if (user) {
            await dispatch({ type: 'SIGNIN_SUCCESS', payload: user });
        }

        navigate('/dashboard');

    } catch (error) {
                console.log('Password is wrong. Please check your password.');
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
                </div>

                <h2>
                    Not Registered ? <Link to='/register'>REGISTER</Link>
                </h2>
            </form>
        </div>
    );
}

export default SignIn;
