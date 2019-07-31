import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { Redirect } from 'react-router-dom';

import { login } from '../utils/auth';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(store => store.authReducer.isLoggedIn);



    const handleLogin = () => {
        setTimeout(() => {
            dispatch(actions.signIn());

            props.history.push('/')
        }, 1000)

    }

    return (
        <div className='login'>
            <h4>Login</h4>
            <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='btn' onClick={handleLogin} >Giriş</button>
        </div>
    )
}

export default Login;