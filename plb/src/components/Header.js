import React, {Component} from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {Form, FormControl, Button} from 'react';
import './header.css';
import './font.css';


class Header extends Component{
    render(){
        return (
        <Navbar sticky="top" style={{backgroundColor: "white"}}variant="light">
            <Navbar.Brand className="brand" href="/">Projektledningsbyrån</Navbar.Brand>
            <Nav className="mr-auto navbar">
              <Nav.Link className="nav-font-color" href="/">Hem</Nav.Link>
              <Nav.Link className="nav-font-color" href="/about">Om oss</Nav.Link>
              <Nav.Link className="nav-font-color" href="/contact">Kontakt</Nav.Link>
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


