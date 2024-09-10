import React from 'react'
import "./Client.css"
import { Container,Row,Col} from 'react-bootstrap'
const Client = () => {
  return (
  <section id="tops">
    <Container>
        <Row>
            <Col lg={3}> 
            <div className="ciliks">
                <h1>Testimonial </h1>
                <h2>Client
                feedback </h2>
            </div>
            </Col>
            <Col lg={3}> 
            <div className="cilik">
                <h4>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</h4>
                <h3>Jhon Smith</h3>
            </div>
            </Col>
            <Col lg={3}> 
            <div className="cilik">
             <h4>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</h4>
             <h3>Jhon Smith</h3>
            </div>
            </Col>
            <Col lg={3}> 
            <div className="cilik">
              <h4>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”</h4>
              <h3>Jhon Smith</h3>
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Client