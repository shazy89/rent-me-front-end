import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, NavItem, Icon} from 'react-materialize'


const NavBar = (props) => {
 
return (
    <div>
  <Navbar alignLinks="right" className="fb8c00 orange darken-1" 
     brand={ <Link className='center' to='/'><Icon>wb_sunny</Icon>RentMe</Link>  } > 
     
   <NavItem> {
   props.loggedInStatus ? null : <Link to='/login'>Log In</Link> 
   }
   </NavItem>
   
   <NavItem>  {
          props.loggedInStatus ? null : <Link to='/signup'>Sign Up</Link>
        } 
    </NavItem> 
     {  
     props.loggedInStatus ? <NavItem  onClick={props.handleLogOut}>Log Out </NavItem>  : null 
     }
  </Navbar>
    </div>
  );
};
export default NavBar;
 
    
     




        
 
     
