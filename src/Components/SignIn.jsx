import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import AlertContext from '../Contexts/alerts/AlertContext';

function SignIn() {
    const { setAlertFun } = useContext(AlertContext)
    let navigate=useNavigate();
    const baseURL = "http://localhost:5000/api/auth/login";
    const [credintials, setCredintials] = useState({ email: '', password: "" });
    const onChange = (e) => {
        setCredintials({
            ...credintials,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(baseURL, credintials, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response.status);
            // save the authentication-token in local-storage and redirect the user to home page for which we use useHistory hook of react-router-dom
            localStorage.setItem('token', response.data.authToken);
            navigate('/');
            setAlertFun('Logged in successfully!','success')
            // window.location='/';
        }
        catch (err) {
            // some error occured handle the error
            console.log(err.response.status);
            console.log(err.response.data);
            console.log(err.response.headers);
            setAlertFun(`status: ${err.response.status}, message: ${err.response.data}`,'danger')
        }

    }
    return (
        <div >
            <form className='container w-75' onSubmit={handleSubmit} >
            <h2 className="mt-5">Please, Sign In to use iNotebook</h2>
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credintials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Pls enter a valid e-mail</div>
                </div>
                <div className="my-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credintials.password} onChange={onChange} required minLength={5} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="my-5 mx-1 fs-6 fw-bold">Don't have any account yet. Create one from here <Link to='/signUp'>Sign Up</Link> </p>
            </form>
        </div>
    )
}

export default SignIn
