import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { MenuItem } from '@material-ui/core';
// import DropDown.Item from 'react-bootstrap/DropDown.Item'
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { slide as Menu } from 'react-burger-menu'
import '../../resources/css/header.css';
import '../../resources/css/font.css';
import '../../resources/css/mobileHeader.css';


class MobileHeader extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">{this.props.content.listLinks[0]}</a>
                <a id="about" className="menu-item" href="/about">{this.props.content.listLinks[1]}</a>
                <a id="project" className="menu-item" href="/project">{this.props.content.listLinks[2]}</a>
                <a id="contact" className="menu-item" href="/contact">{this.props.content.listLinks[3]}</a>

                <a id="swe" className="menu-item menu-item-lang0 nav-lang-font-color">SV</a> 
                <a id="eng" className="menu-item menu-item-lang1 nav-lang-font-color">ENG</a> 
            </Menu>
        );

    };

}

export default MobileHeader;


