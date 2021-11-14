import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

// https://github.com/rafgraph/react-router-hash-link

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">Perfumery</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                                {/* <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/home">Home</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/manageorders">Manage All Orders</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/manageservices">Manage All Services</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/addservice">Add a service</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/myorders">My Orders</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                        {user?.email &&
                        <Nav.Link as={Link} to="/dashboard" className='fw-bold border bg-white border-2'> Dashboard </Nav.Link>}

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#aboutus">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#reviewback"> Review </Nav.Link>
                        <Nav.Link as={HashLink} to="/explore"> | Explore | </Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/addservice">Add a service</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageservices">Manage Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageorders">Manage Orders</Nav.Link> */}
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user?.email ?
                        <Navbar.Text style={{paddingLeft: "5px"}}>
                            Signed in as: <a href="#login">{user?.displayName || user?.email }</a>
                        </Navbar.Text> :  <Navbar.Text></Navbar.Text>}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

