import React, {useState } from 'react'
import Modal from '../Modal/Modal'


const SelectDrive = () => {
    let drives = [
        {   
            "id": 1,
            "fromCity": "Москва",
            "toCity": "Санкт-Петербург",
            "dateTime": "01.01.2021 10:00"
        },
        {
            "id": 2,
            "fromCity": "Санкт-Петербург",
            "toCity": "Москва",
            "dateTime": "01.01.2021 10:00"
        },
        {
            "id": 3,
            "fromCity": "Воронеж",
            "toCity": "Москва",
            "dateTime": "01.01.2021 10:00"
        },
        {
            "id": 4,
            "fromCity": "Новосибирск",
            "toCity": "Екатерибург",
            "dateTime": "01.01.2021 10:00"
        },
        {
            "id": 5,
            "fromCity": "Мурманск",
            "toCity": "Петрозаводск",
            "dateTime": "01.01.2021 10:00"
        }
    ]

    return(
        <>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {drives.map(item => {
                        return (
                            <div className="col" key={item.id}>
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <p className="card-text"><b>Откуда: </b>{item.fromCity}</p> 
                                        <p className="card-text"><b>Куда: </b>{item.toCity}</p>
                                        <div className="d-flex justify-content-between align-items-center">  
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Забронировать</button> 
                                                <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Подробнее</button>
                                            </div>
                                            
                                            <small className="text-muted">{item.dateTime}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal />
        </>
    )
}

export default SelectDrive