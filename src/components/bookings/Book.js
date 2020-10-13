import React, { useState } from 'react';
import { TextInput, Button, Icon, Row, Col, Preloader  } from 'react-materialize';
import InfoBookCard from '../../containers/InfoBookCard';




const Book = ({ loading, match, fetchCars, startDate, endDate }) => {

    const [bookStartDate, setBookStartDate] = useState("")
    const [bookEndDate, setBookEndDate] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emailAdress, setEmailAdress] = useState("")
    const [carId, setCarId] = useState("")
    

    const car = fetchCars.find(car => car.id === parseInt(match.params.id, 10))
      
    const  handleSubmit = (e, car) => {
         
    }

    if (loading) {
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
        <div>
            <div>
                <InfoBookCard car={car} startDate={startDate} endDate={endDate}/> 
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
                        className="waves-effect orange btn right"  > <Icon right> check</Icon> Submit </Button>
               </form>
            </div>

        </div>
    )
}
           
              
export default Book;
              
             
                
            


  

 

