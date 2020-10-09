import React from 'react'
import {  Col, Card, Icon, CardTitle, Button } from 'react-materialize'
import {Link} from 'react-router-dom'
import CarEdit from '../components/rentalcars/CarEdit'


const CarCard = ({ car, deleteCarCards }) => {

   const handleDelete = () => {
    deleteCarCards(car.id)
      }
    const  handleEdit = () => {
     return 
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
                    <h4 className="right e0e0e0 grey lighten-2">{<Icon>attach_money</Icon>} {car.rentPrice} per day</h4>
                    </>
                    <>
                    <Button className="green right" onClick={handleEdit}  node="a" small  style={{margin:  '10px'   }}   waves="light"    >
                      <Link to={`/cars/${car.id}/edit`}>Edit </Link>
                    </Button>
                    <Button className="red right"  onClick={handleDelete} node="a" small  style={{margin:  '10px'   }}   waves="light"    >
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
                        
    
                          
                     
                        
                    
                      




 



