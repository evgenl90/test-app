import React from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

const Login = () => {
    return(
        <main className="container main">
            <div className="py-5 rounded">
                <h1>Войти</h1>
                <TextInput name='Логин' />
                <TextInput name='Пароль' />
                <Button text='Войти' />
            </div>
        </main>

    )
}

export default Login