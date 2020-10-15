import React, { useEffect } from 'react'
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';

import { deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';


const CarList = ({ fetchCars, deleteCarCards, loggedInStatus, bookStartDate, bookEndDate  }) => {

   useEffect(() => {
     handleCarList(fetchCars)
     
   })

  const getSearchDates = (stDaye, endDate ) => {
      let std = new Date(stDaye)
      let end = new Date(endDate)
      let days = []
      let daysInTime = end.getTime() - std.getTime();
      let totalDays = daysInTime / (1000 * 3600 * 24);
      
      for (let i = 0; i < Math.ceil(totalDays); i++){
        let nextDay = new Date(stDaye)
          nextDay.setDate(nextDay.getDate() + i)
          days = [...days, nextDay]
      }
      return days
   } 
// const handleCarBookedDates = (fetchCars) => {
//      
//    let handleBookings = fetchCars.map(car => car.books.flat());
//    let tryIfWorks = handleBookings.map(book =>  book.map(info => getSearchDates(info.startDate, info.endDate))
//    );
//  
//    
//       debugger
//    return handleBookings
// }
 
  const handleCarList = fetchCars => {
        let condition = fetchCars.map(car => car.books).flat()
        handleCarBookedDates(fetchCars)
         if(condition.length !== 0){
            let dates = getSearchDates(bookStartDate, bookEndDate).map(date => date.getTime())
            let books = fetchCars.map(car => {
            return car.books.filter(book => { 
            return !dates.includes(new Date(book.startDate).getTime())
            })
        }).flat()
            let bookingIds = books.map(book => parseInt(book.car_id))
            let listCars =  fetchCars.filter(car => bookingIds.includes(car.id))
            return listCars
           } else {
            return fetchCars
          }
  };
  
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
            

     
    

 
    
       
          
     
         

     
  

  



   
  


  
 
 
 


