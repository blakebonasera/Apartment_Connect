import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const SignIn = ({ setLoggedIn }) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [errorMessage, setErrorMessage ] = useState('');

    const login = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", { email, password }, { withCredentials: true })
        .then((res) =>{
            console.log(res);
            localStorage.setItem("loggedIn", "true")
            setLoggedIn();
            navigate('/dashboard');
        })
        .catch((err)=>{
            console.log(err);
            setErrorMessage(err.response.data.msg);
        });
    };

    return(
        <fieldset>
            <legend>Sign In</legend>

            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' onChange={(e)=> setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Sign In" className="btn btn-primary" />
                    <p className="error-message">{errorMessage ? errorMessage : ""}</p>
                </div>
            </form>
        </fieldset>
    )
}

export default SignIn;