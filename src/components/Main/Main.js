import React, {useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
//import citiesJson from '../../data/cities.json';
import {Link, Redirect} from "react-router-dom";

const Main = () => {
    //console.log(citiesJson)
    let cities = [
        {   
            "id": 1,
            "name": "Москва"
        },
        {
            "id": 2,
            "name": "Санкт-Петербург"
        },
        {
            "id": 3,
            "name": "Воронеж"
        },
        {
            "id": 4,
            "name": "Новосибирск"
        },
        {
            "id": 5,
            "name": "Мурманск"
        }
    ]
    /*useEffect(()=>{
        fetch('../../data/cities.json')
            .then(response => console.log(response))
            //.then(data => console.log(data))
    },[])*/
    const [itemFromCity, setFromCity] = useState('');
    const [itemToCity, setToCity] = useState('');
    //const [listCity, setCityList] = useState([]);
    const [auth, setAuth] = useState(localStorage.auth);
    const [redirect, setRedirect] = useState(false);

    const setFromCityValue = (value) => {
        setFromCity(value.target.value)
    }
    const setToCityValue = (value) => {
        setToCity(value.target.value)
    }
    
    let link = !!localStorage.auth ? "/selectDrive" : "/login"
    let handleSubmit = (event) => {
        event.preventDefault();
        localStorage.search = 'search'
        setRedirect(true) 
    }
    

    return(
        <form className="container main" onSubmit={handleSubmit}>
            <div className="py-5 rounded">
                <h1>Выберите поездку</h1>
                <TextInput type='text' label='Откуда' name='first' id='select-from-city' value={itemFromCity} list={cities} setValue={setFromCityValue} />
                <TextInput type='text' label='Куда' name='two' id='select-to-city' value={itemToCity} list={cities} setValue={setToCityValue} />
                <div className="col-sm-6">
                    <input type="datetime-local" className="form-control mt-4" required />
                </div>
                <Button type='submit' text='Найти' />
                {redirect ? <Redirect to={link} /> : ''}
            </div>
        </form>

    )
}

export default Main