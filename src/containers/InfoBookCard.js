import React, { useState } from 'react';

import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';



const InfoBookCard = ({ car, dates }) => {

    const [startDate, setStartDate] = useState("")


debugger    
    return (
        <div>
            <Row>
              <Col
                m={6}
                s={12}
              >
                <Card
                  actions={[
                    <a key="1" href="#">This is a link</a>
                  ]}
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
                  horizontal
                  revealIcon={<Icon>more_vert</Icon>}
                >
                  Here is the standard card with a horizontal image.
                </Card>
              </Col>
            </Row>
         
        </div>
    )
}

export default InfoBookCard;