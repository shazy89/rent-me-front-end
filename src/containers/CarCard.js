import React from 'react'
import {  Col, Card, Icon, CardTitle, Button } from 'react-materialize'


//<li><NavLink to={`/pets/${car.id}`}>{ car.make }</NavLink></li>
const CarCard = ({ car, deleteCarCards }) => {

   const handleDelete = () => {
    deleteCarCards(car.id)
      }
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
                <>
                   <ul>
                   <li>Model {car.model}  </li>
                   <li> {car.vehicleType} </li>
                   <li>{<Icon>person</Icon>}{car.capacity} People </li>
                   <li>{<Icon>work</Icon>}{car.baggingCapacity} Bags</li>
                   </ul>
                   <>
                    <h5 className="right e0e0e0 grey lighten-2">{<Icon>attach_money</Icon>} {car.rentPrice} per day</h5>
                    </>
                    <>
                    <Button onClick={handleDelete} node="a" small  style={{marginRight: '5px'   }}   waves="light"    >
                        
                            Delete
                    </Button>
                        </>
                    </>
                    }
    
                revealIcon={<Icon>more_vert</Icon>}
                title= {car.make } 
              >
              </Card>
           </Col>
         )
       }
                    
       
       export default CarCard;
                          
                     
                        
                    
                      




 



