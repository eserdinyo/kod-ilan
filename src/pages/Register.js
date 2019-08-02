import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Button, Input } from '../elements';
import * as actions from '../store/actions';


const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <Input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button primary onClick={handleRegister} >Kayıt Ol</Button>
        </div>
    )
}

export default withRouter(Register);