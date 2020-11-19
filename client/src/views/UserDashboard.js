import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from './calendar';
import ApartmentForm from '../components/ApartmentForm';

const UserDashboard = props => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    const [requestType, setRequestType] = useState("")

    const request = type => {
        setRequestType(type)
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/loggedin`, {withCredentials: true})
            .then(res => {
                let user = res.data;
                setUser(user)
                console.log(user)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <div className="row offset-4">
            <h2>Welcome {user.firstName}</h2>
            </div>
            <div className="row offset-3">
                <button className="btn btn-primary mr-5" onClick={() => request("connect") }>Apartment Connect</button>
                <button className="btn btn-primary" onClick={() => request("reserve")}>Reserve a Time</button>
            </div>
            
            {
                requestType === "connect" ?
                <ApartmentForm />:
                requestType === "reserve" ?
                <Calendar path="/calendar"/>:
                ""
            }
            
            
            <div>
                <h3>Future chat page???</h3>
            </div>
        </div>
    )
}

export default UserDashboard
