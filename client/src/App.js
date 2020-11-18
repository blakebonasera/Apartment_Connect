import React, { useState } from 'react';
import { navigate, Router} from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import LogReg from './views/LogReg';
import UserList from './views/UserList';
import axios from 'axios';
import UserDashboard from './views/UserDashboard';
import NewRepair from './views/NewRepair';

function App() {
  const [isLoggedIn, setIsLoggedIn ] = useState(JSON.parse(localStorage.getItem("loggedIn")));

  const logout = () => {
    axios.post('http://localhost:8000/api/logout',{}, { withCredentials: true })
    .then(() => {
      localStorage.setItem("loggedIn", "false")
      setIsLoggedIn(false)
    })
    .catch(err => console.log(err));
    navigate('/');
  };

  useEffect(() => {}, [isLoggedIn])

  return (
    <div className="container">
      <div className="jumbotron ">
        <h1>Apartment Connect</h1>
        {JSON.parse(localStorage.getItem("loggedIn")) && <Nav logout={logout} />}
      </div>
      <Router>
        <LogReg setLoggedIn={()=> setIsLoggedIn(true)} path="/" />
        <UserList path="/users" />
        <UserDashboard path="/dashboard" />
        <NewRepair path="/newrepair" />
      </Router>
    </div>
  );
}

export default App;
