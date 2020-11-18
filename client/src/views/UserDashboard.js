import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Welcome {user.firstName}</h2>
            <div className="mt-4">
                <button className="btn btn-primary mr-5" onClick={() => request("repair") }>Request a Repair</button>
                <button className="btn btn-primary" onClick={() => request("reserve")}>Reserve a Time</button>
            </div>

            <div className="bg-dark text-light col-12 row-12">
                {
                    requestType === "repair" ?
                    <p className="m-2 p-5">Repair Form goes here</p>:
                    requestType === "reserve" ?
                    <p className="m-2 p-5">Calendly form goes here</p>:
                    ""
                }
            </div>
            
            <div>
                <h3>Future chat page???</h3>
            </div>
        </div>
    )
}

export default UserDashboard
