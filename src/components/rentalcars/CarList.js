import React, { useState, useEffect } from 'react';
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux'
import { fetchCars } from '../../actions/carActions';
import {  Row, Col, Card, Icon, CardTitle } from 'react-materialize'
const CarList = ({fetchCars, cars}) => {
  useEffect(() => {fetchCars()},[])

  const carList = cars.cars.map( car => <CarCard key={car.id} car={car} />)
 //<CarCard key={car.id} car={car} /> do we have to use array id or object id?
 //style={{display: 'flex', justifyContent: 'space-between'}}
   return (
       <div className="container">
         <h3>Cars List</h3>
         <Row>
         { carList } 
         </Row>
       </div>
   )
 }
 
 const mapStateToProps = carsReducer => {
   return {
     cars: carsReducer
   }
   }
 
 
 export default connect(mapStateToProps, { fetchCars })(CarList);


