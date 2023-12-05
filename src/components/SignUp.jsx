import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userInst from '../../services/user';
import '../App.css';

function SignUp() {
    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [msg, setMsg] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        userInst.signUp(registerForm,setMsg);
        
        setRegisterForm({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });

    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <h1>Register </h1>
                <div>
                    <input
                        type='text'
                        placeholder='Enter your First Name'
                        value={registerForm.firstName}
                        onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <input
                        type='text'
                        placeholder='Enter your Last Name'
                        value={registerForm.lastName}
                        onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <input
                        type='email'
                        placeholder='Enter your Email Id'
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <input
                        type='password'
                        placeholder='Enter your Password'
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <button type='submit'>REGISTER</button>
                </div>
                {
                    <h3>{ msg }</h3>
                }

                <h2>Already Registered ? <Link to='/'>LOGIN</Link></h2>
            </form>
        </div>
    );
}

export default SignUp;
