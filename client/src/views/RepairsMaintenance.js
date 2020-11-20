import { mergeSortArrObj } from '@hdanks/mern-library'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const RepairsMaintenance = props => {
    const [apartments, setApartments] = useState([])

    const fixed = (id, i) => {
        axios.patch(`http://localhost:8000/api/apartments/${id}/repair/update`, {"status": true}, {withCredentials: true})
            .then(res => {
                if(res.data.message === "success"){
                    document.getElementById(i).parentNode.removeChild(document.getElementById(i))
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/apartments`, {withCredentials: true})
            .then(res => {
                setApartments(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1 className="offset-3">Maintenance Portal</h1>
            <br/>
            {
                apartments.map(apartment => apartment.repairs.map((repair, i) => {
                    if (!repair.status){

                        return (
                            <div >
                            <ul key={i} id={i} class="list-group">
                                <li class="list-group-item bg-dark"><h3>Repair: {repair.details}</h3></li>
                                <li class="list-group-item bg-dark">Location: {repair.location} of apartment {apartment.name} </li>
                                <li class="list-group-item bg-dark">Completed? {JSON.stringify(repair.status)}</li>
                                <li class="list-group-item bg-dark"><button className="btn btn-primary" onClick={() => fixed(repair._id, i)}>Mark as fixed</button></li>
                            </ul>
                            </div>
                        )
                    }
                }))
            }
        </div>
    )
}

export default RepairsMaintenance
