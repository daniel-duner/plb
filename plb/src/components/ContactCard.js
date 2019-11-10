import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './font.css';
import './contactCard.css';


class ContactCard extends Component {
    render() {
        return (
            <Container fluid className="box-layout bottom-border">
                <Row>
                    <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "70px" }} md={4}>

                        {this.props.carouselImages.map((picture) =>

                            <img style={{ width: "75%" }}
                                className="d-block img-fluid"
                                src={picture.toString()}
                            />

                        )}

                    </Col>
                    <Col className="text-center" md={8}>
                        <Row>
                            <Container style={{ padding: "50px 100px 0px 100px" }}>
                                <h1 className="post-standard-header">{this.props.title}</h1>
                                <p className="post-standard-text">{this.props.text}</p>
                            </Container>
                        </Row>
                        <Row>
                            <Container style={{ padding: "50px 100px 50px 100px" }}>
                                <a className="post-standard-text contact-links" style={{ padding: "0px 20px 0px 20px", display: "block" }} href={"mailto:" + this.props.email}>{this.props.email}</a>
                                <a className="post-standard-text contact-links" style={{ padding: "0px 20px 0px 20px", display: "block" }} href={"tel:" + this.props.phone}>{this.props.phone}</a>

                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default ContactCard;