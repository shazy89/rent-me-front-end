import React, { Component } from 'react'
import { connect } from 'react-redux';
import CarCard from '../../containers/CarCard'

const PetList = ({ cars }) => {
  
  const carList = cars.map((car, i) => <CarCard key={i} car={car} />)
  return (
      <div>
        <h3>car List</h3>
        <ul>
          { carList }
        </ul>
      </div>
  )
}

const mapStateToProps = carsReducer => {
    return {
      cars: carsReducer
    }
  }


export default connect(mapStateToProps)(PetList);
