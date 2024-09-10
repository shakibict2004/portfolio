import React from 'react'
import "./Stay.css"
import {Container,Row,Col } from 'react-bootstrap'
const Stay = () => {
  return (
   <section>
    <Container>
        <Row>
            <Col lg={7}>
            <div className="tops">
                <h4>Pricing </h4>
                <h6> Stay chill and <br>
                </br>pick your plan</h6>
            </div>
            </Col>
            <Col lg={5}>
            <div className="topss">
              <button>Contact for Custom Project
              </button>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Stay