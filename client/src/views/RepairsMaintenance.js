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
            <p>Future maintenance page</p>
            {
                apartments.map(apartment => apartment.repairs.map((repair, i) => {
                    if (!repair.status){

                        return (
                            <div key={i} id={i}>
                                <div>
                                    <h3>{repair.details}</h3>
                                    <p>Location: {repair.location} of apartment {apartment.name} </p>
                                    <p>{JSON.stringify(repair.status)}</p>
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => fixed(repair._id, i)}>Mark as fixed</button>
                                </div>
                            </div>
                        )
                    }
                }))
            }
        </div>
    )
}

export default RepairsMaintenance
