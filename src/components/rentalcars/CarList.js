import React, { useEffect } from 'react'
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';

import { deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';


const CarList = ({ fetchCars, deleteCarCards, loggedInStatus, bookStartDate, bookEndDate  }) => {

  useEffect(() => {
    handleCarList(fetchCars)
  })
//getBookedDays(bookStartDate, bookEndDate)[3].getTime() === bookEndDate.getTime()


  const getBookedDays = (bookStartDate, bookEndDate ) => {
      let days = []
      let daysInTime = bookEndDate.getTime() - bookStartDate.getTime();
      let totalDays = daysInTime / (1000 * 3600 * 24);
      
      for (let i = 0; i < Math.ceil(totalDays); i++){
        let nextDay = new Date(bookStartDate)
          nextDay.setDate(nextDay.getDate() + i)
          days = [...days, nextDay]
      }
      return days
   } 
 
  const handleCarList = fetchCars => {
      
     let dates = getBookedDays(bookStartDate, bookEndDate).map(date => date.getTime())
     let books = fetchCars.map(car => {
       return car.books.filter(book => { 
        return !dates.includes(new Date(book.startDate).getTime())
        })
    }).flat()
     let bookingIds = books.map(book => parseInt(book.car_id))
     let listCars =  fetchCars.filter(car => bookingIds.includes(car.id))
  debugger
    return listCars
  }

  const carList = handleCarList(fetchCars).map( car => <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus} /> )

  return (
      <div className="container">
        <Row>
          { carList } 
        </Row>

      </div>
  )
}

  export default connect(null, {  deleteCarCards })(CarList);
     
    

 
    
       
          
     
         

     
  

  



   
  


  
 
 
 


