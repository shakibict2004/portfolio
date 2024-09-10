import React from 'react'
import "./Banner.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import Typed from 'typed.js';

import img from "../../assets/ijk.jpg"
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaKickstarterK } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Banner = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
          
          strings: ["Hello! I AM SHAKIB REZA", "Welcome to My Website!", "I am A web Developr!"
            
          ],
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 1000,
          startDelay: 500,
          loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
  return (
    <section id="man">
        <Container>
            <Row>
           
              <Col lg={6}>
              { <div className="App">
      <span ref={el} />
    </div> }
    <div className="about">
    <h6>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</h6>
</div>
                <div className="btn">
                <Button><div className="p"> Download CV</div></Button>
                <a href="https://www.facebook.com/profile.php?id=100038036028742&mibextid=ZbWKwL"><FaFacebookF /></a>
                <a href="https://www.youtube.com/"><IoLogoYoutube /></a>
                <a href="https://github.com/shakibict2004"><FaGithub /></a>
                <a href=""><FaKickstarterK /></a>
                <a href=""><SiGmail /></a>
                

              </div>
              </Col>  
              <Col lg={6}>
              <div className="me">
              <img src={img} alt="" /> 
              </div>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner