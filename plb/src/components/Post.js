import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import './post.css';
import './font.css';

class Post extends Component {

    render() {
        return (
            <Container fluid className="box-layout bottom-border">
                <Row>
                    <Col className="align-center" style={{ paddingTop: "50px", paddingLeft: "60px" }}>
                        <Carousel >
                            {this.props.carouselImages.map((picture) =>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={picture.toString()}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </Col>
                    <Col className="text-center">
                        <Container style={{ padding: "50px 100px 50px 100px" }}>
                            <h1 className="post-standard-header">{this.props.title}</h1>
                            <p className="post-standard-text">{this.props.text}</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Post;


