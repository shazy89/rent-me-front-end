import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, NavItem, Button} from 'react-materialize'


const NavBar = (props) => {
// /  
return (
    <div>

  <Navbar alignLinks="right" className="fb8c00 orange darken-1" 
  brand={ <Link to='/'>RentMe</Link>  } > 
     
     <NavItem> {props.loggedInStatus ? null : <Link to='/login'>Log In</Link> }</NavItem>
      <br></br>
      <NavItem>   {
          props.loggedInStatus ? null : <Link to='/signup'>Sign Up</Link>
        } </NavItem> 
      <br></br>
     {  props.loggedInStatus ? <NavItem  onClick={props.handleLogOut}>Log Out </NavItem>  : null }
  </Navbar>
 
    </div>
  );
};
export default NavBar;



        
 
     
