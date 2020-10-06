import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCars } from '../../actions/carActions';

export class CarList extends Component {

    componentDidMount() {
        this.props.fetchCars()
      }
    render() {

        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = carsReducer => {
    return {
      cars: carsReducer
    }
  }


export default connect(mapStateToProps, { fetchCars })(CarList);
