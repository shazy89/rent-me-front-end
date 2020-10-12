import React, { useState } from 'react';

import { DatePicker, Icon, Button, Carousel, Footer } from 'react-materialize';
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
debugger    
    return (
        <div>
            <InfoBookCard car={car}/>
        </div>
    )
}

export default Book;