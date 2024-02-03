import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function MyAllOrder() {
  const [orderData, setorderData] = useState([])
  const navi = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/api/allorder')
      .then((result) => {
        setorderData(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {
            orderData.map((order) => {
              return (
                <Col lg={3} sm={12} md={6}>
                  <Card>
                    <Card.Body>
                      <h5>{order.orderDate}</h5>
                      <h5>{order.orderStatus}</h5>
                      <h5>{order.NoOfItems}</h5>
                      <h5>{order.TotalAmt}</h5>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => navi(`/orderdetails/${order._id}`)}>Details</Button>
                    </Card.Footer>
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

export default MyAllOrder
