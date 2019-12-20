import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "../../resources/css/post.css";
import "../../resources/css/font.css";

class Post extends Component {
  renderImage = () => {
    return <Col className="align-center">
                <img 
                style={{ padding: "2vw 2vw 2vw 2vw" }} 
                className="d-block w-100" 
                src={this.props.image}
                />
           </Col>
  }
  renderList = () =>{
    return <ul>
      {this.props.list.map(item => (<li
        key={item}
        className="post-standard-text"
        style={{listStyleType: "square"}}
      >{item}
      </li>))}
      </ul>
  }
  renderHeader = () =>{
      return <h1 className="post-standard-header">{this.props.title}</h1>
  }
  renderSigil = () =>{
    return <a
    className="post-standard-header"
    href={this.props.sigil.href}
    title={this.props.sigil.title}
    target=" _blank">
      <img src={this.props.sigil.src} />
  </a>
  }
  renderText = ()  => {
    return <p className="post-standard-text">{this.props.text}</p>
  }

  render() {
      return(
    <Container fluid className="box-layout bottom-border">
        <Row>
            {this.props.imagePosition == "left"?this.renderImage():""}
            <Col className="text-center">
                <Container style={{ padding: "50px 100px 50px 100px" }}>
                    {this.renderHeader()}
                    {this.props.list?this.renderList():this.renderText()}
                    {!this.props.sigil?"":this.renderSigil()}
                </Container>
            </Col>
            {this.props.imagePosition == "right"?this.renderImage():""}
        </Row>
    </Container> 
  );
}
}

export default Post;










//Carousel element
  {/* <Carousel {...this.props.carouselSettings}> */}
                {/* <Carousel indicators='false' controls='false'>
                    {this.props.carouselImages.map((picture) =>
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={picture.toString()}
                        />
                        <p className="post-standard-text">{this.props.imgText}</p>
                            </Carousel.Item>
                        )}
                    </Carousel> */}