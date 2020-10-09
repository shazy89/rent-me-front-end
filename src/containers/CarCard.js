import React from 'react'
import {  Col, Card, Icon, CardTitle } from 'react-materialize'


//<li><NavLink to={`/pets/${car.id}`}>{ car.make }</NavLink></li>
const CarCard = ({ car }) => {

    return (
        <Col
          m={4}
          s={8}
          l={3}
        >
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={car.img} reveal waves="light"/>}
            reveal={
                <div>
                   <ul>
                   <li>Model {car.model}  </li>
                   <li> {car.vehicleType} </li>
                   <li>{<Icon>person</Icon>}{car.capacity} People </li>
                   <li>{<Icon>work</Icon>}{car.baggingCapacity} Bags</li>
                   </ul>
                    <h5 className="right e0e0e0 grey lighten-2">{<Icon>attach_money</Icon>} {car.rentPrice} per day</h5>
                </div>
                }

            revealIcon={<Icon>more_vert</Icon>}
            title= {car.make } 
          >
          </Card>
       </Col>
     )
   }
                
   
   export default CarCard;




 



