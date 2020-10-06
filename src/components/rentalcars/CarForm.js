import React, { Component } from 'react'
import {  Icon, TextInput, Select } from 'react-materialize'

export class CarForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            make: '',
            model: '',
            vehicleType: '',
            capacity: '',
            baggingCapacity: '',
            rentPrice: ''
        };
     }
     handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };

    render() {
    const {make, model, vehicleType, capacity, baggingCapacity, rentPrice} = this.state
        return (
            <div className='container'>
            <form >
          <TextInput
            placeholder="Make"
            type="text"
            name="make"
            value={make}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Model"
            type="text"
            name="model"
            value={model}
            onChange={this.handleChange}
          />
          <Select
  id="Select-9"
  
  onChange={this.handleChange}
  name="vehicleType"
  multiple={false}
  options={{
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }
  }}
  value={vehicleType}
>
<option
    disabled
    value=""
  >
    Choose your option
  </option>
  <option value="Compact Car">
    Compact Car
  </option>
  <option value="Suv">
    Suv
  </option>
  <option value="Luxury Car">
   Luxury Car
  </option>
</Select>
  
      

  
          <TextInput inputClassName='input-field col s6'
            placeholder="Capacity"
            type="text"
            name="capacity"
            value={capacity}
            onChange={this.handleChange}
            />
          <TextInput
            placeholder="BaggingCapacity"
            type="text"
            name="baggingCapacity"
            value={baggingCapacity}
            onChange={this.handleChange}
            />
          <TextInput
            placeholder="RentPrice"
            type="text"
            name="rentPrice"
            value={rentPrice}
            onChange={this.handleChange}
            />
          
          <button placeholder="submit" type="submit"  
             node="button"
           
              waves="light"
              className="waves-effect orange btn"
              ><Icon right> check</Icon>
                Submit
            </button>

          </form>
                
            </div>
        )
    }
}

export default CarForm
