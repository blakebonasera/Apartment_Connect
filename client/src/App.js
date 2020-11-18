import React, { useState } from 'react';
import { Link, navigate, Router} from '@reach/router';
import './App.css';
import LogReg from './views/LogReg';
import UserList from './views/UserList';
import axios from 'axios';
import UserDashboard from './views/UserDashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  const logout = () => {
    axios.post('http://localhost:8000/api/logout',{}, { withCredentials: true })
    .then((res)=>{
      console.log(res);
      setIsLoggedIn(false);
    })
    .catch(console.log);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Apartment Connect</h1>
        {isLoggedIn && <button onClick={logout}>Logout</button>}
      </div>
      <Router>
        <LogReg setLoggedIn={()=> setIsLoggedIn(true)} path="/" />
        <UserList path="/users" />
        <UserDashboard path="/user/dashboard" />
      </Router>
    </div>
  );
}

export default App;
