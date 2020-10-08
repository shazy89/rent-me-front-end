import React from 'react'
import { NavLink } from 'react-router-dom';
import {  Row, Col, Card, Icon, CardTitle } from 'react-materialize'

//<li><NavLink to={`/pets/${car.id}`}>{ car.make }</NavLink></li>
const CarCard = ({ car }) => {

    return (
        <Col
          m={4}
          s={8}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={car.img} reveal waves="light"/>}
            reveal={<ul>
                <li>{car.make} </li>
                <li>{car.model} </li>
                <li>{car.vehicleType} </li>
                <li>{car.capacity} </li>
                <li>{car.baggingCapacity} </li>
                <li>${car.rentPrice} </li>
                
                </ul>
                }
            revealIcon={<Icon>more_vert</Icon>}
            title={car.make}
          >
          </Card>
       </Col>
     )
   }
   
   export default CarCard;




 



