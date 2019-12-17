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
            if (this.props.list != null) {
                return (
                    <Container fluid className="box-layout bottom-border">
                        <Row>
                            <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "60px" }}>
                                {/* <Carousel {...this.props.carouselSettings}> */}
                                <Carousel indicators='false' controls='false'>
                                    {this.props.carouselImages.map((picture) =>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={picture.toString()}
                                            />
                                            <p className="post-standard-text">{this.props.imgText}</p>
                                        </Carousel.Item>
                                    )}
                                </Carousel>
                            </Col>
                            <Col className="text-center">
                                <Container style={{ padding: "50px 100px 50px 100px" }}>
                                    <h1 className="post-standard-header">{this.props.title}</h1>
                                    <ul >
                                        {this.props.list.map((item) =>
                                            <li className="post-standard-text">{item}</li>
                                        )}
                                    </ul>
                                </Container>
                            </Col>
                        </Row>
                    </Container >
                )
            } else {
                return (
                    <Container fluid className="box-layout bottom-border">
                        <Row>
                            <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "60px" }}>
                                <Carousel indicators='false'>
                                    {this.props.carouselImages.map((picture) =>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={picture.toString()}
                                            />
                                            <p className="post-standard-text">{this.props.imgText}</p>
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
            }
        } else if (this.props.imagePosition == "right") {
            if (this.props.list != null) {
                if (this.props.sigill != null) {
                    return (
                        <Container fluid className="box-layout bottom-border">
                            <Row>
                                <Col className="text-center">
                                    <Container style={{ padding: "50px 100px 50px 100px" }}>
                                        <h1 className="post-standard-header">{this.props.title}</h1>
                                        <ul >
                                            {this.props.list.map((item) =>
                                                <li className="post-standard-text">{item}</li>
                                            )}

                                            {/* <a href="https://www.uc.se/risksigill2?showorg=556886-4622&language=swe"
                                                title="Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser." target=" _ blank">
                                                <img src="https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=swe&product=sma&fontcolor=b" />
                                            </a> */}
                                        </ul>
                                        <a className="post-standard-header" href="https://www.uc.se/risksigill2?showorg=556886-4622&language=swe"
                                            title="Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser." target=" _blank">
                                            <img src="https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=swe&product=lsa&fontcolor=b&type=svg"
                                            />
                                        </a>
                                    </Container>
                                </Col>
                                <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "60px" }}>
                                    <Carousel indicators="false">
                                        {this.props.carouselImages.map((picture) =>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={picture.toString()}
                                                />
                                                <p className="post-standard-text">{this.props.imgText}</p>
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </Col>
                            </Row>
                        </Container>
                    )
                } else {
                    return (
                        <Container fluid className="box-layout bottom-border">
                            <Row>
                                <Col className="text-center">
                                    <Container style={{ padding: "50px 100px 50px 100px" }}>
                                        <h1 className="post-standard-header">{this.props.title}</h1>
                                        <ul >
                                            {this.props.list.map((item) =>
                                                <li className="post-standard-text">{item}</li>
                                            )}
                                        </ul>
                                    </Container>
                                </Col>
                                <Col className="align-center" style={{ paddingTop: "0px", paddingLeft: "60px" }}>
                                    <Carousel indicators="false">
                                        {this.props.carouselImages.map((picture) =>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={picture.toString()}
                                                />
                                                <p className="post-standard-text">{this.props.imgText}</p>
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            } else {
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
                                <Carousel indicators="false">
                                    {this.props.carouselImages.map((picture) =>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={picture.toString()}
                                            />
                                            <p className="post-standard-text">{this.props.imgText}</p>
                                        </Carousel.Item>
                                    )}
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        } else {
            return (
                <Container fluid className="box-layout bottom-border">
                    <Row>
                        <Col className="text-center">
                            <Container style={{ padding: "50px 200px 50px 200px" }}>
                                <h1 className="post-standard-header">{this.props.title}</h1>
                                <p
                                    className="post-standard-text"
                                    style={{ fontSize: this.props.fontSize }}
                                >{this.props.text}</p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            );
        }

    };
}

export default Post;


