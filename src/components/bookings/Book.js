import React, { useState } from 'react';

import { TextInput, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom'
import InfoBookCard from '../../containers/InfoBookCard';


const Book = ({history, match, fetchCars, loggedInStatus }) => {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emailAdress, setEmailAdress] = useState("")
    const [carId, setCarId] = useState("")

    const car = fetchCars.cars.find(car => car.id === parseInt(match.params.id, 10))
   
    return (
        <div>
            <div>
              <InfoBookCard car={car} dates={fetchCars.dates}/>
            </div>
            <div className="container">
                 <p >* Required to complete your reservation</p>
                <h4 className='center'>Contact Details</h4>
               <form >
               <TextInput icon="account_circle" placeholder="First Name"  
                    name="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
               <TextInput icon="account_circle"  placeholder="Last Name" 
                    name="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
               <TextInput icon="contact_phone"   placeholder="Phone Number" 
                    name="phoneNumber" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
               <TextInput icon="email"   placeholder="RentMe@email.com" 
                    name="contact_mail" type="text" value={emailAdress} onChange={e => setEmailAdress(e.target.value)} />

                <Button placeholder="submit" type="submit" node="button" waves="light"
                        className="waves-effect orange btn" > <Icon right> check</Icon> Submit </Button>
               </form>
            </div>

        </div>
    )
}
           
              
              
             
                
            


  

 


export default Book;