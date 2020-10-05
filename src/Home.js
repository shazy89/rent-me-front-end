import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'

const Home = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
return (
   
    <div>
        <Navbar> 
    <NavItem>   <Link to='/login'>Log In</Link> </NavItem>
      <br></br>
      <NavItem>   <Link to='/signup'>Sign Up</Link></NavItem>
      <br></br>
      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
      </Navbar>
    </div>
  );
};
export default Home;