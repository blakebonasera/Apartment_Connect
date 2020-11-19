import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from './calendar';
import NewRepair from './NewRepair';
import {navigate} from '@reach/router';
import {mergeSortArrObj} from '@hdanks/mern-library';

const UserDashboard = props => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [userApt, setUserApt] = useState({

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
                return axios.get(`http://localhost:8000/api/getapt/${res.data._id}`, {withCredentials: true})
            })
            .then(response => {
                if (response.data[0].name){
                    let sortedRepairs = mergeSortArrObj(response.data[0].repairs.filter(repair => repair.status === false), "urgency").reverse()
                    console.log("sorted Repairs: ", sortedRepairs)
                    setUserApt({
                        ...response.data[0],
                        "repairs": sortedRepairs
                    })
                }
                console.log(response.data[0])
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
                <div className="col-4">
                <button className="btn btn-primary mr-5" onClick={() => request("repair") }>Repairs</button>
                </div>
                
                <div className="col-4">
                <button className="btn btn-primary" onClick={() => request("reserve")}>Reserve a Time</button>
                </div>
            </div>
            <br/>
            
            {
                requestType === "repair" ?
                <NewRepair user={user} setUser={setUser} />
                :
                requestType === "reserve" ?
                <Calendar />:
                ""
            }
            {
                userApt.repairs ?
                userApt.repairs.map((repair, i) => {
                    return (
                        <div key={i} >
                        <div class="card mb-3" >
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-dark text-danger">{repair.details}</li>
                                <li class="list-group-item bg-dark">{repair.location}</li>
                                <li class="list-group-item bg-dark">{repair.urgency}</li>
                                
                            </ul>
                        </div>
                        </div>
                    )
                }):
                ""
            }
        </div>
    )
}

export default UserDashboard
