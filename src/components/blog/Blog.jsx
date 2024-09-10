import React from 'react'
import "./Blog.css"
import {Container,Row,Col} from 'react-bootstrap'
import img from "../../assets/blog1.png"
import img1 from "../../assets/blog2.png"
import img2 from "../../assets/blog3.png"
import img3 from "../../assets/blog4.png"

const Blog = () => {
  return (
    <section>
        <Container>
            <div className="top">
                <h1>Blog </h1>
                <h4> My blog post</h4>
            </div>
            <Row>
                <Col lg={3}> 
                <div className="blogs">
                    <img src={img} alt="" />
                    <h5>UI Design
                    03 May 2019 </h5>
                    <h2>Right-lo-left behind development in mobile web design </h2>
                </div>
                </Col>
                <Col lg={3}> 
                <div className="blogs">
                    <img src={img1} alt="" />
                    <h5> UI Design
                    03 May 2019</h5>
                    <h2> Connect craft: Reading the smart experience</h2>
                </div>
                </Col>
                <Col lg={3}> 
                <div className="blogs">
                    <img src={img2}  alt="" />
                    <h5>UI Design
                    03 May 2019 </h5>
                    <h2> Ecoglow: Sustainable skincare a brighter tomorrow</h2>
                </div>
                </Col>
                <Col lg={3}> 
                <div className="blogs">
                 <img src={img3} alt="" />
                 <h5> UI Design
                 03 May 2019</h5>
                 <h2> Right-lo-left behind development in mobile web design</h2>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog