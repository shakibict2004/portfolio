import React from 'react'
import "./resume.css"
import { Container,Row,Col } from 'react-bootstrap'
import img from "../../assets/img.jpg"
const Resume = () => {
  return (
   <section id='main'>
    <Container>
      <Row>
     <Col lg={5}>
     <div className="one">
     <h2> Resume</h2>
     <h4>All over my details find here... </h4>
     </div>
     </Col>
  
     <Col lg={7}>
     <div className="two">
      <h3>Based in German</h3>
      <p> Mark Henry, Product Designer, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,</p>

      <h6> but words that truly land with those that read them, calling your audience in and making them want more.</h6>
     </div>
     </Col>
      </Row>
      <Row> 
        <Col lg={5}> 
        <div className="tumi">
          <img src={img} alt="" />
        </div>
        </Col>

        <Col lg={7}>
        <div className="tow">
         <ul>
          <li><span>Name</span> <span>Shakib</span></li>
          <li><span>Nationality</span> <span>Germany</span></li>
          <li><span>Phone</span> <span>01936925009</span></li>
          <li><span>Emaile</span> <span>shakibict@gmail.com</span></li>
          <li><span>Experience</span> <span>12+ years</span></li>
          <li><span>Freelance</span> <span>Available</span></li>
          <li><span>Skype</span> <span>henry.halk23</span></li>
          <li><span>Language</span> <span>German, English</span></li>
         </ul>
        </div>
         </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Resume