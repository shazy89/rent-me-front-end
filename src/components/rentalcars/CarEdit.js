import React, { useState } from 'react'
import {  Icon, TextInput, Select } from 'react-materialize'


const CarEdit = (props) => {

    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [vehicleType, setvehicleType] = useState("")
    const [capacity, setCapacity] = useState("")
    const [baggingCapacity, setBaggingCapacity] = useState("")
    const [rentPrice, setRentPrice] = useState("")

    const car = props.fetchCars.cars.find(car => car.id === parseInt(props.match.params.id, 10))
     //onSubmit={ handleSubmit }
    return (
 
        <div className='container'>
        <form >
      
      <TextInput
        placeholder="Make"
        type="text"
        name="make"
        value={car.make}
        onChange={e => setMake(e.target.value)}
      />

        <TextInput
          placeholder="Model"
          type="text"
          name="model"
          value={car.model}
          onChange={e => setModel(e.target.value)}
        />
   <Select
      id="Select-9"
      onChange={e => setvehicleType(e.target.value)}
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
      value={car.vehicleType}
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
          value={car.capacity}
          onChange={e => setCapacity(e.target.value)}
          />
        <TextInput
          placeholder="BaggingCapacity"
          type="text"
          name="baggingCapacity"
          value={car.baggingCapacity}
          onChange={e => setBaggingCapacity(e.target.value)}
          />
        <TextInput
          placeholder="RentPrice"
          type="text"
          name="rentPrice"
          value={car.rentPrice}
          onChange={e => setRentPrice(e.target.value)}
          />
     <div>
      <button placeholder="submit" type="submit"  
         node="button"
         waves="light"
         className="waves-effect orange btn"
       
          ><Icon right> check</Icon>
            Submit
        </button>

        </div>
      </form>
            
        </div>
    )
}

export default CarEdit;