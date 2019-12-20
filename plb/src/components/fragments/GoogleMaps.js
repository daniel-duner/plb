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
      <Container fluid className="google-box-layout bottom-border">
        <Row style={this.props.mobile?{textAlign:"center"}:{textAlign:"right"}}>
          <Col style={this.props.mobile?{height:"100%",width:"100%"}:{padding:0,height:"100%",width:"100%"}} md={this.props.mobile?12:6} >
              <iframe
                width={this.props.mobile?"400px":"500px"} 
                height={this.props.mobile?"400px":"500px"} 
              id="gmap_canvas" src="https://maps.google.com/maps?q=L%C3%A5ngholmsgatan%2030&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              scrolling="no"
              style={{display: "inlineBlock", padding:"50px"}}
              />
          </Col>
          <Col className="text-center" md={this.props.mobile?12:6} style={this.props.mobile?{}:{}}>
              <Container style={this.props.mobile?{padding: "10vh 10vw 10vh 10vw"}:{textAlign:"center", margin:"0 0 0 200px", paddingTop:"100px"}}>
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