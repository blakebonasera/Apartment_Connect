import React, { useState , useEffect} from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';

const RepairList = props => {
    const [repairList, setRepairList] = useState([]);

    const [errors, setErrors] = useState({
        name: ""
    })
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    useEffect(() => {
        let testUser;
        console.log('running use effect');
        axios.get(`http://localhost:8000/api/users/loggedin`, {withCredentials: true})
            .then(res => {
                console.log('first then');
                setUser(res.data)
                testUser = res.data;
                console.log(`User Object ${JSON.stringify(testUser)}`)
                console.log(`User ID: ${testUser._id}`)
                return axios.get(`http://localhost:8000/api/getapt/${res.data._id}`, {withCredentials: true})
            })
            .then(resp => {
                console.log('second then');
                console.log('resp');
                console.log(resp);
                if (resp.data[0].name ){
                    setUser((currentUser) => ({ ...currentUser, 
                        "apartment": resp.data[0].name,
                        "apartmentId": resp.data[0]._id 
                    }));
                }
                return  axios.get(`http://localhost:8000/api/apartments/${resp.data[0]._id}`, {withCredentials: true})
            }).then(response => {
                console.log('Third then');
                console.log('response.data.repairs ');
                console.log(response.data.repairs);
                setRepairList(response.data.repairs);
                // alert(repairList);

            })
            .catch(err => console.log(err));
    }, [])

    
    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <h1>Repair List for Apartment {user.apartment} </h1>
                </div>
            </div>
            <br/>
            <div >
                {
                    user.apartment ?
                    (
                    <> 
                    {repairList.map((item, i) => <div key={i} >
                        <div class="card mb-3" >
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-dark text-danger">{item.details}</li>
                                <li class="list-group-item bg-dark">{item.location}</li>
                                <li class="list-group-item bg-dark">{item.urgency}</li>
                                <li class="list-group-item bg-dark ">Completed? {item.status === true ? <span className="text-success">Yes</span>:<span className="text-danger">No</span>}</li>
                            </ul>
                        </div>
                        </div>)}
                    </>
                    )
                    :
                    (
                        <div>    
                        <p>Please add an apartment to view repairs.</p>
                        <button className="btn btn-primary" onClick={() => navigate('/connect')}>Add Apartment</button>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    )
}

export default RepairList
