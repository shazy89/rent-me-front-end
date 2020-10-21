import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  Row } from 'react-materialize';

const BookingInfo = ({cars}) => {

    
  return (
      <div>

      </div>
  )
}

const mapStateToProps = carsReducer => {
    return {
        cars: carsReducer.cars.cars
    } 
}

export default connect(mapStateToProps)(BookingInfo);