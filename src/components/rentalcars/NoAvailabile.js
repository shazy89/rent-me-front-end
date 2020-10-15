import React from 'react'
import {  Row, Col, Icon, Card  } from 'react-materialize';
import {Link} from 'react-router-dom'

const NoAvailabile = () => {
    
return (
<div className='center' style={{marginLeft: '35%' , marginTop: '100px'}}>
<Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <Link to='/'>Home Page</Link>,
      ]}
      style={{fontFamily: 'Times New Roman'}}
      className="blue-grey darken-1"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="white-text"
      title="Card title"
    >
      No availabile cars for this dates please try to select different date!
    </Card>
  </Col>
</Row>
   
  </div>
  )
};

export default NoAvailabile;