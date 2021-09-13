import React from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import {Link} from "react-router-dom";

const Signup = () => {
    return(
        <main className="container main">
            <div className="py-5 rounded">
                <h1>Регистрация</h1>
                <TextInput type='text' name='Логин' />
                <TextInput type='text' name='Пароль' />
                <Button text='Зарегистрироваться' />
            </div>
            <Link className="text-black text-decoration-none" to='/login'>Уже зарегистрирован? | Войти</Link>
        </main>

    )
}

export default Signup