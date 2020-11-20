import React from 'react'

const RepairForm = props => {
    const { repair, errors, changeHandler, submitHandler, checkBoxHandler, action } = props;
    return (
        <form onSubmit={submitHandler}>
            <div className="row form-group">
                {
                    errors.name ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{errors.name}</span>
                    : ''
                }
                    <label htmlFor="details" className="col-sm-4">What needs to be fixed? </label>
                    <input type="text" name="details" className="col-sm-8 form-control" onChange={changeHandler} value={repair.details}/>
                </div>
                <div className="row">
                <div className="form-group">
                    <label htmlFor="location" className="col-sm-6 offset-sm-2">Where is the problem located?
                    <select name="location" onChange={changeHandler} value={repair.location}>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Bath Room">Bath Room</option>
                        <option value="Bed Room 1">Bed Room 1</option>
                        <option value="Bed Room 2">Bed Room 2</option>
                    </select>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="urgency" className="col-sm-6 offset-sm-2">How urgent is this? 
                    <select name="urgency" onChange={changeHandler} value={repair.urgency}>
                        <option value={1}>Anytime is fine</option>
                        <option value={2}>Today would be good</option>
                        <option value={3}>Stuff is on fire!!!</option>
                    </select>
                    </label>
            </div>
            </div>
            {/* <div className="form-group">
                <label htmlFor="status" className="col-sm-4">Repair Complete:</label>
                <input type="checkbox" name="status" className="col-sm-8 form-control" checked={repair.status} onChange={checkBoxHandler} value={repair.status}/>
            </div> */}
            <div className="row form-group">
                <input type="submit" value={action} className="col-sm-4 offset-sm-4 btn btn-primary"/>
            </div>
        </form>
    )
}

export default RepairForm