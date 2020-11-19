import React, { useState, useEffect }from 'react';
import axios from 'axios';

const ApartmentForm = props => {
    const [ apartments, setApartments ] =useState([]);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    const [selectedApartment ,setSelectedApartment ] = useState({
        _id:''
    })

    useEffect(()=>{
        axios.get("http://localhost:8000/api/apartments")
        .then(response=>{ setApartments(response.data)
            console.log(response.data._id);
        })
        .catch(err=>console.log(err));
        axios.get(`http://localhost:8000/api/users/loggedin`, {withCredentials: true})
            .then(res => {
                let user = res.data;
                setUser(user)
                console.log(user)
            })
            .catch(err => console.log(err));
    },[])

    const changeHandler = e => {
        setSelectedApartment({
            _id:e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(e.target.apartments);
        axios.patch(`http://localhost:8000/api/apartments/${selectedApartment._id}/tenants/new`, {tenants:user._id})
        .then(response=> {
            if(response.data.message === "success"){
                
                
            } else {
                console.log(response.data);

            }
        })
        .catch(err=>console.log(err));
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="row form-group">
                <label htmlFor="apartments">Apartment :</label>
                <select name="apartments" onChange={changeHandler}  >
                    <option>Select your apartment</option>
                    {
                        apartments
                        .sort((a,b)=>(a.name > b.name)? 1:-1)
                        .map((item,i)=> <option value={item._id} key={i}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className="row form-group">
                <input type="submit" value="Add User as Tenant" className="btn btn-primary"/>
            </div>
        </form>
    )
}
export default ApartmentForm;