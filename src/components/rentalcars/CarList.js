import React, { useEffect } from 'react'
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';

import { deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';


const CarList = ({ fetchCars, deleteCarCards, loggedInStatus, bookStartDate, bookEndDate  }) => {

 // useEffect(() => {
 //   getBookedDays(bookStartDate, bookEndDate)
 // })

  const getBookedDays = (bookStartDate, bookEndDate ) => {
    
      let stDate = bookStartDate.getDate()
      let endDate = bookEndDate.getDate()
      let str = []
      let days = []
      for (stDate ; stDate <= endDate; stDate++ ){
        str = [...str, stDate]
      }
      for (let i = 0; i < str.length; i++){
        let nextDay = new Date(bookStartDate)
          nextDay.setDate(nextDay.getDate() + i)
          days = [...days, nextDay]
      }

      return days
   }    
  

        debugger   



   
  
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


  
 
 
 


