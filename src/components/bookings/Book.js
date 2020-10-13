import React, { useState } from 'react';
import { TextInput, Button, Icon } from 'react-materialize';
import InfoBookCard from '../../containers/InfoBookCard';
import {connect} from 'react-redux'
import { bookCar } from '../../actions/bookActions'


const Book = ({bookCar, match, fetchCars, bookStartDate, bookEndDate, history }) => {

    const car = fetchCars.find(car => car.id === parseInt(match.params.id, 10))

    const [startDate, setBookStartDate] = useState(bookStartDate)
    const [endDate, setBookEndDate] = useState(bookEndDate)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emailAdress, setEmailAdress] = useState("")
    const [car_id, setCarId] = useState(car.id)
  
    const  handleSubmit = (e) => {
        e.preventDefault();
        const bookInfo = {
            book: {startDate, endDate, firstName, lastName, phoneNumber, emailAdress, car_id }
        }
        bookCar(bookInfo, history)
    }
  
    return (
        <div>
            <div>
                <InfoBookCard car={car} startDate={bookStartDate} endDate={bookEndDate}/> 
            </div>
            <div className="container">
                 <p >* Required to complete your reservation</p>
                <h4 className='center'>Contact Details</h4>
               <form onSubmit={e => handleSubmit(e)}>
               <TextInput icon="account_circle" placeholder="First Name"  
                    name="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
               <TextInput icon="account_circle"  placeholder="Last Name" 
                    name="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
               <TextInput icon="contact_phone"   placeholder="Phone Number" 
                    name="phoneNumber" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
               <TextInput icon="email"   placeholder="RentMe@email.com" 
                    name="contact_mail" type="text" value={emailAdress} onChange={e => setEmailAdress(e.target.value)} />
    
                <Button placeholder="submit" type="submit" node="button" waves="light"
                        className="waves-effect orange btn right"  > <Icon right> check</Icon> Submit </Button>
               </form>
            </div>
    
        </div>
    )
    }
           
    export default connect(null, { bookCar })(Book)             

    

    

 
    

      
              
             
                
            


  

 

