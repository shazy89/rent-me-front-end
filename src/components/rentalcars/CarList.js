import React, {  useEffect } from 'react';
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';
import { fetchCars, deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';


const CarList = ({fetchCars, cars, deleteCarCards, loggedInStatus }) => {

  useEffect(() => {fetchCars()},[])
//debugger
  const carList = cars.cars.map( car => 
  <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus} />)

   return (
       <div className="container">
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

   export default connect(mapStateToProps, { fetchCars, deleteCarCards })(CarList);
 
 
 


