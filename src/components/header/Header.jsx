import React from 'react'
import "./header.css"
import { Container ,Nav,Navbar} from 'react-bootstrap'
const Header = () => {
  return (
  <section id="header">

<Container>
<Navbar expand="lg" className="menu">
      <Container id="navber">
        <Navbar.Brand href="#home">SHAKIB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Vido</Nav.Link>
            <Nav.Link href="#link">Imges</Nav.Link>
          
          </Nav>
          <div className="tell">
            <button>contact us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</Container>
  </section>
  )
}

export default Header