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
      <Container fluid className="google-box-layout bottom-border" style={{ textAlign: "center", padding: "2vh" }}>
        <h1 className="post-standard-header" style={{ textAlign: "center" }}>{this.props.title ? this.props.title : ""}</h1>
        <iframe
          width={this.props.mobile ? "350px" : "500px"}
          height={this.props.mobile ? "400px" : "500px"}
          id="gmap_canvas" src="https://maps.google.com/maps?q=L%C3%A5ngholmsgatan%2030&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          style={{ display: "inlineBlock" }}
        />

      </Container>
    );
  }
}

export default GoogleMaps;