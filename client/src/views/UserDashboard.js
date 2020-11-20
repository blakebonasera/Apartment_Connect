import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from './calendar';
import NewRepair from './NewRepair';
import RepairList from './RepairList';
import {navigate, Link} from '@reach/router';
import {mergeSortArrObj} from '@hdanks/mern-library';


const UserDashboard = ({logout}) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        maintenance: ''
    })
    const [userApt, setUserApt] = useState({

    })
    const [requestType, setRequestType] = useState("")

    const request = type => {
        setRequestType(type)
    }

    const [repairsList, setRepairsList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/loggedin`, {withCredentials: true})
            .then(res => {
                let user = res.data;
                setUser(user)
                console.log(user)
                if(res.data.maintenance) {
                    console.log("I'm a maintenance worker, give me all apts.")
                    return (axios.get("http://localhost:8000/api/apartments", {withCredentials: true}))
                } else {
                    console.log("just give me my apt")
                    return axios.get(`http://localhost:8000/api/getapt/${res.data._id}`, {withCredentials: true})
                }
            })
            .then(response => {
                console.log("response: ", response.data)
                if (response.data[0]){
                    let sortedRepairs = mergeSortArrObj(response.data[0].repairs.filter(repair => repair.status === false), "urgency").reverse()
                    console.log("sorted Repairs: ", sortedRepairs)
                    setUserApt({
                        ...response.data[0],
                        "repairs": sortedRepairs
                    })
                }
                // let aptList= response.data.map((item, i) => item)
                // for(let apt = 0; apt < aptList.length; apt++){
                //     let aptRepairList = apt.repairs.map((item, i) => item)
                //     for(let repair = 0; repair < aptRepairList.length; repair++){
                //         setRepairsList([...repairsList, aptRepairList[repair]])
                //     }
                // }
            })
            .catch(err => {
                console.log("not authorized");
                console.log("error" ,err);
                navigate("/");
                logout()
            });
    }, [])

    return (
        <div className="container">
            <div className="row offset-sm-3">
            <h2>Welcome {user.firstName}</h2>
            </div>
            <div className="row ">
                <div className="col-4">
                <button className="btn btn-primary " onClick={() => request("repair") }>Repairs</button>
                </div>

                <div className="col-4">
                <button className="btn btn-primary " onClick={() => request("listrepairs") }>List Repairs</button>
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
                requestType === "listrepairs" ?
                <RepairList user={user} setUser={setUser} />
                :
                requestType === "reserve" ?
                <Calendar />:
                ""
            }
            <div className="row">
            {
                user.maintenance ?
                <Link className="btn btn-primary offset-4" to="/maintenance">Maintenance Portal</Link>:
                ""
            }
            </div>
        </div>
    )
}

export default UserDashboard
