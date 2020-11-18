import React from 'react';

import { Link } from '@reach/router';

const Nav = (props) => {
    const {logout} = props;
    

    return (
        <nav className="navbar navbar-expand-lg navbar-primary">
            <Link className="btn" to='/dashboard'>Apartment Connect</Link>
            <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="btn" to="/calandar">Resources Calendar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn" to="/newrepair">Request Repair</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;