import React, {  useEffect } from 'react';
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';
import {  deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';


const CarList = ({ cars, deleteCarCards, loggedInStatus }) => {



  const carList = cars.map( car => <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus} /> )

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
     cars: carsReducer.cars,
     startDate: carsReducer.dates.startDate,
     endDate: carsReducer.dates.endDate

    }
   }

   export default connect(mapStateToProps, { deleteCarCards })(CarList);
 
 
 


