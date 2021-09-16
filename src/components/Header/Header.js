import { render } from '@testing-library/react';
import React, { useState } from 'react'
import {Link, Redirect} from "react-router-dom";

const Header = () => {
    const [auth, setAuth] = useState(localStorage.auth);
    const [redirect, setRedirect] = useState(false);
    
    let handleSubmit = (event) => {
        event.preventDefault();
        setRedirect(true)
        localStorage.auth = ''
        setAuth('') 
    }
    return(
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        BroCar
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0  mx-5">
                        <li><Link to="/" className="nav-link px-2 text-secondary">Главная</Link></li>
                        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>

                    <div className="text-end">
                    {!auth ? (
                        <>
                            <Link to="/login"><button type="button" className="btn btn-outline-light me-2">Войти</button></Link>
                            <Link to="/signup"><button type="button" className="btn btn-warning">Зарегистрироваться</button></Link>
                        </>
                    ) : (
                        <>
                            <Link to="/cabinet"><button type="button" className="btn btn-outline-light me-2">Кабинет</button></Link>
                            
                            <form onSubmit={handleSubmit} style={{display: 'inline-block'}}>
                                <button type="submit" className="btn btn-warning" >Выйти</button>
                                {redirect ? <Redirect to='/' /> : ''}
                            </form>   
                        </>
                    )}
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header