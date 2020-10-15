import React from 'react'
import { Breadcrumb } from 'react-materialize'
import {Link} from 'react-router-dom'


const Admin = ({loggedInStatus}) => {
 return (
  <div>
    <Breadcrumb cols={12} className="teal orange"  >
  
     <Link to='/cars/new'>Create Car</Link>
     {loggedInStatus ? <Link to='/carlist'>Car List</Link> : null}
     <Link to='/booking/info'>Bokking Information</Link>

   </Breadcrumb>
  
  </div>
)
}
export default Admin;
          




