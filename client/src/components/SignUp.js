import React, {useState} from 'react';

import axios from 'axios';
import { navigate } from '@reach/router';

const SignUp = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ errors, setErrors ] = useState(null);

    const register = e => {
        e.preventDefault();
        
        const newUser = { firstName, lastName, email, password, confirmPassword };

        axios.post("http://localhost:8000/api/users/new", newUser,{ withCredentials: true })
        .then((res)=>{
            console.log(res);

            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/users');
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);

        });
    };
    return (
        <fieldset>
            <legend>Sign Up</legend>

            <form onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name='firstName' onChange={(e)=> setFirstName(e.target.value)} value={firstName}/>
                    {
                        errors?.firstName && (
                        <span className="error-message">{errors.firstName?.message}</span>
                        )}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name='lastName' onChange={(e)=> setLastName(e.target.value)} value={lastName}/>
                    {
                        errors?.lastName && (
                        <span className="error-message">{errors.lastName?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    {
                        errors?.email && (
                        <span className="error-message">{errors.email?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    {
                        errors?.password && (
                        <span className="error-message">{errors.password?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name='confirmPassword' onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    {
                        errors?.confirmPassword && (
                        <span className="error-message">{errors.confirmPassword?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                <input type="submit" value="Sign Up" className="btn btn-success" />
                </div>
            </form>
        </fieldset>
    )
}
export default SignUp;