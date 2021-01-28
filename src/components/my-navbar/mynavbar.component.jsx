import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Logo from '../../assets/icons/logofranco2.png'
import './mynavbar.style.css'

const MyNavbar= () => {
    return (
        <>
          <Navbar fixed ="top" collapseOnSelect expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between" >
          <Navbar.Brand href="#home">
              <img className="logo" src={Logo} alt='My Portfolio Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#p">About</Nav.Link>
              <Nav.Link href="#pri">Skills</Nav.Link>
              <Nav.Link href="#pricig">Experience</Nav.Link>
              <Nav.Link href="#ping">Proyects</Nav.Link>
              <Nav.Link href="#png">Contact</Nav.Link>
     
             </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default MyNavbar