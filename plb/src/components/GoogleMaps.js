import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class GoogleMaps extends Component {
  render() {
    return (
      <Container fluid className="box-layout bottom-border">
        <Row>
          <Col className="align-center" style={{ paddingBottom: "0px", paddingLeft: "70px" }} md={6} >
              <iframe  width="400px" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=L%C3%A5ngholmsgatan%2030&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" />
          </Col>
          <Col className="text-center" md={4}>
            <Row>
              <Container style={{ padding: "50px 100px 0px 100px" }}>
                <h1 className="post-standard-header">Kontor</h1>
                <p className="post-standard-text">Långholmsgatan 30</p>
                <p className="post-standard-text">117 33 Stockholm</p>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GoogleMaps;