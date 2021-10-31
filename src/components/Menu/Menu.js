import React from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import logo from "./../../assets/images/logo.png";
// import HeaderBG from "./../../assets/images/header-bg.png";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../Hooks/useAuth";
// import useAuth from "../../hooks/useAuth.js";
// import "./header.css";

const Menu = () => {
    const { user, logOut} = useAuth();
    
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Tourism</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/Services">Services</Nav.Link>
                    
                    <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                    
                    {user?.email ?
                        <Nav.Link as={HashLink} to="/addServices">Add Services</Nav.Link> :
                        ''}
                        {user?.email ?
                        <Nav.Link as={HashLink} to="/allorder">All order</Nav.Link> :
                        ''}
                          {user?.email ?
                        <Nav.Link as={HashLink} to="/myorder">My Orders</Nav.Link> :
                        ''}
                     {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
      
    );
};

export default Menu;