import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { auth } from '../utils/auth';
import * as actions from '../store/actions';
import { Redirect } from 'react-router-dom';


const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector(store => store.authReducer.isLoggedIn);
    const dispatch = useDispatch();

    const handleRegister = () => {
        setTimeout(() => {
            dispatch(actions.signIn());

            props.history.push('/')
        }, 1000)

    }

    return (
        <div className='login'>
            <h4>Register</h4>
            <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='btn' onClick={handleRegister} >Kayıt Ol</button>
        </div>
    )
}

export default Register;