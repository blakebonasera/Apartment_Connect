import React, { useState , useEffect} from 'react'
import { navigate } from '@reach/router';
import RepairForm from '../components/RepairForm';
import axios from 'axios';

const NewRepair = props => {
    const [repair, setRepair] = useState({
        location: "",
        details: "",
        urgency: "",
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
                console.log('res');
                console.log(resp);
                if (resp.data[0].name ){
                    setUser((currentUser) => ({ ...currentUser, 
                        "apartment": resp.data[0].name,
                        "apartmentId": resp.data[0]._id 
                    }));
                }
                // console.log(`User inside nested callback: ${JSON.stringify(user)}`)
                // console.log(`response data in second useEffect: ${JSON.stringify(res.data[0]._id)}`)
                // console.log(`The user is now equal to ${JSON.stringify(user)}`)
            })
            .catch(err => console.log(err));
        // const getUsersAndApartment = async () => {
        //     try {
        //         const res = await fetch('http://localhost:8000/api/users/loggedin', {
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             credentials: "same-origin"
        //         });

        //         console.log('res');
        //         console.log(res);

        //         const user = res.data;

        //         const response = fetch(`http://localhost:8000/api/getapt/${user._id}`, {
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             credentials: "same-origin"
        //         });

        //         console.log('response');
        //         console.log(response);

        //         setUser({ ...user, apartment: response.data[0]._id });


        //     } catch (err) {
        //         console.log(err);
        //     }
        // }

        // getUsersAndApartment()
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
        console.log(`Apartment ID: ${user.apartmentId}`)
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/apartments/${user.apartmentId}/repair/new`, repair)
            .then(response => {
                if(response.data.message == "error" ) {
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
            {user.apartmentId ? <h2>Apartment: {user.apartment}</h2>: ""}
            <div className="container offset-1">
            <div className="row">
                <div className="col-sm-8 offset-sm-3">
                    <h1>Repair Request</h1>
                </div>
            </div>
            <br/>
            <div className="row">
                {
                    user.apartment ?
                    <RepairForm 
                    changeHandler={ changeHandler }
                    submitHandler={ submitHandler }
                    checkBoxHandler={checkBoxHandler}
                    repair={ repair }
                    errors={ errors }
                    action="Create a Repair Request"
                    />:
                    (
                        <div>    
                        <p>Please add an apartment before requesting a repair.</p>
                        <button className="btn btn-primary" onClick={() => navigate('/connect')}>Add Apartment</button>
                        </div>
                    )
                }
            </div>
            
        </div>
        </div>
    )
}

export default NewRepair
