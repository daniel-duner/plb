import React, {Component} from 'react';
//import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {Form, FormControl, Button} from 'react';
import './header.css';
import './font.css';


class Header extends Component{
    render(){
        return (
        <Navbar variant="light">
            <Navbar.Brand className="brand" href="#home">Projektledningsbyrån</Navbar.Brand>
            <Nav className="mr-auto navbar">
              <Nav.Link className="nav-font-color" href="#home">Hem</Nav.Link>
              <Nav.Link className="nav-font-color" href="#om">Om oss</Nav.Link>
              <Nav.Link className="nav-font-color" href="#contact">Kontakt</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link className="nav-font-color" href="#swe">Sv</Nav.Link>
              <Nav.Link className="nav-font-color" href="#en">Eng</Nav.Link>
            </Nav>
        </Navbar>
        );

    };

}

export default Header;

