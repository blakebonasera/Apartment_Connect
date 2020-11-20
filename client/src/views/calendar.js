import React from "react";
import { InlineWidget } from "react-calendly";
const Calendar = props => {
    return(
        <div className="container">
            <div className="row offset-4">
                <h2>Book an Area</h2>
            </div>
            <div id ="calendar_container">
                <InlineWidget url="https://calendly.com/apartmentconnect" />
            </div>
        </div>
    )
}
export default Calendar;