import React from 'react';
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';
import { deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';


const CarList = ({ fetchCars, deleteCarCards, loggedInStatus }) => {

  const carList = fetchCars.map( car =>  <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus} />)
    
  return (
      <div className="container">
        <Row>
          { carList } 
        </Row>

      </div>
  )
}

  export default connect(null, {  deleteCarCards })(CarList);


  
 
 
 


