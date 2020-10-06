import React from 'react';
import axios from 'axios'
import {Link, NavLink} from 'react-router-dom'
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
  <Navbar alignLinks="right" className="fb8c00 orange darken-1"
    brand={ <a className="brand-logo"  ><i class="large material-icons">insert_wb_incandescent</i>RentMe</a>  }> 
      
     <NavItem> {props.loggedInStatus ? null : <Link to='/login'>Log In</Link> }</NavItem>
      <br></br>
      <NavItem>   {
          props.loggedInStatus ? null : <Link to='/signup'>Sign Up</Link>
        } </NavItem> 
      <br></br>
      <NavItem > { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : null
    }</NavItem> 
     
      </Navbar>
    </div>
  );
};
      
    
      
export default Home;