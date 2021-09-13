import React, {useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
//import citiesJson from '../../data/cities.json';
import {Link} from "react-router-dom";

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
    //let [listCity, setCityList] = useState([]);
    let [search, setSearch] = useState(null);
    const setFromCityValue = (value) => {
        setFromCity(value.target.value)
    }
    const setToCityValue = (value) => {
        setToCity(value.target.value)
    }
    let link = Boolean(localStorage.auth) ? "/selectDrive" : "/login"

    let setLocal = (search) => {
        //setSearch(1)
        localStorage.search = search
    }

    return(
        <main className="container main">
            <div className="py-5 rounded">
                <h1>Выберите поездку</h1>
                <TextInput type='text' name='Откуда' label='first' id='select-from-city' value={itemFromCity} list={cities} setValue={setFromCityValue} />
                <TextInput type='text' name='Куда' label='two' id='select-to-city' value={itemToCity} list={cities} setValue={setToCityValue} />
                <div className="col-sm-6">
                    <input type="datetime-local" className="form-control mt-4" required />
                </div>
                <Button text='Найти' onClick={setLocal(search)}  />
            </div>
        </main>

    )
}

export default Main