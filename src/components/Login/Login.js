import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import {Link, Redirect} from "react-router-dom";
import { render } from '@testing-library/react';

const Login = () => {

    let link = localStorage.search === 'search' ? "/selectDrive" : "/cabinet"
    const [redirect, setRedirect] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const setLoginValue = (value) => {
        setLogin(value.target.value)
    }
    const setPasswordValue = (value) => {
        setPassword(value.target.value)
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        localStorage.search = ''
        localStorage.auth = 'auth'
        setRedirect(true) 

    }
    return(
        <form className="container main" onSubmit={handleSubmit}>
            <div className="py-5 rounded">
                <h1>Войти</h1>
                <TextInput type='text' label='Логин' value={login} setValue={setLoginValue} />
                <TextInput type='text' label='Пароль' value={password} setValue={setPasswordValue} />
                <Button type='submit' text='Войти'  />
            </div>
            <Link className="text-black text-decoration-none" to='/signup'>Нет аккаунта? | Регистрация</Link>
            {redirect ? <Redirect to={link} /> : ''}
        </form>

    )
}

export default Login