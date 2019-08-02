import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Button, Input } from '../elements';
import * as actions from '../store/actions';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        setTimeout(() => {
            dispatch(actions.signIn());
            props.history.push('/')
        }, 1000)

    }

    return (
        <div className='login'>
            <h4>Login</h4>
            <Input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button primary onClick={handleLogin} >Giriş</Button>
        </div>
    )
}

export default withRouter(Login);