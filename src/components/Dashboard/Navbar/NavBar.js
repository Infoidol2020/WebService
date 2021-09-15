import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import infoidologo from '../../../Assets/complogo1.png'

import './Navbar.css'

const NavBar = () => {
    return (
        <section>
            <Navbar className="navbar-wrap" expand="lg">
                <Container>
                <Navbar.Brand href="#home">
            <img
                src={infoidologo}
                width="184vw"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="navbar-collapse">
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">Industries</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </section>
    )
}

export default NavBar
