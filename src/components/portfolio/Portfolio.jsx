import React from 'react'
import "./Portfolio.css"
import { Container,Row,Col } from 'react-bootstrap'
import img from "../../assets/download.jpeg"
import imgh from "../../assets/shakib1.jpg"
const Portfolio = () => {
  return (
   <section >
    <Container>
      <div className="top">
     <h2> Portfolio</h2>
     <h3> My recent work</h3>
      </div>
      <Row>
        <Col lg={6}>
        <div className="one">
          <img src={img} alt="" />
          <button>App</button> <button className='ami'>DEVELOPMENT</button>
          <h5> Basinik Finance App</h5>
        </div>
        </Col>
        <Col lg={6}>
        <div className="two">
          <img src={imgh} alt="" />
          <button>App</button> <button className='ami'>DEVELOPMENT</button>
          <h6> Oxilex Dashboard design</h6>
        </div>
        </Col>
      </Row>
    <Row> 
    <Col lg={12}>
    <div className="fast">
    <button>view all project</button>
    </div>
    </Col>
   </Row>
    </Container>
   </section>
   
  )
}

export default Portfolio