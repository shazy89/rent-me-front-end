import React, { useState } from 'react'
//import CarList from '../components/rentalcars/CarList'
import CarForm from '../components/rentalcars/CarForm'
import {Link} from 'react-router-dom'
import { Tabs, Tab, Button} from 'react-materialize'
//import CarCard from './CarCard'
const Admin = (props) => {
return (
    <div>
    <Tabs className="tab-demo z-depth-1">
  <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Create Car"
    >
    <CarForm {...props}/>
 
  </Tab>
  <Tab
    
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Test 2"
  >
    Test 2
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Test 3"
  >
    Test 3
  </Tab>
</Tabs>

    </div>
)
}

export default Admin;
