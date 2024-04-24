// eslint-disable-next-line
import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import AlertContext from '../Contexts/alerts/AlertContext';
import UserProfile from './UserProfile';

function Navbar() {
    const { setAlertFun } = useContext(AlertContext)
    const l = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${l.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${l.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {(!localStorage.getItem('token')) ?
                        <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to={'/signIn'} role='button'>Sign In</Link>
                            <Link className="btn btn-primary mx-1" to={'/signUp'} role='button'>Sign Up</Link>
                        </form>
                        :
                        <form className="d-flex">
                            <UserProfile />
                            <Link className="btn btn-primary mx-1" to={'/signIn'} onClick={() => {
                                localStorage.removeItem('token');
                                setAlertFun('You have successfully Signed Out', 'success');
                            }}>Sign Out</Link>
                        </form>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
