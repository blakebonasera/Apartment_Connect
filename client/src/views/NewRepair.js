import React, { useState , useEffect} from 'react'
import { Link, navigate } from '@reach/router';
import RepairForm from '../components/RepairForm';
import axios from 'axios';

const NewRepair = () => {
    const [repair, setRepair] = useState({
        location: "",
        details: "",
        urgency: "",
        status: "",
    });
    const [errors, setErrors] = useState({
        name: ""
    })
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/loggedin`, {withCredentials: true})
            .then(res => {
                let user = res.data;
                setUser(user)
                console.log(user)
                console.log(`User ID: ${user._id}`)
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getapt/${user._id}`, {withCredentials: true})
            .then(res => {
                setUser({...user, "apartment": res.data[0]._id})
                // console.log(`User inside nested callback: ${JSON.stringify(user)}`)
                // console.log(`response data in second useEffect: ${JSON.stringify(res.data[0]._id)}`)
                console.log(`The user is now equal to ${JSON.stringify(user)}`)
            })
            .catch(err => console.log(err));
    }, [])

    const checkBoxHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const string_value = value.toString()
        const name = target.name;
    
        setRepair({
            ...repair,
            [name]: string_value
        });
    }
    

    const changeHandler = e => {
        setRepair({
            ...repair,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        console.log("inside submitHandler");
        console.log(`repair: ${JSON.stringify(repair)}`)
        console.log(`Apartment ID: ${user.apartment}`)
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/apartments/${user.apartment}/repair/new`, repair)
            .then(response => {
                if(response.data.message) {
                    setErrors({name : response.data.message}); 
                } else {
                    navigate("/dashboard");
                }
            })
            .catch(err => console.log(err));
    }


    
    return (
        <div>
            <h2>Hello  {user.firstName}</h2>
            <h2>Your apartment ID:  {user.apartment}</h2>
        <div className="container offset-1">
            <div className="row">
                <div className="col-sm-8 offset-sm-3">
                    <h1>Repair Request</h1>
                </div>
                
            </div>
            <div className="row">
                <RepairForm 
                    changeHandler={ changeHandler }
                    submitHandler={ submitHandler }
                    checkBoxHandler={checkBoxHandler}
                    repair={ repair }
                    errors={ errors }
                    action="Create a Repair Request"
                />
            </div>
            
        </div>
    )
}

export default NewRepair
