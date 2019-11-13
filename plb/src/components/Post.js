import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import './post.css';
import './font.css';

class Post extends Component {

    render() {
        if (this.props.imagePosition == "left") {
            return (
                <Container fluid className="box-layout bottom-border">
                    <Row>
                        <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "60px" }}>
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
        } else if (this.props.imagePosition == "right") {
            return (
                <Container fluid className="box-layout bottom-border">
                    <Row>
                        <Col className="text-center">
                            <Container style={{ padding: "50px 100px 50px 100px" }}>
                                <h1 className="post-standard-header">{this.props.title}</h1>
                                <p className="post-standard-text">{this.props.text}</p>
                            </Container>
                        </Col>
                        <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "60px" }}>
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
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container fluid className="box-layout bottom-border">
                    <Row>
                        <Col className="text-center">
                            <Container style={{ padding: "50px 200px 50px 200px"}}>
                                <h1 className="post-standard-header">{this.props.title}</h1>
                                <p 
                                    className="post-standard-text"
                                    style={{fontSize:this.props.fontSize}}
                                >{this.props.text}</p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            );
        }

    };

    renderImage() {
        return (
            <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "60px" }}>
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
        );
    }
    renderText() {
        return (
            <Col className="text-center">
                <Container style={{ padding: "50px 100px 50px 100px" }}>
                    <h1 className="post-standard-header">{this.props.title}</h1>
                    <p className="post-standard-text">{this.props.text}</p>
                </Container>
            </Col>
        );
    }
}

export default Post;


