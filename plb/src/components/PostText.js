import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import './post.css';
import './font.css';

class PostText extends Component {
 
    render() {
        return (
                <Container className="bottom-border" style={{padding: "50px 100px 50px 60px"}} fluid >
                    <h1 className="post-standard-header">{this.props.title}</h1>
                    <p className="post-standard-text">{this.props.text}</p>
                </Container>
        );
    };
}

export default PostText;


