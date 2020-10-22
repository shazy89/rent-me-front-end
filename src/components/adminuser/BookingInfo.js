import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  Table } from 'react-materialize';

const BookingInfo = ({cars, match, loggedInStatus}) => {

    

    const car = cars.find(car => car.id === parseInt(match.params.id, 10));
    const letsTry = {...car, bookings: car.bookings.map(booking => {
      return {...booking, startDate: new Date(booking.startDate), endDate: new Date(booking.endDate) }
    } ) }
debugger
  //  const carInfo = {price: car.rentPrice, bookings: car.bookings};
    const table = car.bookings.map(booking => { 
        return (
            <tr>
            <td>
              {booking.firstName + ` ` + booking.lastName}
            </td>
            <td>
              {booking.emailAdress}
            </td>
            <td>
              {booking.phoneNumber}
            </td>
            <td>
              {  booking.startDate }
            </td>
            <td>
              { booking.endDate  }
            </td>
          </tr>
        )
    })
        
          
     //        let nextDay = new Date(stDate)
     //       nextDay.setDate(nextDay.getDate() + i)

//  const handleTotalCoast = (dateIn, dateOut) => {
//      let daysInTime = dateOut.getTime() - dateIn.getTime();
//      let totalDays = daysInTime / (1000 * 3600 * 24);
//      let total = Math.ceil(totalDays) * car.rentPrice
//       return total
// }


  return (
      <div  style={{width: '80%', marginLeft: '100px'}}>
          <Table>
  <thead>
    <tr>
      <th data-field="id">
       Customer
      </th>
      <th data-field="name">
        Email
      </th>
      <th data-field="name">
        Phone Number
      </th>
      <th data-field="price">
        Pick Up
      </th>
      <th data-field="id">
        Return
      </th>
      <th data-field="price">
        Total Cost
      </th>
    </tr>
  </thead>
  <tbody>
      { table }
  </tbody>
</Table>
      </div>
  )
}

const mapStateToProps = carsReducer => {
    return {
        cars: carsReducer.cars.cars
    } 
}

export default connect(mapStateToProps)(BookingInfo);