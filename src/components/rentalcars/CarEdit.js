import React, { useState, useEffect } from 'react'
import {  Icon, TextInput, Select, Row, Col, Preloader } from 'react-materialize'
import { editCarCard } from '../../actions/carActions'
import {connect} from 'react-redux'

const CarEdit = (props) => {

    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [vehicleType, setvehicleType] = useState("")
    const [capacity, setCapacity] = useState("")
    const [baggingCapacity, setBaggingCapacity] = useState("")
    const [rentPrice, setRentPrice] = useState("")
    const [carId, setCarId] = useState("")
    const [img, setImg] = useState("")
    
    const car = props.fetchCars.find(car => car.id === parseInt(props.match.params.id, 10))
    useEffect(() => {
        if(!props.loading) {
            handleEdit(car)
        }
     },[])

    const handleEdit = (car) => {
        setMake(car.make)
        setModel(car.model)
        setvehicleType(car.vehicleType)
        setCapacity(car.capacity)
        setBaggingCapacity(car.baggingCapacity)
        setRentPrice(car.rentPrice)
        setImg(car.img)
        setCarId(car.id)
     }
      
     const handleSubmit = (event) => {
         event.preventDefault()
         const car = {
             car: {carId, make, model, vehicleType, capacity, baggingCapacity, rentPrice}
         }
         props.editCarCard(car, props.history)
 
     }
     
     if (props.loading) {
         return (
             <Row className="center">
                <Col s={4}>
                    <Preloader   active color="blue" flashing={false} size="big" />
                  </Col>
                  <Col s={4}> 
                     <Preloader   active  color="blue"  flashing  />
                  </Col>
                  <Col s={4}>
                     <Preloader    active color="blue"  flashing={false} size="small" />
                  </Col>     
             </Row>
         )
     } 
     
     return (
         <div className='container'>
         <form onSubmit={handleSubmit}>
       
       <TextInput
         placeholder="Make" type="text" name="make" label="Make" value={make} onChange={e => setMake(e.target.value)} />
 
       <TextInput  placeholder="Model" type="text" label="Model" name="model" value={model} onChange={e => setModel(e.target.value)} />
          
     <Select id="Select-9" onChange={e => setvehicleType(e.target.value)} name="vehicleType" multiple={false}  value={vehicleType}
       
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
       >
     <option value="" disabled   >
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
         
       <TextInput inputClassName='input-field col s6'  placeholder="Capacity" type="text"
           name="capacity"  label="Capacity"value={capacity} onChange={e => setCapacity(e.target.value)} />
            
       <TextInput placeholder="BaggingCapacity" type="text" name="baggingCapacity"
         label="BaggingCapacity"  value={baggingCapacity} onChange={e => setBaggingCapacity(e.target.value)} />
           
       <TextInput placeholder="RentPrice" type="text" name="rentPrice" label="RentPrice"
            value={rentPrice} onChange={e => setRentPrice(e.target.value)} />   
           
      <div>
       <button placeholder="submit" type="submit" node="button"  waves="light"
          className="waves-effect orange btn"  >
         <Icon right> check</Icon>
         Submit
         </button>
       </div>
     </form>
  </div>           
   )   
 };   
     
 export default connect(null, { editCarCard })(CarEdit)
         
   

        


    
  
         
            
        

          
          
          
          
        
          
          
          
       
          
          
         
          
          
          
    

    
      
      
     
 
          
          
          
          
          
   
        
        
        
        
   
    
      

  
    





     
     
   
  


  
      
     
      

      
  

        
        
         