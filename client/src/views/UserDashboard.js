import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from './calendar';
import NewRepair from './NewRepair';


import {navigate} from '@reach/router';

const UserDashboard = props => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
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
            .catch(err => {
                console.log("not authorized");
                console.log(err.response);
                navigate("/");
            });
    }, [])

    return (
        <div className="container">
            <div className="row offset-4">
            <h2>Welcome {user.firstName}</h2>
            </div>
            <div className="row offset-3">
                <button className="btn btn-primary mr-5" onClick={() => request("repair") }>Repairs</button>
                <button className="btn btn-primary" onClick={() => request("reserve")}>Reserve a Time</button>
            </div>
            
            {
                requestType === "repair" ?
                <NewRepair user={user} setUser={setUser} />
                :
                requestType === "reserve" ?
                <Calendar />:
                ""
            }
            
            
            <div>
                <h3>Future chat page???</h3>
            </div>
        </div>
    )
}

export default UserDashboard
