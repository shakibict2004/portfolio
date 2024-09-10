import React from 'react'
import "./Midil.css" 
import { Container,Row,Col} from 'react-bootstrap'
import img from "../../assets/imgs.jpg"
const Midil = () => {
  return (
   <section>
    <Container>
   <Row>
   <Col lg={7}>
   <div className="ones">
    <img src={img} alt="" />
   </div>
   </Col>  
  
    <Col lg={5}>
    <div className="two">
        <h4>Hello I’m</h4>
        <h1> Mark shakib, Product Designer
        Based in German</h1>
        <h6>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</h6>
        <h5>
        08
        Award winner

         1.2k
        Worldwide client

         3.5k
        Job done successfully
        </h5>
      <div className="btn">
      <button>
            Download My Resume
        </button>
      </div>
    </div>
    </Col> 
    </Row>
    </Container>
   </section>
  )
}

export default Midil