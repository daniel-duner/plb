import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../resources/css/googleMaps.css'
import '../../resources/css/post.css';
import '../../resources/css/font.css';

class GoogleMaps extends Component {
  render() {
    return (
      <Container fluid className="box-layout bottom-border">
        <Row class="align-center" style={{textAlign:"center"}}>
          <Col style={this.props.mobile?{height:"600px",width:"600px"}:{ paddingBottom: "0px", paddingLeft: "70px" }} md={this.props.mobile?10:6} >
              <iframe  
              width={this.props.mobile?"100%":"400px"} 
              height={this.props.mobile?"100%":"400px"} 
              id="gmap_canvas" src="https://maps.google.com/maps?q=L%C3%A5ngholmsgatan%2030&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              scrolling="no"
              style={{display: "inlineBlock", padding:"50px"}}
              />
          </Col>
          <Col className="text-center" md={this.props.mobile?10:4} style={this.props.mobile?{}:{}}>
              <Container style={{padding: "50px 100px 50px 100px" }}>
                <h1 className="post-standard-header">{this.props.title}</h1>
                <p className="post-standard-text">Långholmsgatan 30</p>
                <p className="post-standard-text">117 33 Stockholm</p>
              </Container>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    );
  }
}

export default GoogleMaps;