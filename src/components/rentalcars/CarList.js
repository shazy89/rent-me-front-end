import React from 'react'
import CarCard from '../../containers/CarCard';
import {connect} from 'react-redux';
import { deleteCarCards } from '../../actions/carActions';
import {  Row } from 'react-materialize';
import NoAvailabile from './NoAvailabile'



const CarList = ({ fetchCars, deleteCarCards, loggedInStatus, bookStartDate, bookEndDate  }) => {

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

 const compare = (arr1, arr2) => {

        const finalArray = []
        arr1.forEach(e1 => arr2.forEach(e2 =>
          {if (e1.getTime() === e2){
            finalArray.push(e1)
          } 
        } 
     ) )
          return finalArray
  }
          

  const handleCarList = fetchCars => {
        let condition = fetchCars.map(car => car.books).flat()

        if(condition.length !== 0){
           let dates = getSearchDates(bookStartDate, bookEndDate).map(date => date.getTime())

           let books = fetchCars.map(car => {
             return  car.books.filter(book => {   
              return compare(getSearchDates(book.startDate, book.endDate), dates).flat().length !== 0
             })     
          })    
          let bookingIds = books.map(book => {
            if(book.length !== 0){
              return parseInt(book[0].car_id)}
            else {return book}} )  
            let listCars =  fetchCars.filter(car => !bookingIds.flat().includes(car.id))
 
            return listCars
          } else {
       return fetchCars
         }
    };
            
    let carList;
        if(loggedInStatus){
          carList = fetchCars.map( car => <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus} /> )
        } else {
          if (handleCarList(fetchCars).length === 0) {
                return (
                  <div> <NoAvailabile /></div>
                )
          } else {
          carList = handleCarList(fetchCars).map( car => <CarCard key={car.id} car={car} deleteCarCards={deleteCarCards} loggedInStatus={loggedInStatus} /> )
        }
     };
       
        
       return (
           <div className="container">
             <Row>
               { carList } 
             </Row>
           </div>
       )
     }
     
     
       export default connect(null, {  deleteCarCards })(CarList);
    
  
        

   
         
             
 


  
            

     
    

 
    
       
          
     
         

     
  

  



   
  


  
 
 
 


