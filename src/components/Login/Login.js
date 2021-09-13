import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import {Link} from "react-router-dom";

const Login = () => {

    //let [auth, setAuth] = useState(localStorage.auth);
    let link = !!Boolean(localStorage.search) ? "/selectDrive" : "/cabinet"

    return(
        <main className="container main">
            <div className="py-5 rounded">
                <h1>Войти</h1>
                <TextInput type='text' name='Логин' />
                <TextInput type='text' name='Пароль' />
                <Link to={link}><Button text='Войти'  /></Link>
            </div>
            <Link className="text-black text-decoration-none" to='/signup'>Нет аккаунта? | Регистрация</Link>
        </main>

    )
}

export default Login