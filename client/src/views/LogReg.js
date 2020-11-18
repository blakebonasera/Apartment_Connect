import React from "react";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const LogReg = ({ setLoggedIn }) => {
    return (
    <div className="container">
        <div className="row">
        <div className="col-6">
        <SignIn setLoggedIn={setLoggedIn} />
        </div>
        <div className="col-6">
        <SignUp setLoggedIn={setLoggedIn} />
        </div>
        </div>
    </div>
    );
};

export default LogReg;