import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, NavItem} from 'react-materialize'
//import CarList from './rentalcars/CarList'

const NavBar = (props) => {

return (
    <div>

  <Navbar alignLinks="right" className="fb8c00 orange darken-1"
    brand={ <a className="brand-logo" href='/'  ><i className="large material-icons" >insert_wb_incandescent</i>RentMe</a>  }> 
      
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


        
 
     
