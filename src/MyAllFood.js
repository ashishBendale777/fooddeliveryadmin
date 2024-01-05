import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function MyAllFood() {
  const [foodData, setfoodData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/allfood')
      .then((result) => {
        setfoodData(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {
            foodData.map((food) => {
              return (
                <Col lg={3} sm={12} md={6}>
                  <Card>
                    <Card.Img className='food-image' src={`http://localhost:5000${food.FoodImage}`} />
                    <Card.Body>
                      <h5>{food.FoodName}</h5>
                      <h5>{food.FoodType}</h5>
                      <h5>{food.FoodCategory}</h5>
                      <h5>{food.FoodPrice}</h5>
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

export default MyAllFood