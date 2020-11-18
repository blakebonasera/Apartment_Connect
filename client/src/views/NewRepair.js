import React, { useState } from 'react'
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
        e.preventDefault();
        axios.patch('http://localhost:8000/api/apartments/5fb569e3ce8804366293db78/repair/new', repair)
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
