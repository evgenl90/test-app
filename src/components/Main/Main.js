import React, {useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
//import cities from '../../data/cities.json';
let cities = [
    {
        "1": "Москва"
    },
    {
        "2": "Санкт-Петербург"
    },
    {
        "3": "Воронеж"
    },
    {
        "4": "Новосибирск"
    },
    {
        "5": "Мурманск"
    }
]
const Main = () => {
    const [itemCity, setCity] = useState('');
    let [listCity, setCityList] = useState([]);
    const setCityValue = (value) => {
        setCity(value.target.value)
    }
    return(
        <main className="container main">
            <div className="py-5 rounded">
                <h1>Выберите поездку</h1>
                <TextInput name='Откуда' itemCity={itemCity} listCity={cities} setCityValue={setCityValue} />
                <TextInput name='Куда' />
                <Button text='Найти' />
            </div>
        </main>

    )
}

export default Main