import React, { Component } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import Slideshow from './Slideshow.js';
import './post.css';
import './font.css';

class Post extends Component {
 
    render() {
        return (
            <Container fluid className="box-layout bottom-border">
                <Row>
                <Col className="align-center">
                <Carousel className="">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./img/consHD_1.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./img/consHD_2.jpg")}                            
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./img/consHD_3.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col className="text-center">
                <Container style={{padding: "30px 100px 30px 100px"}}>
                <h1 className="post-standard-header">Projekt slussen</h1>
                <p className="post-standard-text"><LoremIpsum p={1} /></p>
                </Container>
                </Col>
                </Row>
            </Container>
        );
    };
}

export default Post;


