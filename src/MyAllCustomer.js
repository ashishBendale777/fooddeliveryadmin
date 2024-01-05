import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function MyAllCustomer() {
    const [customerData, setcustomerData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/allcustomer')
      .then((result) => {
        setcustomerData(result.data)
      }).catch((err) => {
        console.log(err)
      })
    }, [])

  return (
    <div>
        <Container>
        <Row>
          {
            customerData.map((customer) => {
              return (
                <Col lg={3} sm={12} md={6}>
                  <Card>
                    <Card.Body>
                      <h5>{customer.CustomerName}</h5>
                      <h5>{customer.CustomerEmail}</h5>
                      <h5>{customer.CustomerPassword}</h5>
                      <h5>{customer.CustomerAddress}</h5>
                      <h5>{customer.CustomerMob}</h5>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
        </Container>
    </div>
  )
}

export default MyAllCustomer