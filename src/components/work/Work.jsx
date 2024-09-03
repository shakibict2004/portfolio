
import React from 'react'
import "./work.css"
import { Container, Col,Row} from 'react-bootstrap'
import img from "../../assets/images (6).jpeg"

const Work = () => {
  return (
    <section>
        <Container>
            <div className="text">
                <h2>My Recent Works</h2>
            </div>
            <div className="tipe">
    <a href="">All </a>
    <a href="">Apps</a>
    <a href="">Branding</a>
    <a href=""> UX/UI</a>
</div>
<Row>

<Col lg={{ span: 5, offset: 2 }}>
<div className="lion">
<img src={img} alt="" />
</div>
</Col>
<Col lg={5}>
<div className="lion">
<img src={img} alt="" />
</div>
</Col>

</Row>
        </Container>
    </section>
  )
}

export default Work
