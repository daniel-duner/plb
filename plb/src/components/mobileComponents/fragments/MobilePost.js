import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Fragment from 'react';

import '../../../resources/css/post.css';
import '../../../resources/css/font.css';

class MobilePosts extends React.Component {
    renderImage = () => {
        return (
            <div>
            <img style={{objectFit:"cover"}}
                className="d-block w-100"
                src={this.props.image}
            />
            </div>
        );
    }
    renderText = () => {
        return (
            <Container class="box-layout bottom-border" style={{ padding: "50px 100px 50px 100px"}}>
            <h1 className="post-standard-header">{this.props.title}</h1>
            <ul >
                {this.props.list?this.props.list.map((item) =><li className="post-standard-text">{item}</li>):""}
                {this.props.text?this.props.text:""}
            </ul>
            {this.props.sigil
            ?
            <a className="post-standard-header" href={this.props.sigil.href}title={this.props.sigil.title} target=" _blank">
                    <img src={this.props.sigil.src}/>
            </a>
            :
            ""
            }
            </Container>
        );
    }
    render() {
        return (
            <div>
                {this.props.state=="image" ? this.renderImage():this.renderText()}
            </div>
        );
    }
}

export default MobilePosts;