import React, {useState} from 'react';

import { Link, navigate } from '@reach/router';

const Nav = (props) => {
    const {logout} = useState();
    

    return (
        <nav class="navbar navbar-expand-lg navbar-primary">
            <Link className="btn" to='/dashboard'>Apartment Connect</Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="btn" to='/' onClick={logout}>Logout</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="btn" to="/resources">Resources</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}
export default Nav;