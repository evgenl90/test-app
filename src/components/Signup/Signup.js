import React from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

const Signup = () => {
    return(
        <main className="container main">
            <div className="py-5 rounded">
                <h1>Регистрация</h1>
                <TextInput name='Логин' />
                <TextInput name='Пароль' />
                <Button text='Зарегистрироваться' />
            </div>
        </main>

    )
}

export default Signup